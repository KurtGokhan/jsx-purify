import { Middleware } from 'jsx-middlewares/react';
import { createJsxPurifyMiddleware } from '../middleware';
import { jsxPurifyOptions } from './options';

export const jsxPurifyMiddleware: Middleware = createJsxPurifyMiddleware({
  options: jsxPurifyOptions,
}) as Middleware;
