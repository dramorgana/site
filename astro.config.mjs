import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import { loadEnv } from "vite";

// Carrega as variáveis de ambiente do .env de forma segura
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  site: 'https://dracarolinamendes.com.br',
  integrations: [
    sitemap(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
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