import { JSX, jsxDEV as _jsxDEV } from 'react/jsx-dev-runtime';
import { jsxPurifyMiddlewareContext } from './base.ts';

export { Fragment, type JSX } from 'react/jsx-dev-runtime';

const ctx = jsxPurifyMiddlewareContext.clone<JSX.Element>(undefined, undefined, _jsxDEV);

export const jsxDEV: typeof _jsxDEV = ctx.jsxDEV;
