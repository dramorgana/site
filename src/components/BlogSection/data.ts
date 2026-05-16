import { sanityClient, urlFor } from "../../lib/sanity";

// Busca posts e cabeçalho da seção
const query = `{
  "posts": *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    mainImage,
    description,
    "authorName": author->name,
    "authorCrm": author->crm,
    "authorImage": author->image,
    "category": categories[0]->title
  },
  "header": *[_type == "blogContent"][0]
}`;

const sanityData = await sanityClient.fetch(query).catch(() => ({ posts: [], header: null }));

// Fallbacks para o cabeçalho
const defaultHeader = {
  kicker: "Conteúdo Especializado",
  title: "Posts e Novidades",
  description: "Fique por dentro das últimas novidades, dicas e artigos sobre saúde metabólica, emagrecimento e qualidade de vida escritos pela Dra. Carolina Mendes.",
  viewAllLabel: "Ver todos os artigos no Blog"
};

// Fallbacks para posts
const DESCRIPTIONS_FALLBACK: Record<string, string> = {
  "importancia-saude-metabolica": "Entenda como o seu metabolismo influencia a perda de peso e por que dietas restritivas podem não ser a solução definitiva.",
  "motivacao-processo-mudanca": "Dicas práticas para sustentar seus novos hábitos e não desistir nos momentos de maior desafio.",
  "alimentacao-consciente": "Saiba como o mindfulness pode transformar sua relação com a comida e auxiliar no controle do peso.",
  "sono-regulacao-hormonal": "Dormir bem é fundamental para o equilíbrio dos hormônios que controlam a fome e a saciedade.",
  "exercicios-resistencia-vs-cardio": "Descubra a combinação ideal de atividades físicas para otimizar a queima de gordura e ganhar massa magra.",
  "suplementacao-inteligente": "Um guia sobre os suplementos que podem auxiliar no seu processo de emagrecimento de forma segura."
};

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800";

// Exporta o cabeçalho processado
export const header = {
  kicker: sanityData.header?.kicker || defaultHeader.kicker,
  title: sanityData.header?.title || defaultHeader.title,
  description: sanityData.header?.description || defaultHeader.description,
  viewAllLabel: sanityData.header?.viewAllLabel || defaultHeader.viewAllLabel
};

// Exporta a lista de posts processada
export const posts = sanityData.posts.map((post: any) => ({
  ...post,
  slug: post.slug?.current || "#",
  image: post.mainImage ? urlFor(post.mainImage).width(800).url() : DEFAULT_IMAGE,
  description: post.description || DESCRIPTIONS_FALLBACK[post.slug?.current] || "Leia mais sobre este assunto em nosso blog completo.",
  date: new Date(post.publishedAt || new Date()).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).replace('.', ''),
  authorName: post.authorName || "Dra. Carolina Mendes",
  authorCrm: post.authorCrm || "CRM-SP 123456",
  authorImage: post.authorImage ? urlFor(post.authorImage).width(100).url() : "https://ui-avatars.com/api/?name=Carolina+Mendes&background=c5a059&color=fff",
  category: post.category || "Saúde Integrativa",
  altText: post.title
}));
