import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isSectionActive = (prefix) => location.pathname.startsWith(prefix);
  const [activeAboutSection, setActiveAboutSection] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const setBodyPadding = () => {
      document.body.style.paddingTop = `${nav.offsetHeight}px`;
    };

    // set initial padding and update on resize
    setBodyPadding();
    window.addEventListener("resize", setBodyPadding);

    // update when bootstrap collapse toggles (mobile menu) change height
    const navMenu = nav.querySelector("#navMenu");
    const bsHandler = () => setBodyPadding();
    if (navMenu) {
      navMenu.addEventListener("shown.bs.collapse", bsHandler);
      navMenu.addEventListener("hidden.bs.collapse", bsHandler);
    }

    return () => {
      window.removeEventListener("resize", setBodyPadding);
      if (navMenu) {
        navMenu.removeEventListener("shown.bs.collapse", bsHandler);
        navMenu.removeEventListener("hidden.bs.collapse", bsHandler);
      }
      document.body.style.paddingTop = "";
    };
  }, []);

  // handle navigation to routes with hash fragments (smooth scroll)
  const handleHash = (e, path, id) => {
    e.preventDefault();
    if (location.pathname === path) {
      const el = document.getElementById(id);
      if (el) {
        const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
        const extra = 12; // small extra offset in px
        const top =
          el.getBoundingClientRect().top + window.scrollY - navHeight - extra;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      } else {
        window.location.hash = id;
      }
    } else {
      navigate(path);
      // small delay to allow route render, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
          const extra = 12;
          const top =
            el.getBoundingClientRect().top + window.scrollY - navHeight - extra;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        }
      }, 120);
    }
  };

  // Highlight about-page sections based on scroll position range
  useEffect(() => {
    if (location.pathname !== "/about") {
      setActiveAboutSection(null);
      return;
    }

    const ids = ["hero", "founder", "join", "donation"];

    const getSections = () =>
      ids.map((id) => document.getElementById(id)).filter(Boolean);

    const computeActive = () => {
      const sections = getSections();
      if (!sections.length) return;

      const viewportMid = window.scrollY + window.innerHeight * 0.35;

      let chosen = null;
      for (const el of sections) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (viewportMid >= top && viewportMid < bottom) {
          chosen = el.id;
          break;
        }
      }

      // fallback: if nothing contains midpoint, pick nearest by distance
      if (!chosen) {
        let best = { id: null, dist: Infinity };
        for (const el of sections) {
          const top = el.offsetTop;
          const mid = (top + (top + el.offsetHeight)) / 2;
          const d = Math.abs(mid - viewportMid);
          if (d < best.dist) best = { id: el.id, dist: d };
        }
        chosen = best.id;
      }

      setActiveAboutSection(chosen || null);
    };

    // update on scroll/resize and run once after a short delay to allow content render
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);

    const initial = setTimeout(computeActive, 120);

    return () => {
      clearTimeout(initial);
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
      setActiveAboutSection(null);
    };
  }, [location.pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className="navbar navbar-expand-lg nav-bg shadow-sm fixed-top"
      >
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/images/nav-logo.png" height="40" alt="Logo" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navMenu"
          >
            <ul className="navbar-nav mx-auto text-center">
              {/* Home */}
              <li className="nav-item" id="nav-home">
                <Link
                  className={`nav-link navfont ${isActive("/") ? "nav-active active" : "blackText"}`}
                  to="/"
                >
                  HOME
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown position-static" id="nav-about">
                <button
                  className={`nav-link dropdown-toggle navfont ${isSectionActive("/about") ? "nav-active active" : "blackText"}`}
                  type="button"
                  id="aboutDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT
                </button>
                <div
                  className="dropdown-menu w-100 p-4 text-center"
                  aria-labelledby="aboutDropdown"
                >
                  <div className="container">
                    <div className="row mb-2">
                      <div className="col-md-6">
                        <a
                          className={`dropdown-item ${location.pathname === "/about" && (location.hash === "#hero" || activeAboutSection === "hero") ? "nav-active" : ""}`}
                          href="/about#hero"
                          onClick={(e) => handleHash(e, "/about", "hero")}
                        >
                          Mission Statement
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a
                          className={`dropdown-item ${location.pathname === "/about" && (location.hash === "#founder" || activeAboutSection === "founder") ? "nav-active" : ""}`}
                          href="/about#founder"
                          onClick={(e) => handleHash(e, "/about", "founder")}
                        >
                          About Our Founder
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <a
                          className={`dropdown-item ${location.pathname === "/about" && (location.hash === "#join" || activeAboutSection === "join") ? "nav-active" : ""}`}
                          href="/about#join"
                          onClick={(e) => handleHash(e, "/about", "join")}
                        >
                          How To Join
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a
                          className={`dropdown-item ${location.pathname === "/about"  ? "nav-active" : ""}`}
                          href="https://givebutter.com/I7JPWd"
                          target="blank"
                          rel="noopener noreferrer"
                          
                        >
                          Donation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Services Dropdown */}
              <li
                className="nav-item dropdown position-static"
                id="nav-services"
              >
                <button
                  className={`nav-link dropdown-toggle navfont ${isSectionActive("/services") ? "nav-active active" : "blackText"}`}
                  type="button"
                  id="servicesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </button>
                <div
                  className="dropdown-menu w-100 p-4 text-center"
                  aria-labelledby="servicesDropdown"
                >
                  <div className="container">
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/services/resume" ? "nav-active" : ""}`}
                          to="/services/resume"
                        >
                          Resume Development
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/services/interview" ? "nav-active" : ""}`}
                          to="/services/interview"
                        >
                          Interview Coaching
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/services/job-search" ? "nav-active" : ""}`}
                          to="/services/job-search"
                        >
                          Job Search Strategy
                        </Link>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/services/professional-dev" ? "nav-active" : ""}`}
                          to="/services/professional-dev"
                        >
                          Professional Development
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/services/internship" ? "nav-active" : ""}`}
                          to="/services/internship"
                        >
                          Internship Pathways
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/services/volunteer" ? "nav-active" : ""}`}
                          to="/services/volunteer"
                        >
                          Volunteer Opportunities
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Resources Dropdown */}
              <li
                className="nav-item dropdown position-static"
                id="nav-resources"
              >
                <button
                  className={`nav-link dropdown-toggle navfont ${isSectionActive("/resources") ? "nav-active active" : "blackText"}`}
                  type="button"
                  id="resourcesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RESOURCES
                </button>
                <div
                  className="dropdown-menu w-100 p-4 text-center"
                  aria-labelledby="resourcesDropdown"
                >
                  <div className="container">
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/resources/explore" || location.pathname.startsWith("/resources/career") ? "nav-active" : ""}`}
                          to="/resources/explore"
                        >
                          Explore Careers
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/resources/assessments" ? "nav-active" : ""}`}
                          to="/resources/assessments"
                        >
                          Career Assessments
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/resources/stories" ? "nav-active" : ""}`}
                          to="/resources/stories"
                        >
                          Career Change Stories
                        </Link>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/resources/equal-employer" ? "nav-active" : ""}`}
                          to="/resources/equal-employer"
                        >
                          Equal Employer Information
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/resources/youth" ? "nav-active" : ""}`}
                          to="/resources/youth"
                        >
                          Youth Information
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          className={`dropdown-item ${location.pathname === "/resources/state" ? "nav-active" : ""}`}
                          to="/resources/state"
                        >
                          Resources By State
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Contact */}
              <li className="nav-item" id="nav-contact">
                <Link
                  className={`nav-link navfont ${isActive("/contact") ? "nav-active active" : "blackText"}`}
                  to="/contact"
                >
                  GET INVOLVED
                </Link>
              </li>
            </ul>

            <div className="text-center">
              <a href="/contact" className="btn btn-warning navfont ms-lg-3">
                GET FREE COACHING
              </a>
            </div>
            <div className="text-center">
              <a
                href="/about#donation"
                onClick={(e) => handleHash(e, "/about", "donation")}
                className="btn btn-warning navfont ms-lg-3"
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
