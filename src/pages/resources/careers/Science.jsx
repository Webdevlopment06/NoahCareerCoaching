import React from 'react'
import CareerTemplate from '/src/components/CareerTemplate'

const hero = {
  bgClass: 'science-hero-bg',
  title: (
    <>
      Your Future in <span className="text-custom-primary">Science, Research & Discovery</span>
    </>
  ),
  blurb:
    'The scientific field is the bedrock of innovation, offering careers that push the boundaries of knowledge in biology, chemistry, physics, and environmental solutions.',
  ctaPrimary: 'Explore Roles',
  ctaSecondary: 'Find Your Path',
  rolesHeading: 'Key Scientific and Research Roles',
  rolesSub: 'High-impact roles across biological, physical, and computational science.',
  roadmapHeading: 'Science Career Roadmap',
  skillsHeading: 'Essential Skills and Knowledge',
  futureHeading: 'Future Trends and Growth'
}

const roles = [
  {
    icon: 'bi bi-bandaid',
    title: 'Biological & Medical Sciences',
    summary:
      'Research biologists, biotechnologists, and clinical researchers designing experiments, analyzing biological systems, and translating discoveries into diagnostics and therapeutics.',
    modalId: 'sciBioModal',
    modal: {
      title: 'Biological & Medical Sciences',
      image: '/images/career-imgs/sci-imgs/science1.jpg',
      items: [
        { title: 'Research Biologist', text: 'Conducting experiments to study living organisms, ecosystems, and biological processes.', bgClass: 'bg-warning-subtle' },
        { title: 'Biotechnologist', text: 'Developing new products and techniques in medicine, agriculture, and industry using living systems.', bgClass: 'bg-primary-subtle' },
        { title: 'Clinical Research Coordinator', text: 'Managing and overseeing clinical trials for new drugs and treatments.' }
      ]
    }
  },
  {
    icon: 'bi bi-geo-alt',
    title: 'Physical & Environmental Sciences',
    summary:
      'Chemists, materials scientists, physicists, and environmental researchers developing sustainable materials and technologies for pollution mitigation and resource management.',
    modalId: 'sciEnvModal',
    modal: {
      title: 'Physical & Environmental Sciences',
      image: '/images/career-imgs/sci-imgs/science2.jpeg',
      items: [
        { title: 'Chemist / Materials Scientist', text: 'Studying composition, structure, and properties of matter and developing new substances.', bgClass: 'bg-warning-subtle' },
        { title: 'Environmental Consultant', text: 'Advising organizations on environmental compliance, pollution control, and sustainability practices.' }
      ]
    }
  },
  {
    icon: 'bi bi-bar-chart-line-fill',
    title: 'Data & Computational Science',
    summary:
      'Data scientists, bioinformaticians, and computational modelers who build pipelines, analyze large-scale datasets, and develop models that accelerate scientific discovery.',
    modalId: 'sciDataModal',
    modal: {
      title: 'Data & Computational Science',
      image: '/images/career-imgs/sci-imgs/science3.jpg',
      items: [
        { title: 'Data Scientist (Science Focus)', text: 'Applying advanced statistical and computational methods to massive scientific datasets.', bgClass: 'bg-warning-subtle' },
        { title: 'Bioinformatician', text: 'Developing software and algorithms to analyze complex biological data.', bgClass: 'bg-primary-subtle' }
      ]
    }
  }
]

const roadmap = [
  { step: 1, title: 'Entry Level', text: 'Lab Technician / Research Assistant', years: 'Years 0-2' },
  { step: 2, title: 'Mid-Level', text: 'Research Scientist / Specialist', years: 'Years 3-6' },
  { step: 3, title: 'Senior / Lead', text: 'Senior Scientist / Group Lead', years: 'Years 7-12' },
  { step: 4, title: 'PI / Director', text: 'Principal Investigator / Lab Director', years: 'Years 15+' }
]

const skills = {
  hard: [
    { icon: 'bi bi-beaker', text: 'Laboratory Techniques' },
    { icon: 'bi bi-calculator-fill', text: 'Statistical Analysis' },
    { icon: 'bi bi-code-slash', text: 'Programming & Bioinformatics' },
    { icon: 'bi bi-database-fill-gear', text: 'Data Management' }
  ],
  soft: [
    { icon: 'bi bi-people-fill', text: 'Team Collaboration' },
    { icon: 'bi bi-lightbulb-fill', text: 'Critical Thinking' },
    { icon: 'bi bi-chat-dots-fill', text: 'Scientific Communication' }
  ]
}

const future = [
  { title: 'Data-driven & AI-accelerated Research', text: 'Machine learning, AI, and large-scale data analysis are transforming hypothesis generation and experiment design.', borderClass: 'border-custom-primary', bgClass: 'bg-primary-subtle' },
  { title: 'Interdisciplinary & Translational Science', text: 'Cross-disciplinary teams combining biology, engineering, and clinical expertise speed translation of discoveries.', borderClass: 'border-custom-secondary', bgClass: 'bg-warning-subtle' },
  { title: 'Automation, High-throughput & Sustainability', text: 'Lab automation, high-throughput screening, and greener lab practices increase reproducibility and reduce impact.', borderClass: 'border-secondary', bgClass: 'bg-secondary-subtle' }
]

const cta = {
  title: 'Ready to Make the Next Great Discovery?',
  text: 'Get involved in undergraduate research or laboratory work early to validate your passion and build essential practical skills.',
  button: 'Begin Your Research'
}

export default function Science() {
  return <CareerTemplate hero={hero} roles={roles} roadmap={roadmap} skills={skills} future={future} cta={cta} />
}
