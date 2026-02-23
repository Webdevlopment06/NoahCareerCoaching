import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'

// Page imports
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// Resources
import Youth from './pages/resources/Youth'
import EqualE from './pages/resources/EqualE'
import Assessments from './pages/resources/Assessments'
import Stories from './pages/resources/Stories'
import Explore from './pages/resources/Explore'
import State from './pages/resources/State'
import ArtsDesign from './pages/resources/careers/ArtsDesign'
import BusinessManagement from './pages/resources/careers/BusinessManagement'
import Education from './pages/resources/careers/Education'
import Finance from './pages/resources/careers/Finance'
import Healthcare from './pages/resources/careers/Healthcare'
import Hospitality from './pages/resources/careers/Hospitality'
import Law from './pages/resources/careers/Law'
import Science from './pages/resources/careers/Science'
import Technology from './pages/resources/careers/Technology'
import Trades from './pages/resources/careers/Trades'

// Services
import Resume from './pages/services/Resume'
import Interview from './pages/services/Interview'
import JobSearch from './pages/services/JobSearch'
import ProfessionalDev from './pages/services/ProfessionalDev'
import Volunteer from './pages/services/Volunteer'
import InternshipPath from './pages/services/InternshipPath'
import BuildAResume from './pages/services/BuildAResume'

export default function App() {
  return (
    <>
      <Navbar />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Resources routes */}
        <Route path="/resources/youth" element={<Youth />} />
        <Route path="/resources/equal-employer" element={<EqualE />} />
        <Route path="/resources/assessments" element={<Assessments />} />
        <Route path="/resources/explore" element={<Explore />} />
        <Route path="/resources/state" element={<State />} />
        <Route path="/resources/stories" element={<Stories />} />
        {/* Career pages */}
        <Route path="/resources/career/arts-design" element={<ArtsDesign />} />
        <Route path="/resources/career/business-management" element={<BusinessManagement />} />
        <Route path="/resources/career/education" element={<Education />} />
        <Route path="/resources/career/finance" element={<Finance />} />
        <Route path="/resources/career/healthcare" element={<Healthcare />} />
        <Route path="/resources/career/hospitality" element={<Hospitality />} />
        <Route path="/resources/career/law" element={<Law />} />
        <Route path="/resources/career/science" element={<Science />} />
        <Route path="/resources/career/technology" element={<Technology />} />
        <Route path="/resources/career/trades" element={<Trades />} />

        {/* Services routes */}
        <Route path="/services/resume" element={<Resume />} />
        <Route path="/services/interview" element={<Interview />} />
        <Route path="/services/job-search" element={<JobSearch />} />
        <Route path="/services/professional-dev" element={<ProfessionalDev />} />
        <Route path="/services/volunteer" element={<Volunteer />} />
        <Route path="/services/internship" element={<InternshipPath />} />
      </Routes>
    </>
  )
}
