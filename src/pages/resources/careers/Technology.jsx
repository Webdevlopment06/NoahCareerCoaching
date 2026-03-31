import React from 'react'
import CareerTemplate from '/src/components/CareerTemplate'

const hero = {
  bgClass: 'tech-hero-bg',
	title: (
		<>
			Your Future in <span className="text-custom-primary">Technology & Software</span>
		</>
	),
  blurb:
	'Careers in technology span software, infrastructure, and specialized roles—this guide highlights common paths and what you need to get started.',
  ctaPrimary: 'Explore Roles',
  ctaSecondary: 'Find Your Path',
  rolesHeading: 'Key Technology & Industry Roles',
  rolesSub: 'Explore common roles across software, infrastructure, and support.',
  roadmapHeading: 'Technology Career Roadmap',
  skillsHeading: 'Essential Skills and Knowledge',
  futureHeading: 'Future Trends and Growth'
}

const roles = [
	{
		icon: 'bi bi-code-slash',
		title: 'Software & Development',
	summary:
	  'Design, build, and maintain scalable applications, APIs, and data platforms. Collaborate with product and design, write tests, and optimize performance.',
	modalId: 'techDevModal',
	modal: {
	  title: 'Software & Development',
	  image: '/images/career-imgs/tech-imgs/tech1.png',
	  items: [
		{ title: 'Software Engineer', text: 'Building, maintaining, and testing software applications.', bgClass: 'bg-warning-subtle' },
		{ title: 'Mobile Developer', text: 'Creating applications for iOS and Android platforms.', bgClass: 'bg-primary-subtle' },
		{ title: 'DevOps Engineer', text: 'Automation, CI/CD, bridging development and operations.' }
	  ]
	}
  },
	{
		icon: 'bi bi-cloud-arrow-up-fill',
		title: 'Infrastructure & Ops',
	summary:
	  'Architect and operate cloud platforms, CI/CD pipelines, and networking. Focus on automation, observability, reliability engineering, and incident response.',
	modalId: 'techInfraModal',
	modal: {
	  title: 'Infrastructure & Ops',
	  image: '/images/career-imgs/tech-imgs/tech3.png',
	  items: [
		{ title: 'Cloud Engineer', text: 'Managing cloud platforms (AWS, Azure, GCP), IaC.', bgClass: 'bg-warning-subtle' },
		{ title: 'Network Architect', text: 'Designing and managing computer networks.', bgClass: 'bg-primary-subtle' }
	  ]
	}
  },
	{
		icon: 'bi bi-shield-lock-fill',
		title: 'Specialized & Support',
	summary:
	  'Specialized roles—cybersecurity, UX/UI, data, and project management—that protect systems and shape product experiences.',
	modalId: 'techSupportModal',
	modal: {
	  title: 'Specialized & Support Roles',
	  image: '/images/career-imgs/tech-imgs/tech2.png',
	  items: [
		{ title: 'Cybersecurity Analyst', text: 'Protecting systems and data, incident response.', bgClass: 'bg-warning-subtle' },
		{ title: 'UX/UI Designer', text: 'Improving user experience and designing intuitive interfaces.', bgClass: 'bg-light' }
	  ]
	}
  }
]

const roadmap = [
  { step: 1, title: 'Entry Level', text: 'Junior Engineer / Support', years: 'Years 0-2' },
  { step: 2, title: 'Mid-Level', text: 'Engineer / SRE / Specialist', years: 'Years 3-6' },
  { step: 3, title: 'Senior / Lead', text: 'Team Lead / Architect', years: 'Years 7-12' },
  { step: 4, title: 'Manager / Principal', text: 'Staff/Principal / Engineering Manager', years: 'Years 15+' }
]

const skills = {
	hard: [
		{ icon: 'bi bi-code-slash', text: 'Programming & Data Structures' },
		{ icon: 'bi bi-database', text: 'Databases & Data Engineering' },
		{ icon: 'bi bi-cloud-upload', text: 'Cloud & Infrastructure' },
		{ icon: 'bi bi-shield-lock-fill', text: 'Security & Testing' }
	],
	soft: [
		{ icon: 'bi bi-people-fill', text: 'Communication & Cross-Functional Work' },
		{ icon: 'bi bi-gear-fill', text: 'Problem Solving & Ownership' },
		{ icon: 'bi bi-clock-history', text: 'Agile Practices & Time Management' },
		{ icon: 'bi bi-lightbulb-fill', text: 'Continuous Learning & Curiosity' }
	]
}

const future = [
	{ title: 'AI & Machine Learning', text: 'AI is reshaping product features, tooling, and developer workflows.', borderClass: 'border-custom-secondary', bgClass: 'bg-warning-subtle' },
	{ title: 'Cloud-Native & Edge', text: 'Serverless, containers, and edge computing enable scalable systems.', borderClass: 'border-custom-primary', bgClass: 'bg-primary-subtle' },
	{ title: 'Security & Privacy', text: 'Secure development, privacy-by-design, and regulatory compliance become non-negotiable.', borderClass: 'border-secondary', bgClass: 'bg-secondary-subtle' }
]

const cta = {
  title: 'Ready to Start Building?',
  text: 'Take the first step: build a project, join a bootcamp, or apply for internships.',
  button: 'Choose Your Tech Career Path'
}

export default function Technology() {
  return <CareerTemplate hero={hero} roles={roles} roadmap={roadmap} skills={skills} future={future} cta={cta} />
}


