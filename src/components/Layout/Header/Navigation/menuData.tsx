import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/about" },
  {
    label: "Портфолио",
    href: "/portfolio",
    submenu: [
      { label: "Список портфолио", href: "/portfolio" },
      { label: "Детали портфолио", href: "/portfolio/portfolio-1" },
    ],
  },
  {
    label: "Блог",
    href: "#",
    submenu: [
      { label: "Список блога", href: "/blog" },
      { label: "Детали блога", href: "/blog/blog_1" },
    ],
  },
  { label: "Контакты", href: "/contact" },
  { label: "Документация", href: "/documentation" },
];
