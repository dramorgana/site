import { sanityClient, urlFor } from '../../lib/sanity';

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "aboutContent"][0]`).catch(() => null);
//const sanityData = null;
// Valores de fallback (caso o Sanity esteja vazio)
const defaultContent = {
	kicker: "Autoridade & Acolhimento",
	title: "Uma abordagem humana para resultados reais.",
	description: "Ciência, escuta ativa e um olhar completo sobre o seu dia a dia — para resultados que duram.",
	paragraphs: [
		"Com ampla experiência no acompanhamento de pacientes em processo de emagrecimento e hipertrofia — incluindo o uso de medicamentos emagrecedores e terapias hormonais —, a Dra. Morgana Motta constrói, a cada consulta, um plano de cuidado 100% individualizado. Não existem protocolos prontos: cada tratamento nasce da análise cuidadosa do histórico, dos exames laboratoriais e das queixas de cada paciente.",
		"O diferencial do seu atendimento está justamente aí: individualização real e acompanhamento próximo em cada etapa. A combinação de mudança de hábitos, medicação e suplementação é ajustada ao dia a dia de cada pessoa, sempre com foco em resultados sustentáveis — redução de peso, melhora metabólica e longevidade.",
		"A verdadeira transformação do corpo — seja no emagrecimento ou no ganho de massa magra — só acontece com a mudança completa de hábitos. Não basta rever a alimentação e iniciar uma atividade física: é preciso também trabalhar a mente e fortalecer a consciência sobre o próprio processo.",
	],
	highlights: [
		"Formação Acadêmica de Excelência",
		"Tratamento 100% Individualizado",
		"Experiência consolidada em emagrecimento e hipertrofia",
		"Expertise em medicamentos emagrecedores",
		"Expertise em terapia hormonal",
		"Escuta ativa das queixas do paciente",
	],
	image: {
		src: "/images/about/about.jpeg",
		alt: "Dra. Morgana Motta — Especialista em Saúde Metabólica",
		width: 600,
		height: 750,
	},
	doctor: {
		name: "Morgana Motta",
		prefix: "Dra.",
		specialty: "Emagrecimento e ganho de massa muscular",
	},
};

// Geração de srcset para imagens responsivas
const imageSrc = sanityData?.image ? urlFor(sanityData.image).width(600).url() : defaultContent.image.src;
const srcset = sanityData?.image ? [
	`${urlFor(sanityData.image).width(400).url()} 400w`,
	`${urlFor(sanityData.image).width(600).url()} 600w`,
	`${urlFor(sanityData.image).width(800).url()} 800w`
].join(', ') : null;

// Exporta o conteúdo sincronizado com o Sanity
export const content = {
	kicker: sanityData?.kicker || defaultContent.kicker,
	title: sanityData?.title || defaultContent.title,
	description: sanityData?.description || defaultContent.description,
	paragraphs: sanityData?.paragraphs || defaultContent.paragraphs,
	highlights: sanityData?.highlights || defaultContent.highlights,
	image: {
		src: imageSrc,
		srcset: srcset,
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
