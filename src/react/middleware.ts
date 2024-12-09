import { Middleware } from 'jsx-middlewares/react';
import { createJsxPurifyMiddleware } from '../middleware.ts';
import { jsxPurifyOptions } from './options.ts';

export const jsxPurifyMiddleware: Middleware = createJsxPurifyMiddleware({
  options: jsxPurifyOptions,
}) as Middleware;
