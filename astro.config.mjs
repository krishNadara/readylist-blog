import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://getreadylist.app',
  base: '/blog',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap(),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
