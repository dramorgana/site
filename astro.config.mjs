import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import { SanityConfig } from './env';
// https://astro.build/config
export default defineConfig({
  site: 'https://dracarolinamendes.com.br',
  integrations: [
    sitemap(),
    sanity({
      projectId: SanityConfig.projectId,
      dataset: SanityConfig.dataset,
      useCdn: true,
      apiVersion: '2024-03-15',
    })
  ],
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: []
  },
  image: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  }
});