import { sanityClient } from "../../lib/sanity";
import type { ServiceItem, ServicesContent } from "./types";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "servicesContent"][0]`).catch(() => null);
//const sanityData = null;
// Valores de fallback
const defaultContent: {
	kicker: string;
	title: string;
	description: string;
	services: ServiceItem[];
} = {
	kicker: "Nossas Especialidades",
	title: "Cuidado completo para sua jornada.",
	description:
		"Tratamentos personalizados com base em evidências científicas e foco na sua saúde metabólica.",
	services: [
		{
			name: "Emagrecimento Saudável Baseado na Ciência",
			text: "Acompanhamento médico individualizado para emagrecimento, com avaliação de hábitos, exames e histórico completo antes de qualquer indicação de tratamento.",
			icon: "heart",
		},
		{
			name: "Terapia de Reposição Hormonal",
			text: "Avaliação e acompanhamento médico de alterações hormonais que podem interferir no peso e na composição corporal, sempre a partir de exames laboratoriais e queixas do paciente.",
			icon: "hormone",
		},

		{
			name: "Tratamento para Ganho de Massa Muscular",
			text: "Acompanhamento médico para ganho de massa magra, unindo avaliação clínica, hábitos alimentares, ação conjunta com educador físico e quando indicado, suplementação orientada.",
			icon: "muscle",
		},

		{
			name: "Suplementação Orientada",
			text: "Orientação médica sobre o uso de suplementos dentro de um plano individualizado, evitando uso desnecessário e inadequado",
			icon: "flask",
		},
		{
			name: "Tratamento de Deficiências Vitamínicas",
			text: "Avaliação laboratorial associado à clínica do paciente para reposição de vitaminas e minerais, sempre com acompanhamento médico e respeitando a individualidade do paciente.",
			icon: "pill",
		},

		{
			name: "Tratamento de Obesidade e Sobrepeso",
			text: "Acompanhamento médico para obesidade e sobrepeso com foco em saúde metabólica, emagrecimento saudável e manutenção de resultados a lingo prazo . Avaliação de resultados laboratoriais e existência de doenças crônicas associadas para tratamento adequado.",
			icon: "clock",
		},
		{
			name: "Acompanhamento Pós Bariátrica",
			text: "Cuidado médico especializado no pós-operatório para monitorar seu metabolismo, repor vitaminas essenciais e garantir a manutenção do peso a longo prazo, com disposição e segurança.",
			icon: "chart",
		},

	],
};

const whatsappPhone = "5531991995849";
const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma avaliação.");

// Exporta o conteúdo formatado
export const content: ServicesContent = {
	kicker: sanityData?.kicker || defaultContent.kicker,
	title: sanityData?.title || defaultContent.title,
	description: sanityData?.description || defaultContent.description,
	whatsappUrl: `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`,
	services: (sanityData?.services?.map((s: any) => ({
		name: String(s.name || ""),
		text: String(s.text || ""),
		icon: String(s.icon || ""),
	})) || defaultContent.services) as ServiceItem[],
};
