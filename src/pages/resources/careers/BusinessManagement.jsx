import React from 'react'

export default function BusinessManagement() {
  return (
    <main>
      <section className="business-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3">Your Future in <span className="text-white">Business &amp; Management</span></h1>
            <p className="fs-5 text-white mx-auto mb-4" style={{ maxWidth: 800 }}>
              Management careers drive strategy, growth, and organizational success.
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
          <h2 className="fs-2 fw-bold section-heading-custom text-black">Key Business &amp; Management Roles</h2>
          <p className="text-muted mb-4">Strategy, finance, and operations roles across industries.</p>
        </section>

        <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
          <div className="container">
            <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">Business Career Roadmap</h2>
            <div className="roadmap-wrapper position-relative">
              <div className="roadmap-line d-none d-lg-block" />
              <div className="row g-4 text-center justify-content-center">
                <div className="col-lg-3 step-item"><div className="roadmap-node shadow">01</div><h4 className="fw-bold mt-3">Entry Level</h4></div>
                <div className="col-lg-3 step-item"><div className="roadmap-node shadow">02</div><h4 className="fw-bold mt-3">Mid-Level</h4></div>
                <div className="col-lg-3 step-item"><div className="roadmap-node shadow">03</div><h4 className="fw-bold mt-3">Director</h4></div>
                <div className="col-lg-3 step-item"><div className="roadmap-node shadow">04</div><h4 className="fw-bold mt-3">Executive</h4></div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
          <h2 className="fs-3 text-dark fw-bold mb-3">Ready to Lead Your Career?</h2>
          <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: 700 }}>Start refining your leadership and analytical skills today.</p>
          <a href="#roles" className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg">Define Your Strategy</a>
        </section>
      </div>
    </main>
  )
}
