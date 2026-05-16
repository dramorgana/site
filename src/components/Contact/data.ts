import { sanityClient } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "contactContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	title: "Localização e Contato",
	subtitle: "Agende sua visita em nosso espaço dedicado ao seu bem-estar e saúde metabólica.",
	address: {
		full: "Rua Exemplo, 123 - Sala 456, Bairro Nobre, São Paulo - SP",
		short: "Bairro Nobre, São Paulo",
	},
	whatsapp: {
		number: "5511999999999",
		display: "(11) 99999-9999",
		message: "Olá, gostaria de agendar uma consulta.",
	},
	phone: {
		number: "+551100000000",
		display: "(11) 0000-0000",
	},
	email: "contato@dracarolinamendes.com.br",
	mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6523!3d-23.5617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQyLjEiUyA0NsKwMzknMDguMyJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr",
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
	email: sanityData?.email || defaultContent.email,
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
		{ 
			type: "E-mail", 
			value: merged.email, 
			url: `mailto:${merged.email}`, 
			icon: "mail" 
		},
	],
	mapUrl: merged.mapUrl,
};
