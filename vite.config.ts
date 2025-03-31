import build from '@hono/vite-build/cloudflare-workers';
import adapter from '@hono/vite-dev-server/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import honox from 'honox/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import jsxClassnameTrim from './vite-plugin-jsx-classname-trim';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    jsxClassnameTrim(),
    honox({
      client: {
        input: [
          '/app/style.css',
        ],
      },
      devServer: {
        adapter,
      },
    }),
    tailwindcss(),
    build(),
  ],
});
