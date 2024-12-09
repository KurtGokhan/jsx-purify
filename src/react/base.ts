import { MiddlewareContext, createMiddlewareContext } from 'jsx-middlewares/react';
import { jsxPurifyMiddleware } from './middleware.ts';

export const jsxPurifyMiddlewareContext: MiddlewareContext =
  createMiddlewareContext().addMiddlewares(jsxPurifyMiddleware);
