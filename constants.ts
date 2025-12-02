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
    title: "Vision",
    content: `We envision a world where high-quality educational resources are freely available to everyone, regardless of their geographic location or socioeconomic status. We believe that education is a fundamental human right and the most powerful tool for sustainable development.`
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
    image: "https://photos.app.goo.gl/LgyjjF21LmmYHJFS6"
  },
  {
    name: "Ifeanyi Olagbaju",
    role: "Trustee",
    bio: "Educational advisor with 27 years of experience, including 15 years at EducationUSA.",
    image: "https://photos.app.goo.gl/G1VBjJPDy1r1SjBP8"
  }
];

// PROJECTS PAGE CONTENT (3 Slots as requested)
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Abigail Academy",
    description: "Building an institutional organism that enables learners to create feedback loops between the classroom and their external worlds. We lead with the question: “How can an educational institution create stronger mental models of understanding reality in students?” ",
    status: "Ongoing",
    image: "https://photos.app.goo.gl/jmXM6mJ4MnEe1dMc9"
  },
  {
    id: '2',
    title: "Academy Lunch and Learn",
    description: "A learning series transforming student perspectives on life outside school. This program connects students with professionals through a thematic, hour-long chat.",
    status: "Ongoing",
    image: "https://photos.app.goo.gl/z1cKcVH45xf2AqLv5"
  },
  {
    id: '3',
    title: "Project Saber",
    description: "In Project Saber, we are researching how technology can play a key role in learning and make processes engaging and playful.",
    status: "Ongoing",
    image: "https://photos.app.goo.gl/iTFtip8KaWy92F1u6"
  }
];

// CONTACT INFO
export const CONTACT_EMAIL = "oef.lagos@gmail.com";
export const CONTACT_ADDRESS = "Lagos, Nigeria.";
export const FOOTER_TAGLINE = "Democratizing education by increasing access and community collaboration. Fostering in persons a zeal for seeking knowledge.";
export const SOCIAL_LINKS = [
  { platform: "Twitter", url: "#" },
  { platform: "Instagram", url: "#" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/abigail-academy-201325/" }
];