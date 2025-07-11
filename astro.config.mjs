// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  redirects: {
    '/': '/mcserver-web-v2/youer',
  },
});
