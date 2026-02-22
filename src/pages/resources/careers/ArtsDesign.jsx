import React from 'react'

export default function ArtsDesign() {
  return (
    <main>
      <section className="arts-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3">Your Future in <span className="text-white">Creative Arts &amp; Design</span></h1>
            <p className="fs-5 text-white mx-auto mb-4" style={{ maxWidth: 800 }}>
              Shape the visual and emotional world around us. Careers in design, media, and fine arts merge passion with technical skill.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <a href="#roles" className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark">Explore Roles</a>
              <a href="#education" className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3">Find Your Path</a>
            </div>
          </header>
        </div>
      </section>

      <div className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">Key Creative Roles</h2>
          <p className="text-muted mb-4">Digital, media and visual arts roles that blend creativity and technology.</p>

          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card creative-card card-flyer h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3"><i className="bi bi-lightbulb fs-3"></i></div>
                  <h3 className="fw-bold">Digital &amp; UX/UI Design</h3>
                  <p className="text-muted">Craft intuitive interfaces and meaningful digital experiences.</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card creative-card card-flyer h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3"><i className="bi bi-graph-up-arrow fs-3"></i></div>
                  <h3 className="fw-bold">Visual Arts &amp; Media Production</h3>
                  <p className="text-muted">Storytelling through imagery, video and multimedia production.</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card creative-card card-flyer h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3"><i className="bi bi-gear fs-3"></i></div>
                  <h3 className="fw-bold">Management &amp; Strategy</h3>
                  <p className="text-muted">Lead creative teams and translate vision into business outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
          <div className="container">
            <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">Creative Career Roadmap</h2>
            <div className="roadmap-wrapper position-relative">
              <div className="roadmap-line d-none d-lg-block" />
              <div className="row g-4 text-center justify-content-center">
                <div className="col-lg-3 step-item">
                  <div className="roadmap-node shadow">01</div>
                  <h4 className="fw-bold mt-3">Entry Level</h4>
                </div>
                <div className="col-lg-3 step-item">
                  <div className="roadmap-node shadow">02</div>
                  <h4 className="fw-bold mt-3">Mid-Level</h4>
                </div>
                <div className="col-lg-3 step-item">
                  <div className="roadmap-node shadow">03</div>
                  <h4 className="fw-bold mt-3">Senior</h4>
                </div>
                <div className="col-lg-3 step-item">
                  <div className="roadmap-node shadow">04</div>
                  <h4 className="fw-bold mt-3">Leadership</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="future" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">Future Trends</h2>
          <p className="text-muted">Generative AI, XR and a growing freelance economy shape creative work.</p>
        </section>

        <section className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
          <h2 className="fs-3 text-dark fw-bold mb-3">Ready to Create Your Masterpiece?</h2>
          <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: 700 }}>Dedicate yourself to practice and never stop sharing your work.</p>
          <a href="#roles" className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg">Start Sketching Your Career</a>
        </section>
      </div>
    </main>
  )
}
