import { sanityClient } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "servicesContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	kicker: "Nossas Especialidades",
	title: "Cuidado completo para sua jornada.",
	description:
		"Tratamentos personalizados com base em evidências científicas e foco na sua saúde metabólica.",
	services: [
		{
			name: "Emagrecimento Saudável",
			text: "Perda de peso estratégica com foco na manutenção de massa muscular e saúde hormonal.",
			icon: "heart",
		},
		{
			name: "Saúde Metabólica",
			text: "Tratamento de resistência insulínica, diabetes e outros distúrbios que impedem o emagrecimento.",
			icon: "clock",
		},
		{
			name: "Equilíbrio Hormonal",
			text: "Avaliação e reposição hormonal personalizada para longevidade e bem-estar.",
			icon: "hormone",
		},
		{
			name: "Bioimpedância Avançada",
			text: "Mapeamento preciso da sua gordura corporal, massa magra e taxa metabólica basal.",
			icon: "chart",
		},
	],
};

// Exporta o conteúdo formatado
export const content = {
	kicker: sanityData?.kicker || defaultContent.kicker,
	title: sanityData?.title || defaultContent.title,
	description: sanityData?.description || defaultContent.description,
	services: sanityData?.services?.map((s: any) => ({
		name: s.name,
		text: s.text,
		icon: s.icon,
	})) || defaultContent.services,
};
