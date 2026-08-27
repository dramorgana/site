// seed-services.mjs
// Uso: SANITY_TOKEN=seu_token node scratch/seed-services.mjs

import { createClient } from "@sanity/client";

const TOKEN = process.env.SANITY_TOKEN;
if (!TOKEN) {
  console.error("❌  Defina a variável SANITY_TOKEN antes de rodar.");
  console.error("    Exemplo: SANITY_TOKEN=sk... node scratch/seed-services.mjs");
  process.exit(1);
}

const client = createClient({
  projectId: "vd8c7dlq",
  dataset: "production",
  apiVersion: "2024-03-21",
  token: TOKEN,
  useCdn: false,
});

const doc = {
  _type: "servicesContent",
  _id: "servicesContent",          // ID fixo para upsert
  kicker: "Nossas Especialidades",
  title: "Cuidado completo para sua jornada.",
  description:
    "Priorizo a combinação de todos os fatores: mudança de hábitos, medicamentos e suplementação. Avalio o dia a dia do paciente como um todo para identificar os pontos que podemos otimizar e alcançar os melhores resultados.",
  services: [
    {
      _key: "s1",
      name: "Emagrecimento Saudável Baseado na Ciência",
      text: "Estratégia personalizada que combina mudança de hábitos, suplementação e, quando necessário, medicamentos — sempre com foco em resultados duradouros e preservação da saúde.",
      icon: "heart",
    },
    {
      _key: "s2",
      name: "Ganho de Massa Muscular",
      text: "Protocolo individualizado com suplementação, ajuste nutricional e suporte medicamentoso quando indicado — para quem treina mas não vê resultado na composição corporal.",
      icon: "muscle",
    },
    {
      _key: "s3",
      name: "Suplementação Orientada",
      text: "Prescrição individualizada de creatina, whey, vitamina D, ômega-3 e outros suplementos com respaldo científico — apenas o que realmente faz diferença para o seu caso.",
      icon: "flask",
    },
    {
      _key: "s4",
      name: "Acompanhamento Pré e Pós Cirurgia Bariátrica",
      text: "Suporte médico completo em todas as fases da cirurgia bariátrica — preparação clínica, controle nutricional e metabólico no pós-operatório para garantir os melhores resultados.",
      icon: "chart",
    },
    {
      _key: "s5",
      name: "Tratamento de Obesidade e Sobrepeso",
      text: "Abordagem médica integrada para identificar e tratar as causas do excesso de peso — com plano terapêutico que pode incluir mudança de hábitos, medicamentos e suplementação.",
      icon: "clock",
    },
    {
      _key: "s6",
      name: "Tratamento Hormonal",
      text: "Avaliação e reequilíbrio hormonal personalizado para melhorar disposição, sono, metabolismo e composição corporal — com base em exames e nas queixas reais do paciente.",
      icon: "hormone",
    },
  ],
};

try {
  const result = await client.createOrReplace(doc);
  console.log("✅  Documento criado/atualizado com sucesso!");
  console.log("    _id:", result._id);
  console.log("    _rev:", result._rev);
} catch (err) {
  console.error("❌  Erro ao enviar para o Sanity:");
  console.error(err.message);
  process.exit(1);
}
