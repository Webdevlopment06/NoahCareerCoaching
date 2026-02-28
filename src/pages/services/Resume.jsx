import React from 'react'

export default function Resume() {
  return (
    <main>
      <section className="hero-gradient-indigo-orange py-5 text-white resume-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8 ps-md-5">
              <h1 className="display-3 fw-bold text-white mb-2">Land Your Dream Job.</h1>

              <h2 className="h4 text-white mb-4 fw-normal">
                Expert-crafted resume strategies designed to beat the ATS and get you noticed by top recruiters.
              </h2>

              <div className="d-flex gap-3">
                <a href="/contact" className="btn btn-primary btn-lg px-4 rounded-pill">Get Started Free</a>
                <a href="/services/resume-templates" className="btn btn-warning btn-lg px-4 rounded-pill">View Templates</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <h3>The Three Pillars of a Great Resume</h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-3 text-center">
                    <i className="bi bi-file-earmark-text fs-1 text-primary"></i>
                  </div>
                  <div className="col-9 border-start">
                    <h5 className="card-title mb-1">Design & Layout</h5>
                    <p className="card-text small text-muted">Clean, ATS-friendly structures that pass the 6-second scan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-3 text-center">
                    <i className="bi bi-lightning-charge fs-1 text-warning"></i>
                  </div>
                  <div className="col-9 border-start">
                    <h5 className="card-title mb-1">Power Statements</h5>
                    <p className="card-text small text-muted">Turn boring job duties into high-impact accomplishments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-3 text-center">
                    <i className="bi bi-search fs-1 text-success"></i>
                  </div>
                  <div className="col-9 border-start">
                    <h5 className="card-title mb-1">Keyword Strategy</h5>
                    <p className="card-text small text-muted">Targeted phrases to beat the Applicant Tracking Systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <h3>Choose Your Path</h3>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-3 text-center">
                    <i className="bi bi-file-earmark-richtext fs-1 text-primary"></i>
                  </div>
                  <div className="col-9 border-start">
                    <h5 className="card-title mb-1">The Blueprint</h5>
                    <p className="card-text small text-muted">Entry-level or students starting from scratch.</p>
                    <a href="/services/build-resume" className="btn btn-warning">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-3 text-center">
                    <i className="bi bi-arrow-left-right fs-1 text-danger"></i>
                  </div>
                  <div className="col-9 border-start">
                    <h5 className="card-title mb-1">The Career Pivot</h5>
                    <p className="card-text small text-muted">Career changers needing to highlight transferable skills.</p>
                    <a href="/services/professional-dev" className="btn btn-warning">View Guide</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-3 text-center">
                    <i className="bi bi-eyeglasses fs-1 text-success"></i>
                  </div>
                  <div className="col-9 border-start">
                    <h5 className="card-title mb-1">The Executive</h5>
                    <p className="card-text small text-muted">Senior leaders focusing on ROI and Strategy</p>
                    <a href="/services/resume-templates" className="btn btn-warning">See Examples</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="card border-0 shadow-sm rounded-4 bg-light overflow-hidden">
            <div className="card-body p-4 p-md-5">
              <h6 className="text-primary fw-bold text-uppercase mb-3">Pro Tip:</h6>
              <p className="lead mb-5 italic text-muted">"Recruiters spend an average of <strong>6 seconds</strong> on their
                initial 'fit/no-fit' scan. Make sure your most impressive metric is in the top 1/3 of the page."</p>

              <div className="row g-4">
                <div className="col-md-6">
                  <h4 className="fw-bold mb-4">DO'S</h4>
                  <div className="d-flex mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                    <p>Quantify your wins. Instead of "Improved sales," use "Increased quarterly revenue by 22%."</p>
                  </div>
                  <div className="d-flex">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                    <p>Keep your contact info clear and clickable (especially your LinkedIn profile).</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="fw-bold mb-4 text-danger">DON'TS</h4>
                  <div className="d-flex mb-3">
                    <i className="bi bi-x-circle-fill text-danger me-3 fs-4"></i>
                    <p>Don't use complex tables or graphics that might confuse an ATS algorithm.</p>
                  </div>
                  <div className="d-flex">
                    <i className="bi bi-x-circle-fill text-danger me-3 fs-4"></i>
                    <p>Avoid "References available upon request"—it's outdated space-filler.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-flush shadow-sm rounded-4 overflow-hidden" id="faqAccordion">
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faq1">
                      How long should my resume be?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      Ideally 1 page for those with under 10 years of experience. For senior executives or academic roles,
                      2 pages are acceptable.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faq2">
                      What is an ATS?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      ATS stands for Applicant Tracking System. It is software used by recruiters to scan resumes for
                      specific keywords before a human ever sees them.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faq3">
                      Should I include a photo?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      In the US, UK, and Canada, it is highly recommended <strong>not</strong> to include a photo to
                      prevent hiring bias. In certain European or Asian markets, it may still be standard.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="card text-center text-white border-0 rounded-4 p-5 shadow-lg bg-grad-blue">
            <div className="card-body">
              <h2 className="display-5 fw-bold mb-3">READY TO STAND OUT?</h2>
              <p className="lead mb-4 opacity-75">Join 10,000+ job seekers who used our templates to land roles at top-tier
                companies.</p>
              <a href="/services/build-resume" className="btn btn-warning btn-lg px-5 py-3 fw-bold rounded-pill text-primary shadow">
                Build My Resume Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
