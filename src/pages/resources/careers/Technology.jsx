import React from 'react'
import SmoothScrollLink from '/src/components/SmoothScrollLink'
import RoleCard from '/src/components/RoleCard'

export default function Technology() {
	return (
		<>
			<section className="tech-hero-bg d-flex align-items-center justify-content-center py-5">
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
								<RoleCard
									icon="bi bi-code-slash"
									title="Software &amp; Development"
									modalTarget="#techDevModal"
								>
									Design, build, and maintain scalable applications, APIs, and data platforms. Collaborate with product and design, write tests, and optimize performance to deliver reliable user experiences at scale.
								</RoleCard>
							</div>
							<div className="col-lg-4">
								<RoleCard
									icon="bi bi-cloud-arrow-up-fill"
									title="Infrastructure &amp; Ops"
									modalTarget="#techInfraModal"
								>
									Architect and operate cloud platforms, CI/CD pipelines, and networking. Focus on automation, observability, reliability engineering, and incident response to keep services secure and performant.
								</RoleCard>
							</div>
							<div className="col-lg-4">
								<RoleCard
									icon="bi bi-shield-lock-fill"
									title="Specialized &amp; Support"
									modalTarget="#techSupportModal"
								>
									Specialized roles—cybersecurity, UX/UI, data, and project management—that protect systems, shape product experiences, and coordinate cross-functional delivery to help teams ship safely and effectively.
								</RoleCard>
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
					<div className="row g-5">
						<div className="col-lg-6">
							<h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">Hard Skills (Technical)</h3>
							<div className="row g-4">
								<div className="col-12 d-flex align-items-start">
									<i className="bi bi-code-slash me-3 fs-3 text-f1b327" />
									<div>
										<div className="fw-medium">Programming &amp; Data Structures</div>
										<p className="small text-muted mb-0">Strong fundamentals in at least one language (JavaScript, Python, Java), algorithms, and design patterns.</p>
									</div>
								</div>
								<div className="col-12 d-flex align-items-start">
									<i className="bi bi-database me-3 fs-3 text-f1b327" />
									<div>
										<div className="fw-medium">Databases &amp; Data Engineering</div>
										<p className="small text-muted mb-0">SQL, NoSQL, ETL basics, and working with data pipelines.</p>
									</div>
								</div>
								<div className="col-12 d-flex align-items-start">
									<i className="bi bi-cloud-upload me-3 fs-3 text-f1b327" />
									<div>
										<div className="fw-medium">Cloud &amp; Infrastructure</div>
										<p className="small text-muted mb-0">Familiarity with AWS/Azure/GCP, containers, and CI/CD workflows.</p>
									</div>
								</div>
								<div className="col-12 d-flex align-items-start">
									<i className="bi bi-shield-lock-fill me-3 fs-3 text-f1b327" />
									<div>
										<div className="fw-medium">Security &amp; Testing</div>
										<p className="small text-muted mb-0">Secure coding practices, automated testing, and basic threat awareness.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">Soft Skills (Collaboration)</h3>
							<div className="row g-4">
								<div className="col-12 d-flex align-items-center">
									<i className="bi bi-people-fill me-3 fs-3 text-f1b327" />
									<span className="fw-medium">Communication &amp; Cross-Functional Work</span>
								</div>
								<div className="col-12 d-flex align-items-center">
									<i className="bi bi-gear-fill me-3 fs-3 text-f1b327" />
									<span className="fw-medium">Problem Solving &amp; Ownership</span>
								</div>
								<div className="col-12 d-flex align-items-center">
									<i className="bi bi-clock-history me-3 fs-3 text-f1b327" />
									<span className="fw-medium">Agile Practices &amp; Time Management</span>
								</div>
								<div className="col-12 d-flex align-items-center">
									<i className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327" />
									<span className="fw-medium">Continuous Learning &amp; Curiosity</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="future" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
					<h2 className="fs-2 fw-bold section-heading-custom text-dark">Future Trends and Growth</h2>
					<p className="text-muted mb-4">Where the industry is headed and the skills that will grow in demand.</p>
					<div className="row g-4">
						<div className="col-md-4">
							<div className="p-3 border-start border-4 border-custom-secondary bg-warning-subtle rounded-3">
								<h3 className="fs-5 fw-semibold text-custom-secondary mb-2">AI &amp; Machine Learning</h3>
								<p className="small text-muted mb-0">AI is reshaping product features, tooling, and developer workflows—skills in ML pipelines and model ops will be valuable.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="p-3 border-start border-4 border-custom-primary bg-primary-subtle rounded-3">
								<h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">Cloud-Native &amp; Edge</h3>
								<p className="small text-muted mb-0">Serverless, containers, and edge computing enable scalable, distributed systems—expertise in cloud platforms remains essential.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
								<h3 className="fs-5 fw-semibold text-secondary mb-2">Security &amp; Privacy</h3>
								<p className="small text-muted mb-0">As online systems grow, secure development, privacy-by-design, and regulatory compliance become non-negotiable.</p>
							</div>
						</div>
					</div>
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
										<img src="/images/career-imgs/tech-imgs/tech1.png" alt="Software Development Illustration" className="img-fluid rounded-3 shadow-sm" />
									</div>
								</div>
								<div className="col-12 col-lg-6">
									<div className="row g-3">
										<div className="col-12">
											<div className="p-3 bg-warning-subtle rounded-3 border h-100">
												<p className="fw-bold fs-5 text-dark">Software Engineer</p>
												<p className="mb-0 text-muted small">Building, maintaining, and testing software applications.</p>
											</div>
										</div>
										<div className="col-12">
											<div className="p-3 bg-primary-subtle rounded-3 border h-100">
												<p className="fw-bold fs-5 text-dark">Mobile Developer</p>
												<p className="mb-0 text-muted small">Creating applications for iOS and Android platforms.</p>
											</div>
										</div>
										<div className="col-12">
											<div className="p-3 bg-light rounded-3 border h-100">
												<p className="fw-bold fs-5 text-dark">DevOps Engineer</p>
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
										<img src="/images/career-imgs/tech-imgs/tech3.png" alt="Cloud Infrastructure Illustration" className="img-fluid rounded-3 shadow-sm" />
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
										<img src="/images/career-imgs/tech-imgs/tech2.png" alt="Specialized Roles Illustration" className="img-fluid rounded-3 shadow-sm" />
									</div>
								</div>
								<div className="col-12 col-lg-6 order-lg-2">
									<div className="d-flex flex-column gap-3 h-100">
										<div className="p-3 bg-warning-subtle rounded-3 border">
											<p className="fw-bold fs-5 text-dark">Cybersecurity Analyst</p>
											<p className="mb-0 text-muted small">Protecting systems and data, incident response.</p>
										</div>
										<div className="p-3 bg-light rounded-3 border">
											<p className="fw-bold fs-5 text-dark">UX/UI Designer</p>
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


