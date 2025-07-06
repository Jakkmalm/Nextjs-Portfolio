export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images?: string[]; // Array of image URLs for project gallery
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
    liveUrl: "https://jacob-portfolio.vercel.app",
    repoUrl: "https://github.com/jacobost/portfolio-nextjs",
  },
  {
    slug: "dagens-lunch-guide",
    title: "Dagens Lunch Guide",
    description:
      "BARA wpa sd a sd a sd a sd a sd  as d a sdasdasd asd a sd a sd a sss s  s s s s s  s s s s s ssssss sss sss ssss s s s s s  s s s s s s  s s s ssssssssssssssm sd a sd da",
    thumbnail: "/images/dagenslunchguide-thumb.png",
    images: [
      "/images/dagenslunchguide-1.png",
      "/images/dagenslunchguide-2.png",
      "/images/dagenslunchguide-3.png",
    ],
    tags: ["WordPress", "PHP", "MySQL", "AJAX", "JavaScript"],
    liveUrl: "https://dagenslunchmeny.se",
    repoUrl: "lägger till senare",
  },
  {
    slug: "restaurang-dashboard",
    title: "Restaurang Dashboard",
    description:
      "Ett användarvänligt dashboard för restauranger för att hantera beställningar och kunder.",
    thumbnail: "/images/portfolio-thumb.png",
    images: [
      "/images/portfolio-1.png",
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
    ],
    tags: ["WordPress", "PHP", "MySQL", "AJAX", "JavaScript"],
    // liveUrl: "https://ai-chatbot-demo.netlify.app",
    repoUrl: "https://github.com/jacobost/ai-chatbot",
  },
  {
    slug: "weather-app",
    title: "Väderapp med API-integration",
    description:
      "En mobilanpassad väderapp som hämtar data från OpenWeatherMap API med snygg UI.",
    thumbnail: "/images/portfolio-thumb.png",
    images: [
      "/images/portfolio-1.png",
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
    ],
    tags: ["React", "API", "JavaScript"],
    repoUrl: "https://github.com/jacobost/weather-app",
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
    tags: ["React", "PDF", "Formik"],
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
    icon: "/icons/next.js.svg",
  },
  {
    id: "react",
    name: "React",
    icon: "/icons/react.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "/icons/tailwind CSS.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/icons/node.js.svg",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "/icons/mySQL.svg",
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: "/icons/wordpress.svg",
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
