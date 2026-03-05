import React from 'react'
import SmoothScrollLink from '/src/components/SmoothScrollLink'

export default function Technology() {
	return (
		<>
			<section className="trades-hero-bg d-flex align-items-center justify-content-center py-5">
				<div className="container">
					<header className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
						<h1 className="display-3 fw-bolder text-dark mb-3">
							Your Future in <span className="text-custom-primary">Technology &amp; Software</span>
						</h1>
						<p className="fs-5 text-muted mx-auto mb-4 max-w-800">
							Careers in technology span software, infrastructure, and specialized
							roles—this guide highlights common paths and what you need to get
							started.
						</p>
						<div className="d-grid gap-3 d-md-flex justify-content-center">
							<SmoothScrollLink to="roles" className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark">
								Explore Roles
							</SmoothScrollLink>
							<SmoothScrollLink to="education" className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3">
								Find Your Path
							</SmoothScrollLink>
						</div>
					</header>
				</div>
			</section>

			<main className="container-xl py-4 py-lg-5">
				<section id="roles" className="mb-5">
					<h2 className="fs-2 fw-bold section-heading-custom text-dark">Key Technology &amp; Industry Roles</h2>
					<p className="text-muted mb-4">Explore common roles across software, infrastructure, and support.</p>

					<div className="container py-5">
						<div className="row g-4">
							<div className="col-lg-4">
								<div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
									<h3 className="fw-bold">Software &amp; Development</h3>
									<p className="text-muted">Build applications, services, and data systems used by millions.</p>
									<a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#techDevModal">Learn More →</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
									<h3 className="fw-bold">Infrastructure &amp; Ops</h3>
									<p className="text-muted">Design and maintain cloud, networks, and systems that scale.</p>
									<a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#techInfraModal">Learn More →</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
									<h3 className="fw-bold">Specialized &amp; Support</h3>
									<p className="text-muted">Security, design, and project roles that support product teams.</p>
									<a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#techSupportModal">Learn More →</a>
								</div>
							</div>
						</div>
					</div>

					<section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
						<div className="container">
							<h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">Technology Career Roadmap</h2>
							<div className="row g-4 text-center justify-content-center">
								<div className="col-lg-3">
									<div className="roadmap-node shadow">01</div>
									<h4 className="fw-bold mt-3">Entry Level</h4>
									<p className="small text-muted">Junior Engineer / Support<br /><span className="badge bg-warning text-dark">Years 0-2</span></p>
								</div>
								<div className="col-lg-3">
									<div className="roadmap-node shadow">02</div>
									<h4 className="fw-bold mt-3">Mid-Level</h4>
									<p className="small text-muted">Engineer / SRE / Specialist<br /><span className="badge bg-warning text-dark">Years 3-6</span></p>
								</div>
								<div className="col-lg-3">
									<div className="roadmap-node shadow">03</div>
									<h4 className="fw-bold mt-3">Senior / Lead</h4>
									<p className="small text-muted">Team Lead / Architect<br /><span className="badge bg-warning text-dark">Years 7-12</span></p>
								</div>
								<div className="col-lg-3">
									<div className="roadmap-node shadow">04</div>
									<h4 className="fw-bold mt-3">Manager / Principal</h4>
									<p className="small text-muted">Staff/Principal / Engineering Manager<br /><span className="badge bg-warning text-dark">Years 15+</span></p>
								</div>
							</div>
						</div>
					</section>
				</section>

				<section id="skills" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
					<h2 className="fs-2 fw-bold section-heading-custom text-dark">Essential Skills and Knowledge</h2>
					<p className="text-muted mb-4">Core technical skills, tooling, and collaboration practices.</p>
				</section>

				<section id="future" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
					<h2 className="fs-2 fw-bold section-heading-custom text-dark">Future Trends and Growth</h2>
				</section>
			</main>

			<div className="modal fade" id="techDevModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
				<div className="modal-dialog modal-dialog-centered modal-xl">
					<div className="modal-content border-0 rounded-4 shadow-lg">
						<div className="modal-header bg-warning text-black rounded-top-4">
							<h5 className="modal-title fw-bold">Software &amp; Development</h5>
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body p-4 p-md-5">
							<div className="row g-4">
								<div className="col-12 col-lg-6">
									<div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
										<img src="/images/career-imgs/tech-imgs/tech1.png" alt="Software Development Illustration" className="img-fluid rounded-2" />
									</div>
								</div>
								<div className="col-12 col-lg-6">
									<div className="row row-cols-1 row-cols-md-2 g-3">
										<div className="col">
											<div className="p-3 bg-light rounded-3 border h-100">
												<p className="fw-bold fs-5">Software Engineer</p>
												<p className="mb-0 text-muted small">Building, maintaining, and testing software applications.</p>
											</div>
										</div>
										<div className="col">
											<div className="p-3 bg-light rounded-3 border h-100">
												<p className="fw-bold fs-5">Mobile Developer</p>
												<p className="mb-0 text-muted small">Creating applications for iOS and Android platforms.</p>
											</div>
										</div>
										<div className="col">
											<div className="p-3 bg-light rounded-3 border h-100">
												<p className="fw-bold fs-5">DevOps Engineer</p>
												<p className="mb-0 text-muted small">Automation, CI/CD, bridging development and operations.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="techInfraModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
				<div className="modal-dialog modal-dialog-centered modal-xl">
					<div className="modal-content border-0 rounded-4 shadow-lg">
						<div className="modal-header bg-warning text-black rounded-top-4">
							<h5 className="modal-title fw-bold">Infrastructure &amp; Ops</h5>
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body p-4 p-md-5">
							<div className="row g-4 align-items-center">
								<div className="col-12 col-lg-6">
									<div className="d-flex flex-column gap-3 h-100">
										<div className="p-3 bg-warning-subtle rounded-3 border">
											<p className="fw-bold fs-5">Cloud Engineer</p>
											<p className="mb-0 text-muted small">Managing cloud platforms (AWS, Azure, GCP), IaC.</p>
										</div>
										<div className="p-3 bg-primary-subtle rounded-3 border">
											<p className="fw-bold fs-5">Network Architect</p>
											<p className="mb-0 text-muted small">Designing and managing computer networks.</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-6">
									<div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
										<img src="/images/career-imgs/tech-imgs/tech3.png" alt="Cloud Infrastructure Illustration" className="img-fluid rounded-2" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="techSupportModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
				<div className="modal-dialog modal-dialog-centered modal-xl">
					<div className="modal-content border-0 rounded-4 shadow-lg">
						<div className="modal-header bg-warning text-black rounded-top-4">
							<h5 className="modal-title fw-bold">Specialized &amp; Support Roles</h5>
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body p-4 p-md-5">
							<div className="row g-4">
								<div className="col-12 col-lg-6 order-lg-1">
									<div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
										<img src="/images/career-imgs/tech-imgs/tech2.png" alt="Specialized Roles Illustration" className="img-fluid rounded-2" />
									</div>
								</div>
								<div className="col-12 col-lg-6 order-lg-2">
									<div className="d-flex flex-column gap-3 h-100">
										<div className="p-3 bg-light rounded-3 border">
											<p className="fw-bold fs-5">Cybersecurity Analyst</p>
											<p className="mb-0 text-muted small">Protecting systems and data, incident response.</p>
										</div>
										<div className="p-3 bg-light rounded-3 border">
											<p className="fw-bold fs-5">UX/UI Designer</p>
											<p className="mb-0 text-muted small">Improving user experience and designing intuitive interfaces.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="tech-hero-bg d-flex align-items-center justify-content-center py-5">
				<div className="container">
					<section className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
						<h2 className="fs-3 fw-bold mb-3">Ready to Start Building?</h2>
						<p className="fs-5 mb-4 mx-auto max-w-700">Take the first step: build a project, join a bootcamp, or apply for internships.</p>
						<SmoothScrollLink to="roles" className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg">Choose Your Tech Career Path</SmoothScrollLink>
					</section>
				</div>
			</section>
		</>
	)
}


