import type { Handler } from 'hono';

/**
 * 一時的なリダイレクトを作成する
 */
export function createTemporaryRedirect(to: `/${string}`) {
  const handler: Handler = (c) => {
    return c.redirect(to, 307);
  };

  return handler;
}

/**
 * 永続的なリダイレクトを作成する
 */
export function createPermanentRedirect(to: `/${string}`) {
  const handler: Handler = (c) => {
    return c.redirect(to, 308);
  };

  return handler;
}
