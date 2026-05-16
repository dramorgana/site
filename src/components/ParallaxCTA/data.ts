import { sanityClient, urlFor } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "parallaxCTAContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	title: "Pronta para transformar sua saúde e recuperar sua autoestima?",
	text: "Dê o primeiro passo hoje. Agende sua consulta e comece seu protocolo personalizado com acompanhamento médico especializado.",
	cta: {
		text: "Agendar Minha Consulta Agora",
		url: "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20m%C3%A9dica.",
	},
	bgImage: "/images/parallax-cta-bg-v3.png",
};

// Geração de imagens otimizadas
const desktopUrl = sanityData?.bgImage 
	? urlFor(sanityData.bgImage).width(1920).quality(80).auto('format').url() 
	: defaultContent.bgImage;

const mobileUrl = sanityData?.bgImage 
	? urlFor(sanityData.bgImage).width(800).quality(70).auto('format').url() 
	: defaultContent.bgImage;

export const content = {
	title: sanityData?.title || defaultContent.title,
	text: sanityData?.text || defaultContent.text,
	cta: {
		text: sanityData?.cta?.text || defaultContent.cta.text,
		url: sanityData?.cta?.url || defaultContent.cta.url,
	},
	images: {
		desktop: desktopUrl,
		mobile: mobileUrl
	}
};
