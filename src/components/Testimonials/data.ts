import { sanityClient } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "testimonialsContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	kicker: "Depoimentos",
	title: "Transformações Reais",
	subtitle:
		"Histórias de quem recuperou a saúde e a autoestima com nosso acompanhamento.",
	testimonials: [
		{
			name: "Ana Paula S.",
			text: "O diferencial foi o acolhimento. Pela primeira vez não me senti julgada, mas sim compreendida e tratada como um todo.",
			meta: "Paciente há 6 meses",
		},
		{
			name: "Mariana L.",
			text: "Resultados sustentáveis que nunca consegui com dietas da moda. O acompanhamento médico mudou minha relação com a comida.",
			meta: "Eliminou 12kg",
		},
		{
			name: "Carla M.",
			text: "Muito mais que perda de peso, recuperei minha energia e disposição diária. Recomendo de olhos fechados!",
			meta: "Foco em Saúde Metabólica",
		},
		{
			name: "Juliana R.",
			text: "O Dr. Rômulo é extremamente atencioso. O plano alimentar é prático e fácil de seguir, mesmo com a rotina corrida.",
			meta: "Empresária",
		},
		{
			name: "Fernanda B.",
			text: "Finalmente entendi como meu metabolismo funciona. Não é apenas sobre calorias, é sobre saúde e equilíbrio.",
			meta: "Paciente há 1 ano",
		},
		{
			name: "Beatriz G.",
			text: "A estrutura da clínica é impecável e o atendimento humanizado faz toda a diferença no processo.",
			meta: "Performance Esportiva",
		},
	],
};

// Exporta o conteúdo formatado
export const content = {
	kicker: sanityData?.kicker || defaultContent.kicker,
	title: sanityData?.title || defaultContent.title,
	subtitle: sanityData?.subtitle || defaultContent.subtitle,
	testimonials: sanityData?.testimonials?.map((t: any) => ({
		name: t.name,
		text: t.text,
		meta: t.meta,
	})) || defaultContent.testimonials,
};
