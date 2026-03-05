import React from 'react'
import SmoothScrollLink from '/src/components/SmoothScrollLink'

export default function Law() {
  return (
    <>
      <section className="law-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-dark mb-3">Your Future in <span className="text-custom-primary">Law &amp; Public Service</span></h1>
            <p className="fs-5 text-muted mx-auto mb-4 max-w-800">A career in law demands intellectual rigor, ethical commitment, and a passion for justice. It offers pathways from litigation and corporate advising to public policy.</p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <SmoothScrollLink to="roles" className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark">Explore Roles</SmoothScrollLink>
              <SmoothScrollLink to="education" className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3">Find Your Path</SmoothScrollLink>
            </div>
          </header>
        </div>
      </section>

      <main className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Key Legal and Judiciary Roles</h2>
          <p className="text-muted mb-4">High-impact careers across advocacy, compliance, and the court system.</p>

          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
                  <h3 className="fw-bold">Private Practice &amp; Corporate Law</h3>
                  <p className="text-muted">Corporate attorneys, IP lawyers, and transactional specialists advising businesses.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#lawCorpModal">Learn More →</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
                  <h3 className="fw-bold">Public Service &amp; Advocacy</h3>
                  <p className="text-muted">Public defenders, prosecutors, and judges serving communities and the public interest.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#lawPublicModal">Learn More →</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
                  <h3 className="fw-bold">Legal Support &amp; Paralegal Roles</h3>
                  <p className="text-muted">Paralegals, court reporters, and mediators who enable legal work behind the scenes.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#lawSupportModal">Learn More →</a>
                </div>
              </div>
            </div>
          </div>

          <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
            <div className="container">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">Law Career Roadmap</h2>
              <div className="row g-4 text-center justify-content-center">
                <div className="col-lg-3">
                  <div className="roadmap-node shadow">01</div>
                  <h4 className="fw-bold mt-3">Entry Level</h4>
                  <p className="small text-muted">Paralegal / Junior Associate<br /><span className="badge bg-warning text-dark">Years 0-2</span></p>
                </div>
                <div className="col-lg-3">
                  <div className="roadmap-node shadow">02</div>
                  <h4 className="fw-bold mt-3">Mid-Level</h4>
                  <p className="small text-muted">Associate / Prosecutor / Public Defender<br /><span className="badge bg-warning text-dark">Years 3-6</span></p>
                </div>
                <div className="col-lg-3">
                  <div className="roadmap-node shadow">03</div>
                  <h4 className="fw-bold mt-3">Senior / Lead</h4>
                  <p className="small text-muted">Senior Counsel / Trial Lead<br /><span className="badge bg-warning text-dark">Years 7-12</span></p>
                </div>
                <div className="col-lg-3">
                  <div className="roadmap-node shadow">04</div>
                  <h4 className="fw-bold mt-3">Partner / Judge</h4>
                  <p className="small text-muted">Firm Partner / Judge / In-House Counsel Director<br /><span className="badge bg-warning text-dark">Years 15+</span></p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section id="skills" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Essential Skills and Knowledge</h2>
          <p className="text-muted mb-4">Research, persuasive writing, ethical judgment, and courtroom presentation skills.</p>
        </section>

        <section id="future" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Future Trends and Growth</h2>
        </section>
      </main>

      {/* Modals */}
      <div className="modal fade" id="lawCorpModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Private Practice &amp; Corporate Law</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/career-imgs/law-imgs/law1.jpg" alt="Corporate Law" className="img-fluid rounded-2" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="p-3 bg-light rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Corporate Attorney</p>
                    <p className="mb-0 text-muted small">Advising businesses on contracts, mergers, regulations, and liability issues.</p>
                  </div>
                  <div className="p-3 bg-light rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Litigation Attorney</p>
                    <p className="mb-0 text-muted small">Representing clients in civil lawsuits, including research, discovery, and trial.</p>
                  </div>
                  <div className="p-3 bg-light rounded-3 border">
                    <p className="fw-bold fs-5">Intellectual Property Lawyer</p>
                    <p className="mb-0 text-muted small">Protecting clients' creations (patents, copyrights, trademarks) from infringement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="lawPublicModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Public Service &amp; Advocacy</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="p-3 bg-light rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Public Defender</p>
                    <p className="mb-0 text-muted small">Providing legal defense to indigent defendants in criminal court cases.</p>
                  </div>
                  <div className="p-3 bg-light rounded-3 border">
                    <p className="fw-bold fs-5">Prosecutor (District Attorney)</p>
                    <p className="mb-0 text-muted small">Representing the government in criminal cases and upholding the law.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/career-imgs/law-imgs/law2.jpg" alt="Public Defense" className="img-fluid rounded-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="lawSupportModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Legal Support &amp; Paralegal Roles</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6 order-lg-1">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/career-imgs/law-imgs/law3.jpg" alt="Paralegal" className="img-fluid rounded-2" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-lg-2">
                  <div className="p-3 bg-light rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Paralegal / Legal Assistant</p>
                    <p className="mb-0 text-muted small">Conducting legal research, drafting documents, and assisting attorneys in case preparation.</p>
                  </div>
                  <div className="p-3 bg-light rounded-3 border">
                    <p className="fw-bold fs-5">Mediator / Arbitrator</p>
                    <p className="mb-0 text-muted small">Facilitating resolution between parties outside of formal trial settings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="law-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <section className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h2 className="fs-3 fw-bold mb-3">Commit to Justice and Service</h2>
            <p className="fs-5 mb-4 mx-auto max-w-700">These careers offer profound opportunities to impact society directly. If you seek a role that combines intellectual challenge with real-world consequence, your path is here.</p>
            <SmoothScrollLink to="roles" className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg">Start Your Journey</SmoothScrollLink>
          </section>
        </div>
      </section>
    </>
  )
}
