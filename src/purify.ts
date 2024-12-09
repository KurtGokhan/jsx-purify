type AllowOption<TArgs extends [unknown, ...unknown[]] = [unknown]> =
  | TArgs[0][]
  | ((defaultAllowed: boolean, ...args: TArgs) => boolean);

export type JsxPurifyOptions = {
  allowTypes?: AllowOption<[type: unknown, props: unknown, key: unknown]>;
  allowProps?: AllowOption<[key: PropertyKey, value: unknown, type: unknown]>;
};

export type JsxPurifyOutput = {
  type: unknown;
  props: unknown;
  key?: unknown;
};

export type JsxPurifyInput = {
  options?: JsxPurifyOptions;
};

/**
 * Purifies a JSX element to make it safe for rendering.
 */
export function jsxPurify(input: JsxPurifyInput & JsxPurifyOutput): JsxPurifyOutput | null {
  const { type, props, key, options } = input;

  if (options?.allowTypes) {
    let allowed = false;

    if (typeof options.allowTypes === 'function') allowed = options.allowTypes(true, type, props, key);
    else allowed = options.allowTypes.includes(type);

    if (!allowed) return null;
  }

  if (options?.allowProps) {
    if (typeof props !== 'object') return null;
    const newProps: Record<string, unknown> = { ...props };

    for (const prop in props) {
      let allowed = false;

      if (typeof options.allowProps === 'function')
        allowed = options.allowProps(true, prop, Reflect.get(props, prop), type);
      else allowed = options.allowProps.includes(prop);

      if (!allowed) delete newProps[prop];
    }

    return { type, props: newProps, key };
  }

  return null;
}
