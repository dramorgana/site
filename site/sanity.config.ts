import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { SanityConfig } from '../env'

export default defineConfig({
  name: 'default',
  title: 'site',

  projectId: SanityConfig.projectId,
  dataset: SanityConfig.dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
