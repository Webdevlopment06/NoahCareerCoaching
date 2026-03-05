import React from 'react'
import SmoothScrollLink from '/src/components/SmoothScrollLink'

export default function Trades() {
  return (
    <main>
      <section className="trades-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-dark mb-3">
              Your Future in{" "}
              <span className="text-custom-primary">
                Skilled Trades &amp; Construction
              </span>
            </h1>
            <p className="fs-5 text-muted mx-auto mb-4 max-w-800">
              Skilled trades are the backbone of our infrastructure, offering
              rewarding, hands-on careers with high demand, excellent pay, and
              pathways to self-employment.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <SmoothScrollLink
                to="roles"
                className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark"
              >
                Explore Roles
              </SmoothScrollLink>
              <SmoothScrollLink
                to="education"
                className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3"
              >
                Find Your Path
              </SmoothScrollLink>
            </div>
      {/* Modals moved to bottom to avoid nested markup/backdrop issues. */}
          </header>
        </div>
      </section>
      <main className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">
            Key Trades &amp; Industry Roles
          </h2>
          <p className="text-muted mb-4">
            Explore common high-impact roles across skilled trades, construction, and maintenance.
          </p>
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm">
                  <div className="icon-box bg-gradient-red mb-3">
                    <i className="bi bi-tools text-white fs-3" />
                  </div>
                  <h3 className="fw-bold">Mechanical &amp; Electrical</h3>
                  <p className="text-muted">
                    Work on power, HVAC, and control systems that keep buildings and
                    industry running smoothly.
                  </p>
                  <a
                    href="#"
                    className="btn btn-warning text-decoration-none fw-bold mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#strategyModal"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm">
                  <div className="icon-box bg-gradient-orange mb-3">
                    <i className="bi bi-building text-white fs-3" />
                  </div>
                  <h3 className="fw-bold">Construction &amp; Finishing</h3>
                  <p className="text-muted">
                    Roles from carpentry to site supervision focused on building and finishing projects.
                  </p>
                  <a
                    href="#"
                    className="btn btn-warning text-decoration-none fw-bold mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#financeModal"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm">
                  <div className="icon-box bg-gradient-green mb-3">
                    <i className="bi bi-gear text-white fs-3" />
                  </div>
                  <h3 className="fw-bold">Automotive &amp; Maintenance</h3>
                  <p className="text-muted">
                    From automotive technicians to industrial maintenance specialists, keep machines moving.
                  </p>
                  <a
                    href="#"
                    className="btn btn-warning text-decoration-none fw-bold mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#opsModal"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
            <div className="container">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">
                Trades Career Roadmap
              </h2>
              <div className="roadmap-wrapper position-relative">
                <div className="roadmap-line d-none d-lg-block" />
                <div className="row g-4 text-center justify-content-center">
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">01</div>
                    <h4 className="fw-bold mt-3">Entry Level</h4>
                    <p className="small text-muted">
                      Apprentice / Junior Technician
                      <br />
                      <span className="badge bg-warning text-dark">Years 0-2</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">02</div>
                    <h4 className="fw-bold mt-3">Mid-Level</h4>
                    <p className="small text-muted">
                      Journeyman / Supervisor
                      <br />
                      <span className="badge bg-warning text-dark">Years 3-6</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">03</div>
                    <h4 className="fw-bold mt-3">Site Lead</h4>
                    <p className="small text-muted">
                      Foreman / Project Manager
                      <br />
                      <span className="badge bg-warning text-dark">Years 7-12</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">04</div>
                    <h4 className="fw-bold mt-3">Owner / Contractor</h4>
                    <p className="small text-muted">
                      Business Owner / Lead Contractor
                      <br />
                      <span className="badge bg-warning text-dark">Years 15+</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section
          id="skills"
          className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
        >
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">
            Essential Skills and Knowledge
          </h2>
          <p className="text-muted mb-4">
            The core of the trades is technical skill combined with safety awareness
            and physical capability.
          </p>
          <div className="row g-4">
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-custom-primary mb-3">
                Technical &amp; Practical Skills
              </h3>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge text-bg-danger-subtle border border-danger px-3 py-2 fs-6 text-dark">
                  Blueprint Reading
                </span>
                <span className="badge text-bg-danger-subtle border border-danger px-3 py-2 fs-6 text-dark">
                  Code Compliance (e.g., NEC, IBC)
                </span>
                <span className="badge text-bg-danger-subtle border border-danger px-3 py-2 fs-6 text-dark">
                  Measurement &amp; Calculation
                </span>
                <span className="badge text-bg-danger-subtle border border-danger px-3 py-2 fs-6 text-dark">
                  Precision Tool Use
                </span>
                <span className="badge text-bg-danger-subtle border border-danger px-3 py-2 fs-6 text-dark">
                  Advanced Diagnostics
                </span>
                <span className="badge text-bg-danger-subtle border border-danger px-3 py-2 fs-6 text-dark">
                  Safety Training (OSHA)
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Workplace &amp; Physical Skills
              </h3>
              <ul className="list-unstyled space-y-3 text-muted">
                <li className="d-flex align-items-start mb-2">
                  <span className="badge bg-custom-secondary rounded-circle me-2 mt-1 dot-8" />
                  Attention to Detail and Quality Workmanship
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span className="badge bg-custom-secondary rounded-circle me-2 mt-1 dot-8" />
                  Physical Stamina and Endurance
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span className="badge bg-custom-secondary rounded-circle me-2 mt-1 dot-8" />
                  Punctuality and Reliability
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span className="badge bg-custom-secondary rounded-circle me-2 mt-1 dot-8" />
                  Effective Teamwork and Communication on Site
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="future"
          className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
        >
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">
            Future Trends and Growth
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-custom-secondary bg-secondary-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-custom-secondary mb-2">
                  Green Building and Retrofitting
                </h3>
                <ul className="text-muted small">
                  <li>
                    High demand for HVAC and Electricians specializing in solar,
                    energy efficiency, and low-voltage systems.
                  </li>
                  <li>
                    Focus on building management systems (BMS) for energy
                    optimization.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-custom-primary bg-danger-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">
                  Automation and Robotics
                </h3>
                <p className="small text-muted mb-0">
                  Industrial Maintenance Mechanics and Welders must adapt to
                  servicing and programming robotic assembly lines and advanced
                  manufacturing equipment.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-secondary mb-2">
                  Digital Project Management
                </h3>
                <p className="small text-muted mb-0">
                  Project coordination increasingly uses digital tools (BIM, digital
                  blueprints, virtual reality) to improve site efficiency and reduce
                  errors.
                </p>
              </div>
            </div>
          </div>
        </section>
          </main>
          {/* Learn-more modals placed at end to avoid nested/header markup issues */}
          <div className="modal fade" id="strategyModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content border-0 rounded-4 shadow-lg">
                <div className="modal-header bg-warning text-black rounded-top-4">
                  <h5 className="modal-title fw-bold">Mechanical &amp; Electrical</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-4 p-md-5">
                  <div className="row g-4">
                    <div className="col-12 col-lg-6">
                      <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                        <img
                          src="/images/career-imgs/trades-imgs/trades1.jpg"
                          alt="Electrician wiring a panel"
                          className="img-fluid rounded-3 shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col">
                          <div className="p-3 bg-warning-subtle rounded-3 border h-100">
                            <p className="fw-bold fs-5 text-dark mb-1">Electrician</p>
                            <p className="mb-0 text-muted small">Power systems, wiring, and control panels.</p>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 bg-light rounded-3 border h-100">
                            <p className="fw-bold fs-5 text-dark mb-1">HVAC Technician</p>
                            <p className="mb-0 text-muted small">Climate systems installation and maintenance.</p>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 bg-light rounded-3 border h-100">
                            <p className="fw-bold fs-5 text-dark mb-1">Controls Technician</p>
                            <p className="mb-0 text-muted small">PLCs, automation, and building controls.</p>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 bg-primary-subtle rounded-3 border h-100">
                            <p className="fw-bold fs-5 text-dark mb-1">Maintenance Electrician</p>
                            <p className="mb-0 text-muted small">Troubleshooting and preventive maintenance.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="financeModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content border-0 rounded-4 shadow-lg">
                <div className="modal-header bg-warning text-black rounded-top-4">
                  <h5 className="modal-title fw-bold">Construction &amp; Finishing</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-4 p-md-5">
                  <div className="row g-4 align-items-center">
                    <div className="col-12 col-lg-6">
                      <div className="d-flex flex-column gap-3 h-100">
                        <div className="p-4 bg-warning-subtle rounded-3 border">
                          <p className="fw-bold fs-5 text-dark mb-1">Carpenter</p>
                          <p className="mb-0 text-muted small">Framing, finish carpentry, and site layout.</p>
                        </div>
                        <div className="p-4 bg-primary-subtle rounded-3 border">
                          <p className="fw-bold fs-5 text-dark mb-1">Site Supervisor</p>
                          <p className="mb-0 text-muted small">Managing crews, schedules, and safety compliance.</p>
                        </div>
                        <div className="p-4 bg-light rounded-3 border">
                          <p className="fw-bold fs-5 text-dark mb-1">Finisher / Painter</p>
                          <p className="mb-0 text-muted small">Final finishes, quality control, and client handoffs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                        <img
                          src="/images/career-imgs/trades-imgs/trades2.png"
                          alt="Construction workers and carpenters"
                          className="img-fluid rounded-3 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="opsModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content border-0 rounded-4 shadow-lg">
                <div className="modal-header bg-warning text-black rounded-top-4">
                  <h5 className="modal-title fw-bold">Automotive &amp; Maintenance</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-4 p-md-5">
                  <div className="row g-4">
                    <div className="col-12 col-lg-6">
                      <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                        <img
                          src="/images/career-imgs/trades-imgs/trades3.jpg"
                          alt="Auto mechanic working on a car"
                          className="img-fluid rounded-3 shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="d-flex flex-column gap-3 h-100">
                        <div className="p-4 bg-warning-subtle rounded-3 border">
                          <p className="fw-bold fs-5 text-dark mb-1">Automotive Technician</p>
                          <p className="mb-0 text-muted small">Diagnostics, repair, and vehicle systems.</p>
                        </div>
                        <div className="p-4 bg-primary-subtle rounded-3 border">
                          <p className="fw-bold fs-5 text-dark mb-1">Industrial Maintenance</p>
                          <p className="mb-0 text-muted small">Heavy equipment servicing and preventive maintenance.</p>
                        </div>
                        <div className="p-4 bg-light rounded-3 border">
                          <p className="fw-bold fs-5 text-dark mb-1">Diesel Specialist</p>
                          <p className="mb-0 text-muted small">Diesel engine repair and fleet maintenance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <section className="trades-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <section className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h2 className="fs-3 fw-bold mb-3">Ready to Build Your Career?</h2>
            <p className="fs-5 mb-4 mx-auto max-w-700">
              The trades offer financial independence and the pride of seeing your
              work come to life. Contact local unions or trade schools to start your
              apprenticeship application today.
            </p>
            <SmoothScrollLink
              to="roles"
              className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg"
            >
              Apply Your Skills
            </SmoothScrollLink>
          </section>
        </div>
      </section>
    </main>
  )
}
