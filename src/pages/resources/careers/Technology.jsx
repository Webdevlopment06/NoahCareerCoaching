import React from 'react'

export default function Technology() {
  return (
    <main>
      <section className="tech-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-dark mb-3">
              Your Future in{" "}
              <span className="text-custom-primary">
                Technology &amp; Software Development
              </span>
            </h1>
            <p className="fs-5 text-muted mx-auto mb-4" style={{ maxWidth: 800 }}>
              The digital world is booming, offering careers defined by growth,
              stability, and high earning potential. This guide will clarify the
              diverse roles, skills, and paths available to you.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <a
                href="#roles"
                className="btn btn-danger btn-lg fw-semibold shadow-sm rounded-3 text-white"
              >
                Explore Roles
              </a>
              <a
                href="#education"
                className="btn btn-custom-secondary btn-lg fw-semibold shadow-sm rounded-3"
              >
                Find Your Path
              </a>
            </div>
          </header>
        </div>
      </section>
      <main className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">
            Key Technology &amp; Development Roles
          </h2>
          <p className="text-muted mb-4">
            Detailing common and high-demand roles, organized by domain.
          </p>
          <div className="container py-4">
            <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Software and Development
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/techpath/tech1.png"
                      alt="Software Development Illustration"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">Software Engineer</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Building, maintaining, and testing software
                          applications.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">Mobile Developer</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Creating applications for iOS and Android
                          platforms.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">DevOps Engineer</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Automation, CI/CD, bridging development and
                          operations.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">Data Scientist / ML Engineer</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Building predictive models, analyzing large
                          datasets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Infrastructure and Operations
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-4 h-100">
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Cloud Engineer</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Managing cloud platforms (AWS, Azure, GCP), IaC.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Network Architect</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Designing and managing computer networks.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">SRE / Systems Admin</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Maintaining uptime, performance, and system
                        monitoring.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/techpath/tech3.png"
                      alt="Cloud Infrastructure Illustration"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Specialized and Support Roles
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6 order-lg-1">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/techpath/tech2.png"
                      alt="Specialized Roles Illustration"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-lg-2">
                  <div className="d-flex flex-column gap-4 h-100">
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Cybersecurity Analyst</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Protecting systems and data, incident response.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">UX/UI Designer</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Improving user experience and designing intuitive
                        interfaces.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">IT Project Manager</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Overseeing technology projects, managing teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section
            id="skills"
            className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
          >
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              Essential Skills and Knowledge
            </h2>
            <p className="text-muted mb-4">
              Success in tech requires a balance of specialized technical knowledge
              and strong interpersonal skills.
            </p>
            <div className="row g-4">
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-custom-primary mb-3">
                  Technical Skills (Hard Skills)
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                    Python
                  </span>
                  <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                    JavaScript
                  </span>
                  <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                    Cloud Computing (AWS/Azure/GCP)
                  </span>
                  <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                    SQL/NoSQL
                  </span>
                  <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                    Version Control (Git)
                  </span>
                  <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                    Java, C++, Go
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                  Soft Skills (Crucial for Success)
                </h3>
                <ul className="list-unstyled space-y-3 text-muted">
                  <li className="d-flex align-items-start mb-2">
                    <span
                      className="badge bg-custom-secondary rounded-pill me-2 mt-1"
                      style={{ width: 8, height: 8 }}
                    />
                    Problem-Solving and Critical Thinking
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span
                      className="badge bg-custom-secondary rounded-pill me-2 mt-1"
                      style={{ width: 8, height: 8 }}
                    />
                    Continuous Learning and Adaptability (Tech is always changing!)
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span
                      className="badge bg-custom-secondary rounded-pill me-2 mt-1"
                      style={{ width: 8, height: 8 }}
                    />
                    Collaboration and Communication
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span
                      className="badge bg-custom-secondary rounded-pill me-2 mt-1"
                      style={{ width: 8, height: 8 }}
                    />
                    Attention to Detail
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="container py-4">
            <section id="education" className="mb-5">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark mb-4">
                Educational and Entry Paths 🚀
              </h2>
              <div className="row g-4">
                <div className="col-12 col-lg-6 order-lg-1">
                  <div className="row row-cols-1 row-cols-md-2 g-4 h-100">
                    <div className="col">
                      <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                        <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                          Traditional Education
                        </h3>
                        <p className="card-text small text-muted">
                          Bachelor's/Master's Degrees in Computer Science,
                          Engineering, or related fields provide a strong
                          theoretical foundation.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                        <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                          Alternative Paths
                        </h3>
                        <p className="card-text small text-muted">
                          Coding Bootcamps for accelerated learning and focused
                          skills, or self-learning via MOOCs and specialized
                          platforms.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                        <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                          Certifications
                        </h3>
                        <p className="card-text small text-muted">
                          Industry-standard certifications (e.g., CompTIA, AWS
                          Solutions Architect, CISSP) can validate expertise.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                        <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                          Build a Portfolio
                        </h3>
                        <p className="card-text small text-muted">
                          Highlighting personal projects, open-source contributions,
                          and internships is crucial for demonstrating practical
                          skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-lg-2">
                  <div className="h-100 bg-light rounded-4 shadow-sm border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/techpath/tech4.png"
                      alt="Diagram showing different technology career pathways"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section
            id="future"
            className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
          >
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              Future Trends and Growth
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-secondary bg-dark-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-secondary mb-2">
                    Emerging Tech
                  </h3>
                  <ul className="text-muted small">
                    <li>Artificial Intelligence (AI) and Generative Models.</li>
                    <li>Quantum Computing (Future-proofing skills).</li>
                    <li>Blockchain and Web3 (Decentralized applications).</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-primary bg-danger-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">
                    Career Progression
                  </h3>
                  <p className="small text-muted mb-0">
                    Move from Junior to Senior to Lead/Architect roles, or
                    transition into management (Engineering Manager, CTO).
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-secondary mb-2">
                    Work-Life in Tech
                  </h3>
                  <p className="small text-muted mb-0">
                    Benefit from remote work opportunities, flexible scheduling, and
                    a culture centered around innovation and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <section className="tech-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <section className="bg-white p-5 rounded-4 shadow-lg text-center">
            <h2 className="fs-3 fw-bold mb-3">Ready to Start Building?</h2>
            <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: 700 }}>
              The most important step is choosing a path and starting your first
              project today. Don't wait for perfection—start learning and building
              now.
            </p>
            <a
              href="#roles"
              className="btn btn-light btn-lg text-custom-primary fw-bold rounded-3 shadow-lg"
            >
              Choose Your Tech Career Path
            </a>
          </section>
        </div>
      </section>
    </main>
  )
}
