import React from "react";
import CareerTemplate from "/src/components/CareerTemplate";

const hero = {
  bgClass: "arts-hero-bg",
  title: (
    <>
      Your Future in <span className="text-white">Creative Arts & Design</span>
    </>
  ),
  blurb:
    "Shape the visual and emotional world around us. Careers in design, media, and fine arts merge passion with commercial demand, requiring both artistry and technical skill.",
  ctaPrimary: "Explore Roles",
  ctaSecondary: "Find Your Path",
  rolesHeading: "Key Business & Management Roles",
  rolesSub: "Detailing common and high-impact roles, organized by function.",
  roadmapHeading: "Creative Arts & Design Career Roadmap",
  skillsHeading: "Essential Skills and Knowledge",
  futureHeading: "Future Trends and Growth",
};

const roles = [
  {
    icon: "bi bi-lightbulb",
    title: "Digital & UX/UI Design",
    summary:
      "This field bridges the gap between human behavior and technology by crafting intuitive, user-centered interfaces for digital products. It focuses on optimizing the functionality and accessibility of websites and applications to ensure a seamless interaction for every user.",
    modalId: "strategyModal-artsdesign",
    modal: {
      title: "Digital and UX/UI Design",
      image: "/images/career-imgs/art-imgs/art1.png",
      items: [
        {
          title: "Graphic Designer",
          text: "Visual identity, branding, marketing materials, and print design.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "UX/UI Designer",
          text: "Creating intuitive, accessible digital interfaces and optimizing user flows.",
        },
        {
          title: "Web Designer",
          text: "Layout, visual appearance, and usability of websites.",
        },
        {
          title: "Interaction Designer",
          text: "How users interact with products and systems.",
          bgClass: "bg-primary-subtle",
        },
      ],
    },
  },
  {
    icon: "bi bi-graph-up-arrow",
    title: "Visual Arts & Media Production",
    summary:
      "This sector serves as a powerful storytelling engine that communicates complex ideas through high-impact imagery and multimedia content. By blending technical skills in cinematography, graphics, and sound, it creates immersive experiences that define brand identities and capture audience attention.",
    modalId: "financeModal-artsdesign",
    modal: {
      title: "Visual Arts and Media Production",
      image: "/images/career-imgs/art-imgs/art2.png",
      items: [
        {
          title: "Illustrator / Concept Artist",
          text: "Creating original artwork for books, games, films, and advertising.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "Videographer / Editor",
          text: "Filming, editing, and post-production for commercial, corporate, or broadcast media.",
          bgClass: "bg-primary-subtle",
        },
        {
          title: "Photographer (Commercial/Art)",
          text: "Visual storytelling, capturing high-quality images for marketing or artistic purposes.",
        },
      ],
    },
  },
  {
    icon: "bi bi-gear",
    title: "Management & Strategy",
    summary:
      'Acting as the vital link between creative vision and business goals, this discipline focuses on leading teams and defining the "why" behind every project. It utilizes design thinking and strategic planning to ensure that artistic output is not only high-quality but also commercially viable and impactful.',
    modalId: "opsModal-artsdesign",
    modal: {
      title: "Management and Strategy",
      image: "/images/career-imgs/art-imgs/art3.png",
      items: [
        {
          title: "Art Director / Creative Lead",
          text: "Overseeing the visual style and execution of projects; managing creative teams.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "Marketing/Brand Specialist",
          text: "Developing the aesthetic and messaging that defines a brand's public presence.",
          bgClass: "bg-primary-subtle",
        },
        {
          title: "Copywriter / Content Creator",
          text: "Writing persuasive and engaging text that supports the visual design elements.",
        },
      ],
    },
  },
];

const roadmap = [
  {
    step: 1,
    title: "Entry Level",
    text: "Junior Graphic Designer/ Production & Design Assistant/ Social Media Content Creator.",
    years: "Years 0-2",
  },
  {
    step: 2,
    title: "Mid-Level",
    text: "Graphic, Visual, UX/UI, Multimedia Designer.",
    years: "Years 2-5",
  },
  {
    step: 3,
    title: "Senior/ Specialized Designer",
    text: "Art Director/ UX Lead/ Motion Graphics Designer/ Senior Graphic Designer.",
    years: "Years 5-8",
  },
  {
    step: 4,
    title: "Creative Leadership/Independent Expert",
    text: "Creative Director/ Design Manager/ Brand Director/ Freelance Studio Owner.",
    years: "Years 8-12+",
  },
];

const skills = {
  hard: [
    { icon: "bi bi-calculator-fill", text: "Adobe Creative Suite" },
    { icon: "bi bi-table", text: "Figma / Sketch" },
    { icon: "bi bi-diagram-3-fill", text: "3D Modeling" },
    { icon: "bi bi-bar-chart-line-fill", text: "Video Editing" },
    { icon: "bi bi-cloud-check-fill", text: "Typography & Color Theory" },
    { icon: "bi bi-shield-check", text: "Layout & Composition" },
  ],
  soft: [
    { icon: "bi bi-people-fill", text: "Unwavering Creativity & Originality" },
    {
      icon: "bi bi-lightbulb-fill",
      text: "Time Management & Meeting Deadlines",
    },
    {
      icon: "bi bi-chat-dots-fill",
      text: "Ability to Interpret & Apply Client Feedback",
    },
  ],
};

const future = [
  {
    title: "Generative AI in Design",
    text: "AI as a collaborator, not a replacement. Prompt Engineering becomes a valuable creative skill.",
    borderClass: "border-custom-secondary",
    bgClass: "bg-warning-subtle",
  },
  {
    title: "3D, XR, and Metaverse Design",
    text: "Growing demand for 3D modelers and designers specializing in Extended Reality (XR) experiences.",
    borderClass: "border-custom-primary",
    bgClass: "bg-primary-subtle",
  },
  {
    title: "The Freelance Economy",
    text: "More creative professionals are choosing self-employment, requiring strong business acumen.",
    borderClass: "border-secondary",
    bgClass: "bg-secondary-subtle",
  },
];

const cta = {
  title: "Ready to Create Your Masterpiece?",
  text: "The only limits in the creative world are the ones you place on yourself. Dedicate yourself to practice and never stop sharing your work.",
  button: "Start Sketching Your Career",
};

export default function ArtsDesign() {
  return (
    <CareerTemplate
      hero={hero}
      roles={roles}
      roadmap={roadmap}
      skills={skills}
      future={future}
      cta={cta}
    />
  );
}
