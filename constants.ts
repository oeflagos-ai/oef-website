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
export const SITE_BACKGROUND_IMAGE = "";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

// HOME PAGE CONTENT
export const HOME_HERO_TEXT_1 = "MODERNISING";
export const HOME_HERO_TEXT_2 = "LEARNING, TOGETHER";
export const HOME_HERO_SUB = "Advancing education, research, and public engagement in areas critical to the future of educational systems.";

// ABOUT PAGE CONTENT (Rediet Abebe Style Structure)
// "About" Sidebar Info
export const ABOUT_SIDEBAR_TITLE = "Our Mission";
export const ABOUT_SIDEBAR_SUMMARY = "The Olagbajumo Education Foundation is dedicated to removing barriers to knowledge and fostering a global community of lifelong learners.";

// "About" Main Content Sections
export const ABOUT_SECTIONS = [
  {
    title: "The Vision",
    content: `We envision a world where high-quality educational resources are freely available to everyone, regardless of their geographic location or socioeconomic status. We believe that education is a fundamental human right and the most powerful tool for sustainable development.`
  },
  {
    title: "Our Approach",
    content: `We collaborate with educators, technologists, and policymakers to build open platforms, curate diverse curriculum, and support community-led learning initiatives. By leveraging open-source technology and creative commons licensing, we scale our impact globally.`
  },
  {
    title: "History",
    content: `Founded with the belief that knowledge belongs to the public, the OEFoundation has grown from a small collective of teachers into an international non-profit organization supporting thousands of students.`
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Sarah Al-Fayed",
    role: "Executive Director",
    bio: "Former Dean of Digital Learning with 15 years of experience in EdTech policy.",
    image: "https://picsum.photos/400/400?grayscale"
  },
  {
    name: "James Sterling",
    role: "Head of Operations",
    bio: "Specializes in logistics for non-profit distribution networks in developing regions.",
    image: "https://picsum.photos/401/401?grayscale"
  }
];

// PROJECTS PAGE CONTENT (3 Slots as requested)
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Open Syllabus Project",
    description: "Creating a universal, adaptable syllabus repository for K-12 educators in under-resourced areas. This ongoing initiative focuses on STEM and Literacy core standards.",
    status: "Ongoing",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: '2',
    title: "Rural Connectivity Hubs",
    description: "Deploying solar-powered offline learning servers to remote villages. These hubs provide access to Wikipedia, Khan Academy, and custom local content without internet.",
    status: "Ongoing",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: '3',
    title: "Teacher Training Initiative",
    description: "A comprehensive digital certification program for volunteer teachers. We provide mentorship, peer-review networks, and ongoing professional development resources.",
    status: "Ongoing",
    image: "https://picsum.photos/800/600?random=3"
  }
];

// CONTACT INFO
export const CONTACT_EMAIL = "oef.lagos@gmail.com";
export const CONTACT_ADDRESS = "123 Innovation Drive, Zurich, Switzerland";
export const FOOTER_TAGLINE = "Democratizing education by increasing access and community collaboration. Fostering in persons a zeal for seeking knowledge.";
export const SOCIAL_LINKS = [
  { platform: "Twitter", url: "#" },
  { platform: "Instagram", url: "#" },
  { platform: "LinkedIn", url: "#" }
];