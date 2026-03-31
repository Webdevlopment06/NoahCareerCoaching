import React from 'react'
import CareerTemplate from '/src/components/CareerTemplate'

const hero = {
  bgClass: 'trades-hero-bg',
  title: (
    <>
      Your Future in <span className="text-custom-primary">Skilled Trades & Construction</span>
    </>
  ),
  blurb:
    'Skilled trades are the backbone of our infrastructure, offering rewarding, hands-on careers with high demand, excellent pay, and pathways to self-employment.',
  ctaPrimary: 'Explore Roles',
  ctaSecondary: 'Find Your Path',
  rolesHeading: 'Key Trades & Industry Roles',
  rolesSub: 'Explore common high-impact roles across skilled trades, construction, and maintenance.',
  roadmapHeading: 'Trades Career Roadmap',
  skillsHeading: 'Essential Skills and Knowledge',
  futureHeading: 'Future Trends and Growth'
}

const roles = [
  {
    icon: 'bi bi-tools',
    title: 'Mechanical & Electrical',
    summary:
      'Electricians, HVAC technicians, and controls specialists who install, maintain, and troubleshoot power distribution, climate systems, and automated control equipment.',
    modalId: 'strategyModal-trades',
    modal: {
      title: 'Mechanical & Electrical',
      image: '/images/career-imgs/trades-imgs/trades1.jpg',
      items: [
        { title: 'Electrician', text: 'Power systems, wiring, and control panels.', bgClass: 'bg-warning-subtle' },
        { title: 'HVAC Technician', text: 'Climate systems installation and maintenance.' },
        { title: 'Controls Technician', text: 'PLCs, automation, and building controls.', bgClass: 'bg-primary-subtle' }
      ]
    }
  },
  {
    icon: 'bi bi-building',
    title: 'Construction & Finishing',
    summary:
      'Carpenters, finishers, and site supervisors responsible for framing, structural assembly, interior finishes, and coordinating crews to deliver quality construction on schedule and to code.',
    modalId: 'financeModal-trades',
    modal: {
      title: 'Construction & Finishing',
      image: '/images/career-imgs/trades-imgs/trades2.png',
      items: [
        { title: 'Carpenter', text: 'Framing, finish carpentry, and site layout.', bgClass: 'bg-warning-subtle' },
        { title: 'Site Supervisor', text: 'Managing crews, schedules, and safety compliance.', bgClass: 'bg-primary-subtle' },
        { title: 'Finisher / Painter', text: 'Final finishes, quality control, and client handoffs.' }
      ]
    }
  },
  {
    icon: 'bi bi-gear',
    title: 'Automotive & Maintenance',
    summary:
      'Automotive technicians, diesel specialists, and industrial maintenance mechanics who perform diagnostics, repair, and preventive maintenance to maximize equipment uptime and safety.',
    modalId: 'opsModal-trades',
    modal: {
      title: 'Automotive & Maintenance',
      image: '/images/career-imgs/trades-imgs/trades3.jpg',
      items: [
        { title: 'Automotive Technician', text: 'Diagnostics, repair, and vehicle systems.', bgClass: 'bg-warning-subtle' },
        { title: 'Industrial Maintenance', text: 'Heavy equipment servicing and preventive maintenance.', bgClass: 'bg-primary-subtle' },
        { title: 'Diesel Specialist', text: 'Diesel engine repair and fleet maintenance.' }
      ]
    }
  }
]

const roadmap = [
  { step: 1, title: 'Entry Level', text: 'Apprentice / Junior Technician', years: 'Years 0-2' },
  { step: 2, title: 'Mid-Level', text: 'Journeyman / Supervisor', years: 'Years 3-6' },
  { step: 3, title: 'Site Lead', text: 'Foreman / Project Manager', years: 'Years 7-12' },
  { step: 4, title: 'Owner / Contractor', text: 'Business Owner / Lead Contractor', years: 'Years 15+' }
]

const skills = {
  hard: [
    { icon: 'bi bi-tools', text: 'Blueprint Reading & Layout' },
    { icon: 'bi bi-calculator-fill', text: 'Measurement & Diagnostics' },
    { icon: 'bi bi-wrench', text: 'Power Systems & HVAC' },
    { icon: 'bi bi-gear', text: 'Equipment Maintenance' }
  ],
  soft: [
    { icon: 'bi bi-people-fill', text: 'Crew Communication & Coordination' },
    { icon: 'bi bi-shield-check', text: 'Safety & Compliance Mindset' },
    { icon: 'bi bi-clock-fill', text: 'Scheduling & Reliability' }
  ]
}

const future = [
  { title: 'Green Building and Retrofitting', text: 'High demand for HVAC and Electricians specializing in solar, energy efficiency, and low-voltage systems; focus on BMS for energy optimization.', borderClass: 'border-custom-secondary', bgClass: 'bg-secondary-subtle' },
  { title: 'Automation and Robotics', text: 'Industrial Maintenance Mechanics and Welders must adapt to servicing and programming robotic assembly lines and advanced manufacturing equipment.', borderClass: 'border-custom-primary', bgClass: 'bg-danger-subtle' },
  { title: 'Digital Project Management', text: 'Project coordination increasingly uses digital tools (BIM, digital blueprints, virtual reality) to improve site efficiency and reduce errors.', borderClass: 'border-secondary', bgClass: 'bg-secondary-subtle' }
]

const cta = {
  title: 'Ready to Build Your Career?',
  text: 'The trades offer financial independence and the pride of seeing your work come to life. Contact local unions or trade schools to start your apprenticeship application today.',
  button: 'Apply Your Skills'
}

export default function Trades() {
  return <CareerTemplate hero={hero} roles={roles} roadmap={roadmap} skills={skills} future={future} cta={cta} />
}
