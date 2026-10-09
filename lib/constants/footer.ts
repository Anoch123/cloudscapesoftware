import { FooterRow } from "../types/footer.type";

export const footerRows: FooterRow[] = [
  {
    title: "Capabilities",
    links: [
      { label: "Services", href: "/our-services" },
      { label: "Technology", href: "/technologies-we-use" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/company/about" },
      { label: "Expertise", href: "/company/expertise" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Contact us", href: "/resources/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Terms and conditions", href: "/legal/terms" },
    ],
  },
];