import { defineCliConfig } from 'sanity/cli'
import { SanityConfig } from '../env'

export default defineCliConfig({
  api: {
    projectId: SanityConfig.projectId,
    dataset: SanityConfig.dataset
  },
  deployment: {
    appId: SanityConfig.appId,
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
