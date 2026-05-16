// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://dracarolinamendes.com.br',
  integrations: [
    sitemap(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'insira-seu-id-aqui',
      dataset: 'production',
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