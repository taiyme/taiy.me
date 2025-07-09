import type { KVNamespace } from '@cloudflare/workers-types';
import type {} from 'hono';

import type { Metadata } from '@/types/Metadata';

declare module 'hono' {
  interface Env {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Variables: {};
    Bindings: {
      Redirect_KV: KVNamespace;
    };
  }

  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: {
        metadata: Metadata;
      },
    ): Response | Promise<Response>;
  }
}
