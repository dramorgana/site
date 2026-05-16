import { sanityClient, urlFor } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "pillarsContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	intro: "Metodologia",
	title: "Como cuidamos de você.",
	description: "Metodologia focada em transformar sua saúde através de uma medicina personalizada e baseada em evidências.",
	cta: {
		text: "Saiba Mais",
		url: "#contato",
	},
	image: {
		src: "/images/pilares-redesign.png",
		alt: "Interior moderno da clínica Serene Wellness",
	},
	pillars: [
		{
			title: "Avaliação Integrativa",
			text: "Análise profunda de histórico, exames e rotina para compreender a causa raiz.",
			icon: "doc",
		},
		{
			title: "Plano Individualizado",
			text: "Protocolos desenhados exclusivamente para o seu perfil metabólico e objetivos específicos.",
			icon: "user",
		},
		{
			title: "Acompanhamento Contínuo",
			text: "Suporte próximo para ajustes e manutenção dos resultados a longo prazo.",
			icon: "heart",
		},
	],
};

// Geração de srcset para imagem responsiva
const imageSrc = sanityData?.image ? urlFor(sanityData.image).width(600).url() : defaultContent.image.src;
const srcset = sanityData?.image ? [
	`${urlFor(sanityData.image).width(400).url()} 400w`,
	`${urlFor(sanityData.image).width(600).url()} 600w`,
	`${urlFor(sanityData.image).width(800).url()} 800w`
].join(', ') : null;

// Exporta o conteúdo formatado
export const content = {
	intro: sanityData?.intro || defaultContent.intro,
	title: sanityData?.title || defaultContent.title,
	description: sanityData?.description || defaultContent.description,
	cta: {
		text: sanityData?.cta?.text || defaultContent.cta.text,
		url: sanityData?.cta?.url || defaultContent.cta.url,
	},
	image: {
		src: imageSrc,
		srcset: srcset,
		alt: sanityData?.image?.alt || defaultContent.image.alt,
	},
	pillars: sanityData?.pillars?.map((p: any) => ({
		title: p.title,
		text: p.text,
		icon: p.icon,
	})) || defaultContent.pillars,
};
