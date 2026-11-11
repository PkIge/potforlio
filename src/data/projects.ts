import imageManifest from "./project-images.json";

export type ProjectImage = { src: string; width: number; height: number; alt: string };

export type Project = {
  slug: string;
  name: string;
  /** Short label used in carousel titles, e.g. "PROJECT 1 : SAGE". */
  shortName: string;
  tagline: string;
  description: string[];
  categories: string[];
  role?: string;
  org?: string;
  url?: string;
  urlLabel?: string;
  /** Date the entry was added to the source portfolio (ISO). */
  added: string;
  images: ProjectImage[];
  /** "in-development" entries show as a reserved slot with details on request. */
  status?: "in-development";
  /** Game Design Document outline for gaming case studies. */
  gdd?: { title: string; summary: string }[];
};

const images = imageManifest as Record<string, ProjectImage[]>;
const imagesFor = (slug: string): ProjectImage[] => images[slug] ?? [];

const split = (text: string) => text.split(/\n+/).map((s) => s.trim()).filter(Boolean);

export const projects: Project[] = [
  {
    slug: "sage",
    name: "Sage",
    shortName: "Sage",
    tagline: "Operations web app for Tekkas Store and Azar Payments",
    description: split(
      "Sage is the admin and operations backend I helped redesign to power Tekkas Store and Azar Payments. I rebuilt its structure from scratch after inheriting a buggy codebase, prioritizing core modules like dashboard, customer management, user oversight, and reporting, while scoping future features such as payments, communication, and fraud detection. Sage provided full visibility into transactions and user activity, and served as the control center for managing Azar's repayment and eligibility flows. This gave me direct experience in designing and stabilizing a financial admin system, balancing product needs, operational efficiency, and compliance requirements.",
    ),
    categories: [
      "Business Development",
      "Financial Technology",
      "Fraud Detection",
      "Product Launch and Operations",
      "User Role Management",
      "E-commerce",
      "Inventory Management",
      "Operations",
    ],
    role: "Growth Product Manager",
    org: "Tekkas Store",
    added: "2025-08-30",
    images: imagesFor("sage"),
  },
  {
    slug: "gaming-case-study",
    name: "Gaming Case Study",
    shortName: "Gaming",
    tagline: "Gamification and game design, documented as a Game Design Document",
    description: [
      "A reserved slot for my gaming and gamification work. The case study is written up as a Game Design Document (GDD): concept, player motivation, core loop, progression, economy and the metrics that prove it works.",
      "The full document is shared in private conversation. Reach out and I will walk you through it.",
    ],
    categories: ["Gamification", "Game Design", "Player Motivation", "Progression Systems", "Product Metrics"],
    role: "Product & Game Designer",
    added: "2026-11-11",
    images: [],
    status: "in-development",
    gdd: [
      { title: "Concept & vision", summary: "The one-line pitch, the fantasy the player is buying into and the design pillars." },
      { title: "Target players & motivation", summary: "Who plays, why they return and which motivation loops the design leans on." },
      { title: "Core loop & mechanics", summary: "The minute-to-minute actions, the rules that make them interesting and the feedback that makes them feel good." },
      { title: "Progression & difficulty", summary: "How challenge ramps, what unlocks and how mastery is signalled." },
      { title: "Economy & rewards", summary: "Currencies, sinks and sources, reward schedules and anti-exploit guardrails." },
      { title: "Gamification hooks", summary: "Streaks, badges, leaderboards and social proof, and when each one is appropriate." },
      { title: "Metrics & success criteria", summary: "Retention, session depth, completion and the experiments that validate each hypothesis." },
      { title: "Technical approach", summary: "Platform, engine or stack choices, telemetry and the prototype plan." },
    ],
  },
  {
    slug: "tekkas-azar",
    name: "Azar Payments",
    shortName: "Azar Payments",
    tagline: "Embedded flexible payments (BNPL) inside Tekkas Store",
    description: split(
      "Azar is an embedded flexible payments (BNPL) solution I helped build inside Tekkas Store, enabling verified users to split payments seamlessly. I worked on its structure, positioning, and integration, covering eligibility, repayment flows, gateway connections, and compliance-friendly messaging.\nTekkas Store served as the launch platform, giving me end-to-end experience in designing and operationalizing a payments product from checkout to admin oversight and growth metrics.",
    ),
    categories: [
      "Artificial Intelligence",
      "Automation",
      "Business Development",
      "Financial Technology",
      "Product Launch and Operations",
      "UA Testing",
      "E-commerce",
      "Partnerships",
    ],
    role: "Growth Product Manager",
    org: "Tekkas Store",
    url: "https://tekkasstore.com/",
    urlLabel: "tekkasstore.com",
    added: "2025-08-30",
    images: imagesFor("tekkas-azar"),
  },
  {
    slug: "the-move",
    name: "The Move & The Move Business",
    shortName: "The Move",
    tagline: "Nightlife discovery app and venue operations platform",
    description: split(
      "The Move is a U.S.-based nightlife and entertainment discovery app helping users find events, clubs, and lounges; purchase tickets; reserve tables; order in-venue services; and connect socially. Designed for convenience, discovery, and connection, The Move delivers a seamless end-to-end nightlife experience.\nThe Move Business (TMB) is the companion platform for venue owners and organizers to publish events, manage bookings, sell tickets, and track sales. TMB enables efficient operations, covering profiles, payments, guest entry scanning, and promotions, while driving customer acquisition through The Move consumer app.",
    ),
    categories: ["Customer Research", "Entertainment", "Nightlife", "Product Launch and Operations"],
    role: "Product Manager and Tutor",
    url: "https://main.d2qmlv0roaoduu.amplifyapp.com/",
    urlLabel: "Live app",
    added: "2025-08-30",
    images: imagesFor("the-move"),
  },
  {
    slug: "enoverlab",
    name: "EnoverLab",
    shortName: "EnoverLab",
    tagline: "Training the next generation of African product managers",
    description: split(
      "EnoverLab is an educational startup dedicated to transforming Africa through innovative products and education. Focused on nurturing the next generation of product managers, EnoverLab offers comprehensive training programs that cover everything from product management fundamentals to advanced techniques. By equipping individuals with the skills needed to build and manage impactful products, EnoverLab is driving growth and innovation across the continent, one product at a time.",
    ),
    categories: ["Education"],
    role: "Product Manager and Tutor",
    url: "https://enoverlab.com/",
    urlLabel: "enoverlab.com",
    added: "2025-01-21",
    images: imagesFor("enoverlab"),
  },
  {
    slug: "tropicmed",
    name: "TropicMed",
    shortName: "TropicMed",
    tagline: "Healthcare platform with patient and doctor onboarding",
    description: [
      "TropicMed is a healthcare platform with separate journeys for patients and doctors. The screens below cover the landing page, sign in, user type selection and doctor registration.",
    ],
    categories: ["Business Development", "Product Management"],
    role: "Product Manager",
    added: "2025-01-21",
    images: imagesFor("tropicmed"),
  },
  {
    slug: "simservers",
    name: "Simservers.io",
    shortName: "Simservers.io",
    tagline: "Proprietary USSD automation for airtime and data",
    description: split(
      "Simservers.io is an advanced automation platform that simplifies and accelerates USSD transactions using proprietary technology. Designed for businesses and developers, it automates airtime and data top-ups, ensuring faster and more reliable operations. With a companion app for easy management and real-time monitoring, Simservers.io empowers users to streamline mobile service delivery and scale their businesses efficiently. It's the ultimate solution for automating USSD workflows and enhancing transaction speed and convenience.",
    ),
    categories: ["Automation", "Financial Technology", "Mobile Application", "Software Development"],
    role: "Product Manager",
    url: "https://simservers.io/",
    urlLabel: "simservers.io",
    added: "2025-01-20",
    images: imagesFor("simservers"),
  },
  {
    slug: "pmc-sms",
    name: "PMC SMS",
    shortName: "PMC SMS",
    tagline: "Bulk and personalised messaging across SMS, email and WhatsApp",
    description: split(
      "PMC SMS is a robust messaging platform designed to streamline personal and business communication. It enables users to send bulk and personalized messages across SMS, email, and WhatsApp, while offering advanced features like birthday schedulers, OTP services, and AI-powered retargeting. With tools for scheduling and managing communications efficiently, PMC SMS is ideal for individuals, business owners, and organizations needing cost-effective outreach solutions. The platform includes a mobile app for quick execution and a web app for comprehensive task management.",
    ),
    categories: ["Automation", "Branding", "Backend Development", "Software Development"],
    added: "2023-11-08",
    images: imagesFor("pmc-sms"),
  },
  {
    slug: "sme-cloud",
    name: "SME Cloud",
    shortName: "SME Cloud",
    tagline: "Cloud automation for bulk data purchases and VTU transactions",
    description: split(
      "SME Cloud is an automation platform designed to address the complexity of bulk data purchases from multiple ISPs and streamline VTU transactions for business owners. Leveraging USSD codes and cloud-based automation, it simplifies tedious processes while providing key features such as ISP communication automation, bulk data purchases, and service monitoring. With flexible monetization models and tools like sales analysis, auto-retry, and downtime notifications, SME Cloud empowers small businesses and developers to operate more efficiently and cost-effectively.",
    ),
    categories: [
      "Branding",
      "Business Development",
      "Logo Design",
      "Mobile Application",
      "Product Design",
      "Software Development",
    ],
    role: "Product Manager",
    added: "2023-11-08",
    images: imagesFor("sme-cloud"),
  },
  {
    slug: "dalens-ai",
    name: "Dalens AI",
    shortName: "Dalens AI",
    tagline: "AI-powered livestock monitoring for modern farms",
    description: split(
      "DalensAI is a startup delivering advanced agricultural technology, designed to revolutionize farm management. By harnessing the power of artificial intelligence, DalensAI offers innovative solutions for monitoring and optimizing the care of farm animals. It empowers farmers with real-time insights, predictive analytics, and efficient management tools to ensure healthier livestock and improved productivity.",
    ),
    categories: ["Artificial Intelligence", "Business Development", "Product Management", "Backend Development"],
    role: "Product Manager",
    url: "https://www.dalensai.com/",
    urlLabel: "dalensai.com",
    added: "2023-11-08",
    images: imagesFor("dalens-ai"),
  },
  {
    slug: "justpayng",
    name: "JustPayNG",
    shortName: "JustPayNG",
    tagline: "Payment platform built to simplify everyday transactions",
    description: split(
      "I supervised the development and design of JustPayNG, an innovative payment platform aimed at simplifying transactions for users. My role involved overseeing the integration of APIs to ensure seamless connectivity and functionality, as well as coordinating with designers and engineers to create an intuitive and user-friendly interface. By maintaining a clear vision for the platform and managing cross-functional collaboration, I ensured the delivery of a robust and efficient product. This project showcases my technical oversight, project management skills, and ability to bridge the gap between design and development for impactful results.",
    ),
    categories: ["Backend Development", "Frontend Development", "Software Development"],
    url: "https://justpayng.com/",
    urlLabel: "justpayng.com",
    added: "2023-11-08",
    images: imagesFor("justpayng"),
  },
  {
    slug: "kirapay",
    name: "KiraPay",
    shortName: "KiraPay",
    tagline: "Secure digital payments for businesses of every size",
    description: split(
      "KiraPay is a secure and user-friendly digital payment platform designed to simplify transactions for businesses of all sizes. With support for multiple payment methods, real-time transaction monitoring, and easy API integration, it empowers businesses to manage payments efficiently while reducing costs and operational bottlenecks. Perfect for SMEs, e-commerce platforms, and developers, KiraPay offers a reliable solution to scale and succeed in the digital economy.",
    ),
    categories: ["Mobile Application", "Backend Development", "Software Development"],
    url: "https://kirapay.ng/",
    urlLabel: "kirapay.ng",
    added: "2023-11-08",
    images: imagesFor("kirapay"),
  },
  {
    slug: "autobiz-smartplan",
    name: "Autobiz Smartplan",
    shortName: "Autobiz Smartplan",
    tagline: "Fast website delivery bundled with branding services",
    description: split(
      "I spearheaded the development of the business plan, marketing model, and pricing structure for this innovative package. This initiative focused on delivering high-quality websites at exceptional speeds while integrating branding services to create cohesive and visually appealing brand identities. I collaborated closely with designers and engineers to bring the concept to life, ensuring seamless execution and alignment with client needs. Additionally, I conceptualized and implemented basic advertising campaigns to help clients establish a strong presence and connect with their target audience effectively. This project highlights my ability to strategize, lead multidisciplinary teams, and deliver impactful solutions within tight timelines.",
    ),
    categories: ["Branding", "Business Development", "Packaging", "Product Design", "Software Development"],
    org: "CDLP Hub Limited",
    added: "2023-11-08",
    images: imagesFor("autobiz-smartplan"),
  },
  {
    slug: "autobiz-app",
    name: "Autobiz.app",
    shortName: "Autobiz.app",
    tagline: "API marketplace and business management platform",
    description: split(
      "Autobiz.app is a dual-purpose platform designed to accelerate digital solution development and streamline business management. As an API marketplace, it provides developers and business owners with predesigned APIs, enabling faster and more efficient creation of digital solutions. Additionally, Autobiz.app serves as a comprehensive management platform for handling all aspects of internal operations, offering tools for improved organization and productivity. It empowers businesses to innovate quickly while maintaining operational efficiency.",
    ),
    categories: [
      "Automation",
      "Financial Technology",
      "Mobile Application",
      "Backend Development",
      "Software Development",
    ],
    role: "Product Manager",
    url: "https://autobiz.app/",
    urlLabel: "autobiz.app",
    added: "2023-11-08",
    images: imagesFor("autobiz-app"),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectIndex = (slug: string) => projects.findIndex((p) => p.slug === slug);
