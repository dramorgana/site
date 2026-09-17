import { sanityClient } from '../../lib/sanity';

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "heroContent"][0]`).catch(() => null);

console.log({ sanityData })
// Dados de reserva (Fallback) caso o Sanity esteja vazio
const defaultDoctor = {
  name: "Morgana Motta",
  prefix: "Dra.",
  specialty: "Emagrecimento e ganho de massa muscular",
  credentials: "CRM 96204",
};

const defaultHeadline = {
  main: "Seu esforço não é o problema.<br />O plano genérico é.",
  accent: "Protocolo individual para o seu corpo, com acompanhamento próximo em cada etapa — não um plano pronto pra todo mundo.<br /><br />Atendimento presencial em Belo Horizonte e online para todo o Brasil.",
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

// Helper local para evitar valores nulos/inválidos do Sanity
function fallbackStr(value: unknown, fallback: string): string {
  if (typeof value !== 'string') return fallback;
  const trimmed = value.trim();
  return trimmed !== '' ? trimmed : fallback;
}

const raw = sanityData?.doctor;

// Exporta variáveis individuais combinando Sanity + Fallback
export const doctor = {
  name: fallbackStr(raw?.name, defaultDoctor.name),
  prefix: fallbackStr(raw?.prefix, defaultDoctor.prefix),
  specialty: fallbackStr(raw?.specialty, defaultDoctor.specialty),
  credentials: fallbackStr(raw?.credentials, defaultDoctor.credentials),
};

export const headline = {
  main: fallbackStr(sanityData?.headline?.main, defaultHeadline.main),
  accent: fallbackStr(sanityData?.headline?.accent, defaultHeadline.accent),
};

export const cta = { ...defaultCta, ...sanityData?.cta };
export const background = { ...defaultBackground, ...sanityData?.background };
export const content = sanityData;