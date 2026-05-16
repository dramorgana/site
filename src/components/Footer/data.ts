import { sanityClient } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "footerContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	doctor: {
		name: "Dra. Carolina Mendes",
		credentials: "CRM 00000 • RQE 00000",
	},
	address: {
		street: "Rua Exemplo, 123",
		neighborhood: "Bairro Nobre",
		cityState: "São Paulo/SP",
		cep: "00000-000",
	},
	links: [
		{ label: "Política de Privacidade", url: "/privacidade" },
		{ label: "Termos de Uso", url: "/termos" },
	],
	social: [
		{ label: "Instagram", url: "https://instagram.com", icon: "instagram" },
		{ label: "WhatsApp", url: "https://wa.me/5500000000000", icon: "whatsapp" },
		{ label: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
	],
	copyrightText: "Dra. Carolina Mendes. Todos os direitos reservados.",
};

// Exporta o conteúdo formatado
export const content = {
	doctor: {
		name: sanityData?.doctor?.name || defaultContent.doctor.name,
		credentials: sanityData?.doctor?.credentials || defaultContent.doctor.credentials,
	},
	address: {
		street: sanityData?.address?.street || defaultContent.address.street,
		neighborhood: sanityData?.address?.neighborhood || defaultContent.address.neighborhood,
		cityState: sanityData?.address?.cityState || defaultContent.address.cityState,
		cep: sanityData?.address?.cep || defaultContent.address.cep,
	},
	links: sanityData?.links?.map((l: any) => ({
		label: l.label,
		url: l.url,
	})) || defaultContent.links,
	social: sanityData?.social?.map((s: any) => ({
		label: s.label,
		url: s.url,
		icon: s.icon,
	})) || defaultContent.social,
	copyright: `© ${new Date().getFullYear()} ${sanityData?.copyrightText || defaultContent.copyrightText}`,
};
