import { sanityClient } from '../../lib/sanity';

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "heroContent"][0]`).catch(() => null);

// Dados de reserva (Fallback) caso o Sanity esteja vazio
const defaultDoctor = {
  name: "Carolina Mendes",
  prefix: "Dra.",
  specialty: "Emagrecimento & Saúde",
  credentials: "CRM 00000 • RQE 00000",
};

const defaultHeadline = {
  main: "Sente que seu esforço<br />não gera resultados?",
  accent: "Sua jornada para o peso ideal começa aqui.",
};

const defaultCta = {
  text: "Agendar Minha Avaliação",
  phone: "5511999999999",
  message: "Olá, gostaria de agendar uma consulta.",
};

const defaultBackground = {
  alt: "Dra. Carolina Mendes - Saúde e Emagrecimento",
  image: null,
};

// Exporta variáveis individuais combinando Sanity + Fallback
export const doctor = { ...defaultDoctor, ...sanityData?.doctor };
export const headline = { ...defaultHeadline, ...sanityData?.headline };
export const cta = { ...defaultCta, ...sanityData?.cta };
export const background = { ...defaultBackground, ...sanityData?.background };

// Mantemos o export do content original apenas por compatibilidade se necessário
export const content = sanityData;