import { sanityClient } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "contactContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	title: "Localização e Contato",
	subtitle: "Agende sua visita em nosso espaço dedicado ao seu bem-estar e saúde metabólica.",
	address: {
		full: "Av. Barbacena, 600 - Sl 105 - Santo Agostinho, Belo Horizonte - MG, 30180-060",
		short: "Santo Agostinho, Belo Horizonte",
	},
	whatsapp: {
		number: "5531991995849",
		display: "(31) 99199-5849",
		message: "Olá, gostaria de agendar uma consulta.",
	},
	phone: {
		number: "+5531991995849",
		display: "(31) 99199-5849",
	},
	mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.123!2d-43.9352!3d-19.9328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU2JzAwLjEiUyA0M8KwNTYnMDYuNyJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr",
};

// Processamento dos dados
const merged = {
	title: sanityData?.title || defaultContent.title,
	subtitle: sanityData?.subtitle || defaultContent.subtitle,
	address: {
		full: sanityData?.address?.full || defaultContent.address.full,
		short: sanityData?.address?.short || defaultContent.address.short,
	},
	whatsapp: {
		number: sanityData?.whatsapp?.number || defaultContent.whatsapp.number,
		display: sanityData?.whatsapp?.display || defaultContent.whatsapp.display,
		message: sanityData?.whatsapp?.message || defaultContent.whatsapp.message,
	},
	phone: {
		number: sanityData?.phone?.number || defaultContent.phone.number,
		display: sanityData?.phone?.display || defaultContent.phone.display,
	},
	mapUrl: sanityData?.mapUrl || defaultContent.mapUrl,
};

// Exporta o conteúdo formatado como o componente espera
export const content = {
	title: merged.title,
	subtitle: merged.subtitle,
	address: merged.address,
	contact: [
		{
			type: "WhatsApp",
			value: merged.whatsapp.display,
			url: `https://wa.me/${merged.whatsapp.number}?text=${encodeURIComponent(merged.whatsapp.message)}`,
			icon: "whatsapp"
		},
		{
			type: "Telefone",
			value: merged.phone.display,
			url: `tel:${merged.phone.number}`,
			icon: "phone"
		},

	],
	mapUrl: merged.mapUrl,
};
