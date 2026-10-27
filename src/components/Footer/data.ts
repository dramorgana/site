import { sanityClient } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "footerContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	doctor: {
		name: "Dra. Morgana Motta",
		credentials: "CRM 96204",
		specialty: "Emagrecimento e ganho de massa muscular",
		bio: "Tratamento individualizado com acompanhamento de perto em cada etapa da sua evolução.",
	},
	address: {
		street: "Avenida Barbacena, 600",
		neighborhood: "Barro Preto",
		cityState: "Belo Horizonte/MG",
		cep: "30180-060",
	},
	links: [
		{ label: "Política de Privacidade", url: "/privacidade" },
		{ label: "Termos de Uso", url: "/termos" },
	],
	social: [
		{ label: "Instagram", url: "https://instagram.com", icon: "instagram" },
		{ label: "WhatsApp", url: "https://wa.me/5531989067668", icon: "whatsapp" },
		{ label: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
	],
	copyrightText: "Dra. Morgana Motta. Todos os direitos reservados.",
};

// Exporta o conteúdo formatado
export const content = {
	doctor: {
		name: sanityData?.doctor?.name || defaultContent.doctor.name,
		credentials: sanityData?.doctor?.credentials || defaultContent.doctor.credentials,
		specialty: sanityData?.doctor?.specialty || defaultContent.doctor.specialty,
		bio: sanityData?.doctor?.bio || defaultContent.doctor.bio,
	},
	address: {
		street: defaultContent.address.street,
		neighborhood: defaultContent.address.neighborhood,
		cityState: defaultContent.address.cityState,
		cep: sanityData?.address?.cep || defaultContent.address.cep,
	},
	links: sanityData?.links?.map((l: any) => ({
		label: l.label,
		url: l.url,
	})) || defaultContent.links,
	social: sanityData?.social?.map((s: any) => ({
		label: s.label,
		url: s.icon === "whatsapp" || s.label?.toLowerCase().includes("whatsapp") ? "https://wa.me/5531989067668" : s.url,
		icon: s.icon,
	})) || defaultContent.social,
	copyright: `© ${new Date().getFullYear()} ${sanityData?.copyrightText || defaultContent.copyrightText}`,
};
