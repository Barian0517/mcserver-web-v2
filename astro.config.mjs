// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: process.env.ASTRO_BASE || '/',
  trailingSlash: "never",
  redirects: {
    '/': '/youer',
  }
});
