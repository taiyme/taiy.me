import { createRoute } from 'honox/factory';

import { isValidHttpUrl } from '@/utils/isValidHttpUrl';
import { isValidRedirectSlug } from '@/utils/isValidRedirectSlug';

export default createRoute(
  async (c) => {
    const slug = c.req.param('slug').toLowerCase();

    if (!isValidRedirectSlug(slug)) {
      return c.notFound();
    }

    const url = await c.env.Redirect_KV.get(slug, 'text');

    if (url == null || !isValidHttpUrl(url)) {
      return c.notFound();
    }

    return c.redirect(url, 307);
  },
);
