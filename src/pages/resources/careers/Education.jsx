import React from 'react'
import CareerTemplate from '/src/components/CareerTemplate'

const hero = {
  bgClass: 'education-hero-bg',
  title: (
    <>
      Your Future in <span className="text-white">Education & Training</span>
    </>
  ),
  blurb:
    'Empower the next generation and shape professional talent. Careers in teaching, administration, and corporate learning are deeply impactful and constantly evolving.',
  ctaPrimary: 'Explore Roles',
  ctaSecondary: 'Find Your Path',
  rolesHeading: 'Key Education & Management Roles',
  rolesSub: 'Detailing common and specialized roles across academic and corporate settings.',
  roadmapHeading: 'Education & Training Career Roadmap',
  skillsHeading: 'Essential Skills and Knowledge',
  futureHeading: 'Future Trends and Growth'
}

const roles = [
  {
    icon: 'bi bi-lightbulb',
    title: 'Academic Teaching & Instruction',
    summary:
      'This area focuses on educating students in formal academic settings such as schools, colleges, and universities. Professionals design curricula, deliver instruction, assess learning outcomes, and support students’ intellectual and personal development across a wide range of subjects and grade levels.',
    modalId: 'strategyModal-education',
    modal: {
      title: 'Academic Teaching & Instruction',
      image: '/images/career-imgs/education-imgs/Education1.jpg',
      items: [
        { title: 'Classroom Teacher (K-12)', text: 'Delivering curriculum, classroom management, and student development.', bgClass: 'bg-warning-subtle' },
        { title: 'University Professor', text: 'Advanced subject teaching, academic research, and publishing.' },
        { title: 'Special Education Teacher', text: 'Developing and implementing individualized education programs (IEPs).' },
        { title: 'Tutor / Academic Coach', text: 'Providing one-on-one or small-group instruction for specific subjects or skills.', bgClass: 'bg-primary-subtle' }
      ]
    }
  },
  {
    icon: 'bi bi-graph-up-arrow',
    title: 'Corporate & Specialized Training',
    summary:
      'This field centers on developing employee skills and knowledge within organizations or specialized industries. Roles include designing training programs, facilitating workshops, onboarding new hires, and delivering professional development to improve performance, compliance, and career growth.',
    modalId: 'financeModal-education',
    modal: {
      title: 'Corporate & Specialized Training',
      image: '/images/career-imgs/education-imgs/Education2.jpg',
      items: [
        { title: 'Instructional Designer (ID)', text: 'Applying learning theories to design effective training programs (eLearning, blended learning).', bgClass: 'bg-warning-subtle' },
        { title: 'Training & Development Specialist', text: 'Delivering, assessing, and managing professional development within a company.', bgClass: 'bg-primary-subtle' },
        { title: 'Curriculum Developer', text: 'Creating and updating core educational content, aligned with standards and learning objectives.' }
      ]
    }
  },
  {
    icon: 'bi bi-gear',
    title: 'Leadership & Support Roles',
    summary:
      'Leadership and support positions guide, manage, and strengthen educational or organizational environments. These roles involve mentoring others, overseeing programs or teams, shaping strategy, and ensuring individuals have the resources and support needed to succeed.',
    modalId: 'opsModal-education',
    modal: {
      title: 'Leadership & Support Roles',
      image: '/images/career-imgs/education-imgs/Education3.jpg',
      items: [
        { title: 'School Principal / Administrator', text: 'Overseeing school operations, staff management, budgeting, and community relations.', bgClass: 'bg-warning-subtle' },
        { title: 'Librarian / Media Specialist', text: 'Managing information resources and teaching digital literacy skills to students and staff.', bgClass: 'bg-primary-subtle' },
        { title: 'School Counselor / Psychologist', text: 'Providing mental health support, career guidance, and academic advising.' }
      ]
    }
  }
]

const roadmap = [
  { step: 1, title: 'Exploration & Foundations', text: 'Education Assistant / Classroom Aide/ Tutor or After-School Instructor/ Camp Counselor or Youth Program Leader', years: 'Years 0-2' },
  { step: 2, title: 'Formal Education & Credentialing', text: 'Student Teacher / Teaching Intern / Substitute Teacher', years: 'Years 2-5' },
  { step: 3, title: 'Professional Practice & Growth', text: 'K–12 Teacher/ Postsecondary Instructor /Corporate Trainer / Instructional Specialist / Special Education Teacher', years: 'Years 5-10' },
  { step: 4, title: 'Specialization, Leadership, or Advancement', text: 'School Administrator (Principal, Assistant Principal) / Instructional Coach or Curriculum Director / Higher Education Faculty / Training Manager or Education Consultant', years: 'Years 10+' }
]

const skills = {
  hard: [
    { icon: 'bi bi-calculator-fill', text: 'Classroom Management' },
    { icon: 'bi bi-table', text: 'Assessment and Evaluation Methods' },
    { icon: 'bi bi-diagram-3-fill', text: 'Learning Management Systems (LMS)' },
    { icon: 'bi bi-bar-chart-line-fill', text: 'Differentiated Instruction' },
    { icon: 'bi bi-cloud-check-fill', text: 'Curriculum Mapping' },
    { icon: 'bi bi-shield-check', text: 'Subject Matter Expertise' }
  ],
  soft: [
    { icon: 'bi bi-people-fill', text: 'Patience and Empathy' },
    { icon: 'bi bi-lightbulb-fill', text: 'Dynamic Communication and Public Speaking' },
    { icon: 'bi bi-chat-dots-fill', text: 'Conflict Resolution and Diplomacy with parents/students' },
    { icon: 'bi bi-lightbulb-fill', text: 'Organizational and Planning Skills' }
  ]
}

const future = [
  { title: 'Personalized & Adaptive Learning', text: 'Growth in roles utilizing AI to tailor educational content to individual student paces. Need for educators proficient in data analytics to track student progress.', borderClass: 'border-custom-secondary', bgClass: 'bg-warning-subtle' },
  { title: 'Rise of EdTech and Hybrid Models', text: 'Increased integration of digital tools, virtual classrooms, and blended learning environments, requiring digital fluency.', borderClass: 'border-custom-primary', bgClass: 'bg-primary-subtle' },
  { title: 'Corporate L&D Focus', text: 'Learning & Development (L&D) departments are growing rapidly as companies invest in upskilling and reskilling their workforce.', borderClass: 'border-secondary', bgClass: 'bg-secondary-subtle' }
]

const cta = {
  title: 'Ready to Inspire and Lead?',
  text: 'Every great mind was shaped by a dedicated educator. Take the next step to empower others and make a lasting impact in your community.',
  button: 'Connect with an Education Mentor'
}

export default function Education() {
  return <CareerTemplate hero={hero} roles={roles} roadmap={roadmap} skills={skills} future={future} cta={cta} />
}
