import { Middleware } from 'jsx-middlewares/react';

export const jsxPurifyMiddleware: Middleware = (next, type, props, key) => {
  return next(type, props, key);
};
