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
  underConstruction?: boolean;
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
    // images: ["/images/portfolio-2.png", "/images/portfolio-3.png"],
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://nextjs-portfolio-kappa-umber-96.vercel.app/",
    repoUrl: "https://github.com/Jakkmalm/Nextjs-Portfolio",
  },
  {
    slug: "lapstr",
    title: "Lapstr - Speedway Applikation",
    description:
      "En PWA-applikation som digitaliserar tävlingsprotokoll för svensk speedway, tillgänglig både på dator och mobil. Appen gör det möjligt att skapa, hantera och dela protokoll i realtid. Som användare kommer du kunna följa live-resultat, ta del av nyheter om förare och tävlingar och följa allt inom svensk speedway. Utvecklad med React, Shadcn UI och Python för hög prestanda och responsivitet.",
    thumbnail: "/images/lapstr-thumb.png",
    images: ["/images/lapstr-3.png", "/images/lapstr-2.png", "/images/lapstr-5.png", "/images/lapstr-7.png"],
    features: [
      "Digital hantering av tävlingsprotokoll för Speedway",
      "Responsiv design för både desktop och mobil",
    ],
    tags: ["React", "TypeScript", "Python", "FastAPI", "shadcn UI", "PWA", "MongoDB"],
    liveUrl: "https://lapstr.se/",
    // repoUrl: "",
    underConstruction: true,
  },
  {
    slug: "futurica",
    title: "Futurica - Mobile Game Android/IOS",
    description:
      "Futurica är ett idle-baserat 2D-samlarspel där man låser upp och utvecklar varelser över tid. Varelser skickas på expeditioner för att samla resurser och stärka sina förmågor, vilket används för att förbereda sig inför bossfighter som kräver rätt uppsättning och långsiktig planering. Spelet utspelar sig i en värld uppdelad i olika biomer, där spelarnas sammanlagda aktivitet påverkar veckovisa biome surges. Dessa surges avgör vilka biomer som hamnar i fokus och påverkar tillgängliga belöningar, bossar och drops, vilket gör att spelets tillstånd förändras från vecka till vecka baserat på hur spelarna agerar.",
    thumbnail: "/images/futurica-loginbg.png",
    images: ["/images/futurica-loginbg.png", "/images/futurica-creatureDetailModal.png", "/images/futurica-surge.png","/images/futurica-summon.png"],
    features: [
      "Idle-baserat samlarspel med strategiska inslag",
    ],
    tags: ["React-Native", "Expo", "MongoDB", "Fastify", "Node.js"],
    // liveUrl: "",
    // repoUrl: "",
    underConstruction: true,
  },
  {
    slug: "dagens-lunchmeny",
    title: "Dagens Lunchmeny",
    description:
      "En användarvänlig lunchguide där besökare snabbt kan hitta dagens menyer från lokala restauranger – filtrerat per stad och veckodag. Byggd i WordPress med skräddarsydd funktionalitet för att leverera snabb, mobilanpassad och överskådlig information.",
    thumbnail: "/images/dagenslunchmeny-thumb.png",
    images: [
      "/images/dagenslunchguide-2.png",
      "/images/dagenslunchmeny-thumb.png",
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
    tags: ["React-Native", "openAI", "JavaScript", "MongoDB", "Node.js", "Express"],
    repoUrl: "https://github.com/Jakkmalm/MyApp",
  },
  {
    slug: "books-and-quotes",
    title: "Books & Quotes",
    description:
      "Books & Quotes är en minimalistisk fullstack-applikation byggd med Angular och TypeScript, där målet varit att lära mig moderna frontend-flöden, autentisering och token-hantering. Applikationen kommunicerar med ett .NET-baserat REST API som ansvarar för användarautentisering och CRUD-funktionalitet för bok-poster. Vid inloggning skapas en JWT-token som returneras till klienten. Token lagras lokalt (tillfälligt i localStorage) och används i headers för att autentisera fortsatta API-anrop.",
    thumbnail: "/images/books-and-quotes.png",
    // images: [
    //   "/images/portfolio-1.png",
    //   "/images/portfolio-2.png",
    //   "/images/portfolio-3.png",
    // ],
    features: [
      "Light/Dark Mode toggle",
      "JWT-baserad autentisering mot ett externt .NET API",
      "Skyddade sidor (conditional rendering beroende på auth state)",
      "CRUD-hantering för böcker och citat (skapa, läsa, uppdatera, ta bort)",
      "Responsiv design och enkel, tydlig UI/UX med Tailwind CSS",
    ],
    tags: ["Angular", ".NET", "TypeScript", "PostgreSQL",],
    liveUrl: "https://jakkmalm.github.io/angular-books-quotes/",
    repoUrl: "https://github.com/Jakkmalm/angular-books-quotes",
  },
  {
    slug: "dotnet-rest-api",
    title: "Books & Quotes API (.NET)",
    description:
      "Detta projekt är ett REST API byggt med .NET, utvecklat som backend till fullstack-applikationen Books & Quotes. API:t hanterar hela autentiseringsflödet med JWT-tokens samt CRUD-operationer för bokposter. Vid inloggning genereras en JWT-token som returneras till frontend-klienten, där den används för att komma åt skyddade resurser via autentiserade API-anrop. Projektet syftar till att lära känna och arbeta med API:er i en .NET-miljö med C#, samt att implementera autentisering med JWT (JSON Web Tokens).",
    thumbnail: "/images/dotnet.api.png",
    images: [
      "/images/dotnet.api.png",
      "/images/dotnet.api.png",
      "/images/dotnet.api.png",
    ],
    features: [
      "JWT-baserad autentisering med rollstöd",
      "Skyddade endpoints (Authorize-guards)",
      "CRUD för Books och Quotes med Entity Framework Core",
      "API-dokumentation med Swagger",
      "Strukturerad och utbyggbar kodbas enligt best practices",
    ],
    tags: ["C#", ".NET", "JWT", "Entity Framework", "REST API", "PostgreSQL", "Azure"],
    liveUrl: "https://bookquotesapi-jacob-h0bjcud7apejeea5.swedencentral-01.azurewebsites.net/swagger/",
    repoUrl: "https://github.com/Jakkmalm/book-quotes-api",
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
  {
    id: "dotnet",
    name: ".NET",
    icon: "/icons/NET.svg",
  },
];
