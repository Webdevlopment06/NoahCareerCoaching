import React from 'react'
import SmoothScrollLink from '/src/components/SmoothScrollLink'

export default function Science() {
  return (
    <>
      <section className="science-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-dark mb-3">
              Your Future in <span className="text-custom-primary">Science, Research &amp; Discovery</span>
            </h1>
            <p className="fs-5 text-muted mx-auto mb-4 max-w-800">
              The scientific field is the bedrock of innovation, offering careers
              that push the boundaries of knowledge in biology, chemistry, physics,
              and environmental solutions.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <SmoothScrollLink to="roles" className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark">Explore Roles</SmoothScrollLink>
              <SmoothScrollLink to="education" className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3">Find Your Path</SmoothScrollLink>
            </div>
          </header>
        </div>
      </section>

      <main className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Key Scientific and Research Roles</h2>
          <p className="text-muted mb-4">High-impact roles across biological, physical, and computational science.</p>

          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
                  <div className="icon-box mb-3">
                    <i className="bi bi-bandaid fs-3"></i>
                  </div>
                  <h3 className="fw-bold">Biological &amp; Medical Sciences</h3>
                  <p className="text-muted">Research biologists, biotechnologists, and clinical researchers designing experiments, analyzing biological systems, and translating discoveries into diagnostics, therapeutics, and biomanufacturing processes.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#sciBioModal">Learn More →</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
                  <div className="icon-box mb-3">
                    <i className="bi bi-geo-alt fs-3"></i>
                  </div>
                  <h3 className="fw-bold">Physical &amp; Environmental Sciences</h3>
                  <p className="text-muted">Chemists, materials scientists, physicists, and environmental researchers developing sustainable materials, studying climate impacts, and creating technologies for pollution mitigation and resource management.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#sciEnvModal">Learn More →</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
                  <div className="icon-box mb-3">
                    <i className="bi bi-bar-chart-line-fill fs-3"></i>
                  </div>
                  <h3 className="fw-bold">Data &amp; Computational Science</h3>
                  <p className="text-muted">Data scientists, bioinformaticians, and computational modelers who build pipelines, analyze large-scale datasets, and develop models that reveal patterns and accelerate scientific discovery.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#sciDataModal">Learn More →</a>
                </div>
              </div>
            </div>
          </div>

          <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
            <div className="container">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">Science Career Roadmap</h2>
              <div className="row g-4 text-center justify-content-center">
                <div className="col-lg-3">
                  <div className="roadmap-node shadow">01</div>
                  <h4 className="fw-bold mt-3">Entry Level</h4>
                  <p className="small text-muted">Lab Technician / Research Assistant<br /><span className="badge bg-warning text-dark">Years 0-2</span></p>
                </div>
                <div className="col-lg-3">
                  <div className="roadmap-node shadow">02</div>
                  <h4 className="fw-bold mt-3">Mid-Level</h4>
                  <p className="small text-muted">Research Scientist / Specialist<br /><span className="badge bg-warning text-dark">Years 3-6</span></p>
                </div>
                <div className="col-lg-3">
                  <div className="roadmap-node shadow">03</div>
                  <h4 className="fw-bold mt-3">Senior / Lead</h4>
                  <p className="small text-muted">Senior Scientist / Group Lead<br /><span className="badge bg-warning text-dark">Years 7-12</span></p>
                </div>
                <div className="col-lg-3">
                  <div className="roadmap-node shadow">04</div>
                  <h4 className="fw-bold mt-3">PI / Director</h4>
                  <p className="small text-muted">Principal Investigator / Lab Director<br /><span className="badge bg-warning text-dark">Years 15+</span></p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section id="skills" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Essential Skills and Knowledge</h2>
          <p className="text-muted mb-4">Methodological rigor, statistical mastery, and collaborative research practice.</p>
          <div className="row g-5">
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">Hard Skills (Technical)</h3>
              <div className="row g-4">
                <div className="col-6 d-flex align-items-center">
                  <i className="bi bi-beaker me-3 fs-3 text-f1b327" />
                  <span className="fw-medium">Laboratory Techniques</span>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <i className="bi bi-calculator-fill me-3 fs-3 text-f1b327" />
                  <span className="fw-medium">Statistical Analysis</span>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <i className="bi bi-code-slash me-3 fs-3 text-f1b327" />
                  <span className="fw-medium">Programming &amp; Bioinformatics</span>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <i className="bi bi-database-fill-gear me-3 fs-3 text-f1b327" />
                  <span className="fw-medium">Data Management</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">Soft Skills (Collaborative)</h3>
              <div className="row g-4">
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-people-fill me-3 fs-3 text-f1b327" />
                  <span className="fw-medium">Team Collaboration</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327" />
                  <span className="fw-medium">Critical Thinking</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-chat-dots-fill me-3 fs-3 text-f1b327" />
                  <span className="fw-medium">Scientific Communication</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="future" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Future Trends and Growth</h2>
        </section>
      </main>

      {/* Modals */}
      <div className="modal fade" id="sciBioModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Biological &amp; Medical Sciences</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/career-imgs/sci-imgs/science1.jpg" alt="Biologists in lab" className="img-fluid rounded-2" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="p-3 bg-warning-subtle rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Research Biologist</p>
                    <p className="mb-0 text-muted small">Conducting experiments to study living organisms, ecosystems, and biological processes.</p>
                  </div>
                  <div className="p-3 bg-primary-subtle rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Biotechnologist</p>
                    <p className="mb-0 text-muted small">Developing new products and techniques in medicine, agriculture, and industry using living systems.</p>
                  </div>
                  <div className="p-3 bg-light rounded-3 border">
                    <p className="fw-bold fs-5">Clinical Research Coordinator</p>
                    <p className="mb-0 text-muted small">Managing and overseeing clinical trials for new drugs and treatments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="sciEnvModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Physical &amp; Environmental Sciences</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="p-3 bg-warning-subtle rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Chemist / Materials Scientist</p>
                    <p className="mb-0 text-muted small">Studying the composition, structure, and properties of matter and developing new substances.</p>
                  </div>
                  <div className="p-3 bg-light rounded-3 border">
                    <p className="fw-bold fs-5">Environmental Consultant</p>
                    <p className="mb-0 text-muted small">Advising organizations on environmental compliance, pollution control, and sustainability practices.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/career-imgs/sci-imgs/science2.jpeg" alt="Environmental lab" className="img-fluid rounded-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="sciDataModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Data &amp; Computational Science</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/career-imgs/sci-imgs/science3.jpg" alt="Data science" className="img-fluid rounded-2" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="p-3 bg-warning-subtle rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Data Scientist (Science Focus)</p>
                    <p className="mb-0 text-muted small">Applying advanced statistical and computational methods to massive scientific datasets.</p>
                  </div>
                  <div className="p-3 bg-primary-subtle rounded-3 border">
                    <p className="fw-bold fs-5">Bioinformatician</p>
                    <p className="mb-0 text-muted small">Developing software and algorithms to analyze complex biological data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="science-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <section className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h2 className="fs-3 fw-bold mb-3">Ready to Make the Next Great Discovery?</h2>
            <p className="fs-5 mb-4 mx-auto max-w-700">Get involved in undergraduate research or laboratory work early to validate your passion and build essential practical skills.</p>
            <SmoothScrollLink to="roles" className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg">Begin Your Research</SmoothScrollLink>
          </section>
        </div>
      </section>
    </>
  )
}
