// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import { SanityConfig } from './env';

// https://astro.build/config
export default defineConfig({
  site: 'https://dracarolinamendes.com.br',
  integrations: [
    sitemap(),
    sanity({
      projectId: SanityConfig.projectId || 'vd8c7dlq',
      dataset: SanityConfig.dataset || 'production',
      useCdn: true,
      apiVersion: '2024-03-15',
    })
  ],
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  }
});