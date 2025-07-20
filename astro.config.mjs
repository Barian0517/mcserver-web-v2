// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
<<<<<<< HEAD
  base,
  trailingSlash: "never",
  redirects: {
    '/': '/youer',
  }
=======
  redirects: {
    '/': '/mcserver-web-v2/youer',
  },
>>>>>>> parent of e2396f1... 修正base
});
