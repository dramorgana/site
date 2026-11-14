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

const slugifyFilename = (name: string): string =>
	name
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9.]+/g, "-")
		.replace(/^-+|-+$/g, "");

export function getSanityImageAttrs(
	source: any,
	targetWidth: number,
	fallbackSlug?: string,
): { src: string; width?: number; height?: number } | null {
	if (!source?.asset) return null;

	const rawUrl = urlFor(source).width(targetWidth).auto("format").url();

	const dims = source.asset?.metadata?.dimensions;
	let origW: number | undefined = dims?.width;
	let origH: number | undefined = dims?.height;

	if (!origW || !origH) {
		const ref: string = source.asset?._ref || source.asset?._id || "";
		const match = ref.match(/-(\d+)x(\d+)-[a-z0-9]+$/i);
		if (match) {
			origW = Number(match[1]);
			origH = Number(match[2]);
		}
	}

	const width = targetWidth;
	const height = origW && origH ? Math.round((targetWidth * origH) / origW) : undefined;

	const rawName: string | undefined = source.asset?.originalFilename;
	const vanityName = rawName
		? slugifyFilename(rawName)
		: fallbackSlug
			? `${slugifyFilename(fallbackSlug)}.webp`
			: "";

	let src = rawUrl;
	if (vanityName && rawUrl.includes("cdn.sanity.io/images/")) {
		const [base, query] = rawUrl.split("?");
		src = query ? `${base}/${vanityName}?${query}` : `${base}/${vanityName}`;
	}

	return { src, width, height };
}
