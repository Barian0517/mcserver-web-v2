// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: 'mcserver-web-v2',
  output: 'static',
  redirects: {
    '/': '/youer',
  },
});
