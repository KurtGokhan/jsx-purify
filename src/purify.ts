type AllowOption<TArgs extends [any, ...any[]] = [any]> =
  | TArgs[0][]
  | ((defaultAllowed: boolean, ...args: TArgs) => boolean);

export type JsxPurifyOptions = {
  allowTypes?: AllowOption<[type: any, props: any, key: any]>;
  allowProps?: AllowOption<[key: PropertyKey, value: any, type: any]>;
  fallback?: any | ((input: JsxPurifyInput) => any);
};

export type JsxPurifyOutput = {
  type: any;
  props: any;
  key?: any;
};

export type JsxPurifyInput = {
  options?: JsxPurifyOptions;
};

/**
 * Purifies a JSX element to make it safe for rendering.
 */
export function jsxPurify(input: JsxPurifyInput & JsxPurifyOutput): JsxPurifyOutput {
  const { type, props, key, options } = input;

  if (options?.allowTypes) {
    let allowed = false;

    if (typeof options.allowTypes === 'function') allowed = options.allowTypes(true, type, props, key);
    else allowed = options.allowTypes.includes(type);

    if (!allowed) {
      if (typeof options.fallback === 'function') return options.fallback(input);
      return options.fallback;
    }
  }

  const newProps = { ...props };

  if (options?.allowProps) {
    for (const prop in props) {
      let allowed = false;

      if (typeof options.allowProps === 'function') allowed = options.allowProps(true, prop, props[prop], type);
      else allowed = options.allowProps.includes(prop);

      if (!allowed) delete newProps[prop];
    }
  }

  return { type, props: newProps, key };
}
