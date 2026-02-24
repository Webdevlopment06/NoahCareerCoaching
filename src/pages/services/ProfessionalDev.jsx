import React from 'react'

export default function ProfessionalDev() {
  return (
    <main>
      <section className="py-5 text-white bg-grad-multi1">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3 text-uppercase">Close the Skills Gap. Lead the Future.</h1>
              <p className="lead mb-4 opacity-75">In the next 5 years, 40% of core skills will change. Are you evolving fast enough to remain indispensable?</p>
              <div className="mt-4">
                <h5 className="fw-bold mb-3">Growth Roadmap</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-graph-up-arrow text-warning me-2"></i> Upskilling vs. Reskilling</li>
                  <li className="mb-2"><i className="bi bi-people-fill text-warning me-2"></i> Emotional Intelligence (EQ)</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="p-4 bg-white rounded-4 shadow-lg text-dark">
                <h5 className="fw-bold text-primary">The 70-20-10 Model</h5>
                <div className="progress mb-3 progress-h-30">
                  <div className="progress-bar bg-primary w-70">Experience</div>
                </div>
                <div className="progress mb-3 progress-h-30">
                  <div className="progress-bar bg-info w-20">Mentorship</div>
                </div>
                <div className="progress progress-h-30">
                  <div className="progress-bar bg-secondary w-10">Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">THE ANATOMY OF A MODERN LEADER</h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3 text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold">Strategic Vision</div>
                <div className="px-3 fs-3">+</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold">Operational Agility</div>
              </div>
              <div className="d-flex align-items-center text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold">Cultural Intelligence</div>
                <div className="px-3 fs-3">=</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-danger">The Executive Presence</div>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <ul className="list-unstyled fs-5">
                <li className="mb-3"><i className="bi bi-shield-check me-2 text-danger"></i> Ethical Decision Making</li>
                <li className="mb-3"><i className="bi bi-megaphone me-2 text-danger"></i> High-Stakes Communication</li>
                <li className="mb-3"><i className="bi bi-puzzle me-2 text-danger"></i> Complex Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-5">UPGRADING YOUR CAREER MINDSET</h3>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="p-4 rounded-pill bg-secondary text-white d-flex align-items-center shadow opacity-75">
                <i className="bi bi-lock-fill fs-2 me-3"></i>
                <span className="small">"I only do what's in my job description."</span>
              </div>
            </div>
            <div className="col-md-1 fs-2 fw-bold">→</div>
            <div className="col-md-5">
              <div className="p-4 rounded-pill text-white d-flex align-items-center shadow bg-grad-pink">
                <i className="bi bi-rocket-takeoff-fill fs-2 me-3 text-warning"></i>
                <span className="small fw-bold">"I identify gaps and solve problems proactively."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">ADVANCE YOUR CAREER WITH 1-ON-1 COACHING</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img src="https://via.placeholder.com/200" className="rounded-4 border border-4 border-white shadow shadow-lg" alt="Mentor" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-dark">Personalized Leadership Strategy</h4>
              <p className="text-muted">Direct access to industry veterans to navigate office politics, negotiation, and high-level strategy.</p>
              <ul className="list-unstyled fs-5 mt-3">
                <li className="mb-2"><i className="bi bi-patch-check-fill text-dark me-2"></i> Promotion Roadmap Building</li>
                <li className="mb-2"><i className="bi bi-patch-check-fill text-dark me-2"></i> Salary Negotiation Prep</li>
                <li className="mb-2"><i className="bi bi-patch-check-fill text-dark me-2"></i> Management Skills Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
