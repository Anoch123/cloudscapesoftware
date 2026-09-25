import { NavLink } from "../types/navbar";

export const NAV_LINKS: NavLink[] = [
  {
    label: "Services",
    href: "#design",
    children: [
      { label: "Web Development", href: "#services-web" },
      { label: "Cloud Solutions", href: "#services-cloud" },
      { label: "UI/UX Design", href: "#services-design" },
      { label: "Product Engineering", href: "#services-engineering" },
    ],
  },
  { label: "AI Business Automation", href: "#technology" },
  { label: "Technology", href: "#expertise" },
  { label: "About Us", href: "#marketing" },
];