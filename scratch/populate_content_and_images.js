import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'vd8c7dlq',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2023-05-03',
});

const ARTIFACTS_DIR = '/home/maironvilela/.gemini/antigravity/brain/ccc29cf0-c09d-4990-9928-69164f6ef297';

const contentMap = {
  "f4b7727d-d03a-486e-838e-b8e5cdb45f46": {
    title: "A Importância da Saúde Metabólica no Emagrecimento",
    image: "metabolismo_saude_1778892047250.png",
    body: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'O que é saúde metabólica?' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'A saúde metabólica vai muito além do peso na balança. Ela representa o equilíbrio dos seus sistemas internos, garantindo que seu corpo processe energia de forma eficiente, sem inflamações ou picos glicêmicos constantes.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Por que ela é a chave para o emagrecimento?' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Quando seu metabolismo está "doente", o corpo tende a armazenar gordura com facilidade e tem dificuldade em utilizá-la como combustível. Recuperar a flexibilidade metabólica é essencial para que o emagrecimento seja natural e, principalmente, duradouro.' }] }
    ]
  },
  "e9d59227-ceba-459b-b4d5-47369b5a1581": {
    title: "Alimentação Consciente: Redescobrindo o Prazer de Comer",
    image: "alimentacao_consciente_1778892076889.png",
    body: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Mindful Eating na prática' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Em um mundo de distrações constantes, perdemos a conexão com os sinais de fome e saciedade do nosso próprio corpo. Alimentar-se com consciência significa estar presente no momento da refeição.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Ao comer devagar e apreciar os sabores, permitimos que os hormônios da saciedade, como a leptina, enviem a mensagem correta ao cérebro, evitando o consumo excessivo e desnecessário de calorias.' }] }
    ]
  },
  "e485ca22-3656-4c3a-ac99-6d62487cdc59": {
    title: "Como Manter a Motivação Durante o Processo de Mudança",
    image: "motivacao_mudanca_1778892061979.png",
    body: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'A Motivação vs Disciplina' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'A motivação é o que te faz dar o primeiro passo, mas é a disciplina que te mantém no caminho nos dias difíceis. Entender que o processo não é linear é fundamental para não desistir diante dos primeiros obstáculos.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Estabelecer metas pequenas e celebráveis ajuda a manter o cérebro engajado no sistema de recompensa, transformando novos hábitos em rotina automática.' }] }
    ]
  },
  "d3aeb13a-9a65-4a2d-ab2b-f946e82b0dc6": {
    title: "Dormir Bem: O Segredo Invisível da Regulação Hormonal",
    image: "sono_hormonios_regula_1778892089912.png",
    body: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'O Sono e a Fome' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Uma única noite de sono mal dormida pode desregular a grelina (hormônio da fome) e a leptina (hormônio da saciedade). Isso explica por que sentimos tanta vontade de comer carboidratos e doces após uma noite de insônia.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Priorizar a higiene do sono é uma das estratégias mais eficazes e subestimadas em qualquer protocolo de perda de peso e equilíbrio hormonal.' }] }
    ]
  },
  "170ad8e7-eb36-4403-9b0d-edae3057cb0d": {
    title: "Cardio vs. Musculação: Qual o Melhor para Emagrecer?",
    image: "exercicio_resistencia_cardio_1778892101615.png",
    body: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'O poder da musculação' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Enquanto o cardio queima mais calorias durante a execução, a musculação aumenta sua taxa metabólica basal. Ter mais músculos significa que seu corpo queima mais energia até mesmo enquanto você está em repouso.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'A combinação ideal envolve ambos: o cardio para saúde cardiovascular e queima imediata, e a musculação para construção de um motor metabólico potente e duradouro.' }] }
    ]
  },
  "3a942a43-fd9c-49c8-b922-3d2d630c74fd": {
    title: "Suplementação Inteligente: Quando Realmente é Necessário?",
    image: "suplementacao_inteligente_1778892111842.png",
    body: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Suplemento não é substituto' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Como o nome diz, suplementos servem para suprir lacunas que a alimentação e o estilo de vida não conseguem preencher. Eles são a "cereja do bolo" de um planejamento bem estruturado.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Antes de investir em suplementos caros, é preciso ajustar o sono, a hidratação e a ingestão de micronutrientes através de comida de verdade. A suplementação deve ser sempre personalizada e guiada por exames bioquímicos.' }] }
    ]
  }
};

async function uploadAndPopulate() {
  for (const [id, data] of Object.entries(contentMap)) {
    console.log(`Processing post: ${data.title}`);
    
    let imageAsset;
    const imagePath = path.join(ARTIFACTS_DIR, data.image);
    
    if (fs.existsSync(imagePath)) {
      console.log(`Uploading image: ${data.image}`);
      const imageBuffer = fs.readFileSync(imagePath);
      imageAsset = await client.assets.upload('image', imageBuffer, {
        filename: data.image
      });
    }

    const patchData = {
      body: data.body
    };

    if (imageAsset) {
      patchData.mainImage = {
        _type: 'image',
        asset: {
          _type: "reference",
          _ref: imageAsset._id
        }
      };
    }

    await client
      .patch(id)
      .set(patchData)
      .commit();
    
    console.log(`Successfully updated ${data.title}`);
  }
}

uploadAndPopulate().catch(console.error);
