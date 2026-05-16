import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Usando variáveis de ambiente (padrão Astro) com fallback apenas para segurança durante o build
const PROJECT_ID = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const DATASET = import.meta.env.PUBLIC_SANITY_DATASET || "production";

export const sanityClient = createClient({
	projectId: PROJECT_ID,
	dataset: DATASET,
	useCdn: false,
	apiVersion: "2024-03-21",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
	return builder.image(source);
}
