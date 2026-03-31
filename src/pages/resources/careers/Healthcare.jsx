import React from 'react'
import CareerTemplate from '/src/components/CareerTemplate'

const hero = {
  bgClass: 'health-hero-bg',
  title: (
    <>
      Your Future in <span className="text-white">Healthcare & Wellness</span>
    </>
  ),
  blurb:
    'Healthcare offers diverse, demanding, and immensely rewarding careers from direct patient care to research and administration.',
  ctaPrimary: 'Explore Roles',
  ctaSecondary: 'Find Your Path',
  rolesHeading: 'Key Healthcare & Wellness Roles',
  rolesSub: 'Detailing high-impact roles across clinical, allied, and administrative health.',
  roadmapHeading: 'Healthcare Career Roadmap',
  skillsHeading: 'Essential Skills and Knowledge',
  futureHeading: 'Future Trends and Growth'
}

const roles = [
  {
    icon: 'bi bi-lightbulb',
    title: 'Clinical & Direct Patient Care',
    summary:
      'Hands-on medical services including examinations, treatments, and patient education. Critical for diagnosis, care plans, and patient safety.',
    modalId: 'strategyModal-healthcare',
    modal: {
      title: 'Clinical and Direct Patient Care',
      image: '/images/career-imgs/health-imgs/health1.jpg',
      items: [
        { title: 'Physician (MD/DO)', text: 'Diagnosing and treating complex diseases; surgical or specialized care.', bgClass: 'bg-warning-subtle' },
        { title: 'Registered Nurse (RN)', text: 'Administering care, patient education, and coordinating treatment teams.' },
        { title: 'Nurse Practitioner (NP)', text: 'Advanced nursing roles with prescriptive authority in many settings.' },
        { title: 'Physician Assistant (PA)', text: 'Practicing medicine under physician supervision, conducting exams and diagnosing.', bgClass: 'bg-primary-subtle' }
      ]
    }
  },
  {
    icon: 'bi bi-graph-up-arrow',
    title: 'Allied Health & Therapy',
    summary:
      'Specialized support roles—therapists, technologists, and technicians—that help diagnose, rehabilitate, and improve patient outcomes.',
    modalId: 'financeModal-healthcare',
    modal: {
      title: 'Allied Health and Therapy',
      image: '/images/career-imgs/health-imgs/health2.jpg',
      items: [
        { title: 'Physical Therapist (PT)', text: 'Helping patients regain movement and manage pain after injury or illness.', bgClass: 'bg-warning-subtle' },
        { title: 'Medical Technologist', text: 'Performing complex lab tests and analyzing results to aid diagnosis.' , bgClass: 'bg-primary-subtle'},
        { title: 'Radiologic Technologist', text: 'Operating imaging equipment (X-ray, CT, MRI) to produce diagnostic images.' }
      ]
    }
  },
  {
    icon: 'bi bi-gear',
    title: 'Management & Informatics',
    summary:
      'Leadership, administration, and health IT to optimize operations, data, and patient safety across healthcare organizations.',
    modalId: 'opsModal-healthcare',
    modal: {
      title: 'Management and Informatics',
      image: '/images/career-imgs/health-imgs/health3.jpg',
      items: [
        { title: 'Hospital Administrator', text: 'Overseeing operations, finance, and quality control of healthcare facilities.', bgClass: 'bg-warning-subtle' },
        { title: 'Health Informatics Specialist', text: 'Managing patient data, EHR systems, and health IT security.', bgClass: 'bg-primary-subtle' },
        { title: 'Public Health Specialist', text: 'Analyzing community health trends and developing preventative programs.' }
      ]
    }
  }
]

const roadmap = [
  { step: 1, title: 'Entry & Foundations', text: 'CNA / Medical Assistant / Phlebotomist / Patient Care Tech', years: 'Years 0-2' },
  { step: 2, title: 'Technical & Allied Roles', text: 'RN / Radiologic Technologist / Respiratory Therapist / PTA', years: 'Years 2-5' },
  { step: 3, title: 'Advanced Clinical & Specialized', text: 'NP / PA / PT / OT / Clinical Specialist', years: 'Years 5-8' },
  { step: 4, title: 'Leadership & Systems', text: 'Healthcare Administrator / Clinical Director / Health Informatics Manager', years: 'Years 10+' }
]

const skills = {
  hard: [
    { icon: 'bi bi-calculator-fill', text: 'Anatomy & Physiology' },
    { icon: 'bi bi-table', text: 'Pharmacology' },
    { icon: 'bi bi-diagram-3-fill', text: 'Diagnostic Testing & Analysis' },
    { icon: 'bi bi-bar-chart-line-fill', text: 'Infection Control' },
    { icon: 'bi bi-cloud-check-fill', text: 'EHR / Medical Software' },
    { icon: 'bi bi-shield-check', text: 'Medical Terminology' }
  ],
  soft: [
    { icon: 'bi bi-people-fill', text: 'Empathy & Compassion' },
    { icon: 'bi bi-lightbulb-fill', text: 'Crisis Management' },
    { icon: 'bi bi-chat-dots-fill', text: 'Interprofessional Communication' },
    { icon: 'bi bi-lightbulb-fill', text: 'Attention to Detail' }
  ]
}

const future = [
  { title: 'Telehealth & Remote Monitoring', text: 'Growth in virtual care and remote patient monitoring platforms.', borderClass: 'border-custom-secondary', bgClass: 'bg-warning-subtle' },
  { title: 'Geriatric & Home Care', text: 'Aging populations increase demand for in-home and geriatric services.', borderClass: 'border-custom-primary', bgClass: 'bg-primary-subtle' },
  { title: 'Health Data Analytics', text: 'Using clinical data to improve outcomes, reduce costs, and guide public health responses.', borderClass: 'border-secondary', bgClass: 'bg-secondary-subtle' }
]

const cta = {
  title: 'Ready to Make an Impact?',
  text: 'The journey into healthcare is challenging but incredibly rewarding. Start by seeking clinical experience today to solidify your commitment and path.',
  button: 'Find Your Healthcare Calling'
}

export default function Healthcare() {
  return <CareerTemplate hero={hero} roles={roles} roadmap={roadmap} skills={skills} future={future} cta={cta} />
}
