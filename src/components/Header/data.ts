import { sanityClient, urlFor } from "../../lib/sanity";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderCta {
  label: string;
  href: string;
}

export interface HeaderLogo {
  src: string | null;
  alt: string;
}

const sanityHeader = await sanityClient
  .fetch(`*[_type == "headerContent"][0]{ logo, cta }`)
  .catch(() => null);

export const logo: HeaderLogo = {
  src: sanityHeader?.logo
    ? urlFor(sanityHeader.logo).width(400).auto("format").url()
    : null,
  alt: sanityHeader?.logo?.alt || "Dra. Morgana Motta Logo",
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
  label: sanityHeader?.cta?.label || "Agendar Consulta",
  href:
    sanityHeader?.cta?.href ||
    "https://wa.me/5531989067668?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.",
};
