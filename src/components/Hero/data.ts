import { sanityClient } from '../../lib/sanity';

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "heroContent"][0]`).catch(() => null);
//const sanityData = null
// Dados de reserva (Fallback) caso o Sanity esteja vazio
const defaultDoctor = {
  name: "Morgana Motta",
  prefix: "Dra.",
  specialty: "Cuidado Médico para Emagrecimento e Ganho de Massa Muscular em Belo Horizonte.",
  credentials: "CRM 96204",
};


const defaultHeadline = {
  main: "Treinou, se cuidou e ainda sente que falta alguma coisa?",
  accent: "Um acompanhamento médico individualizado pode ser o próximo passo. Atendimento presencial ou por telemedicina.",
  //main: "Sente que seu esforço<br />não gera resultados?",
  //accent: "Um acompanhamento médico individualizado pode ser o próximo passo. Atendimento presencial ou por telemedicina.",
};


const defaultCta = {
  text: "Clique aqui e descubra como podemos ajudar",
  phone: "5531991995849",
  message: "Olá, gostaria de agendar uma consulta.",
};

const defaultBackground = {
  alt: "Dra. Morgana Motta - Saúde e Emagrecimento",
  image: null,
};

// Exporta variáveis individuais combinando Sanity + Fallback
export const doctor = { ...defaultDoctor, ...sanityData?.doctor };
export const headline = { ...defaultHeadline, ...sanityData?.headline };
export const cta = { ...defaultCta, ...sanityData?.cta };
export const background = { ...defaultBackground, ...sanityData?.background };

// Mantemos o export do content original apenas por compatibilidade se necessário
export const content = sanityData;