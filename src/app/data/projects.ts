export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images?: string[]; // Array of image URLs for project gallery
  features?: string[]; // Array of insights or features
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
}

export interface Certificate {
  id: string;
  title: string;
  image: string;
  issuedBy: string;
  date: string;
}

export interface Tech {
  id: string;
  name: string;
  icon: string; // path till SVG/png
}

export const projects: Project[] = [
  {
    slug: "portfolio-nextjs",
    title: "Personlig Portfolio i Next.js",
    description:
      "En responsiv portfolio byggd med Next.js och Tailwind CSS, inklusive animationer.",
    thumbnail: "/images/portfolio-thumb.png",
    images: ["/images/portfolio-2.png", "/images/portfolio-3.png"],
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://nextjs-portfolio-kappa-umber-96.vercel.app/",
    repoUrl: "https://github.com/Jakkmalm/Nextjs-Portfolio",
  },
  {
    slug: "dagens-lunchmeny",
    title: "Dagens Lunchmeny",
    description:
      "En användarvänlig lunchguide där besökare snabbt kan hitta dagens menyer från lokala restauranger – filtrerat per stad och veckodag. Byggd i WordPress med skräddarsydd funktionalitet för att leverera snabb, mobilanpassad och överskådlig information.",
    thumbnail: "/images/dagenslunchmeny-thumb.png",
    images: [
      // "/images/dagenslunchguide-1.png",
      // "/images/dagenslunchguide-2.png",
      // "/images/dagenslunchguide-3.png",
    ],
    features: [
      "Skapat datumbaserad menylogik i PHP för veckomenyer",
      "Använt AJAX i WordPress för sömlös menyuppladdning",
      "Förståelse för WordPress-temastruktur och custom post types",
      "Responsiv designanpassning med mobilanvändaren i fokus",
    ],
    tags: ["WordPress", "PHP", "MySQL", "AJAX", "JavaScript"],
    liveUrl: "https://dagenslunchmeny.se",
    // repoUrl: "lägger till senare",
  },
  {
    slug: "restaurang-dashboard",
    title: "Restaurang Dashboard",
    description:
      "Ett användarvänligt dashboard för restauranger för att hantera lunchmenyer.",
    thumbnail: "/images/dashboard-thumb.png",
    images: [
      // "/images/portfolio-1.png",
      // "/images/portfolio-2.png",
      // "/images/portfolio-3.png",
    ],
    tags: ["WordPress", "PHP", "MySQL", "AJAX", "JavaScript"],
    // liveUrl: "https://dagenslunchmeny.se/logga-in",
    // repoUrl: "Lägg till senare",
  },
  {
    slug: "shoey-react-native",
    title: "React-Native Applikation",
    description: "Shoey är en React Native-applikation som visar nyheter om skor hämtade från ett externt API. Appen är kopplad till ett eget Node.js/Express-backend med MongoDB för datalagring, där användaren kan skapa, redigera och ta bort egna skoposter. Genom integration med OpenAI:s API kan användaren dessutom analysera nyhetsartiklar för att identifiera skomodeller och lägga till dem i sin lista – en funktion som förenklar hanteringen av innehåll och förbättrar användarupplevelsen.",
    thumbnail: "/images/shoey-thumb.png",
    images: [
      // "/images/portfolio-1.png",
      // "/images/portfolio-2.png",
      // "/images/portfolio-3.png",
    ],
    features: [
      "Hämtar skonyheter via ett tredjeparts-API",
      "Skapa, redigera och ta bort skor (CRUD)",
      "OpenAI-integration för text-scanning",
      "Responsiv och mobiloptimerad UI i React Native",
      "Använder Expo för snabb utveckling och testning",
    ],
    tags: ["React-Native", "openAI", "JavaScript", "MongoDB", "node.js", "Express"],
    repoUrl: "https://github.com/Jakkmalm/MyApp",
  },
  {
    slug: "invoice-generator",
    title: "Faktura Generator för Frilansare",
    description:
      "Skapa snygga PDF-fakturor direkt i webbläsaren med React och html2pdf.",
    thumbnail: "/images/portfolio-thumb.png",
    images: [
      "/images/portfolio-1.png",
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
    ],
    tags: ["React",],
    liveUrl: "https://invoicegen.app",
    repoUrl: "https://github.com/jacobost/invoice-generator",
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-frontend",
    title: "Frontend Developer Certification",
    image: "https://via.placeholder.com/400x300?text=Frontend+Certificate",
    issuedBy: "freeCodeCamp",
    date: "2023-08-15",
  },
  {
    id: "cert-openai",
    title: "Building AI Applications with OpenAI",
    image: "https://via.placeholder.com/400x300?text=OpenAI+Certificate",
    issuedBy: "Coursera",
    date: "2024-01-10",
  },
  {
    id: "cert-nextjs",
    title: "Mastering Next.js",
    image: "https://via.placeholder.com/400x300?text=Next.js+Certificate",
    issuedBy: "Udemy",
    date: "2024-05-02",
  },
];

export const techStack: Tech[] = [
  {
    id: "nextjs",
    name: "Next.js",
    icon: "/icons/Next.js.svg",
  },
  {
    id: "react",
    name: "React",
    icon: "/icons/React.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: "/icons/Tailwind-CSS.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/icons/TypeScript.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/icons/Node.js.svg",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "/icons/MySQL.svg",
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: "/icons/WordPress.svg",
  },
  {
    id: "php",
    name: "PHP",
    icon: "/icons/PHP.svg",
  },
  {
    id: "csharp",
    name: "C#",
    icon: "/icons/csharp.svg",
  },
  {
    id: "css3",
    name: "CSS3",
    icon: "/icons/CSS3.svg",
  },
  {
    id: "express",
    name: "Express",
    icon: "/icons/Express.svg",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/icons/JavaScript.svg",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "/icons/PostgresSQL.svg",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: "/icons/Bootstrap.svg",
  },
  {
    id: "azure",
    name: "Azure",
    icon: "/icons/Azure.svg",
  },
  {
    id: "angular",
    name: "Angular",
    icon: "/icons/Angular.svg",
  },
];
