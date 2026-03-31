import React from 'react'
import CareerTemplate from '/src/components/CareerTemplate'

const hero = {
  bgClass: 'finance-hero-bg',
  title: (
    <>
      Your Future in <span className="text-white">Finance & Accounting</span>
    </>
  ),
  blurb:
    'Finance careers are the engine of the global economy, offering roles in investment, risk management, advisory, and detailed corporate accounting.',
  ctaPrimary: 'Explore Roles',
  ctaSecondary: 'Find Your Path',
  rolesHeading: 'Key Finance & Accounting Roles',
  rolesSub: 'Detailing high-impact roles across investment, corporate finance, and public accounting.',
  roadmapHeading: 'Finance Career Roadmap',
  skillsHeading: 'Essential Skills and Knowledge',
  futureHeading: 'Future Trends and Growth'
}

const roles = [
  {
    icon: 'bi bi-lightbulb',
    title: 'Investment and Advisory',
    summary:
      'This field focuses on helping individuals and organizations manage investments, assess risk, and plan for financial growth. Professionals analyze markets, advise clients, and build strategies to achieve long-term financial goals.',
    modalId: 'strategyModal-finance',
    modal: {
      title: 'Investment and Advisory',
      image: '/images/career-imgs/finance-imgs/finance1.png',
      items: [
        { title: 'Investment Banker', text: 'Mergers & Acquisitions (M&A), raising capital (IPOs), and financial restructuring for corporations.', bgClass: 'bg-warning-subtle' },
        { title: 'Financial Advisor', text: 'Providing personalized financial planning and wealth management for individuals and families.' },
        { title: 'Equity Research Analyst', text: 'Analyzing public companies to recommend stocks (buy, sell, hold) to investment clients.' },
        { title: 'Portfolio Manager', text: 'Building and managing investment portfolios (stocks, bonds, assets) to meet specific financial goals.', bgClass: 'bg-primary-subtle' }
      ]
    }
  },
  {
    icon: 'bi bi-graph-up-arrow',
    title: 'Corporate Finance & Management',
    summary:
      'Careers in this area support the financial performance and strategic direction of businesses. Professionals manage budgets, analyze performance, and guide decisions that drive growth and efficiency.',
    modalId: 'financeModal-finance',
    modal: {
      title: 'Corporate Finance and Management',
      image: '/images/career-imgs/finance-imgs/finance2.png',
      items: [
        { title: 'Financial Planning & Analysis (FP&A)', text: 'Budgeting, forecasting, and long-term financial modeling to guide corporate strategy.', bgClass: 'bg-warning-subtle' },
        { title: 'Treasury Analyst', text: "Managing a company's liquidity, cash flow, and raising debt/equity financing.", bgClass: 'bg-primary-subtle' },
        { title: 'Chief Financial Officer (CFO)', text: 'Top executive overseeing all financial operations, strategy, and risk management.' }
      ]
    }
  },
  {
    icon: 'bi bi-gear',
    title: 'Accounting & Compliance',
    summary:
      'This field ensures financial accuracy, transparency, and regulatory compliance. Professionals prepare reports, oversee audits, and help organizations meet legal and financial standards.',
    modalId: 'opsModal-finance',
    modal: {
      title: 'Accounting and Compliance',
      image: '/images/career-imgs/finance-imgs/finance3.png',
      items: [
        { title: 'Certified Public Accountant (CPA)', text: 'Auditing, tax preparation, and financial statement preparation for external reporting.', bgClass: 'bg-warning-subtle' },
        { title: 'Forensic Accountant', text: 'Investigating financial crimes, fraud, and disputes using deep accounting knowledge.', bgClass: 'bg-primary-subtle' },
        { title: 'Internal Auditor', text: "Evaluating a company's internal controls, governance, and risk management processes." }
      ]
    }
  }
]

const roadmap = [
  { step: 1, title: 'Exploration & Foundations', text: 'Finance Intern / Accounting or Banking Assistant / Client Service Associate', years: 'Years 0-2' },
  { step: 2, title: 'Education & Entry-Level Roles', text: 'Financial Analyst / Staff Accountant / Investment or Credit Analyst', years: 'Years 2-5' },
  { step: 3, title: 'Professional Growth & Specialization', text: 'Senior Financial Analyst / Financial Advisor / Finance or Accounting Manager', years: 'Years 5-10' },
  { step: 4, title: 'Leadership & Executive Roles', text: 'Finance Director / Portfolio Manager / Controller or Chief Financial Officer (CFO)', years: 'Years 10+' }
]

const skills = {
  hard: [
    { icon: 'bi bi-calculator-fill', text: 'Financial Modeling (LBO, DCF)' },
    { icon: 'bi bi-table', text: 'Advanced Excel & VBA' },
    { icon: 'bi bi-diagram-3-fill', text: 'Accounting Standards (GAAP/IFRS)' },
    { icon: 'bi bi-bar-chart-line-fill', text: 'Risk Management' },
    { icon: 'bi bi-cloud-check-fill', text: 'Data Visualization (Tableau/Power BI)' },
    { icon: 'bi bi-shield-check', text: 'Valuation Methods' }
  ],
  soft: [
    { icon: 'bi bi-people-fill', text: 'Integrity and Ethical Judgment' },
    { icon: 'bi bi-lightbulb-fill', text: 'Attention to Detail and Accuracy' },
    { icon: 'bi bi-chat-dots-fill', text: 'Client Management and Communication' },
    { icon: 'bi bi-lightbulb-fill', text: 'Ability to Handle High Pressure' }
  ]
}

const future = [
  { title: 'FinTech and Automation', text: 'Automation of routine accounting and transactional tasks. Demand for professionals with coding skills (Python, R) for algorithmic trading and data science.', borderClass: 'border-custom-secondary', bgClass: 'bg-warning-subtle' },
  { title: 'Regulatory and Compliance Focus', text: 'Increased scrutiny means roles in Risk Management, Anti-Money Laundering (AML), and regulatory compliance are expanding rapidly.', borderClass: 'border-custom-primary', bgClass: 'bg-primary-subtle' },
  { title: 'Sustainable and ESG Investing', text: 'Growing client demand for Environmental, Social, and Governance (ESG) investments creates new specialized analysis roles.', borderClass: 'border-secondary', bgClass: 'bg-secondary-subtle' }
]

const cta = {
  title: 'Ready to Count Success?',
  text: 'Finance is more than just math; it\'s the architecture of the global economy. Build a career that offers stability, challenge, and immense growth potential.',
  button: 'Calculate Your Path'
}

export default function Finance() {
  return <CareerTemplate hero={hero} roles={roles} roadmap={roadmap} skills={skills} future={future} cta={cta} />
}
