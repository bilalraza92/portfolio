import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiGreensock,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiHtml5,
  SiCss,
  SiBootstrap,
  Si99Designs,
  SiWebtrees,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaCode,
  FaLayerGroup,
  FaRocket,
  FaShop,
  FaGauge,
  FaMobileScreen,
  FaBug,
  FaChartLine,
  FaPlug,
  FaFire,
  FaLaptopCode,
} from "react-icons/fa6";

import type {
  NavLink,
  SocialLink,
  SkillGroup,
  Service,
  Project,
  ExperienceItem,
  EducationItem,
  Testimonial,
  Stat,
} from "@/types";

export const SITE = {
  name: "Bilal Raza",
  role: "Web Developer",
  tagline: "I build fast, elegant, production-ready web experiences.",
  location: "Karachi, Pakistan",
  email: "bilalrazaarif@gmail.com",
  phone: "+92 3083101019",
  whatsapp: "https://wa.me/923083101019",
  domain: "https://bilalraza.dev",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/bilalraza92  ", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bilal-raza-842a36420/?skipRedirect=true", icon: FaLinkedinIn },
  { label: "WhatsApp", href: "https://wa.me/923001234567", icon: FaWhatsapp },
  { label: "Email", href: "https://bilalrazaarif@gmail.com", icon: FaEnvelope },
];

export const TYPING_ROLES = [
  "Web Developer",
  "Next.js Engineer",
  "React Specialist",
  "UI/UX Focused Builder",
];

export const STATS: Stat[] = [
  { label: "Years of Experience", value: 1, suffix: "+" },
  { label: "Projects Completed", value: 40, suffix: "+" },
  { label: "Happy Clients", value: 25, suffix: "+" },
  { label: "Cups of Coffee", value: 500, suffix: "+" },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, level: 88 },
      { name: "CSS", icon: SiCss, level: 90 },
      { name: "UIUX", icon: SiWebtrees, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 70 },
      { name: "TypeScript", icon: SiTypescript, level: 50 },
      { name: "React", icon: SiReact, level: 85 },
      { name: "Next.js", icon: SiNextdotjs, level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 96 },
      { name: "Bootstrap", icon: SiBootstrap , level: 96 },
      { name: "GSAP", icon: SiGreensock, level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 70 },
      { name: "Express", icon: SiExpress, level: 60 },
      { name: "MongoDB", icon: SiMongodb, level: 72 },
      { name: "Firebase", icon: SiFirebase, level: 70 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit, level: 92 },
      { name: "GitHub", icon: SiGithub, level: 92 },
      { name: "Figma", icon: SiFigma, level: 80 },
      { name: "VS Code", icon: VscVscode, level: 98 },
      { name: "Vercel", icon: SiVercel, level: 70 },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    title: "Modern Website Development",
    description:
      "Pixel-perfect, high-performance websites built with modern tooling and best practices.",
    icon: FaLaptopCode,
    features: ["Custom design", "Clean architecture", "SEO ready"],
  },
  {
    title: "Next.js Development",
    description:
      "Production-grade Next.js applications with server components and optimal rendering strategies.",
    icon: SiNextdotjs,
    features: ["App Router", "Server Components", "Edge ready"],
  },
  {
    title: "React Development",
    description:
      "Reusable, scalable React component systems with clean state management.",
    icon: SiReact,
    features: ["Component libraries", "Hooks & context", "Testing"],
  },
  {
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages with premium animation and copy that sells.",
    icon: FaRocket,
    features: ["High conversion", "A/B ready", "Fast load"],
  },
  {
    title: "Dashboard Development",
    description:
      "Data-rich admin dashboards with charts, tables, and real-time updates.",
    icon: FaChartLine,
    features: ["Data visualization", "Role-based access", "Real-time data"],
  },
  {
    title: "E-commerce Development",
    description:
      "Full-featured online stores with secure checkout and inventory management.",
    icon: FaShop,
    features: ["Cart & checkout", "Payment gateways", "Admin panel"],
  },
  {
    title: "API Integration",
    description:
      "Robust integration of third-party and custom REST/GraphQL APIs.",
    icon: FaPlug,
    features: ["REST & GraphQL", "Auth flows", "Error handling"],
  },
  {
    title: "Firebase Integration",
    description:
      "Authentication, real-time database, and cloud functions powered by Firebase.",
    icon: SiFirebase,
    features: ["Auth & security rules", "Firestore", "Cloud functions"],
  },
  {
    title: "Website Optimization",
    description:
      "Core Web Vitals, bundle size, and rendering optimization for blazing speed.",
    icon: FaGauge,
    features: ["Lighthouse 90+", "Image optimization", "Code splitting"],
  },
  {
    title: "Responsive Design",
    description:
      "Interfaces that feel native on every screen, from mobile to ultra-wide.",
    icon: FaMobileScreen,
    features: ["Mobile first", "Fluid layouts", "Cross-browser"],
  },
  
];

export const PROJECTS: Project[] = [
  {
    id: "bloom-ecommerce",
    title: "Bloom E-commerce Website",
    description:
      "A full-featured flower & gift e-commerce platform with cart, checkout, and an admin dashboard.",
    image: "/projects/bloom.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Next.js",
    status: "Live",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "coffee-website",
    title: "Coffee Website",
    description:
      "An animated marketing site for a specialty coffee brand with rich scroll interactions.",
    image: "/projects/coffee.jpg",
    tech: ["React", "Framer Motion"],
    category: "React",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ai-landing-page",
    title: "AI Landing Page",
    description:
      "A conversion-focused SaaS landing page for an AI product with animated gradients.",
    image: "/projects/ai-landing.jpg",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Next.js",
    status: "Live",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "business-website",
    title: "Business Website",
    description:
      "A corporate multi-page website with services, team, and case study sections.",
    image: "/projects/business.jpg",
    tech: ["Next.js", "TypeScript"],
    category: "Next.js",
    status: "Live",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A minimal single-page portfolio template for creatives, built for speed.",
    image: "/projects/portfolio.jpg",
    tech: ["React", "JavaScript"],
    category: "React",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "tic-tac",
    title: "Tic Tac ",
    description:
      "A polished two-player Tic Tac Toe game with win detection and smooth transitions.",
    image: "/projects/tictactoe.jpg",
    tech: ["JavaScript", "React"],
    category: "JavaScript",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "calculator",
    title: "Calculator",
    description:
      "A keyboard-accessible calculator app with a clean, tactile interface.",
    image: "/projects/calculator.jpg",
    tech: ["JavaScript"],
    category: "JavaScript",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "stopwatch",
    title: "Stopwatch",
    description:
      "A lap-tracking stopwatch app with millisecond precision and local storage history.",
    image: "/projects/stopwatch.jpg",
    tech: ["JavaScript"],
    category: "JavaScript",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Freelance Web Developer",
    organization: "Self-employed",
    period: "2026 — Present",
    description:
      "Designing and building production Next.js applications for clients across e-commerce, SaaS, and business sectors.",
    type: "work",
  },
  {
    id: "exp-2",
    title: "Frontend Developer Intern",
    organization: "Local Software House",
    period: " 2025",
    description:
      "Built and maintained React component libraries and collaborated on dashboard products.",
    type: "work",
  },
  {
    id: "exp-3",
    title: "Advanced React & Next.js",
    organization: "Self-taught / Online Courses",
    period: "2025",
    description:
      "Deep dive into server components, animation libraries (GSAP, Framer Motion), and performance tuning.",
    type: "learning",
  },
  {
    id: "exp-4",
    title: "Started Web Development",
    organization: "SMIT — Saylani Mass IT Training",
    period: "2024",
    description:
      "Learned the foundations of HTML, CSS, JavaScript, and modern frontend frameworks.",
    type: "learning",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    institution: "SMIT — Saylani Mass IT Training",
    program: "Web & App Development",
    period: "2024 — 2025",
    description:
      "Comprehensive program covering frontend, backend, and full-stack web & app development fundamentals.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Malik",
    role: "Founder, Bloom Co.",
    feedback:
      "Bilal rebuilt our storefront from scratch and it completely transformed our conversion rate. Communication was excellent throughout.",
    avatar: "/images/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: "t2",
    name: "Bilal Khan",
    role: "Product Manager, Nimbus",
    feedback:
      "One of the most reliable developers I've worked with. The dashboard he built is fast, clean, and exactly what we asked for.",
    avatar: "/images/testimonial-2.jpg",
    rating: 5,
  },
  {
    id: "t3",
    name: "Hina Sheikh",
    role: "Creative Director",
    feedback:
      "The animations and attention to detail on our landing page were beyond what we expected. Truly award-worthy work.",
    avatar: "/images/testimonial-3.jpg",
    rating: 5,
  },
];

export const CONTACT_INFO = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, icon: FaEnvelope },
  { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}`, icon: FaPhone },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: SITE.whatsapp, icon: FaWhatsapp },
  { label: "Location", value: SITE.location, href: "#", icon: FaLocationDot },
];

export const PROJECT_FILTERS: Array<"All" | "React" | "Next.js" | "JavaScript"> = [
  "All",
  "React",
  "Next.js",
  "JavaScript",
];

export const MISC_ICONS = { FaCode, FaLayerGroup, FaFire };
