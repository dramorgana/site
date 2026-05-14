export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
  seoDescription: string;
  altText: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "A Importância da Saúde Metabólica no Emagrecimento",
    excerpt: "Entenda como o seu metabolismo influencia a perda de peso e por que dietas restritivas podem não ser a solução definitiva.",
    date: "10 Mai, 2026",
    author: "Dra. Carolina Mendes",
    category: "Saúde Metabólica",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    slug: "importancia-saude-metabolica",
    seoDescription: "Descubra como a saúde metabólica é a chave para o emagrecimento saudável e sustentável com a Dra. Carolina Mendes.",
    altText: "Prato de comida saudável com vegetais frescos e proteínas, representando saúde metabólica."
  },
  {
    id: 2,
    title: "Como Manter a Motivação Durante o Processo de Mudança",
    excerpt: "Dicas práticas para sustentar seus novos hábitos e não desistir nos momentos de maior desafio.",
    date: "08 Mai, 2026",
    author: "Dra. Carolina Mendes",
    category: "Estilo de Vida",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    slug: "motivacao-processo-mudanca",
    seoDescription: "Estratégias psicológicas e práticas para manter a motivação no processo de emagrecimento e mudança de hábitos.",
    altText: "Mulher sorridente preparando uma refeição saudável, simbolizando motivação e estilo de vida."
  },
  {
    id: 3,
    title: "Alimentação Consciente: Redescobrindo o Prazer de Comer",
    excerpt: "Saiba como o mindfulness pode transformar sua relação com a comida e auxiliar no controle do peso.",
    date: "05 Mai, 2026",
    author: "Dra. Carolina Mendes",
    category: "Nutrição",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
    slug: "alimentacao-consciente",
    seoDescription: "Aprenda o que é alimentação consciente (mindful eating) e como essa técnica ajuda no controle de peso saudável.",
    altText: "Close-up de frutas frescas e cereais em uma tigela, representando nutrição consciente."
  },
  {
    id: 4,
    title: "O Papel do Sono na Regulação Hormonal",
    excerpt: "Dormir bem é fundamental para o equilíbrio dos hormônios que controlam a fome e a saciedade.",
    date: "02 Mai, 2026",
    author: "Dra. Carolina Mendes",
    category: "Saúde Metabólica",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800",
    slug: "sono-regulacao-hormonal",
    seoDescription: "Entenda a ligação científica entre qualidade do sono, regulação de hormônios como leptina e grelina, e perda de peso.",
    altText: "Ambiente de quarto tranquilo e aconchegante, sugerindo uma boa noite de sono."
  },
  {
    id: 5,
    title: "Exercícios de Resistência vs. Cardio: Qual o Melhor?",
    excerpt: "Descubra a combinação ideal de atividades físicas para otimizar a queima de gordura e ganhar massa magra.",
    date: "28 Abr, 2026",
    author: "Dra. Carolina Mendes",
    category: "Exercícios",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    slug: "exercicios-resistencia-vs-cardio",
    seoDescription: "Guia completo sobre a diferença entre cardio e musculação para o emagrecimento e qual a melhor estratégia para você.",
    altText: "Equipamentos de academia e pesos, representando exercícios de resistência e cardio."
  },
  {
    id: 6,
    title: "Suplementação Inteligente: Quando é Realmente Necessária?",
    excerpt: "Um guia sobre os suplementos que podem auxiliar no seu processo de emagrecimento de forma segura.",
    date: "25 Abr, 2026",
    author: "Dra. Carolina Mendes",
    category: "Saúde Metabólica",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
    slug: "suplementacao-inteligente",
    seoDescription: "Saiba quais suplementos têm comprovação científica para auxiliar na saúde metabólica e quando utilizá-los.",
    altText: "Cápsulas e suplementos organizados de forma profissional, representando saúde e ciência."
  }
];
