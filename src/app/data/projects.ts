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
      "En responsiv portfolio byggd med Next.js App Router, React och TypeScript. Webbplatsen samlar projekt, teknikkompetenser och kontaktmöjligheter i ett animerat gränssnitt med separata projektsidor och mobilanpassade bildgallerier.",
    thumbnail: "/images/portfolio-thumb.png",
    // images: ["/images/portfolio-2.png", "/images/portfolio-3.png"],
    features: [
      "Responsiv one-page-layout med projekt- och teknikshowcase",
      "Dynamiska projektsidor via Next.js App Router",
      "Scrollanimationer med AOS och Framer Motion",
      "Swipebart bildgalleri med helskärmsvisning",
      "Kontaktformulär med e-postutskick via Resend",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "AOS", "Resend"],
    liveUrl: "https://nextjs-portfolio-kappa-umber-96.vercel.app/",
    repoUrl: "https://github.com/Jakkmalm/Nextjs-Portfolio",
  },
  {
    slug: "lapstr",
    title: "Lapstr – PWA och nativeapp",
    description:
      "Lapstr är en PWA och Android-app för svensk speedway som digitaliserar tävlingsprotokoll och samlar tävlingsinformation på ett ställe. Funktionärer kan hantera heat och resultat, medan följare kan ta del av liveprotokoll samt match- och ligainformation för Bauhausligan i ett mobilanpassat gränssnitt.",
    thumbnail: "/images/lapstr-1.png",
    images: [
      "/images/lapstr-1.png",
      "/images/lapstr-2.png",
      "/images/lapstr-3.png",
      "/images/lapstr-4.png",
      "/images/lapstr-5.png",
      "/images/lapstr-6.png",
      "/images/lapstr-7.png",
    ],
    features: [
      "Skapa och administrera digitala tävlingsprotokoll heat för heat",
      "Liveuppdaterade resultat och delbara matchvyer",
      "Match- och ligainformation för Bauhausligan",
      "Konton, profiler och verifieringsflöden för användare",
      "PWA samt Android-app paketerad med Capacitor",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Radix UI", "Python", "FastAPI", "MongoDB", "Capacitor", "PWA"],
    liveUrl: "https://lapstr.se/",
    // repoUrl: "",
    underConstruction: true,
  },
  {
    slug: "futurica",
    title: "Futurica – mobilspel för Android och iOS",
    description:
      "Futurica är ett idle-baserat 2D-samlarspel där spelaren låser upp, utvecklar och kombinerar varelser över tid. Expeditioner ger resurser inför strategiska bossfighter, medan veckovisa biome surges låter spelarnas gemensamma aktivitet påverka vilka belöningar, bossar och drops som blir tillgängliga.",
    thumbnail: "/images/futurica-loginbg.png",
    images: ["/images/futurica-loginbg.png", "/images/futurica-creatureDetailModal.png", "/images/futurica-surge.png","/images/futurica-summon.png"],
    features: [
      "Samla, lås upp och utveckla varelser",
      "Idle-expeditioner som genererar resurser över tid",
      "Strategiska bossfighter med lagbyggande",
      "Biomer med gemensamma, veckovisa surges",
      "Mobilupplevelse för både Android och iOS",
    ],
    tags: ["React Native", "Expo", "Node.js", "Fastify", "MongoDB"],
    // liveUrl: "",
    // repoUrl: "",
    underConstruction: true,
  },
  {
    slug: "dagens-lunchmeny",
    title: "Dagens Lunchmeny",
    description:
      "En mobilanpassad lunchguide där besökare snabbt hittar aktuella menyer från lokala restauranger och kan filtrera innehållet efter stad och veckodag. Lösningen är byggd i WordPress med egen PHP- och AJAX-logik för strukturerade veckomenyer.",
    thumbnail: "/images/dagenslunchmeny-thumb.png",
    images: [
      "/images/dagenslunchguide-2.png",
      "/images/dagenslunchmeny-thumb.png",
    ],
    features: [
      "Datumbaserad PHP-logik för dagens och veckans menyer",
      "Filtrering efter stad och veckodag",
      "AJAX-baserade uppdateringar utan fullständig sidladdning",
      "Restaurang- och menydata via WordPress custom post types",
      "Responsiv layout med mobilbesökaren i fokus",
    ],
    tags: ["WordPress", "PHP", "MySQL", "AJAX", "JavaScript"],
    liveUrl: "https://dagenslunchmeny.se",
    // repoUrl: "lägger till senare",
  },
  {
    slug: "restaurang-dashboard",
    title: "Restaurang Dashboard",
    description:
      "Ett administrationsgränssnitt kopplat till Dagens Lunchmeny där restauranger kan skapa och underhålla sina lunchmenyer i ett tydligt veckoflöde. Dashboarden är integrerad med WordPress och anpassad för snabb hantering även på mindre skärmar.",
    thumbnail: "/images/dashboard-thumb.png",
    images: [
      // "/images/portfolio-1.png",
      // "/images/portfolio-2.png",
      // "/images/portfolio-3.png",
    ],
    features: [
      "Skapa och uppdatera restaurangens veckomenyer",
      "Strukturerad hantering av menyinnehåll per veckodag",
      "AJAX-baserad lagring för ett smidigare arbetsflöde",
      "Integration med WordPress och Dagens Lunchmeny",
      "Responsivt gränssnitt för desktop och mobil",
    ],
    tags: ["WordPress", "PHP", "MySQL", "AJAX", "JavaScript"],
    // liveUrl: "https://dagenslunchmeny.se/logga-in",
    // repoUrl: "Lägg till senare",
  },
  {
    slug: "shoey-react-native",
    title: "Shoey – React Native-app",
    description: "Shoey är en Expo-baserad React Native-app som samlar skonyheter och låter användaren bygga en egen skolista. Appen kommunicerar med ett Node.js- och Express-API med MongoDB och använder OpenAI för att tolka nyhetsartiklar och förbereda skor för snabb tilläggning.",
    thumbnail: "/images/shoey-thumb.png",
    images: [
      // "/images/portfolio-1.png",
      // "/images/portfolio-2.png",
      // "/images/portfolio-3.png",
    ],
    features: [
      "Aktuella skonyheter hämtade från NewsAPI",
      "Personlig skolista med skapa, redigera och ta bort",
      "OpenAI-analys som identifierar skomärke och modell i artiklar",
      "Quick add-flöde med förifylld information från nyhetstext",
      "Mobil navigation med tabs, stackvyer och modaler",
    ],
    tags: ["React Native", "Expo", "JavaScript", "React Navigation", "React Native Paper", "Node.js", "Express", "MongoDB", "OpenAI API", "NewsAPI"],
    repoUrl: "https://github.com/Jakkmalm/MyApp",
  },
  {
    slug: "books-and-quotes",
    title: "Books & Quotes",
    description:
      "Books & Quotes är en fullstack-applikation med Angular-frontend och ett separat ASP.NET Core-API. Användare kan registrera sig, logga in med JWT och hantera sin egen boksamling genom skyddade API-anrop, med automatisk tokenhantering i klienten.",
    thumbnail: "/images/books-and-quotes.png",
    // images: [
    //   "/images/portfolio-1.png",
    //   "/images/portfolio-2.png",
    //   "/images/portfolio-3.png",
    // ],
    features: [
      "Registrering och inloggning mot ett ASP.NET Core-API",
      "JWT-hantering med auth guard och HTTP-interceptor",
      "Användarspecifik CRUD-hantering för böcker",
      "Automatisk utloggning när token saknas eller har löpt ut",
      "Ljust och mörkt tema med responsivt Angular-gränssnitt",
    ],
    tags: ["Angular", "TypeScript", "Angular Material", "RxJS", "Bootstrap", "ASP.NET Core", "JWT", "REST API"],
    liveUrl: "https://jakkmalm.github.io/angular-books-quotes/",
    repoUrl: "https://github.com/Jakkmalm/angular-books-quotes",
  },
  {
    slug: "dotnet-rest-api",
    title: "Books & Quotes API (.NET)",
    description:
      "Ett REST API byggt med ASP.NET Core och .NET 8 för Books & Quotes-applikationen. API:t hanterar registrering, säker lösenordslagring, JWT-inloggning och användarspecifik CRUD för böcker med Entity Framework Core och PostgreSQL.",
    thumbnail: "/images/dotnet.api.png",
    images: [
      "/images/dotnet.api.png",
      "/images/dotnet.api.png",
      "/images/dotnet.api.png",
    ],
    features: [
      "Registrering med BCrypt-hashade lösenord",
      "JWT-baserad autentisering med signerade tokens",
      "Skyddade endpoints och användarisolerad bokdata",
      "CRUD för böcker med Entity Framework Core",
      "PostgreSQL-databas med migrationsstöd",
      "Swagger/OpenAPI-dokumentation med Bearer-autentisering",
    ],
    tags: ["C#", ".NET 8", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "JWT", "BCrypt", "Swagger", "Azure"],
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
