import React from "react";
import CareerTemplate from "/src/components/CareerTemplate";

const hero = {
  bgClass: "law-hero-bg",
  title: (
    <>
      Your Future in{" "}
      <span className="text-custom-primary">Law & Public Service</span>
    </>
  ),
  blurb:
    "A career in law demands intellectual rigor, ethical commitment, and a passion for justice. It offers pathways from litigation and corporate advising to public policy.",
  ctaPrimary: "Explore Roles",
  ctaSecondary: "Find Your Path",
  rolesHeading: "Key Legal and Judiciary Roles",
  rolesSub:
    "High-impact careers across advocacy, compliance, and the court system.",
  roadmapHeading: "Law Career Roadmap",
  skillsHeading: "Essential Skills and Knowledge",
  futureHeading: "Future Trends and Growth",
};

const roles = [
  {
    icon: "bi bi-briefcase",
    title: "Private Practice & Corporate Law",
    summary:
      "Advises organizations on commercial law, transactions, and risk management. Work involves negotiating contracts and counseling on regulatory compliance.",
    modalId: "lawCorpModal",
    modal: {
      title: "Private Practice & Corporate Law",
      image: "/images/career-imgs/law-imgs/law1.jpg",
      items: [
        {
          title: "Corporate Attorney",
          text: "Advising businesses on contracts, mergers, regulations, and liability issues.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "Litigation Attorney",
          text: "Representing clients in civil lawsuits, including research, discovery, and trial.",
        },
        {
          title: "Intellectual Property Lawyer",
          text: "Protecting clients' creations (patents, copyrights, trademarks).",
          bgClass: "bg-primary-subtle",
        },
      ],
    },
  },
  {
    icon: "bi bi-people-fill",
    title: "Public Service & Advocacy",
    summary:
      "Serves the public through courtroom advocacy, policy, and community representation across prosecutorial and defense roles.",
    modalId: "lawPublicModal",
    modal: {
      title: "Public Service & Advocacy",
      image: "/images/career-imgs/law-imgs/law2.jpg",
      items: [
        {
          title: "Public Defender",
          text: "Providing legal defense to indigent defendants in criminal court cases.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "Prosecutor (District Attorney)",
          text: "Representing the government in criminal cases.",
        },
      ],
    },
  },
  {
    icon: "bi bi-file-earmark-text",
    title: "Legal Support & Paralegal Roles",
    summary:
      "Provides essential support to legal teams via research, document drafting, and case coordination; builds practical litigation and transactional experience.",
    modalId: "lawSupportModal",
    modal: {
      title: "Legal Support & Paralegal Roles",
      image: "/images/career-imgs/law-imgs/law3.jpg",
      items: [
        {
          title: "Paralegal / Legal Assistant",
          text: "Conducting legal research, drafting documents, and assisting attorneys in case preparation.",
          bgClass: "bg-warning-subtle",
        },
        {
          title: "Mediator / Arbitrator",
          text: "Facilitating resolution between parties outside of formal trial settings.",
          bgClass: "bg-primary-subtle",
        },
      ],
    },
  },
];

const roadmap = [
  {
    step: 1,
    title: "Entry Level",
    text: "Paralegal / Junior Associate",
    years: "Years 0-2",
  },
  {
    step: 2,
    title: "Mid-Level",
    text: "Associate / Prosecutor / Public Defender",
    years: "Years 3-6",
  },
  {
    step: 3,
    title: "Senior / Lead",
    text: "Senior Counsel / Trial Lead",
    years: "Years 7-12",
  },
  {
    step: 4,
    title: "Partner / Judge",
    text: "Firm Partner / Judge / In-House Counsel Director",
    years: "Years 15+",
  },
];

const skills = {
  hard: [
    { icon: "bi bi-book-half", text: "Legal Research & Writing" },
    { icon: "bi bi-search", text: "Case Analysis & Strategy" },
    { icon: "bi bi-server", text: "E-Discovery & Legal Technology" },
  ],
  soft: [
    { icon: "bi bi-people-fill", text: "Advocacy & Oral Argument" },
    { icon: "bi bi-shield-check", text: "Ethical Judgment & Professionalism" },
    { icon: "bi bi-chat-dots-fill", text: "Negotiation & Client Management" },
  ],
};

const future = [
  {
    title: "Legal Tech & AI",
    text: "Automation for document review and AI-assisted research will change workflows.",
    borderClass: "border-custom-secondary",
    bgClass: "bg-warning-subtle",
  },
  {
    title: "Access to Justice",
    text: "Growth in pro bono tools and ADR to expand legal help.",
    borderClass: "border-custom-primary",
    bgClass: "bg-primary-subtle",
  },
  {
    title: "Regulatory Complexity",
    text: "Demand for specialized counsel in privacy, compliance, and IP.",
    borderClass: "border-secondary",
    bgClass: "bg-secondary-subtle",
  },
];

const cta = {
  title: "Commit to Justice and Service",
  text: "These careers offer profound opportunities to impact society directly. If you seek intellectual challenge with real-world consequence, your path is here.",
  button: "Start Your Journey",
};

export default function Law() {
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
