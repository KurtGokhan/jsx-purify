import { MiddlewareContext, createMiddlewareContext } from 'jsx-middlewares/react';
import { jsxPurifyMiddleware } from '../middleware.ts';

export const baseMiddlewares: MiddlewareContext = createMiddlewareContext().addMiddlewares(jsxPurifyMiddleware);
