import { JSX, jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { jsxPurifyMiddlewareContext } from './base.ts';

export { Fragment, type JSX } from 'react/jsx-runtime';

const ctx = jsxPurifyMiddlewareContext.clone<JSX.Element>(_jsx, _jsxs);

export const jsx: typeof _jsx = ctx.jsx;
export const jsxs: typeof _jsxs = ctx.jsxs;
