import { Middleware } from 'jsx-middlewares/react';
import { JsxPurifyInput, jsxPurify } from './purify.ts';

/**
 * Creates a middleware for `jsxPurify` that can be used with `jsx-middlewares`.
 */
export function createJsxPurifyMiddleware(input?: JsxPurifyInput): Middleware {
  return function jsxPurifyMiddleware(next, type, props, key) {
    const purified = jsxPurify({ type, props, key, ...input });
    return next(purified.type, purified.props, purified.key);
  };
}
