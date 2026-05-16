import { defineCliConfig } from 'sanity/cli'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Carrega variáveis de ambiente imediatamente
dotenv.config({ path: path.resolve(__dirname, '../.env') })

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET
  },
  deployment: {
    appId: process.env.SANITY_STUDIO_APP_ID,
    autoUpdates: true,
  }
})
