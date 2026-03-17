import React from 'react'
import SmoothScrollLink from '/src/components/SmoothScrollLink'
import RoleCard from '/src/components/RoleCard'

export default function Law() {
  return (
    <>
      <section className="law-hero-bg flex-ai-center justify-content-center py-5">
        <div className="container">
          <header className="bg-white hero-panel">
            <h1 className="display-3 fw-bolder text-dark mb-3 animate-fade-in">
              Your Future in <span className="text-custom-primary">Law &amp; Public Service</span>
            </h1>
            <p className="fs-5 text-muted mx-auto mb-4 max-w-800 animate-slide-up">
              A career in law demands intellectual rigor, ethical commitment, and a passion for justice. It offers pathways from litigation and corporate advising to public policy.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <SmoothScrollLink to="roles" className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark">Explore Roles</SmoothScrollLink>
              <a href="/contact" className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3">Find Your Path</a>
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
              <div className="col-lg-4 animate-scale-up">
                <RoleCard
                  icon="bi bi-briefcase"
                  title="Private Practice &amp; Corporate Law"
                  modalTarget="#lawCorpModal"
                >
                  Advises organizations on commercial law, transactions, and risk management. Work involves negotiating contracts, counseling on regulatory compliance, and partnering with business teams to structure deals. Ideal for detail-oriented problem-solvers who enjoy commercial strategy.
                </RoleCard>
              </div>
              <div className="col-lg-4 animate-scale-up">
                <RoleCard
                  icon="bi bi-people-fill"
                  title="Public Service &amp; Advocacy"
                  modalTarget="#lawPublicModal"
                >
                  Serves the public through courtroom advocacy, policy, and community representation. Roles range from trial work and client advocacy to shaping public policy and legal reform.
                </RoleCard>
              </div>
              <div className="col-lg-4 animate-scale-up">
                <RoleCard
                  icon="bi bi-file-earmark-text"
                  title="Legal Support &amp; Paralegal Roles"
                  modalTarget="#lawSupportModal"
                >
                  Provides essential support to legal teams via research, document drafting, and case coordination. These roles build practical litigation and transactional experience.
                </RoleCard>
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

        <section id="skills" className="skills-panel">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Essential Skills and Knowledge</h2>
          <p className="text-muted mb-4">Research, persuasive writing, ethical judgment, and courtroom presentation skills.</p>
          <div className="row g-5">
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">Hard Skills (Legal)</h3>
              <div className="row g-4">
                <div className="col-12 d-flex align-items-start">
                  <i className="bi bi-book-half me-3 fs-3 text-f1b327" />
                  <div>
                    <div className="fw-medium">Legal Research &amp; Writing</div>
                    <div className="small text-muted">Statutes, case law, drafting pleadings, and memos with precise citation.</div>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-start">
                  <i className="bi bi-search me-3 fs-3 text-f1b327" />
                  <div>
                    <div className="fw-medium">Case Analysis &amp; Strategy</div>
                    <div className="small text-muted">Issue spotting, evidence assessment, and developing litigation or negotiation plans.</div>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-start">
                  <i className="bi bi-server me-3 fs-3 text-f1b327" />
                  <div>
                    <div className="fw-medium">E-Discovery &amp; Legal Technology</div>
                    <div className="small text-muted">Managing digital evidence, e-filing systems, and using tools for document review.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">Soft Skills (Professional)</h3>
              <div className="row g-4">
                <div className="col-12 d-flex align-items-start">
                  <i className="bi bi-people-fill me-3 fs-3 text-f1b327" />
                  <div>
                    <div className="fw-medium">Advocacy &amp; Oral Argument</div>
                    <div className="small text-muted">Persuasive courtroom presence, clear oral advocacy, and concise cross-examination.</div>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-start">
                  <i className="bi bi-shield-check me-3 fs-3 text-f1b327" />
                  <div>
                    <div className="fw-medium">Ethical Judgment &amp; Professionalism</div>
                    <div className="small text-muted">Client confidentiality, conflict checks, and sound ethical decision-making.</div>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-start">
                  <i className="bi bi-chat-dots-fill me-3 fs-3 text-f1b327" />
                  <div>
                    <div className="fw-medium">Negotiation &amp; Client Management</div>
                    <div className="small text-muted">Managing expectations, settlement negotiation, and building client trust.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="future" className="skills-panel">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Future Trends and Growth</h2>
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-custom-secondary bg-warning-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-custom-secondary mb-2">Legal Tech &amp; AI</h3>
                <p className="small text-muted mb-0">Automation for document review, AI-assisted research, and contract analysis will accelerate work but demand oversight and new skills.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-custom-primary bg-primary-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">Access to Justice</h3>
                <p className="small text-muted mb-0">There is growing focus on pro bono services, alternative dispute resolution, and tools that expand legal help to underserved communities.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-secondary mb-2">Regulatory Complexity</h3>
                <p className="small text-muted mb-0">Increasing regulation across industries creates demand for specialized counsel in areas like privacy, compliance, and IP.</p>
              </div>
            </div>
          </div>
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
                  <div className="center-card h-100">
                    <img src="/images/career-imgs/law-imgs/law1.jpg" alt="Corporate Law" className="img-fluid rounded-2" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="p-3 bg-warning-subtle rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Corporate Attorney</p>
                    <p className="mb-0 text-muted small">Advising businesses on contracts, mergers, regulations, and liability issues.</p>
                  </div>
                  <div className="p-3 bg-primary-subtle rounded-3 border mb-3">
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
                  <div className="p-3 bg-warning-subtle rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Public Defender</p>
                    <p className="mb-0 text-muted small">Providing legal defense to indigent defendants in criminal court cases.</p>
                  </div>
                  <div className="p-3 bg-primary-subtle rounded-3 border">
                    <p className="fw-bold fs-5">Prosecutor (District Attorney)</p>
                    <p className="mb-0 text-muted small">Representing the government in criminal cases and upholding the law.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="center-card h-100">
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
                  <div className="center-card h-100">
                    <img src="/images/career-imgs/law-imgs/law3.jpg" alt="Paralegal" className="img-fluid rounded-2" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-lg-2">
                  <div className="p-3 bg-warning-subtle rounded-3 border mb-3">
                    <p className="fw-bold fs-5">Paralegal / Legal Assistant</p>
                    <p className="mb-0 text-muted small">Conducting legal research, drafting documents, and assisting attorneys in case preparation.</p>
                  </div>
                  <div className="p-3 bg-primary-subtle rounded-3 border">
                    <p className="fw-bold fs-5">Mediator / Arbitrator</p>
                    <p className="mb-0 text-muted small">Facilitating resolution between parties outside of formal trial settings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="law-hero-bg flex-ai-center justify-content-center py-5">
        <div className="container">
          <section className="bg-white hero-panel">
            <h2 className="fs-3 fw-bold mb-3">Commit to Justice and Service</h2>
            <p className="fs-5 mb-4 mx-auto max-w-700">These careers offer profound opportunities to impact society directly. If you seek a role that combines intellectual challenge with real-world consequence, your path is here.</p>
            <a
              href="/contact"
              className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg"
            >
              Start Your Journey
            </a>
          </section>
        </div>
      </section>
    </>
  )
}