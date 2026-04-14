import React from "react";
import { Routes, Route } from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Page imports (lazy-loaded for route-level code splitting)
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ResumeTemplates = React.lazy(
  () => import("./pages/services/ResumeTemplates"),
);

// Resources
const Youth = React.lazy(() => import("./pages/resources/Youth"));
const EqualE = React.lazy(() => import("./pages/resources/EqualE"));
const Assessments = React.lazy(() => import("./pages/resources/Assessments"));
const Stories = React.lazy(() => import("./pages/resources/Stories"));
const Explore = React.lazy(() => import("./pages/resources/Explore"));
const State = React.lazy(() => import("./pages/resources/State"));
const ArtsDesign = React.lazy(
  () => import("./pages/resources/careers/ArtsDesign"),
);
const BusinessManagement = React.lazy(
  () => import("./pages/resources/careers/BusinessManagement"),
);
const Education = React.lazy(
  () => import("./pages/resources/careers/Education"),
);
const Finance = React.lazy(() => import("./pages/resources/careers/Finance"));
const Healthcare = React.lazy(
  () => import("./pages/resources/careers/Healthcare"),
);
const Hospitality = React.lazy(
  () => import("./pages/resources/careers/Hospitality"),
);
const Law = React.lazy(() => import("./pages/resources/careers/Law"));
const Science = React.lazy(() => import("./pages/resources/careers/Science"));
const Technology = React.lazy(
  () => import("./pages/resources/careers/Technology"),
);
const Trades = React.lazy(() => import("./pages/resources/careers/Trades"));

// Services
const Resume = React.lazy(() => import("./pages/services/Resume"));
const Interview = React.lazy(() => import("./pages/services/Interview"));
const JobSearch = React.lazy(() => import("./pages/services/JobSearch"));
const ProfessionalDev = React.lazy(
  () => import("./pages/services/ProfessionalDev"),
);
const Volunteer = React.lazy(() => import("./pages/services/Volunteer"));
const InternshipPath = React.lazy(
  () => import("./pages/services/InternshipPath"),
);
const BuildAResume = React.lazy(() => import("./pages/services/BuildAResume"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <>
      <Navbar />
      <BackToTop />
      <ScrollToTop />
      <React.Suspense
        fallback={
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
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
          <Route
            path="/resources/career/arts-design"
            element={<ArtsDesign />}
          />
          <Route
            path="/resources/career/business-management"
            element={<BusinessManagement />}
          />
          <Route path="/resources/career/education" element={<Education />} />
          <Route path="/resources/career/finance" element={<Finance />} />
          <Route path="/resources/career/healthcare" element={<Healthcare />} />
          <Route
            path="/resources/career/hospitality"
            element={<Hospitality />}
          />
          <Route path="/resources/career/law" element={<Law />} />
          <Route path="/resources/career/science" element={<Science />} />
          <Route path="/resources/career/technology" element={<Technology />} />
          <Route path="/resources/career/trades" element={<Trades />} />

          {/* Services routes */}
          <Route path="/services/resume" element={<Resume />} />
          <Route path="/services/interview" element={<Interview />} />
          <Route path="/services/job-search" element={<JobSearch />} />
          <Route
            path="/services/professional-dev"
            element={<ProfessionalDev />}
          />
          <Route path="/services/volunteer" element={<Volunteer />} />
          <Route path="/services/internship" element={<InternshipPath />} />
          <Route path="/services/build-resume" element={<BuildAResume />} />
          <Route
            path="/services/resume-templates"
            element={<ResumeTemplates />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
      <Footer />
    </>
  );
}
