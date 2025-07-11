// @ts-check
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? '/mcserver-web-v2/' : '/';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base,
  trailingSlash: "never",
  redirects: {
    '/': '/youer',
  }
});
