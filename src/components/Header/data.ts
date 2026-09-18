export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderCta {
  label: string;
  href: string;
}

export interface HeaderLogo {
  src: string;
  alt: string;
}

export const logo: HeaderLogo = {
  src: "/images/hero-section/1.png",
  alt: "Dra. Morgana Motta Logo",
};

export const navLinks: NavLink[] = [
  { label: "Início", href: "/#hero" },
  { label: "Tratamentos", href: "/#servicos" },
  { label: "Sobre", href: "/#about" },
  { label: "Método", href: "/#pilares" },
  { label: "Blog", href: "/#blog" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Dúvidas", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
];

export const cta: HeaderCta = {
  label: "Agendar Consulta",
  href: "https://wa.me/5531991995849?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.",
};
