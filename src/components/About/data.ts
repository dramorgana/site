import { sanityClient, urlFor } from '../../lib/sanity';

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "aboutContent"][0]`).catch(() => null);

// Valores de fallback (caso o Sanity esteja vazio)
const defaultContent = {
	kicker: "Autoridade & Acolhimento",
	title: "Uma abordagem humana para resultados reais.",
	description: "Unindo ciência, tecnologia e empatia para transformar sua saúde de forma definitiva.",
	paragraphs: [
		"Acredito que o emagrecimento não é apenas sobre números na balança, mas sobre a reconquista da autonomia sobre o próprio corpo.",
		"Com sólida formação médica, minha missão é oferecer um suporte técnico rigoroso aliado a um olhar sensível às suas necessidades individuais. Aqui, cada protocolo é desenhado para respeitar o seu metabolismo e sua história.",
	],
	highlights: [
		"Formação Acadêmica de Excelência",
		"Foco em Longevidade e Saúde Hormonal",
		"Atendimento Humanizado e Personalizado",
	],
	image: {
		src: "/images/about-doctor.png",
		alt: "Dra. Carolina Mendes — Especialista em Saúde Metabólica",
		width: 600,
		height: 750,
	},
	doctor: {
		name: "Carolina Mendes",
		prefix: "Dra.",
		specialty: "Emagrecimento & Saúde Metabólica",
	},
};

// Exporta o conteúdo sincronizado com o Sanity
export const content = {
	kicker: sanityData?.kicker || defaultContent.kicker,
	title: sanityData?.title || defaultContent.title,
	description: sanityData?.description || defaultContent.description,
	paragraphs: sanityData?.paragraphs || defaultContent.paragraphs,
	highlights: sanityData?.highlights || defaultContent.highlights,
	image: {
		src: sanityData?.image ? urlFor(sanityData.image).width(600).url() : defaultContent.image.src,
		alt: sanityData?.image?.alt || defaultContent.image.alt,
		width: defaultContent.image.width,
		height: defaultContent.image.height,
	},
	doctor: {
		name: sanityData?.doctor?.name || defaultContent.doctor.name,
		prefix: sanityData?.doctor?.prefix || defaultContent.doctor.prefix,
		specialty: sanityData?.doctor?.specialty || defaultContent.doctor.specialty,
	},
};
