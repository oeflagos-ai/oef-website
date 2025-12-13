
import { NavItem, Project, TeamMember } from './types';

// ==========================================
// SITE CONTENT CONFIGURATION
// Edit the text below to change the website content.
// ==========================================

export const BRAND_NAME = "OLAGBAJUMO EDUCATION FOUNDATION";

// SVG Logo representation of the provided double-circle logo
export const LOGO_SRC = `data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23111111' stroke-width='10'/%3E%3Ccircle cx='50' cy='50' r='20' stroke='%23111111' stroke-width='10'/%3E%3C/svg%3E`;

// BACKGROUND IMAGE CONFIGURATION
// Paste a URL here (e.g., "https://example.com/image.jpg") to set a background image for the entire site.
// Leave empty "" to use the default geometric grid pattern.
export const SITE_BACKGROUND_IMAGE = "https://srm360.org/wp-content/uploads/2024/11/cirrus-clouds.jpg";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'O Studio', path: '/ostudio' },
  { label: 'Contact', path: '/contact' },
];

// HOME PAGE CONTENT
export const HOME_HERO_TEXT_1 = "MODERNISING";
export const HOME_HERO_TEXT_2 = "LEARNING, TOGETHER";
export const HOME_HERO_SUB = "Advancing education, research, and public engagement in areas critical to the future of educational systems.";

// PARTNERSHIPS PAGE CONTENT
export const PARTNERSHIPS_MARQUEE_TEXT = "Thank you for your patience. Partnerships will be announced shortly.";

// ABOUT PAGE CONTENT (Rediet Abebe Style Structure)
// "About" Sidebar Info
export const ABOUT_SIDEBAR_TITLE = "Our Mission";
export const ABOUT_SIDEBAR_SUMMARY = "The Olagbajumo Education Foundation removes barriers to knowledge acquisition by focusing on three key areas: study, projects, and refinement. We nurture a global community of lifelong learners.";

// "About" Main Content Sections
export const ABOUT_SECTIONS = [
  {
    title: "Vision",
    content: `Accessible, high-quality educational resources available to everyone, regardless of their geographic location or socioeconomic status. We believe that education is a powerful tool for sustainable development.`
  },
  {
    title: "Approach",
    content: `We collaborate with educators, technologists, and policymakers to build modern platforms, curate diverse curriculum, and support community-led learning initiatives. By leveraging technology, we will scale our impact globally. Our first initiative, Abigail Academy, addresses the United Nations (UN) Sustainable Development Goal (SDG)—Goal 4: Quality Education. We aim to ensure that our students can define who they are, identify their interests, and map out the vision that will enable them to secure their future.`
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Olafare Olagbaju",
    role: "Founder and Chairman",
    bio: "Systems thinker. Educator. Entrepreneur.",
    image: "/Olafare.jpg",
    // Use pipe '|' to separate lines vertically
    almaMater: "Xavier University '16 (BA, Liberal Arts) | Cornell University '23 (MPA)"
  },
  {
    name: "Ifeanyi Olagbaju",
    role: "Trustee",
    bio: "Educational advisor with 27 years of experience, including 15 years at EducationUSA.",
    image: "/Ifeanyi.jpg",
    // Use pipe '|' to separate lines vertically
    almaMater: "University of Jos '93 (BS, Business Administration) | Villanova University '09 (GCERT, HRM) | University of Sussex '23 (MA, Education)"
  }
];

// PROJECTS PAGE CONTENT (3 Slots as requested)
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Abigail Academy",
    description: "Building an institutional organism that enables learners to create feedback loops between the classroom and their external worlds. We lead with the question: “How can an educational institution create stronger mental models of understanding reality in students?” ",
    status: "Ongoing",
    image: "/project1.png",
    hideDetailsLink: true
  },
  {
       id: '2',
    title: "Academy Lunch and Learn",
    description: "A learning series transforming student perspectives on life outside school. This program connects students with professionals through a thematic, hour-long chat.",
    status: "Ongoing",
    image: "/project2.png",
    embedUrl: "https://player.vimeo.com/video/1129844678",
    hideDetailsLink: true
  },
  {
    id: '3',
    title: "Project Saber",
    description: "In Project Saber, we research how technology can play a key role in learning and make processes engaging and playful.",
    status: "Ongoing",
    image: "/project3.png",
    hideDetailsLink: true, // Hidden as requested, access via hidden 'key' link
    embedUrl: "",
    link: "#/saber",
    linkText: "View Pitch Deck" // Custom text for this project
  }
];

// ==========================================
// SABER DECK DATA (EDITABLE GRAPHICS)
// ==========================================

export const SABER_DECK_DATA = {
  // Financials Table Data
  financials: [
    { period: "Mo 3–6", activity: "MVP + Soft Pilots", rev: "$0", burn: "~$7k/mo", highlight: false },
    { period: "Mo 6–9", activity: "Early Revenue", rev: "$12k–25k", burn: "~$8k/mo", highlight: true },
    { period: "Mo 9–12", activity: "NGO Programs", rev: "+$20k–40k", burn: "~$9k/mo", highlight: true },
    { period: "Mo 12–18", activity: "Cluster Deals", rev: "+$75k–120k", burn: "~$10k/mo", highlight: true },
    { period: "Mo 18–24", activity: "Expansion", rev: "$150k+", burn: "~$12k/mo", highlight: true },
  ],
  financialTotals: {
    label: "Total Rev (24mo)",
    value: "$250k–$400k",
    runway: "Runway: 24–30 months ($400k raise)"
  },
  // Burn Structure
  burnStructure: [
    { role: "Full-stack Engineer", cost: "$1.5k–$2.5k/mo" },
    { role: "Design/Ops (Contract)", cost: "$600–$1000/mo" },
    { role: "Cloud/AI Infra", cost: "$500–$1.2k/mo" },
  ],
  totalBurn: "Total Early Burn: $6k–$9k/month",
  // Use of Funds Chart Data (Percentages must sum to 100 roughly for logic, but here acts as labels)
  useOfFunds: [
    { label: "Product & Engineering", amount: "$160k", pct: "40%", desc: "Core engineer (24mo), contract design, AI infra.", colorClass: "bg-swiss-black" },
    { label: "Pilots & Evidence", amount: "$80k", pct: "20%", desc: "4–6 school pilots, impact metrics.", colorClass: "bg-swiss-blue" },
    { label: "Revenue Generation", amount: "$80k", pct: "20%", desc: "Institutional licensing, cluster expansion.", colorClass: "bg-swiss-gray" },
    { label: "Founder Admin", amount: "$40k", pct: "10%", desc: "", colorClass: "bg-swiss-black/80" },
    { label: "Buffer", amount: "$40k", pct: "10%", desc: "", colorClass: "bg-swiss-black/60" },
  ]
};

// ==========================================
// LUNCH & LEARN PAGE CONFIGURATION
// ==========================================

export const LUNCH_LEARN_CONFIG = {
  date: "December 20, 2025",
  time: "11:00 AM West Central Africa",
  location: "Online via Zoom",
  rsvpLink: "https://us06web.zoom.us/meeting/register/kOATxQCSRnCxiQJuGCIKMQ",
  
  title: "THOSE\nWHO\nDARE.",
  subtitle: "Building a Life Beyond the Script.",
  
  speakerName: "Uyeme Itsueli",
  speakerInitials: "UI",
  speakerRole: "Executive Director, Relate Africa",
  speakerBioMain: "Uyeme is a seasoned Development Professional and Communications Strategist who blends creativity, analytical discipline, and a passion for social development.",
  speakerBioSub: "Currently serving as the Executive Director of Relate Africa, a Lagos-based nonprofit, she empowers working women across diverse backgrounds. Under her leadership, the organization trained over 100 female traders in Idumota Market on financial literacy and marketing.",
  
  sessionContext: "This session aligns perfectly with our mission to train self-directed learners. Uyeme will lead the conversation on using storytelling as a tool for social change and creating impact beyond traditional career scripts."
};

// CONTACT INFO
export const CONTACT_EMAIL = "oef.lagos@gmail.com";
export const CONTACT_ADDRESS = "Lagos, Nigeria.";
export const FOOTER_TAGLINE = "Democratizing education by increasing access and community collaboration. Fostering in persons a zeal for seeking knowledge.";
export const FOOTER_REGISTRATION = "Registered Under Part F of CAMA 2020 as an Incorporated Trustee by the Corporate Affairs Commission, Federal Republic of Nigeria.";

export const SOCIAL_LINKS = [
  { platform: "Academy Lunch and Learn", url: "https://vimeo.com/olagbajumoeducation" },
  { platform: "Book a Free Consultation", url: "https://calendar.app.google/rxNiCF47KRXC7vG77" },
  { platform: "Abigail Academy LinkedIn", url: "https://www.linkedin.com/company/abigail-academy-201325/" }
];