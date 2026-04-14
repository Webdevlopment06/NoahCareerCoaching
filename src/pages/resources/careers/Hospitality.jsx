import React from "react";
import CareerTemplate from "/src/components/CareerTemplate";

const hero = {
  bgClass: "hosp-hero-bg",
  title: (
    <>
      Your Future in <span className="text-white">Hospitality & Tourism</span>
    </>
  ),
  blurb:
    "Hospitality is a global industry focused on creating memorable guest experiences in hotels, restaurants, events, and travel services.",
  ctaPrimary: "Explore Roles",
  ctaSecondary: "Find Your Path",
  rolesHeading: "Key Hospitality & Tourism Roles",
  rolesSub:
    "Detailing careers across accommodation, food service, and experience management.",
  roadmapHeading: "Hospitality & Tourism Career Roadmap",
  skillsHeading: "Essential Skills and Knowledge",
  futureHeading: "Future Trends and Growth",
};

const roles = [
  {
    icon: "bi bi-lightbulb",
    title: "Accommodation and Lodging",
    summary:
      "Welcoming guests and managing lodging operations including front desk, reservations, housekeeping, and guest services to ensure comfortable, reliable stays.",
    modalId: "strategyModal-hospitality",
    modal: {
      title: "Accommodation & Front Desk Operations",
      image: "/images/career-imgs/hos-imgs/hospitality1.png",
      items: [
        {
          title: "Front Desk Agent / Guest Services",
          text: "Welcome guests, handle check-in/out, manage reservations, and resolve guest needs.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "Concierge / Guest Relations",
          text: "Provide local recommendations, book services, and deliver personalized assistance.",
        },
        {
          title: "Reservations Specialist",
          text: "Manage booking systems, optimize occupancy and pricing.",
        },
        {
          title: "Housekeeping Supervisor",
          text: "Ensure cleanliness, manage room turnover, and supervise staff.",
          bgClass: "bg-primary-subtle",
        },
      ],
    },
  },
  {
    icon: "bi bi-graph-up-arrow",
    title: "Food and Beverage Services",
    summary:
      "Preparation, presentation, and service of meals and drinks across restaurants, cafés, catering, and bars.",
    modalId: "financeModal-hospitality",
    modal: {
      title: "Food & Beverage and Culinary Services",
      image: "/images/career-imgs/hos-imgs/hospitality2.jpg",
      items: [
        {
          title: "Executive Chef / Sous Chef",
          text: "Lead kitchen operations, design menus, and manage staff.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "Restaurant Manager",
          text: "Oversee service, staffing, guest satisfaction, and daily operations.",
          bgClass: "bg-primary-subtle",
        },
        {
          title: "Pastry Chef / Line Cook",
          text: "Execute menu items and support culinary production.",
        },
      ],
    },
  },
  {
    icon: "bi bi-gear",
    title: "Tourism and Events",
    summary:
      "Planning, promoting, and delivering travel experiences and organized events such as conferences, festivals, and tours.",
    modalId: "opsModal-hospitality",
    modal: {
      title: "Events, Operations & Revenue Management",
      image: "/images/career-imgs/hos-imgs/hospitality3.jpg",
      items: [
        {
          title: "Event Coordinator",
          text: "Plan and execute events, manage vendors and on-site logistics.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "Operations Manager",
          text: "Oversee daily property operations, staffing, procurement.",
          bgClass: "bg-primary-subtle",
        },
        {
          title: "Revenue Manager / Sales & Catering",
          text: "Manage pricing strategies, group sales, and catering contracts.",
        },
      ],
    },
  },
];

const roadmap = [
  {
    step: 1,
    title: "Entry Level",
    text: "Front Desk / Housekeeping / Server / Event Setup / Reservations",
    years: "Years 0-2",
  },
  {
    step: 2,
    title: "Skilled & Supervisory",
    text: "Supervisors, Coordinators, Catering Leads",
    years: "Years 2-5",
  },
  {
    step: 3,
    title: "Management & Strategic Ops",
    text: "Hotel Manager / Events Manager / F&B Manager",
    years: "Years 5-10",
  },
  {
    step: 4,
    title: "Executive Leadership",
    text: "General Manager / Director of Hospitality / VP Tourism",
    years: "Years 10+",
  },
];

const skills = {
  hard: [
    {
      icon: "bi bi-calculator-fill",
      text: "Property Management Systems (PMS)",
    },
    { icon: "bi bi-table", text: "Point-of-Sale (POS) Systems" },
    { icon: "bi bi-diagram-3-fill", text: "Inventory & Supply Management" },
    { icon: "bi bi-bar-chart-line-fill", text: "Budgeting & Cost Control" },
    { icon: "bi bi-cloud-check-fill", text: "Food Safety & Hygiene (HACCP)" },
    { icon: "bi bi-shield-check", text: "Multilingual Ability" },
  ],
  soft: [
    { icon: "bi bi-people-fill", text: "Exceptional Customer Service" },
    {
      icon: "bi bi-lightbulb-fill",
      text: "Stress Tolerance & Calm Under Pressure",
    },
    { icon: "bi bi-chat-dots-fill", text: "Conflict Resolution & Diplomacy" },
    { icon: "bi bi-lightbulb-fill", text: "Sales & Upselling Proficiency" },
  ],
};

const future = [
  {
    title: "Experiential Travel",
    text: "Shift to immersive cultural, wellness, and adventure tourism.",
    borderClass: "border-custom-secondary",
    bgClass: "bg-warning-subtle",
  },
  {
    title: "Sustainability & Ethical Tourism",
    text: "Eco-friendly operations and community-focused tourism.",
    borderClass: "border-custom-primary",
    bgClass: "bg-primary-subtle",
  },
  {
    title: "Seamless Automation",
    text: "Mobile check-in, keyless entry, and virtual concierges reshape operations.",
    borderClass: "border-secondary",
    bgClass: "bg-secondary-subtle",
  },
];

const cta = {
  title: "Ready to Deliver Excellence?",
  text: "Hospitality is a dynamic, people-centric career. Start building your network and focusing on service skills.",
  button: "Book Your Career Journey",
};

export default function Hospitality() {
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
