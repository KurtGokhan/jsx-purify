import { JsxPurifyOptions } from '../purify.ts';

export const jsxPurifyOptions: JsxPurifyOptions = {
  allowTypes: (allowed, type, props, key) => {
    if (typeof type === 'function') return false;

    if (type === 'script') return false;
    if (type === 'iframe') return false;
    if (type === 'object') return false;
    if (type === 'embed') return false;
    if (type === 'param') return false;
    if (type === 'base') return false;
    if (type === 'link') return false;
    if (type === 'meta') return false;
    if (type === 'style') return false;
    if (type === 'title') return false;
    if (type === 'head') return false;
    if (type === 'html') return false;
    if (type === 'body') return false;
    if (type === 'frame') return false;
    if (type === 'frameset') return false;
    if (type === 'noframes') return false;
    if (type === 'noembed') return false;
    if (type === 'plaintext') return false;
    if (type === 'noscript') return false;
    if (type === 'applet') return false;
    if (type === 'form') return false;
    if (type === 'input') return false;
    if (type === 'button') return false;
    if (type === 'select') return false;
    if (type === 'option') return false;
    if (type === 'textarea') return false;
    if (type === 'label') return false;
    if (type === 'fieldset') return false;
    if (type === 'legend') return false;
    if (type === 'optgroup') return false;
    if (type === 'datalist') return false;
    if (type === 'output') return false;
    if (type === 'progress') return false;
    if (type === 'meter') return false;

    return allowed;
  },
  allowProps: (allowed, key, value, type) => {
    if (typeof key === 'string' && key.startsWith('on')) return false;
    if (key === 'dangerouslySetInnerHTML') return false;
    if (key === 'ref') return false;
    if (typeof key === 'string' && key.match(/^.+Ref$/)) return false;
    if (typeof value === 'function') return false;

    return allowed;
  },
};
