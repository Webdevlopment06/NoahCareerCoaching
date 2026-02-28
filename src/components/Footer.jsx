
import React from 'react'

export default function Footer() {
	return (
		<footer className="bg-white text-dark pt-5 mb-4 border-top">
			<div className="container">
				<div className="row gy-4">
					<div className="col-md-4">
						<h5 className="fw-bold">Noah Career Coaching</h5>
						<p className="small text-muted">Career coaching, resume support, and interview preparation for jobseekers at every stage.</p>
						<ul className="list-unstyled small">
							<li><i className="bi bi-envelope-fill me-2"></i><a className="text-decoration-none text-dark" href="mailto:noahcareercoaching@gmail.com">noahcareercoaching@gmail.com</a></li>
							<li className="mt-1"><i className="bi bi-telephone-fill me-2"></i><a className="text-decoration-none text-dark" href="tel:+12163029179">(216) 302-9179</a></li>
						</ul>
					</div>

					<div className="col-md-3">
						<h6 className="fw-bold">Explore</h6>
						<ul className="list-unstyled small">
							<li><a className="text-decoration-none text-dark" href="/services">Services</a></li>
							<li className="mt-1"><a className="text-decoration-none text-dark" href="/resources">Resources</a></li>
							<li className="mt-1"><a className="text-decoration-none text-dark" href="/about">About</a></li>
							<li className="mt-1"><a className="text-decoration-none text-dark" href="/contact">Contact</a></li>
						</ul>
					</div>

					<div className="col-md-3">
						<h6 className="fw-bold">Support</h6>
						<ul className="list-unstyled small">
							<li><a className="text-decoration-none text-dark" href="/services/resume-templates">Resume Templates</a></li>
							<li className="mt-1"><a className="text-decoration-none text-dark" href="/services/build-resume">Build a Resume</a></li>
							<li className="mt-1"><a className="text-decoration-none text-dark" href="/services/interview">Interview Help</a></li>
						</ul>
					</div>

					<div className="col-md-2">
						<h6 className="fw-bold">Follow</h6>
						<div className="d-flex gap-2">
							<a className="text-dark fs-5" href="https://www.linkedin.com/company/noah-career-coaching" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
							<a className="text-dark fs-5" href="https://www.instagram.com/noahcareercoaching/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
							<a className="text-dark fs-5" href="https://www.tiktok.com/@noahcareercoaching" target="_blank" rel="noreferrer"><i className="bi bi-camera-video"></i></a>
						</div>
					</div>
				</div>

				<hr className="border-secondary my-4" />

				<div className="row align-items-center">
					<div className="col-md-6 text-center text-md-start small text-muted">© {new Date().getFullYear()} Noah Career Coaching — All rights reserved.</div>
					<div className="col-md-6 text-center text-md-end small">
						<a className="text-decoration-none text-dark me-3" href="/privacy">Privacy</a>
						<a className="text-decoration-none text-dark" href="/terms">Terms</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
