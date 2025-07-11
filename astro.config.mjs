// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://barian0517.github.io/mcserver-web-v2/',
  output: 'static',
  redirects: {
    '/': '/youer',
  },
});
