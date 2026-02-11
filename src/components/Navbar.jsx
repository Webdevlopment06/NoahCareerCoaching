import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav-bg shadow-sm fixed-top">
                <div className="container">
                    {/* Logo */}
                    <a className="navbar-brand" href="/src/index.html">
                        <img src="/images/nav-logo.png" height="40" alt="Logo" />
                    </a>

                    {/* Mobile Toggle */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    {/* Links */}
                    <div className="collapse navbar-collapse justify-content-center" id="navMenu">
                        <ul className="navbar-nav mx-auto text-center">

                            {/* Home */}
                            <li className="nav-item" id="nav-home">
                                <a className="nav-link navfont blackText" href="/src/index.html">HOME</a>
                            </li>

                            {/* About Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-about">
                                <a className="nav-link dropdown-toggle navfont blackText" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
                                    ABOUT
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="aboutDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-6">
                                                <a className="dropdown-item" href="/src/about.html">Mission Statement</a>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="dropdown-item" href="/src/about.html#founder">About Our Founder</a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <a className="dropdown-item" href="/src/about.html#join">How To Join</a>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="dropdown-item" href="/src/about.html#donation">Donation</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Services Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-services">
                                <a className="nav-link dropdown-toggle navfont blackText" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
                                    SERVICES
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="servicesDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/services/resume.html">Resume Development</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/services/interview.html">Interview Coaching</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/services/jobSearch.html">Job Search Strategy</a>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/services/professionalDev.html">Professional Development</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/services/internshipPath.html">Internship Pathways</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/services/volunteer.html">Volunteer Opportunities</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Resources Dropdown */}
                            <li className="nav-item dropdown position-static" id="nav-resources">
                                <a className="nav-link dropdown-toggle navfont blackText" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown">
                                    RESOURCES
                                </a>
                                <div className="dropdown-menu w-100 p-4 text-center" aria-labelledby="resourcesDropdown">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/resources/explore.html">Explore Careers</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/resources/assessments.html">Career Assessments</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/resources/stories.html">Career Change Stories</a>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/resources/equalE.html">Equal Employer Information</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/resources/youth.html">Youth Information</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="/src/resources/state.html">Resources By State</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Contact */}
                            <li className="nav-item" id="nav-contact">
                                <a className="nav-link navfont blackText" href="/src/contact.html">GET INVOLVED</a>
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
