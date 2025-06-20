import type {} from 'hono';

import type { Metadata } from '@/types/Metadata';

declare module 'hono' {
  interface Env {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Variables: {};
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Bindings: {};
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
