import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  mobileapp,
  pkconnets,
  hotelops,
  chilliapple,
  website1,
  website2,
  website3,
  wallcarvings,
  tableCatalogue ,
} from "../assets";

// If you have mobile screenshots, import them like this:
// import mobile1 from "../assets/mobile1.png";
// import mobile2 from "../assets/mobile2.png";
// import mobile3 from "../assets/mobile3.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Web Development", icon: web },
  { title: "React Native Development", icon: mobile },
  { title: "Backend Development", icon: backend },
  { title: "Graphic Designer", icon: creator },
  // { title: "SEO Specialist", icon: creator },
  // { title: "Video Editor", icon: creator },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

export const experiences = [
  {
    title: "Full Stack Web Development",
    company_name: "Freelance / Agency Projects",
    icon: nextjs,
    iconBg: "#E6DEDD",
    points: [
      "Developing full-stack web applications using Next.js, React.js, and Node.js.",
      "Building responsive and modern user interfaces with Tailwind CSS.",
      "Creating and integrating RESTful APIs for dynamic applications.",
      "Managing state and data flow using modern tools.",
      "Optimizing performance, SEO, and user experience.",
    ],
  },
  {
    title: "Mobile App Development",
    company_name: "Freelance / Agency Projects",
    icon: mobileapp,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining cross-platform mobile applications using React Native.",
      "Implementing features like authentication, real-time updates, and media playback.",
      "Integrating REST APIs and handling data efficiently.",
      "Optimizing app performance across devices.",
      "Collaborating with designers and backend teams.",
    ],
  },
  {
    title: "WordPress Development",
    company_name: "Freelance / Agency Projects",
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developing and customizing WordPress websites using themes and plugins.",
      "Building responsive and SEO-friendly websites.",
      "Integrating third-party plugins and payment gateways.",
      "Optimizing website performance and security.",
    ],
  },
  {
    title: "UI/UX & Graphic Designer",
    company_name: "Freelance / Agency",
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Designed intuitive user interfaces for web and mobile platforms.",
      "Created wireframes, user flows, and prototypes.",
      "Delivered branding assets including logos and marketing creatives.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// ====================== PROJECTS ======================
export const projects = [
  // === WEB PROJECTS ===
  {
    type: "web",
    name: "North Pacific Hybrid Seeds",
    description:
      "North Pacific Hybrid Seeds is more than just a seed company — we are a team driven by a vision to strengthen Indian agriculture with reliable, high-performance hybrid seeds. ",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: website1,
    source_code_link: "https://northstarpacifichybridseeds.com/",
  },
  {
    type: "web",
    name: "Crown IT Solutions",
    description:
      "Crown IT Solutions (CWG IT Solutions), part of Crown Worldwide Group, helps businesses in Kuwait operate smarter through a combination of trusted business software and professional services.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: website2,
    source_code_link: "https://www.cwg-its.com/",
  },
  {
    type: "web",
    name: "AR RAFI Group",
    description:
      "AR RAFI Group is an established Indian exporter active in the beauty and wellness sector since 2019.We do not just manufacture products for your brand. ",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: website3,
    source_code_link: "https://arrafigroup.com/",
  },

  // === MOBILE PROJECTS ===
  {
    type: "mobile",
    name: "PK Connect",
    description:
      "Through this app, you can become a founding member of Jan Suraj and share your questions, suggestions, and opinions in the movement for change in Bihar. This app also connects you with the Youth Club, ensuring the active participation of young people in Bihar’s politics.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
    ],
    image: pkconnets, // ← Replace with actual screenshot when added
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.pk.connect",
  },
  {
    type: "mobile",
    name: "Chilly Apple - online grocery",
    description:
      "Chilly Apple is an Udaipur-based mobile e-commerce platform that is transforming the shopping experience for people of Lake city. We offer a wide assortment of fruits and vegetables at your doorstep in just on one click.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "ecommerce", color: "pink-text-gradient" },
    ],
    image: chilliapple,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.phppoets.jainthela",
  },
  {
    type: "mobile",
    name: "HotelOps",
    description:
      "We build relationships that are committed to providing Efficient, Effective, Relatable, Measurable and User Friendly Technology to our partners thereby creating strong and mutually valuable associations. Safety, Security, Compliance, Transparency, Empowerment and Sustainability.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "booking", color: "green-text-gradient" },
    ],
    image: hotelops,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.nilehospitality",
  },

   // ================= GRAPHIC =================
  {
    type: "graphic",
    name: "Table Catalogue",
    description: "Furniture catalogue design.",
    tags: [{ name: "photoshop", color: "blue-text-gradient" }],
    image: tableCatalogue,
    source_code_link: "/pdfs/table-catalogue.pdf",
    iconType: "pdf",
  },
  {
    type: "graphic",
    name: "Wall Carvings Catalogue",
    description: "Wall carving design collection.",
    tags: [{ name: "illustrator", color: "pink-text-gradient" }],
    image: wallcarvings,
    source_code_link: "/pdfs/wall-carvings.pdf",
    iconType: "pdf",
  },
];

// Final single export (no duplicate)
