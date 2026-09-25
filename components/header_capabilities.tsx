import { Capability } from "@/lib/types/header";

export const CAPABILITIES: Capability[] = [
  {
    label: "Product engineering",
    detail: "Full-stack builds from first commit",
    icon: (
      <path
        d="M8 9L4 12L8 15M16 9L20 12L16 15M13.5 6L10.5 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Cloud infrastructure",
    detail: "Multi-cloud, provisioned as code",
    icon: (
      <path
        d="M7 16.5C4.79 16.5 3 14.71 3 12.5C3 10.42 4.58 8.72 6.6 8.52C7.3 6.36 9.32 4.8 11.7 4.8C14.5 4.8 16.79 6.98 16.98 9.74C18.75 10.1 20.1 11.66 20.1 13.55C20.1 15.7 18.36 17.44 16.2 17.44H7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "DevOps & AI automation",
    detail: "Smarter workflows. Faster deployments.",
    icon: (
      <path
        d="M12 4V7M12 17V20M4 12H7M17 12H20M6.34 6.34L8.46 8.46M15.54 15.54L17.66 17.66M6.34 17.66L8.46 15.54M15.54 8.46L17.66 6.34"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    label: "Always-on support",
    detail: "An engineer on call, day or night",
    icon: (
      <path
        d="M4 18V13C4 8.58 7.58 5 12 5C16.42 5 20 8.58 20 13V18M4 18C4 19.1 4.9 20 6 20H7C7.55 20 8 19.55 8 19V15C8 14.45 7.55 14 7 14H4V18ZM20 18C20 19.1 19.1 20 18 20H17C16.45 20 16 19.55 16 19V15C16 14.45 16.45 14 17 14H20V18Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];