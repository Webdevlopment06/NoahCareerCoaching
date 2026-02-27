import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'


export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const isActive = (path) => location.pathname === path
    const isSectionActive = (prefix) => location.pathname.startsWith(prefix)
    const [activeAboutSection, setActiveAboutSection] = useState(null)
    useEffect(() => {
        const nav = document.querySelector('nav.navbar.fixed-top')
        if (!nav) return

        const setBodyPadding = () => {
            document.body.style.paddingTop = `${nav.offsetHeight}px`
        }

        // set initial padding and update on resize
        setBodyPadding()
        window.addEventListener('resize', setBodyPadding)

        // update when bootstrap collapse toggles (mobile menu) change height
        const navMenu = document.getElementById('navMenu')
        const bsHandler = () => setBodyPadding()
        if (navMenu) {
            navMenu.addEventListener('shown.bs.collapse', bsHandler)
            navMenu.addEventListener('hidden.bs.collapse', bsHandler)
        }

        return () => {
            window.removeEventListener('resize', setBodyPadding)
            if (navMenu) {
                navMenu.removeEventListener('shown.bs.collapse', bsHandler)
                navMenu.removeEventListener('hidden.bs.collapse', bsHandler)
            }
            document.body.style.paddingTop = ''
        }
    }, [])

    // handle navigation to routes with hash fragments (smooth scroll)
    const handleHash = (e, path, id) => {
        e.preventDefault()
        if (location.pathname === path) {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } else {
                window.location.hash = id
            }
        } else {
            navigate(path)
            // small delay to allow route render, then scroll
            setTimeout(() => {
                const el = document.getElementById(id)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 120)
        }
    }

    // Highlight about-page sections based on scroll position range
    useEffect(() => {
        if (location.pathname !== '/about') {
            setActiveAboutSection(null)
            return
        }

        const ids = ['hero', 'founder', 'join', 'donation']

        const getSections = () => ids.map(id => document.getElementById(id)).filter(Boolean)

        const computeActive = () => {
            const sections = getSections()
            if (!sections.length) return

            const viewportMid = window.scrollY + window.innerHeight * 0.35

            let chosen = null
            for (const el of sections) {
                const top = el.offsetTop
                const bottom = top + el.offsetHeight
                if (viewportMid >= top && viewportMid < bottom) {
                    chosen = el.id
                    break
                }
            }

            // fallback: if nothing contains midpoint, pick nearest by distance
            if (!chosen) {
                let best = { id: null, dist: Infinity }
                for (const el of sections) {
                    const top = el.offsetTop
                    const mid = (top + (top + el.offsetHeight)) / 2
                    const d = Math.abs(mid - viewportMid)
                    if (d < best.dist) best = { id: el.id, dist: d }
                }
                chosen = best.id
            }

            setActiveAboutSection(chosen || null)
        }

        // update on scroll/resize and run once after a short delay to allow content render
        window.addEventListener('scroll', computeActive, { passive: true })
        window.addEventListener('resize', computeActive)

        const initial = setTimeout(computeActive, 120)

        return () => {
            clearTimeout(initial)
            window.removeEventListener('scroll', computeActive)
            window.removeEventListener('resize', computeActive)
            setActiveAboutSection(null)
        }
    }, [location.pathname])

    return (
        <>
            <nav className="navbar navbar-expand-lg nav-bg shadow-sm fixed-top">
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src="/images/nav-logo.png" height="40" alt="Logo" />
                    </Link>

                    {/* Mobile Toggle */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse justify-content-center" id="navMenu">
                        <ul className="navbar-nav mx-auto text-center">

                            {/* Home */}
                            <li className="nav-item" id="nav-home">
                                <Link
                                    className={`nav-link navfont ${isActive('/') ? 'nav-active active' : 'blackText'}`}
                                    style={isActive('/') ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                    to="/"
                                >
                                    HOME
                                </Link>
                            </li>

                            {/* About Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-about">
                                <a
                                    className={`nav-link dropdown-toggle navfont ${isSectionActive('/about') ? 'nav-active active' : 'blackText'}`}
                                    style={isSectionActive('/about') ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                    href="#"
                                    id="aboutDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    ABOUT
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="aboutDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-6">
                                                <a
                                                    className="dropdown-item"
                                                    href="/about#hero"
                                                    onClick={(e) => handleHash(e, '/about', 'hero')}
                                                    style={(location.pathname === '/about' && (location.hash === '#hero' || activeAboutSection === 'hero')) ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Mission Statement
                                                </a>
                                            </div>
                                            <div className="col-md-6">
                                                <a
                                                    className="dropdown-item"
                                                    href="/about#founder"
                                                    onClick={(e) => handleHash(e, '/about', 'founder')}
                                                    style={(location.pathname === '/about' && (location.hash === '#founder' || activeAboutSection === 'founder')) ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    About Our Founder
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <a
                                                    className="dropdown-item"
                                                    href="/about#join"
                                                    onClick={(e) => handleHash(e, '/about', 'join')}
                                                    style={(location.pathname === '/about' && (location.hash === '#join' || activeAboutSection === 'join')) ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    How To Join
                                                </a>
                                            </div>
                                            <div className="col-md-6">
                                                <a
                                                    className="dropdown-item"
                                                    href="/about#donation"
                                                    onClick={(e) => handleHash(e, '/about', 'donation')}
                                                    style={(location.pathname === '/about' && (location.hash === '#donation' || activeAboutSection === 'donation')) ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Donation
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Services Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-services">
                                <a
                                    className={`nav-link dropdown-toggle navfont ${isSectionActive('/services') ? 'nav-active active' : 'blackText'}`}
                                    style={isSectionActive('/services') ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                    href="#"
                                    id="servicesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    SERVICES
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="servicesDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/services/resume"
                                                    style={location.pathname === '/services/resume' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Resume Development
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/services/interview"
                                                    style={location.pathname === '/services/interview' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Interview Coaching
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/services/job-search"
                                                    style={location.pathname === '/services/job-search' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Job Search Strategy
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/services/professional-dev"
                                                    style={location.pathname === '/services/professional-dev' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Professional Development
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/services/internship"
                                                    style={location.pathname === '/services/internship' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Internship Pathways
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/services/volunteer"
                                                    style={location.pathname === '/services/volunteer' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Volunteer Opportunities
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Resources Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-resources">
                                <a
                                    className={`nav-link dropdown-toggle navfont ${isSectionActive('/resources') ? 'nav-active active' : 'blackText'}`}
                                    style={isSectionActive('/resources') ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                    href="#"
                                    id="resourcesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    RESOURCES
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="resourcesDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/resources/explore"
                                                    style={location.pathname === '/resources/explore' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Explore Careers
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/resources/assessments"
                                                    style={location.pathname === '/resources/assessments' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Career Assessments
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/resources/stories"
                                                    style={location.pathname === '/resources/stories' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Career Change Stories
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/resources/equal-employer"
                                                    style={location.pathname === '/resources/equal-employer' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Equal Employer Information
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/resources/youth"
                                                    style={location.pathname === '/resources/youth' ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                                >
                                                    Youth Information
                                                </Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/resources/state"
                                                    style={location.pathname === '/resources/state' ? { color: '#1800AD', fontWeight: 700 } : undefined}
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
                                    className={`nav-link navfont ${isActive('/contact') ? 'nav-active active' : 'blackText'}`}
                                    style={isActive('/contact') ? { color: '#1800AD', fontWeight: 700 } : undefined}
                                    to="/contact"
                                >
                                    GET INVOLVED
                                </Link>
                            </li>
                        </ul>

                        <div className="text-center">
                            <a href="#donate" className="btn btn-warning navfont ms-lg-3">GET FREE COACHING</a>
                        </div>
                        <div className="text-center">
                            <a href="#donate" className="btn btn-warning navfont ms-lg-3">DONATE</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
