export const profile = {
  name: "Shokhjakhon Mukhammadiev",
  shortName: "Shokhjakhon",
  alias: "Umar",
  title: "Full-Stack Software Engineer | Applied AI",
  location: "Gwangju, South Korea",
  visa: "D-10 Job Seeker Visa",
  email: "shmukhammadiev01@gmail.com",
  github: "https://github.com/mukhammadiev01-1",
  summary:
    "I build scalable web platforms, realtime systems and AI-enabled products — from product architecture and interfaces to backend services, data models and production deployment.",
};

export const projects = [
  {
    id: "kidsgarden",
    no: "01",
    title: "KidsGarden",
    subtitle: "Kindergarten & Early Learning Platform",
    description:
      "A full-stack platform for kindergarten discovery, parent-school communication and internal center management. The system combines public listings with protected role dashboards, operations, realtime communication and AI-assisted features.",
    contribution:
      "Designed and implemented the platform end to end: Next.js interfaces, NestJS GraphQL APIs, MongoDB models, JWT/RBAC authorization, dashboard workflows, uploads, WebSocket events, Redis Pub/Sub and Docker deployment.",
    stack: ["Next.js", "NestJS", "GraphQL", "MongoDB", "Redis", "WebSocket", "Docker"],
    metrics: [
      ["10+", "backend modules"],
      ["4", "primary roles"],
      ["GraphQL", "API layer"],
    ],
    href: "https://kidsgarden.uz",
  },
  {
    id: "plantcare",
    no: "02",
    title: "PlantCare AI",
    subtitle: "Computer Vision Plant Disease Classifier",
    description:
      "A Computer Vision web application that identifies plant disease from a single leaf image and returns ranked predictions with confidence scores.",
    contribution:
      "Built the complete AI workflow: dataset preparation, preprocessing, transfer learning, evaluation, inference and public Streamlit deployment.",
    stack: ["Python", "PyTorch", "MobileNetV2", "Computer Vision", "Streamlit"],
    metrics: [
      ["95.30%", "test accuracy"],
      ["93.88%", "macro F1"],
      ["38", "classes"],
      ["8,143", "test images"],
    ],
    href: "https://plantcare-ai-mit.streamlit.app/",
  },
  {
    id: "royalfood",
    no: "03",
    title: "Royal Food",
    subtitle: "Product Catalog & Ordering Platform",
    description:
      "A full-stack product catalog and ordering system with a React customer storefront and a separate Express/EJS administration panel.",
    contribution:
      "Implemented authentication, product discovery, filtering, persistent cart, order workflows, profile management, uploads and company-side product, partner and order administration.",
    stack: ["React", "Node.js", "Express", "REST API", "EJS", "MongoDB"],
    metrics: [
      ["2", "application surfaces"],
      ["REST", "API architecture"],
      ["MVC", "admin structure"],
    ],
    href: "https://royalfood.kr/",
  },
];

export const contributions = [
  {
    title: "Kokand University",
    role: "Frontend contribution",
    description:
      "Built responsive pages, reusable UI components and structured content sections for a multilingual university information portal.",
    href: "https://www.kokanduni.uz/en",
  },
  {
    title: "Safia Bakery",
    role: "Backend contribution",
    description:
      "Implemented API endpoints, database models and server-side business logic for catalogs, categories, promotions, branches and website content.",
    href: "https://safiabakery.uz/en",
  },
];

export const experience = [
  {
    period: "2025.04 — 2026.06",
    company: "Ochen Studio IT Company",
    location: "Tbilisi, Georgia · Remote",
    role: "Full-Stack Software Engineer",
    points: [
      "Built REST and GraphQL APIs, role-based dashboards, authentication workflows and database-driven administration systems.",
      "Integrated frontend applications with Apollo Client, Axios, WebSocket and Redis Pub/Sub.",
      "Configured Docker environments and deployed applications to Ubuntu VPS infrastructure using Nginx and HTTPS.",
    ],
  },
  {
    period: "2024.03 — 2025.04",
    company: "Automatic Technology Solutions LLC",
    location: "Tashkent, Uzbekistan",
    role: "Frontend Developer",
    points: [
      "Developed responsive interfaces with React, Next.js, TypeScript, MUI, Bootstrap and SCSS.",
      "Built reusable components, dashboards, listing/detail pages and customer-facing application flows.",
      "Integrated REST and GraphQL APIs and implemented state, search, filtering, pagination and authentication logic.",
    ],
  },
  {
    period: "2023.01 — 2024.02",
    company: "Mimsoft LLC",
    location: "Tashkent, Uzbekistan",
    role: "Backend Developer",
    points: [
      "Developed backend services with Node.js, TypeScript, NestJS, Express, MongoDB and Mongoose.",
      "Designed REST and GraphQL APIs, DTOs, models, authentication, authorization and role-based guards.",
      "Implemented uploads, realtime events, validation, scheduled tasks and batch-processing workflows.",
    ],
  },
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Apollo Client", "React Query", "Redux Toolkit", "MUI", "Tailwind CSS", "SCSS", "i18n"],
  Backend: ["Node.js", "NestJS", "Express", "GraphQL", "REST API", "JWT / RBAC", "WebSocket", "Redis Pub/Sub", "EJS"],
  "Data & Infrastructure": ["MongoDB", "Mongoose", "Aggregation", "Geospatial Search", "Docker", "Nginx", "Ubuntu VPS", "HTTPS / SSL", "GitHub"],
  "Applied AI": ["Python", "PyTorch", "OpenCV", "Hugging Face", "LoRA / PEFT", "RAG / Qdrant", "LLM Integration"],
};

export const languages = [
  ["Uzbek", "Native"],
  ["Russian", "Fluent"],
  ["English", "Advanced"],
  ["Korean", "Advanced"],
];
