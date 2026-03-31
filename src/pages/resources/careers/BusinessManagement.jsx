import React from 'react'
import CareerTemplate from '/src/components/CareerTemplate'

const hero = {
  bgClass: 'business-hero-bg',
  title: (
    <>
      Your Future in <span className="text-white">Business & Management</span>
    </>
  ),
  blurb:
    'Management careers drive strategy, growth, and organizational success. This guide explores paths in leadership, finance, operations, and analysis across all major industries.',
  ctaPrimary: 'Explore Roles',
  ctaSecondary: 'Find Your Path',
  rolesHeading: 'Key Business & Management Roles',
  rolesSub: 'Detailing common and high-impact roles, organized by function.',
  roadmapHeading: 'Business Management Career Roadmap',
  skillsHeading: 'Essential Skills and Knowledge',
  futureHeading: 'Future Trends and Growth'
}

const roles = [
  {
    icon: 'bi bi-lightbulb',
    title: 'Strategy & Consulting',
    summary:
      'Master the art of high-level problem solving. Learn to analyze complex business landscapes, drive organizational change, and provide the strategic vision that guides companies toward sustainable growth.',
    modalId: 'strategyModal-businessmanagement',
    modal: {
      title: 'Strategy and Consulting Deep-Dive',
      image: '/images/career-imgs/business-imgs/buisness1.jpg',
      items: [
        { title: 'Management Consultant', text: 'Solving complex business problems and driving organizational change.', bgClass: 'bg-warning-subtle' },
        { title: 'Business Analyst', text: 'Bridging the gap between business needs and technological solutions.' },
        { title: 'Product Manager', text: 'Defining the product roadmap; coordinating engineering and marketing.' },
        { title: 'Chief of Staff', text: 'High-level organizational support and strategic initiatives.', bgClass: 'bg-primary-subtle' }
      ]
    }
  },
  {
    icon: 'bi bi-graph-up-arrow',
    title: 'Financial & Resource Management',
    summary:
      'Become the steward of organizational health. Focus on optimizing capital, managing talent, and leveraging data-driven insights to ensure every resource is positioned for maximum impact and ROI.',
    modalId: 'financeModal-businessmanagement',
    modal: {
      title: 'Financial & Resource Management Path',
      image: '/images/career-imgs/business-imgs/buisness2.jpeg',
      items: [
        { title: 'Financial Analyst', text: 'Budgeting, forecasting, financial modeling, and investment decision support.', bgClass: 'bg-warning-subtle' },
        { title: 'Human Resources Manager', text: 'Workforce planning, talent acquisition, and regulatory compliance.', bgClass: 'bg-primary-subtle' },
        { title: 'Marketing Manager', text: 'Developing and executing campaigns, market research, and brand strategy.' }
      ]
    }
  },
  {
    icon: 'bi bi-gear',
    title: 'Operations & Supply Chain',
    summary:
      'Architect the engines of efficiency. From global logistics to daily process improvement, learn how to streamline workflows and manage the critical systems that deliver products and services to the world.',
    modalId: 'opsModal-businessmanagement',
    modal: {
      title: 'Operations & Supply Chain Insight',
      image: '/images/career-imgs/business-imgs/buisness3.jpg',
      items: [
        { title: 'Operations Manager', text: 'Optimizing daily processes, improving efficiency, and managing quality control.', bgClass: 'bg-warning-subtle' },
        { title: 'Supply Chain Specialist', text: 'Managing logistics, procurement, and inventory to ensure smooth flow of goods.', bgClass: 'bg-primary-subtle' },
        { title: 'Project Manager (PMP)', text: 'Defining scope, managing resources, mitigating risks, and delivering projects.' }
      ]
    }
  }
]

const roadmap = [
  { step: 1, title: 'Entry Level', text: 'Business Analyst / Assistant Manager', years: 'Years 0-2' },
  { step: 2, title: 'Mid-Level', text: 'Department Manager / Operations Lead', years: 'Years 3-6' },
  { step: 3, title: 'Director', text: 'Regional Director / Strategic Planning', years: 'Years 7-12' },
  { step: 4, title: 'Executive', text: 'VP / COO / Chief Executive Officer', years: 'Years 15+' }
]

const skills = {
  hard: [
    { icon: 'bi bi-calculator-fill', text: 'Financial Accounting' },
    { icon: 'bi bi-table', text: 'Data Modeling & Excel' },
    { icon: 'bi bi-diagram-3-fill', text: 'Process Mapping' },
    { icon: 'bi bi-bar-chart-line-fill', text: 'Statistical Analysis' },
    { icon: 'bi bi-cloud-check-fill', text: 'CRM/ERP Software' },
    { icon: 'bi bi-shield-check', text: 'Legal & Compliance' }
  ],
  soft: [
    { icon: 'bi bi-people-fill', text: 'Leadership and Team Building' },
    { icon: 'bi bi-lightbulb-fill', text: 'Strategic Thinking and Planning' },
    { icon: 'bi bi-chat-dots-fill', text: 'Negotiation and Conflict Resolution' }
  ]
}

const future = [
  { title: 'Global & Sustainable Markets', text: 'Emphasis on ESG reporting and increased complexity in international trade and operations.', borderClass: 'border-custom-secondary', bgClass: 'bg-warning-subtle' },
  { title: 'Data-Driven Decision Making', text: 'Managers must be proficient in Big Data analytics, visualization tools, and applying quantitative methods to strategy.', borderClass: 'border-custom-primary', bgClass: 'bg-primary-subtle' },
  { title: 'Agile & Adaptive Leadership', text: 'The shift towards flatter organizational structures requires leaders who can manage hybrid teams and rapid, iterative changes.', borderClass: 'border-secondary', bgClass: 'bg-secondary-subtle' }
]

const cta = {
  title: 'Ready to Lead Your Career?',
  text: 'Management is about execution and vision. Start refining your leadership and analytical skills today to take the helm of a successful organization tomorrow.',
  button: 'Define Your Business Strategy'
}

export default function BusinessManagement() {
  return <CareerTemplate hero={hero} roles={roles} roadmap={roadmap} skills={skills} future={future} cta={cta} />
}
