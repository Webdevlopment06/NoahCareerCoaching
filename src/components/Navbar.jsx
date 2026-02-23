import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'


export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
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
                                <Link className="nav-link navfont blackText" to="/">HOME</Link>
                            </li>

                            {/* About Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-about">
                                <a className="nav-link dropdown-toggle navfont blackText" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" onClick={(e) => e.preventDefault()}>
                                    ABOUT
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="aboutDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-6">
                                                <Link className="dropdown-item" to="/about">Mission Statement</Link>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="dropdown-item" href="/about#founder" onClick={(e) => handleHash(e, '/about', 'founder')}>About Our Founder</a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <a className="dropdown-item" href="/about#join" onClick={(e) => handleHash(e, '/about', 'join')}>How To Join</a>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="dropdown-item" href="/about#donation" onClick={(e) => handleHash(e, '/about', 'donation')}>Donation</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Services Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-services">
                                <a className="nav-link dropdown-toggle navfont blackText" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" onClick={(e) => e.preventDefault()}>
                                    SERVICES
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="servicesDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/services/resume">Resume Development</Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/services/interview">Interview Coaching</Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/services/job-search">Job Search Strategy</Link>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/services/professional-dev">Professional Development</Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/services/internship">Internship Pathways</Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/services/volunteer">Volunteer Opportunities</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Resources Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-resources">
                                <a className="nav-link dropdown-toggle navfont blackText" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" onClick={(e) => e.preventDefault()}>
                                    RESOURCES
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="resourcesDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/resources/explore">Explore Careers</Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/resources/assessments">Career Assessments</Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/resources/stories">Career Change Stories</Link>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/resources/equal-employer">Equal Employer Information</Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/resources/youth">Youth Information</Link>
                                            </div>
                                            <div className="col-md-4">
                                                <Link className="dropdown-item" to="/resources/state">Resources By State</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Contact */}
                            <li className="nav-item" id="nav-contact">
                                <Link className="nav-link navfont blackText" to="/contact">GET INVOLVED</Link>
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
