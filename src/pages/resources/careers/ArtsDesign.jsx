import React from 'react'

export default function ArtsDesign() {
  return (
    <main>
      {/* section with image container */}
      <section className="arts-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          {/* heading */}
          <header className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3">
              Your Future in <span className="text-white">Creative Arts & Design</span>
            </h1>
            <p className="fs-5 text-white mx-auto mb-4 max-w-800">
              Shape the visual and emotional world around us. Careers in design, media, and fine arts merge
              passion with commercial demand, requiring both artistry and technical skill.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <a href="#roles" className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark">Explore Roles</a>
              <a href="#education" className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3">Find Your Path</a>
            </div>
          </header>
        </div>
      </section>

      <main className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">Key Business & Management Roles</h2>
          <p className="text-muted mb-4">Detailing common and high-impact roles, organized by function.</p>

          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card creative-card card-flyer h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3">
                    <i className="bi bi-lightbulb fs-3"></i>
                  </div>
                  <h3 className="fw-bold">Digital & UX/UI Design</h3>
                  <p className="text-muted">This field bridges the gap between human behavior and technology by crafting intuitive, user-centered interfaces for digital products.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#strategyModal">Learn More →</a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card creative-card card-flyer h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3">
                    <i className="bi bi-graph-up-arrow fs-3"></i>
                  </div>
                  <h3 className="fw-bold">Visual Arts & Media Production</h3>
                  <p className="text-muted">This sector serves as a powerful storytelling engine that communicates complex ideas through high-impact imagery and multimedia content.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#financeModal">Learn More →</a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card creative-card card-flyer h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3">
                    <i className="bi bi-gear fs-3"></i>
                  </div>
                  <h3 className="fw-bold">Management & Strategy</h3>
                  <p className="text-muted">Acting as the vital link between creative vision and business goals, this discipline focuses on leading teams.</p>
                  <a href="#" className="btn btn-warning text-decoration-none fw-bold mt-auto" data-bs-toggle="modal" data-bs-target="#opsModal">Learn More →</a>
                </div>
              </div>
            </div>
          </div>

          <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
            <div className="container">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">Creative Arts & Design Career Roadmap</h2>
              <div className="roadmap-wrapper position-relative">
                <div className="roadmap-line d-none d-lg-block"></div>
                <div className="row g-4 text-center justify-content-center">
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">01</div>
                    <h4 className="fw-bold mt-3">Entry Level</h4>
                    <p className="small text-muted">Junior Graphic Designer/ Production & Design Assistant/ Social Media Content Creator.<br /><span className="badge bg-warning text-dark">Years 0-2</span></p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">02</div>
                    <h4 className="fw-bold mt-3">Mid-Level</h4>
                    <p className="small text-muted">Graphic, Visual, UX/UI, Multimedia Designer.<br /><span className="badge bg-warning text-dark">Years 2-5</span></p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">03</div>
                    <h4 className="fw-bold mt-3">Senior/ Specialized Designer</h4>
                    <p className="small text-muted">Art Director/ UX Lead/ Motion Graphics Designer/ Senior Graphic Designer.<br /><span className="badge bg-warning text-dark">Years 5-8</span></p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">04</div>
                    <h4 className="fw-bold mt-3">Creative Leadership/Independent Expert</h4>
                    <p className="small text-muted">Creative Director/ Design Manager/ Brand Director/ Freelance Studio Owner.<br /><span className="badge bg-warning text-dark">Years 8-12+</span></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">Essential Skills and Knowledge</h2>
            <p className="text-muted mb-5">Successful managers combine quantitative analysis with dynamic leadership skills.</p>
            <div className="row g-5">
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">Hard Skills (Analytical)</h3>
                <div className="row g-4">
                  <div className="col-6 d-flex align-items-center">
                    <i className="bi bi-calculator-fill me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">Adobe Creative Suite</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i className="bi bi-table me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">Figma / Sketch</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i className="bi bi-diagram-3-fill me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">3D Modeling</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i className="bi bi-bar-chart-line-fill me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">Video Editing</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i className="bi bi-cloud-check-fill me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">Typography & Color Theory</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i className="bi bi-shield-check me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">Layout & Composition</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">Soft Skills (Leadership)</h3>
                <div className="row g-4">
                  <div className="col-12 d-flex align-items-center">
                    <i className="bi bi-people-fill me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">Unwavering Creativity & Originality</span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <i className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">Time Management & Meeting Deadlines</span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <i className="bi bi-chat-dots-fill me-3 fs-3 text-f1b327"></i>
                    <span className="fw-medium">Ability to Interpret & Apply Client Feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="future" className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5">
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">Future Trends and Growth</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-secondary bg-warning-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-secondary mb-2">Generative AI in Design</h3>
                  <ul className="text-muted small">
                    <li>AI as a collaborator, not a replacement.</li>
                    <li>Prompt Engineering becomes a valuable creative skill.</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-primary bg-primary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">3D, XR, and Metaverse Design</h3>
                  <p className="small text-muted mb-0">Growing demand for 3D modelers and designers specializing in Extended Reality (XR) experiences.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-secondary mb-2">The Freelance Economy</h3>
                  <p className="small text-muted mb-0">More creative professionals are choosing self-employment, requiring strong business acumen.</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <section className="arts-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <section className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h2 className="fs-3 text-white fw-bold mb-3">Ready to Create Your Masterpiece?</h2>
            <p className="fs-5 mb-4 mx-auto text-white max-w-700">
              The only limits in the creative world are the ones you place on yourself. Dedicate yourself to practice and never stop sharing your work.
            </p>
            <a href="#roles" className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg">
              Start Sketching Your Career
            </a>
          </section>
        </div>
      </section>

      {/* Modals */}
      <div className="modal fade" id="strategyModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Digital and UX/UI Design</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/art1.png" alt="Strategy Planning" className="img-fluid rounded-3 shadow-sm" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                      <div className="p-3 bg-warning-subtle rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">Graphic Designer</p>
                        <p className="mb-0 text-muted small">Visual identity, branding, marketing materials, and print design.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">UX/UI Designer</p>
                        <p className="mb-0 text-muted small">Creating intuitive, accessible digital interfaces and optimizing user flows.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">Web Designer</p>
                        <p className="mb-0 text-muted small">Layout, visual appearance, and usability of websites.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-primary-subtle rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">Interaction Designer</p>
                        <p className="mb-0 text-muted small">How users interact with products and systems.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="financeModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Visual Arts and Media Production</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100">
                    <div className="p-4 bg-warning-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">Illustrator / Concept Artist</p>
                      <p className="mb-0 text-muted small">Creating original artwork for books, games, films, and advertising.</p>
                    </div>
                    <div className="p-4 bg-primary-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">Videographer / Editor</p>
                      <p className="mb-0 text-muted small">Filming, editing, and post-production for commercial, corporate, or broadcast media.</p>
                    </div>
                    <div className="p-4 bg-light rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">Photographer (Commercial/Art)</p>
                      <p className="mb-0 text-muted small">Visual storytelling, capturing high-quality images for marketing or artistic purposes.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/art2.png" alt="Finance and HR" className="img-fluid rounded-3 shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="opsModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Management and Strategy</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img src="/images/art3.png" alt="Operations and PMP" className="img-fluid rounded-3 shadow-sm" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100">
                    <div className="p-4 bg-warning-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">Art Director / Creative Lead</p>
                      <p className="mb-0 text-muted small">Overseeing the visual style and execution of projects; managing creative teams.</p>
                    </div>
                    <div className="p-4 bg-primary-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">Marketing/Brand Specialist</p>
                      <p className="mb-0 text-muted small">Developing the aesthetic and messaging that defines a brand's public presence.</p>
                    </div>
                    <div className="p-4 bg-light rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">Copywriter / Content Creator</p>
                      <p className="mb-0 text-muted small">Writing persuasive and engaging text that supports the visual design elements.</p>
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
