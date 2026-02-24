import React from 'react'

export default function Law() {
  return (
    <main>
      <section className="law-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-dark mb-3">
              Your Future in{" "}
              <span className="text-custom-primary">Law &amp; Public Service</span>
            </h1>
            <p className="fs-5 text-muted mx-auto mb-4 max-w-800">
              A career in law demands intellectual rigor, ethical commitment, and a
              passion for justice. It offers pathways from litigation and corporate
              advising to public policy.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <a
                href="#roles"
                className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3 text-white"
              >
                Explore Legal Roles
              </a>
              <a
                href="#education"
                className="btn btn-secondary btn-lg fw-semibold shadow-sm rounded-3"
              >
                Start Training
              </a>
            </div>
          </header>
        </div>
      </section>
      <main className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">
            Key Legal and Judiciary Roles
          </h2>
          <p className="text-muted mb-4">
            Detailing high-impact careers across advocacy, compliance, and the court
            system.
          </p>
          <div className="container py-4">
            <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Private Practice and Corporate Law
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/lawpath/corporate1.png"
                      alt="Corporate Law and Advisory"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">Corporate Attorney</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Advising businesses on contracts, mergers,
                          regulations, and liability issues.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">Litigation Attorney</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Representing clients in civil lawsuits, including
                          research, discovery, and trial.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">
                          Intellectual Property (IP) Lawyer
                        </p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Protecting clients' creations (patents,
                          copyrights, trademarks) from infringement.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">
                          Transactional Real Estate Lawyer
                        </p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Drafting deeds, managing closings, and handling
                          legal aspects of property transfer.
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
                Public Service and Advocacy
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-4 h-100">
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Public Defender</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Providing legal defense to indigent defendants in
                        criminal court cases.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Prosecutor (District Attorney)</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Representing the government in criminal cases,
                        seeking justice and upholding the law.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Judge or Magistrate</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Presiding over court proceedings, interpreting the
                        law, and issuing rulings and sentences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/lawpath/public2.png"
                      alt="Public Defender and Prosecution"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Legal Support and Paralegal Roles
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6 order-lg-1">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/lawpath/support3.png"
                      alt="Paralegal and Legal Research"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-lg-2">
                  <div className="d-flex flex-column gap-4 h-100">
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Paralegal/Legal Assistant</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Conducting legal research, drafting documents, and
                        assisting attorneys in case preparation.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Court Reporter/Stenographer</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Creating verbatim transcripts of court hearings,
                        depositions, and legal proceedings.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Mediator/Arbitrator</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Non-judicial roles facilitating resolution between
                        parties outside of a formal trial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
        >
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">
            Essential Skills and Knowledge
          </h2>
          <p className="text-muted mb-4">
            Success in law relies on critical thinking, ethical standards, and
            advanced communication.
          </p>
          <div className="row g-4">
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-custom-primary mb-3">
                Hard Skills (Intellectual &amp; Procedural)
              </h3>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge text-bg-primary-subtle border border-primary px-3 py-2 fs-6 text-dark">
                  Legal Research (LexisNexis/Westlaw)
                </span>
                <span className="badge text-bg-primary-subtle border border-primary px-3 py-2 fs-6 text-dark">
                  Statutory Interpretation
                </span>
                <span className="badge text-bg-primary-subtle border border-primary px-3 py-2 fs-6 text-dark">
                  Persuasive Legal Writing
                </span>
                <span className="badge text-bg-primary-subtle border border-primary px-3 py-2 fs-6 text-dark">
                  Trial Procedure and Evidence
                </span>
                <span className="badge text-bg-primary-subtle border border-primary px-3 py-2 fs-6 text-dark">
                  Contract Drafting
                </span>
                <span className="badge text-bg-primary-subtle border border-primary px-3 py-2 fs-6 text-dark">
                  Client Trust Accounting
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Soft Skills (Advocacy &amp; Ethics)
              </h3>
              <ul className="list-unstyled space-y-3 text-muted">
                <li className="d-flex align-items-start mb-2">
                  <span
                    className="badge bg-custom-secondary rounded-pill me-2 mt-1 dot-8"
                     />
                  Analytical and Critical Reasoning
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span
                    className="badge bg-custom-secondary rounded-pill me-2 mt-1 dot-8"
                  />
                  Oral Argument and Public Speaking
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span
                    className="badge bg-custom-secondary rounded-pill me-2 mt-1 dot-8"
                  />
                  Ethical Judgment and Integrity
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span
                    className="badge bg-custom-secondary rounded-pill me-2 mt-1 dot-8"
                  />
                  Negotiation and Mediation Skills
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container py-4">
          <section id="education" className="mb-5">
            <h2 className="fs-2 fw-bold section-heading-custom text-dark mb-4">
              Educational and Entry Paths 🏛️
            </h2>
            <div className="row g-4">
              <div className="col-12 col-lg-6 order-lg-1">
                <div className="row row-cols-1 row-cols-md-2 g-4 h-100">
                  <div className="col">
                    <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                      <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                        Undergraduate Focus
                      </h3>
                      <p className="card-text small text-muted">
                        No specific major is required, but fields like Political
                        Science, History, Philosophy, and Economics develop critical
                        skills.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                      <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                        The Law School Journey (J.D.)
                      </h3>
                      <p className="card-text small text-muted">
                        The Juris Doctor (J.D.) degree, typically a three-year
                        program, is the standard requirement for becoming an
                        attorney.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                      <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                        Bar Examination
                      </h3>
                      <p className="card-text small text-muted">
                        Graduation from law school is followed by passing the
                        state-specific Bar Exam to receive a license to practice
                        law.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                      <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                        Paralegal Pathways
                      </h3>
                      <p className="card-text small text-muted">
                        Paralegals generally require a specialized Associate's
                        degree or a post-Bachelor's certificate program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-lg-2">
                <div className="h-100 bg-light rounded-4 shadow-sm border d-flex align-items-center justify-content-center p-3">
                  <img
                    src="images/lawpath/education4.png"
                    alt="Legal Career Path Diagram showing degree, LSAT, and bar exam flow"
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
              <div className="p-3 border-start border-4 border-custom-secondary bg-secondary-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-custom-secondary mb-2">
                  Legal Technology (LegalTech)
                </h3>
                <ul className="text-muted small">
                  <li>
                    AI-powered e-discovery and contract review are automating
                    routine tasks.
                  </li>
                  <li>
                    Demand for legal professionals who understand data security and
                    blockchain technologies.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-custom-primary bg-primary-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">
                  Compliance and Regulation
                </h3>
                <p className="small text-muted mb-0">
                  Increased global regulation (e.g., data privacy, environmental
                  law) is driving major growth in **In-House Counsel and Compliance
                  Officer** positions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-secondary mb-2">
                  Alternative Dispute Resolution
                </h3>
                <p className="small text-muted mb-0">
                  Mediation and Arbitration roles are expanding as businesses and
                  individuals seek faster, lower-cost methods of resolving legal
                  conflicts outside of traditional courts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="law-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <section className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h2 className="fs-3 fw-bold mb-3">Commit to Justice and Service</h2>
            <p className="fs-5 mb-4 mx-auto max-w-700">
              These careers offer profound opportunities to impact society directly.
              If you seek a role that combines intellectual challenge with
              real-world consequence, your path is here.
            </p>
            <a
              href="#roles"
              className="btn btn-primary btn-lg fw-bold rounded-3 shadow-lg text-white"
            >
              Start Your Journey
            </a>
          </section>
        </div>
      </section>
    </main>
  )
}
