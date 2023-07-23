import type { FooterItem, MainNavItem } from "@/lib/types";
import { slugify } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://twitter.com/FibreFlo",
  github: "https://github.com/maxch1414",
  githubAccount: "https://github.com/maxch1414",
};

export const siteConfig = {
  name: "Fibre Flo",
  description: "A Fibre company ensuring your fibre flows properly.",
  url: "https://fibreflo.com",
  ogImage: "https://fibreflo.com/opengraph-image.png",
  links,
  footerNav: [
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Services",
          href: "/services",
          external: false,
        },
        {
          title: "News",
          href: "/news",
          external: false,
        },
        {
          title: "Modern Slavery Statement",
          href: "/modern-slavery-statement",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
