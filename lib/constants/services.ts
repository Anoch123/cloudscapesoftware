import { Service } from "../types/services.type";

export const SERVICES: Service[] = [
  {
    label: "Custom Software Development",
    detail:
      "Tailored systems built around how your team actually works — from first commit to production, and every iteration after.",
    includes: [
      "Requirements & system design",
      "Full-stack build (frontend + backend)",
      "Database & API architecture",
    ],
  },
  {
    label: "Web Development",
    detail: "Fast, scalable sites and web apps.",
    includes: [
      "Marketing sites & web apps",
      "E-commerce & dashboards",
      "Performance & SEO tuning",
    ],
  },
  {
    label: "Mobile App Development",
    detail: "Native and cross-platform apps for iOS and Android.",
    includes: [
      "iOS & Android, native or cross-platform",
      "App Store & Play Store release",
      "Push notifications & offline support",
    ],
  },
  {
    label: "UI/UX Design",
    detail: "Interfaces people find easy to use.",
    includes: [
      "User research & wireframes",
      "Design systems & prototypes",
      "Usability testing",
    ],
  },
  {
    label: "Cloud Solutions",
    detail: "Infrastructure provisioned as code.",
    includes: [
      "AWS / GCP / Azure setup",
      "Infrastructure as code",
      "Auto-scaling & cost optimization",
    ],
  },
  {
    label: "DevOps",
    detail:
      "CI/CD pipelines and automation that shorten release cycles and keep deployments boring, in the best way.",
    includes: [
      "CI/CD pipelines",
      "Monitoring & alerting",
      "Zero-downtime deployments",
    ],
  },
  {
    label: "AI Solutions",
    detail: "Practical automation built into your product.",
    includes: [
      "AI integration & automation",
      "Custom ML models",
      "AI-powered analytics",
    ],
  },
  {
    label: "Software Maintenance",
    detail: "Ongoing support and updates after launch.",
    includes: [
      "Bug fixes & patches",
      "Performance monitoring",
      "Ongoing feature updates",
    ],
  },
];

export const SERVICES_HOMEPAGE: Service[] = [
  {
    label: "Custom Software Development",
    detail:
      "Tailored systems built around how your team actually works — from first commit to production, and every iteration after.",
    includes: [],
  },
  {
    label: "Web Development",
    detail: "Fast, scalable sites and web apps.",
    includes: [],
  },
  {
    label: "Mobile App Development",
    detail: "Native and cross-platform apps for iOS and Android.",
    includes: [],
  },
  {
    label: "UI/UX Design",
    detail: "Interfaces people find easy to use.",
    includes: [],
  },
  {
    label: "Cloud Solutions",
    detail: "Infrastructure provisioned as code.",
    includes: [],
  },
  {
    label: "DevOps",
    detail:
      "CI/CD pipelines and automation that shorten release cycles and keep deployments boring, in the best way.",
    includes: [],
  },
  {
    label: "AI Solutions",
    detail: "Practical automation built into your product.",
    includes: [],
  },
  {
    label: "Software Maintenance",
    detail: "Ongoing support and updates after launch.",
    includes: [],
  },
];

export const PILLARS = [
  {
    title: "Build",
    detail:
      "We design and ship full-stack software, mobile apps, and cloud infrastructure built to last past launch day.",
    color: "#4F66FF",
  },
  {
    title: "Automate",
    detail:
      "We fold AI and automation into the product itself, so it's part of how the system works, not a feature bolted on after.",
    color: "#9333EA",
  },
  {
    title: "Support",
    detail:
      "We stay on after launch — maintaining, monitoring, and improving what we build as your product and your users grow.",
    color: "#0EA5A5",
  },
];

export const STEPS = [
  {
    title: "Discover",
    detail:
      "We start with your actual problem, not a feature list — talking through what's slow, fragile, or missing today.",
  },
  {
    title: "Design & plan",
    detail:
      "We map out the system and decide up front where software ends and AI begins, so nothing gets forced in later.",
  },
  {
    title: "Build & ship",
    detail:
      "We build in working increments you can see and test, not one long build-up to a single release.",
  },
  {
    title: "Support & grow",
    detail:
      "We stay on after launch — maintaining, monitoring, and extending the system as your needs change.",
  },
];

export const PROBLEMS = [
  {
    problem: "Our product can't keep up with demand.",
    solution:
      "We re-architect the infrastructure with cloud solutions provisioned as code, so growth doesn't mean downtime.",
  },
  {
    problem: "We're stuck maintaining an outdated system.",
    solution:
      "We modernize or rebuild the parts holding you back, without disrupting the parts that already work.",
  },
  {
    problem: "We have data but no way to use it.",
    solution:
      "We build AI-powered analytics that turn what you're already collecting into decisions your team can act on.",
  },
  {
    problem: "Manual work is eating our team's time.",
    solution:
      "We automate the repetitive parts of the workflow, with AI handling the judgment calls in between.",
  },
  {
    problem: "We shipped it, but nobody's maintaining it.",
    solution:
      "We take over ongoing maintenance, monitoring, and updates, so nothing quietly goes stale.",
  },
];
