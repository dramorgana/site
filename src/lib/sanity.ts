import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

import { SanityConfig } from "../../env";

export const sanityClient = createClient({
  projectId: SanityConfig.projectId || 'vd8c7dlq',
  dataset: SanityConfig.dataset || 'production',
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
