export interface ProjectDetail {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  client: string;
  industry: string;
  culture: string;
  location: string;
  coverImage: string;
  heroImage: string;
  description: string;
  concept: string;
  quote: string;
  quoteAuthor: string;
  details: string[];
  challenge: string;
  solution: string;
  result: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    slug: "nyx",
    title: "NYX",
    subtitle: "Identity & Event Production",
    year: "2023",
    client: "TLA Agency",
    industry: "Event Production",
    culture: "Urban Culture",
    location: "Berlin",
    coverImage: "/assets/jpgs/projects/nyx/nyx-cover.jpg",
    heroImage: "/assets/jpgs/projects/nyx/nyx-cover.jpg",
    description:
      "TLA Agency is a Berlin-based event production company specializing in large-scale cultural experiences that blend music, urban culture, and design. Operating primarily in the B2B space, the agency also offers marketing, gastronomy, and production services for high-impact events.",
    concept:
      "The brand concept was born from the idea of fusing commercial and collective energy — a metaphor for the intensity of concerts and festivals held by TLA. This concept took shape in a formal graphic system, inspired by their music and plays with symmetry, typology, simplicity, and cohesion. Creating an agile and effective tool for building a memorable brand in any space that the events and entertainment industry.",
    quote:
      "The new identity had to show that TLA doesn't just produce events—it builds cultural movements with strategic insight.",
    quoteAuthor: "Creative Director",
    details: [
      "We designed a visual language that captures the physical and emotional impact of unforgettable events.",
      "The result is a bold, strategic, and highly articulated identity that positions TLA as one of the most relevant forces in the events industry.",
    ],
    challenge:
      "Create a brand identity that reflects the energy and scale of large cultural events while maintaining professionalism for B2B clients.",
    solution:
      "Developed a bold graphic system with strong typography and dynamic visual elements that can adapt across different event scales and contexts.",
    result:
      "A cohesive brand identity that successfully positions TLA as a premium event production agency in the competitive Berlin market.",
  },
  {
    id: 2,
    slug: "dona-varda",
    title: "DONA VARDA",
    subtitle: "Restaurant Branding",
    year: "2023",
    client: "Dona Varda Restaurant",
    industry: "Food & Beverage",
    culture: "Traditional",
    location: "São Paulo",
    coverImage: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
    heroImage: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
    description:
      "Dona Varda is a traditional Brazilian restaurant that celebrates authentic flavors and family recipes passed down through generations. The establishment focuses on creating memorable dining experiences that honor Brazilian culinary heritage.",
    concept:
      "TLA Agency is a Germany-based event company that produces concerts, festivals, and large-scale cultural experiences. Founded by Toby Liebchen, the agency also offers design, marketing, and technical support services for high-level productions. The goal of this project was to build a bold, modern, and functional visual identity that positions the brand as a key player in the live events and entertainment industry",
    quote:
      "We wanted to create a brand that feels like coming home to grandmother's kitchen.",
    quoteAuthor: "Restaurant Owner",
    details: [
      "Developed a comprehensive brand system including logo, typography, and color palette.",
      "Created packaging design and restaurant collateral that enhances the dining experience.",
    ],
    challenge:
      "One of the main creative challenges was balancing cultural and urban appeal with the structure and clarity expected by major sponsors and institutional partners. The brand needed to express creativity, while also signaling professionalism and strategic thinking. To do that, we conducted an in-depth market analysis covering over 15 competitors across Germany and Europe, identifying recurring patterns, visual codes, and areas of opportunity.",
    solution:
      "The visual concept was born from the idea of human concentration and collective energy — a metaphor for the intensity of concerts and festivals led by TLA. This concept took shape in a dotted graphic system, inspired by heat maps and digital flows, symbolizing audience presence and the brand’s power to ignite experiences. A brutalist typographic approach combined with a minimal palette of black, white, and red reinforces the contrast between chaos and control — two central elements in the agency’s work.",
    result:
      "Successful brand launch that has helped establish Dona Varda as a beloved local dining destination.",
  },
  {
    id: 3,
    slug: "thiber",
    title: "THIBER",
    subtitle: "Tech Startup Branding",
    year: "2023",
    client: "Thiber Technologies",
    industry: "Technology",
    culture: "Innovation",
    location: "Remote",
    coverImage: "/assets/jpgs/projects/thiber/thiber-cover.jpg",
    heroImage: "/assets/jpgs/projects/thiber/thiber-cover.jpg",
    description:
      "Thiber is an innovative technology startup focused on developing cutting-edge solutions for digital transformation. The company specializes in creating scalable platforms that help businesses adapt to the digital age.",
    concept:
      "The brand identity reflects innovation, reliability, and forward-thinking. We developed a clean, modern aesthetic that communicates technical expertise while remaining approachable and human-centered.",
    quote:
      "Thiber's identity needed to convey both technical excellence and human accessibility.",
    quoteAuthor: "Brand Strategist",
    details: [
      "Created a flexible brand system that works across digital and physical touchpoints.",
      "Developed comprehensive brand guidelines for consistent application across all platforms.",
    ],
    challenge:
      "Create a distinctive identity in the crowded tech space that builds trust with enterprise clients.",
    solution:
      "Designed a sophisticated yet approachable brand that emphasizes innovation and reliability.",
    result:
      "Strong brand foundation that supports Thiber's growth in the competitive technology market.",
  },
  {
    id: 4,
    slug: "bike",
    title: "BIKE",
    subtitle: "Cycling Brand Identity",
    year: "2023",
    client: "Urban Cycles Co.",
    industry: "Sports & Recreation",
    culture: "Urban Mobility",
    location: "Amsterdam",
    coverImage: "/assets/jpgs/projects/bike/bike-cover.jpg",
    heroImage: "/assets/jpgs/projects/bike/bike-cover.jpg",
    description:
      "Urban Cycles Co. is a premium bicycle manufacturer focused on creating sustainable urban transportation solutions. The company specializes in electric bikes and smart cycling accessories for modern city dwellers.",
    concept:
      "The brand concept centers around the intersection of sustainability, technology, and urban lifestyle. We developed a visual identity that communicates innovation while celebrating the timeless appeal of cycling culture.",
    quote:
      "We needed a brand that speaks to both cycling enthusiasts and tech-savvy urbanites.",
    quoteAuthor: "Founder & CEO",
    details: [
      "Created a dynamic logo system that adapts to different product lines and applications.",
      "Developed sustainable packaging solutions that reinforce the brand's environmental commitment.",
    ],
    challenge:
      "Differentiate in the competitive cycling market while appealing to diverse customer segments.",
    solution:
      "Designed a flexible brand system that balances heritage cycling aesthetics with modern technology elements.",
    result:
      "Successful product launch with strong brand recognition in the urban mobility sector.",
  },
  {
    id: 5,
    slug: "mobile-app",
    title: "MOBILE APP",
    subtitle: "FinTech App Design",
    year: "2023",
    client: "PayFlow Solutions",
    industry: "Financial Technology",
    culture: "Digital Finance",
    location: "London",
    coverImage: "/assets/jpgs/projects/mobile-app/mobile-app-cover.jpg",
    heroImage: "/assets/jpgs/projects/mobile-app/mobile-app-cover.jpg",
    description:
      "PayFlow is a revolutionary mobile payment platform that simplifies financial transactions for small businesses and freelancers. The app provides comprehensive tools for invoicing, payment processing, and financial management.",
    concept:
      "The design philosophy focuses on simplicity, security, and user empowerment. We created an intuitive interface that makes complex financial operations accessible to users regardless of their technical expertise.",
    quote:
      "The app needed to feel as secure as a bank but as simple as sending a text message.",
    quoteAuthor: "Product Manager",
    details: [
      "Designed a comprehensive UI/UX system with over 100 screens and components.",
      "Implemented advanced security features while maintaining user-friendly interactions.",
    ],
    challenge:
      "Create an intuitive financial app that builds trust while simplifying complex transactions.",
    solution:
      "Developed a clean, security-focused interface with clear visual hierarchy and seamless user flows.",
    result:
      "App achieved 50,000+ downloads in the first quarter with 4.8-star rating on app stores.",
  },
  {
    id: 6,
    slug: "bagby",
    title: "BAGBY",
    subtitle: "Fashion Brand Identity",
    year: "2023",
    client: "Bagby Fashion House",
    industry: "Fashion & Lifestyle",
    culture: "Contemporary Fashion",
    location: "Milan",
    coverImage: "/assets/jpgs/projects/bagby/bagby-cover.jpg",
    heroImage: "/assets/jpgs/projects/bagby/bagby-cover.jpg",
    description:
      "Bagby is a contemporary fashion brand that creates timeless pieces for the modern professional. The brand focuses on sustainable materials and ethical production practices while delivering sophisticated designs.",
    concept:
      "The brand identity embodies minimalist elegance with a focus on craftsmanship and sustainability. We developed a visual language that communicates quality, sophistication, and environmental consciousness.",
    quote:
      "Bagby represents the future of fashion—beautiful, responsible, and timeless.",
    quoteAuthor: "Creative Director",
    details: [
      "Created a cohesive brand system spanning digital and physical touchpoints.",
      "Developed sustainable packaging solutions that reflect the brand's environmental values.",
    ],
    challenge:
      "Position a new fashion brand in the competitive luxury market while emphasizing sustainability.",
    solution:
      "Designed an elegant, minimalist identity that communicates premium quality and environmental responsibility.",
    result:
      "Successful brand launch with strong market presence and positive sustainability recognition.",
  },
  {
    id: 7,
    slug: "beynum",
    title: "BEYNUM",
    subtitle: "Creative Agency Branding",
    year: "2022",
    client: "Beynum Creative Studio",
    industry: "Creative Services",
    culture: "Contemporary Design",
    location: "Barcelona",
    coverImage: "/assets/jpgs/projects/beynum/beynum-cover.jpg",
    heroImage: "/assets/jpgs/projects/beynum/beynum-cover.jpg",
    description:
      "Beynum is a multidisciplinary creative studio specializing in brand identity, digital design, and strategic communications. The studio works with forward-thinking companies to create impactful visual solutions.",
    concept:
      "The brand concept celebrates creative exploration and strategic thinking. We developed a dynamic identity system that reflects the studio's versatility while maintaining strong visual coherence.",
    quote:
      "Our identity needed to showcase creativity while demonstrating strategic depth.",
    quoteAuthor: "Studio Director",
    details: [
      "Created a flexible visual system that adapts to different creative disciplines.",
      "Developed a comprehensive portfolio presentation system for client engagement.",
    ],
    challenge:
      "Create a distinctive identity for a creative agency in a saturated market.",
    solution:
      "Designed a bold, adaptable brand system that showcases creativity while maintaining professional credibility.",
    result:
      "Enhanced studio recognition leading to partnerships with major international brands.",
  },
  {
    id: 8,
    slug: "mobile-app-2",
    title: "MOBILE APP 2",
    subtitle: "Health & Wellness App",
    year: "2023",
    client: "WellBeing Tech",
    industry: "Health Technology",
    culture: "Wellness",
    location: "San Francisco",
    coverImage: "/assets/jpgs/projects/mobile-app-2/mobile-app-2-cover.jpg",
    heroImage: "/assets/jpgs/projects/mobile-app-2/mobile-app-2-cover.jpg",
    description:
      "WellBeing is a comprehensive health and wellness platform that connects users with personalized fitness routines, nutrition guidance, and mental health resources. The app uses AI to create customized wellness plans.",
    concept:
      "The design approach emphasizes calm, motivation, and personal growth. We created an interface that feels supportive and encouraging while providing powerful tracking and analytics capabilities.",
    quote:
      "We wanted users to feel empowered and supported on their wellness journey.",
    quoteAuthor: "UX Director",
    details: [
      "Designed an intuitive dashboard that makes complex health data accessible and actionable.",
      "Created a motivational reward system that encourages consistent healthy habits.",
    ],
    challenge:
      "Design a health app that motivates users without overwhelming them with data.",
    solution:
      "Developed a balanced interface that presents information clearly while maintaining a calm, supportive atmosphere.",
    result:
      "App has helped over 100,000 users achieve their wellness goals with 89% user retention rate.",
  },
  {
    id: 9,
    slug: "tavros",
    title: "TAVROS",
    subtitle: "Hospitality Brand Identity",
    year: "2022",
    client: "Tavros Hospitality Group",
    industry: "Hospitality",
    culture: "Modern Luxury",
    location: "Athens",
    coverImage: "/assets/jpgs/projects/tavros/tavros-cover.jpg",
    heroImage: "/assets/jpgs/projects/tavros/tavros-cover.jpg",
    description:
      "Tavros is a luxury hospitality group that operates boutique hotels and restaurants across the Mediterranean. The brand focuses on authentic local experiences while providing world-class service and amenities.",
    concept:
      "The brand identity draws inspiration from Mediterranean culture and modern hospitality trends. We created a sophisticated visual language that communicates luxury while honoring local traditions and craftsmanship.",
    quote:
      "Tavros needed to feel both globally sophisticated and authentically Mediterranean.",
    quoteAuthor: "Brand Manager",
    details: [
      "Developed a comprehensive brand system for multiple properties and dining concepts.",
      "Created location-specific adaptations that maintain brand coherence while celebrating local culture.",
    ],
    challenge:
      "Create a unified luxury brand that adapts to different Mediterranean locations and cultures.",
    solution:
      "Designed a flexible brand architecture that maintains luxury standards while allowing for local customization.",
    result:
      "Successful expansion across three countries with consistent brand recognition and guest satisfaction.",
  },
  {
    id: 10,
    slug: "kampeki",
    title: "KAMPEKI",
    subtitle: "Automotive Brand Design",
    year: "2023",
    client: "Kampeki Motors",
    industry: "Automotive",
    culture: "Performance",
    location: "Tokyo",
    coverImage: "/assets/jpgs/projects/kampeki/kampeki-cover.jpg",
    heroImage: "/assets/jpgs/projects/kampeki/kampeki-cover.jpg",
    description:
      "Kampeki is a high-performance automotive tuning company that specializes in customizing sports cars for racing enthusiasts. The company combines traditional Japanese craftsmanship with cutting-edge technology.",
    concept:
      "The brand concept merges precision, performance, and Japanese design philosophy. We developed a bold visual identity that communicates technical excellence and racing heritage.",
    quote:
      "Every Kampeki vehicle represents the perfect balance of tradition and innovation.",
    quoteAuthor: "Master Technician",
    details: [
      "Created a technical visual language that appeals to both racing professionals and enthusiasts.",
      "Developed branded merchandise and racing team identity systems.",
    ],
    challenge:
      "Position a tuning company as a premium brand in the competitive automotive performance market.",
    solution:
      "Designed a sophisticated identity that emphasizes craftsmanship, precision, and racing pedigree.",
    result:
      "Established Kampeki as a premium brand with partnerships in professional racing circuits.",
  },
  {
    id: 11,
    slug: "finance",
    title: "FINANCE",
    subtitle: "Investment Platform Branding",
    year: "2023",
    client: "SecureWealth Investments",
    industry: "Financial Services",
    culture: "Investment",
    location: "New York",
    coverImage: "/assets/jpgs/projects/finance/finance-cover.jpg",
    heroImage: "/assets/jpgs/projects/finance/finance-cover.jpg",
    description:
      "SecureWealth is a digital investment platform that democratizes access to professional-grade investment tools and strategies. The platform serves both individual investors and financial advisors.",
    concept:
      "The brand identity emphasizes trust, growth, and accessibility. We created a professional yet approachable visual language that makes complex financial concepts feel accessible to a broader audience.",
    quote:
      "We needed to build trust while making investing feel approachable for everyone.",
    quoteAuthor: "Chief Marketing Officer",
    details: [
      "Designed a comprehensive digital platform interface with advanced data visualization capabilities.",
      "Created educational content systems that simplify complex investment concepts.",
    ],
    challenge:
      "Build trust in a new financial platform while making investing accessible to non-professional investors.",
    solution:
      "Developed a clean, trustworthy brand identity with clear information hierarchy and user-friendly interfaces.",
    result:
      "Platform launched with $50M in assets under management within the first six months.",
  },
  {
    id: 12,
    slug: "omega",
    title: "OMEGA",
    subtitle: "Luxury Watch Brand Identity",
    year: "2022",
    client: "Omega Timepieces",
    industry: "Luxury Goods",
    culture: "Swiss Heritage",
    location: "Geneva",
    coverImage: "/assets/jpgs/projects/omega/omega-cover.jpg",
    heroImage: "/assets/jpgs/projects/omega/omega-cover.jpg",
    description:
      "Omega represents the pinnacle of Swiss watchmaking tradition, creating precision timepieces that combine heritage craftsmanship with modern innovation. Each watch embodies centuries of horological expertise.",
    concept:
      "The brand identity celebrates the intersection of tradition and innovation in Swiss watchmaking. We developed a timeless visual language that communicates precision, luxury, and heritage craftsmanship.",
    quote:
      "An Omega watch represents more than time—it represents a legacy of precision and excellence.",
    quoteAuthor: "Master Watchmaker",
    details: [
      "Created premium packaging and presentation systems that enhance the luxury experience.",
      "Developed a comprehensive retail environment design that showcases the brand's heritage and craftsmanship.",
    ],
    challenge:
      "Modernize a heritage luxury brand while preserving its traditional appeal and prestige.",
    solution:
      "Designed a refined brand system that honors Swiss watchmaking tradition while appealing to contemporary luxury consumers.",
    result:
      "Strengthened brand position in the luxury watch market with increased international recognition.",
  },
  {
    id: 13,
    slug: "universo-sugar",
    title: "UNIVERSO SUGAR",
    subtitle: "Confectionery Brand Design",
    year: "2023",
    client: "Universo Sugar Co.",
    industry: "Food & Confectionery",
    culture: "Sweet Treats",
    location: "Buenos Aires",
    coverImage: "/assets/jpgs/projects/universo-sugar/universo-sugar-cover.jpg",
    heroImage: "/assets/jpgs/projects/universo-sugar/universo-sugar-cover.jpg",
    description:
      "Universo Sugar is an artisanal confectionery company that creates premium chocolates and sweets using traditional South American recipes and techniques. The brand focuses on natural ingredients and sustainable sourcing.",
    concept:
      "The brand concept celebrates the joy and craftsmanship of artisanal confectionery. We developed a playful yet sophisticated visual identity that communicates quality while evoking the pleasure of indulgent treats.",
    quote:
      "Every piece tells a story of tradition, craftsmanship, and pure joy.",
    quoteAuthor: "Head Chocolatier",
    details: [
      "Created distinctive packaging designs for different product lines and seasonal collections.",
      "Developed a retail experience design that showcases the artisanal production process.",
    ],
    challenge:
      "Position an artisanal confectionery brand in the competitive premium sweets market.",
    solution:
      "Designed a distinctive brand identity that communicates craftsmanship and quality while maintaining playful appeal.",
    result:
      "Successful expansion to five countries with strong brand recognition in the premium confectionery segment.",
  },
  {
    id: 14,
    slug: "fram-way",
    title: "FRAM WAY",
    subtitle: "Architecture Firm Branding",
    year: "2022",
    client: "Fram Way Architects",
    industry: "Architecture",
    culture: "Modern Design",
    location: "Copenhagen",
    coverImage: "/assets/jpgs/projects/fram-way/fram-way-cover.jpg",
    heroImage: "/assets/jpgs/projects/fram-way/fram-way-cover.jpg",
    description:
      "Fram Way is a progressive architecture firm specializing in sustainable design and innovative building solutions. The firm is known for creating structures that harmonize with their environment while pushing the boundaries of modern architecture.",
    concept:
      "The brand identity reflects architectural precision and environmental consciousness. We developed a clean, structural visual language that communicates the firm's commitment to sustainable innovation and design excellence.",
    quote:
      "Architecture should enhance both human experience and environmental harmony.",
    quoteAuthor: "Principal Architect",
    details: [
      "Created a comprehensive brand system that works across architectural presentations and marketing materials.",
      "Developed technical drawing templates and project documentation systems that reinforce brand identity.",
    ],
    challenge:
      "Differentiate an architecture firm in a competitive market while emphasizing sustainability credentials.",
    solution:
      "Designed a sophisticated brand identity that communicates both architectural expertise and environmental responsibility.",
    result:
      "Increased project inquiries by 200% and won three sustainability design awards in the first year.",
  },
];

// Função para buscar projeto por slug
export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectsData.find((project) => project.slug === slug);
};

// Função para buscar todos os slugs (para static generation)
export const getAllProjectSlugs = (): string[] => {
  return projectsData.map((project) => project.slug);
};
