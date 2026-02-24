import React from 'react'

export default function Finance() {
  return (
    <main>
      {/* section with image container */}
      <section className="finance-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          {/* heading */}
          <header className=" rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3">
              Your Future in{" "}
              <span className="text-white">Finance &amp; Accounting</span>
            </h1>
            <p className="fs-5 text-white mx-auto mb-4 max-w-800">
              Finance careers are the engine of the global economy, offering roles
              in investment, risk management, advisory, and detailed corporate
              accounting.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <a
                href="#roles"
                className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark"
              >
                Explore Roles
              </a>
              <a
                href="#education"
                className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3"
              >
                Find Your Path
              </a>
            </div>
          </header>
          {/* end of section and div */}
        </div>
      </section>
      {/* end of art image */}
      <main className="container-xl py-4 py-lg-5">
        {/* start of second */}
        {/* primary color backing */}
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">
            Key Finance &amp; Accounting Roles
          </h2>
          <p className="text-muted mb-4">
            Detailing high-impact roles across investment, corporate finance, and
            public accounting.
          </p>
          {/* new section idea */}
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm">
                  <div className="icon-box  mb-3">
                    <i className="bi bi-lightbulb fs-3" />
                  </div>
                  <h3 className="fw-bold">Investment and Advisory</h3>
                  <p className="text-muted">
                    This field focuses on helping individuals and organizations
                    manage investments, assess risk, and plan for financial growth.
                    Professionals analyze markets, advise clients, and build
                    strategies to achieve long-term financial goals.
                  </p>
                  <a
                    href="#"
                    className="btn btn-warning text-decoration-none fw-bold mt-auto "
                    data-bs-toggle="modal"
                    data-bs-target="#strategyModal"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3">
                    <i className="bi bi-graph-up-arrow fs-3" />
                  </div>
                  <h3 className="fw-bold">Corporate Finance &amp; Management</h3>
                  <p className="text-muted">
                    Careers in this area support the financial performance and
                    strategic direction of businesses. Professionals manage budgets,
                    analyze performance, and guide decisions that drive growth and
                    efficiency.
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
                  <div className="icon-box mb-3">
                    <i className="bi bi-gear  fs-3" />
                  </div>
                  <h3 className="fw-bold">Accounting &amp; Compliance</h3>
                  <p className="text-muted">
                    This field ensures financial accuracy, transparency, and
                    regulatory compliance. Professionals prepare reports, oversee
                    audits, and help organizations meet legal and financial
                    standards.
                  </p>
                  <a
                    href="#"
                    className=" btn btn-warning text-decoration-none fw-bold mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#opsModal"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* road map section */}
          <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
            <div className="container">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">
                Finance Career Roadmap
              </h2>
              <div className="roadmap-wrapper position-relative">
                <div className="roadmap-line d-none d-lg-block" />
                <div className="row g-4 text-center justify-content-center">
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">01</div>
                    <h4 className="fw-bold mt-3">Exploration &amp; Foundations</h4>
                    <p className="small text-muted">
                      Finance Intern / Accounting or Banking Assistant / Client
                      Service Associate
                      <br />
                      <span className="badge bg-warning text-dark">Years 0-2</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">02</div>
                    <h4 className="fw-bold mt-3">
                      Education &amp; Entry-Level Roles
                    </h4>
                    <p className="small text-muted">
                      Financial Analyst / Staff Accountant / Investment or Credit
                      Analyst
                      <br />
                      <span className="badge bg-warning text-dark">Years 2-5</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">03</div>
                    <h4 className="fw-bold mt-3">
                      Professional Growth &amp; Specialization
                    </h4>
                    <p className="small text-muted">
                      Senior Financial Analyst / Financial Advisor /Finance or
                      Accounting Manager
                      <br />
                      <span className="badge bg-warning text-dark">Years 5-10</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">04</div>
                    <h4 className="fw-bold mt-3">
                      Leadership &amp; Executive Roles
                    </h4>
                    <p className="small text-muted">
                      Finance Director / Portfolio Manager / Controller or Chief
                      Financial Officer (CFO)
                      <br />
                      <span className="badge bg-warning text-dark">Years 10+</span>
                    </p>
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
            <p className="text-muted mb-5">
              Success in finance hinges on analytical rigor and regulatory
              understanding.
            </p>
            <div className="row g-5">
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">
                  Hard Skills (Analytical &amp; Technical)
                </h3>
                <div className="row g-4">
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-calculator-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">Financial Modeling (LBO, DCF)</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-table me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">Advanced Excel &amp; VBA</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-diagram-3-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Accounting Standards (GAAP/IFRS)
                    </span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-bar-chart-line-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">Risk Management</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-cloud-check-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Data Visualization (Tableau/Power BI)
                    </span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-shield-check me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">Valuation Methods</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">
                  Soft Skills
                </h3>
                <div className="row g-4">
                  <div className="col-12 d-flex align-items-center">
                    <i
                      className="bi bi-people-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Integrity and Ethical Judgment
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <i
                      className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Attention to Detail and Accuracy
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <i
                      className="bi bi-chat-dots-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Client Management and Communication
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <i
                      className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Ability to Handle High Pressure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* future trends */}
          <section
            id="future"
            className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
          >
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              Future Trends and Growth
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-secondary bg-warning-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-secondary mb-2">
                    FinTech and Automation
                  </h3>
                  <ul className="text-muted small">
                    <li>
                      Automation of routine accounting and transactional tasks.
                    </li>
                    <li>
                      Demand for professionals with coding skills (Python, R) for
                      algorithmic trading and data science.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-primary bg-primary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">
                    Regulatory and Compliance Focus
                  </h3>
                  <p className="small text-muted mb-0">
                    Increased scrutiny means roles in Risk Management, Anti-Money
                    Laundering (AML), and regulatory compliance are expanding
                    rapidly.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-secondary mb-2">
                    Sustainable and ESG Investing
                  </h3>
                  <p className="small text-muted mb-0">
                    Growing client demand for Environmental, Social, and Governance
                    (ESG) investments creates new specialized analysis roles.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      {/* hero section with buisness background */}
      <section className="finance-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          {/* VI. Conclusion Call to action */}
          <section className=" rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h2 className="fs-3 text-white fw-bold mb-3">
              Ready to Count Success?
            </h2>
            <p className="fs-5 mb-4 mx-auto text-white max-w-700">
              Finance is more than just math; it's the architecture of the global
              economy. Build a career that offers stability, challenge, and immense
              growth potential.
            </p>
            <a
              href="#roles"
              className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg"
            >
              Calculate Your Path
            </a>
          </section>
          {/* end of section and div */}
        </div>
      </section>
      {/* modals */}
      {/* modal 1 */}
      <div
        className="modal fade"
        id="strategyModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Investment and Advisory</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="/images/finance1.png"
                      alt="Investment Banking and Advisory"
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                      <div className="p-3 bg-warning-subtle rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Investment Banker
                        </p>
                        <p className="mb-0 text-muted small">
                          Mergers &amp; Acquisitions (M&amp;A), raising capital
                          (IPOs), and financial restructuring for corporations.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Financial Advisor
                        </p>
                        <p className="mb-0 text-muted small">
                          Providing personalized financial planning and wealth
                          management for individuals and families.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Equity Research Analyst
                        </p>
                        <p className="mb-0 text-muted small">
                          Analyzing public companies to recommend stocks (buy, sell,
                          hold) to investment clients.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-primary-subtle rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Portfolio Manager
                        </p>
                        <p className="mb-0 text-muted small">
                          Building and managing investment portfolios (stocks,
                          bonds, assets) to meet specific financial goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal 2 */}
      <div
        className="modal fade"
        id="financeModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">
                Corporate Finance and Management
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100">
                    <div className="p-4 bg-warning-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Financial Planning &amp; Analysis (FP&amp;A)
                      </p>
                      <p className="mb-0 text-muted small">
                        Budgeting, forecasting, and long-term financial modeling to
                        guide corporate strategy.
                      </p>
                    </div>
                    <div className="p-4 bg-primary-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Treasury Analyst
                      </p>
                      <p className="mb-0 text-muted small">
                        Managing a company's liquidity, cash flow, and raising
                        debt/equity financing.
                      </p>
                    </div>
                    <div className="p-4 bg-light rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Chief Financial Officer (CFO)
                      </p>
                      <p className="mb-0 text-muted small">
                        Top executive overseeing all financial operations, strategy,
                        and risk management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="/images/finance2.png"
                      alt="Finance and HR"
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal 3 */}
      <div className="modal fade" id="opsModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Accounting and Compliance</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="/images/finance3.png"
                      alt="Operations and PMP"
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100">
                    <div className="p-4 bg-warning-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Certified Public Accountant (CPA)
                      </p>
                      <p className="mb-0 text-muted small">
                        Auditing, tax preparation, and financial statement
                        preparation for external reporting.
                      </p>
                    </div>
                    <div className="p-4 bg-primary-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Forensic Accountant
                      </p>
                      <p className="mb-0 text-muted small">
                        Investigating financial crimes, fraud, and disputes using
                        deep accounting knowledge.
                      </p>
                    </div>
                    <div className="p-4 bg-light rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Internal Auditor
                      </p>
                      <p className="mb-0 text-muted small">
                        Evaluating a company's internal controls, governance, and
                        risk management processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
