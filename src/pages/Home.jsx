import React from 'react'

export default function Home() {
  return (
    <main>
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-4">
              <div className="hero-content p-4 p-md-0">
                <h1 className="display-5 fw-bold text-dark mb-3">
                  Your Career Path Doesn't Have To Be A Solo Journey
                </h1>
                <p className="lead mb-4 heroFont blackText text-bold">
                  Free, personalized career coaching for job searches and career changes. Get the tools you need to make
                  an impression, regardless of your starting point.
                </p>
                <div className="d-grid d-md-block">
                  <button className="btn btn-warning btn-lg px-5 py-3 shadow-sm fw-bold main-hero-btn">
                    START MY COACHING JOURNEY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 nav-bg">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="pe-lg-4">
                <h2 className="fw-bold h4 blackText">The Why</h2>
                <p className="blackText small mb-4">
                  Stop searching. Start landing. We provide the expert guidance to help you unlock your full professional
                  potential.
                </p>

                <div className="d-flex gap-3 mb-5">
                  <div
                    className="icon-circle border border-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-shield-check blackText h4 mb-0"></i>
                  </div>
                  <div
                    className="icon-circle border border-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-handshake blackText h4 mb-0"></i>
                  </div>
                  <div
                    className="icon-circle border border-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-mortarboard blackText h4 mb-0"></i>
                  </div>
                </div>

                <h2 className="fw-bold blackText h4">Social Proof</h2>
                <div className="d-flex align-items-center gap-4 mt-3">
                  <div>
                    <span className="h3 fw-bold blackText">500+</span>
                    <p className="small blackText mb-0">Lives Impacted</p>
                  </div>
                  <div className="border-start border-dark ps-4">
                    <span className="h3 fw-bold blackText">100%</span>
                    <p className="small blackText mb-0">Free</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h2 className="fw-bold h4 blackText mb-4">The Power of Three</h2>
              <div className="row g-3 mb-5">
                <div className="col-md-4">
                  <div className="card h-100 bg-transparent border-success rounded-4 p-3 shadow-sm">
                    <i className="bi bi-file-earmark-text h2 blackText"></i>
                    <p className="small blackText mt-2 mb-0">Stand out to recruiters with a professional career roadmap.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 bg-transparent border-success rounded-4 p-3 shadow-sm">
                    <i className="bi bi-mic h2 blackText"></i>
                    <p className="small mt-2 blackText mb-0">Mock interviews to turn your nerves into confidence.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 bg-transparent border-success rounded-4 p-3 shadow-sm">
                    <i className="bi bi-search h2 blackText"></i>
                    <p className="small mt-2 blackText mb-0">Don't just apply - get referred and get noticed.</p>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3">
                    <img src="/images/sanh.jpg" className="rounded-circle border border-success border-2"
                      alt="Sanh K." />
                    <div className="border-start border-secondary ps-3">
                      <p className="small blackText fst-italic mb-0">"Noah helped me land my dream job!"</p>
                      <footer className="blockquote-footer blackText mt-1 mb-0">Sanh K.</footer>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3">
                    <img src="/images/mait.jpg" className="rounded-circle border border-success border-2"
                      alt="Mait M." />
                    <div className="border-start border-secondary ps-3">
                      <p className="small blackText fst-italic mb-0">"Found real confidence - get hired faster!"</p>
                      <footer className="blockquote-footer blackText mt-1 mb-0">Mait M.</footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a href="#" className="glass-back" id="backToTop">
        <i className="bi bi-arrow-up"></i>
      </a>
    </main>
  )
}
