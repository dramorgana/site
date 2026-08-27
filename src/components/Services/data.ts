import { sanityClient } from "../../lib/sanity";

// Busca os dados no Sanity
//const sanityData = await sanityClient.fetch(`*[_type == "servicesContent"][0]`).catch(() => null);
const sanityData = null;
// Valores de fallback
const defaultContent = {
	kicker: "Nossas Especialidades",
	title: "Cuidado completo para sua jornada.",
	description:
		"Tratamentos personalizados com base em evidências científicas e foco na sua saúde metabólica.",
	services: [
		{
			name: "Emagrecimento Saudável Baseado na Ciência",
			text: "Estratégia personalizada que combina mudança de hábitos, suplementação e, quando necessário, medicamentos — sempre com foco em resultados duradouros e preservação da saúde.",
			icon: "heart",
		},
		{
			name: "Ganho de Massa Muscular",
			text: "Protocolo individualizado com suplementação, ajuste nutricional e suporte medicamentoso quando indicado — para quem treina mas não vê resultado na composição corporal.",
			icon: "muscle",
		},
		{
			name: "Suplementação Orientada",
			text: "Prescrição individualizada de creatina, whey, vitamina D, ômega-3 e outros suplementos com respaldo científico — apenas o que realmente faz diferença para o seu caso.",
			icon: "flask",
		},
		{
			name: "Acompanhamento Pré e Pós Cirurgia Bariátrica",
			text: "Suporte médico completo em todas as fases da cirurgia bariátrica — preparação clínica, controle nutricional e metabólico no pós-operatório para garantir os melhores resultados.",
			icon: "chart",
		},
		{
			name: "Tratamento de Obesidade e Sobrepeso",
			text: "Abordagem médica integrada para identificar e tratar as causas do excesso de peso — com plano terapêutico que pode incluir mudança de hábitos, medicamentos e suplementação.",
			icon: "clock",
		},
		{
			name: "Tratamento Hormonal",
			text: "Avaliação e reequilíbrio hormonal personalizado para melhorar disposição, sono, metabolismo e composição corporal — com base em exames e nas queixas reais do paciente.",
			icon: "hormone",
		},
	],
};

const whatsappPhone = "5531991995849";
const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma avaliação.");

// Exporta o conteúdo formatado
export const content = {
	kicker: sanityData?.kicker || defaultContent.kicker,
	title: sanityData?.title || defaultContent.title,
	description: sanityData?.description || defaultContent.description,
	whatsappUrl: `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`,
	services: sanityData?.services?.map((s: any) => ({
		name: s.name,
		text: s.text,
		icon: s.icon,
	})) || defaultContent.services,
};
