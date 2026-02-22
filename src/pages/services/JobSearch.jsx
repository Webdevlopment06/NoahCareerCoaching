import React from 'react'

export default function JobSearch() {
  return (
    <main>
      <section className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #232526 0%, #414345 100%)' }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3 text-uppercase">Stop Applying. Start Conversing.</h1>
              <p className="lead mb-4 opacity-75">80% of jobs are never posted publicly. Our strategy moves you out of the crowded applicant pool and into the "Hidden Job Market" through targeted networking.</p>
              <div className="mt-4">
                <h5 className="fw-bold mb-3">Tactical Pillars</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-radar text-info me-2"></i> Targeted Company Mapping</li>
                  <li className="mb-2"><i className="bi bi-person-plus-fill text-info me-2"></i> The 2-Step Networking Flywheel</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="p-4 bg-dark rounded-4 shadow-lg border border-secondary">
                <h5 className="fw-bold text-info mb-3">The Job Search Funnel</h5>
                <div className="d-flex flex-column align-items-center">
                  <div className="w-100 bg-secondary py-2 mb-1 rounded-top opacity-75 small">100 Applications</div>
                  <div className="w-75 bg-info py-2 mb-1 text-dark small fw-bold">10 Recruiter Screens</div>
                  <div className="w-50 bg-primary py-2 mb-1 small fw-bold">3 Final Rounds</div>
                  <div className="w-25 bg-success py-2 rounded-bottom small fw-bold">1 Offer</div>
                </div>
                <p className="small text-muted mt-3">Current market conversion: 1%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">THE ANATOMY OF A MODERN CAMPAIGN</h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3 text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">Target List</div>
                <div className="px-3 fs-3">+</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">Warm Outreach</div>
              </div>
              <div className="d-flex align-items-center text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">Referral Loop</div>
                <div className="px-3 fs-3">=</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-dark">The Priority Interview</div>
              </div>
            </div>
            <div className="col-md-6 ps-md-5 border-start border-info border-3">
              <ul className="list-unstyled fs-5">
                <li className="mb-3"><i className="bi bi-search me-2 text-info"></i> Boolean Search Mastery</li>
                <li className="mb-3"><i className="bi bi-linkedin me-2 text-info"></i> LinkedIn Social Selling</li>
                <li className="mb-3"><i className="bi bi-calendar-event me-2 text-info"></i> Interview Feedback Loops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-5">UPGRADE YOUR OUTREACH</h3>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="p-4 rounded-4 bg-white border border-secondary text-muted d-flex align-items-center shadow-sm">
                <i className="bi bi-mailbox fs-2 me-3"></i>
                <span className="small">"I applied to 50 jobs on LinkedIn today."</span>
              </div>
            </div>
            <div className="col-md-1 fs-2 fw-bold text-dark">→</div>
            <div className="col-md-5">
              <div className="p-4 rounded-4 text-white d-flex align-items-center shadow" style={{ background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)' }}>
                <i className="bi bi-rocket-takeoff fs-2 me-3 text-info"></i>
                <span className="small fw-bold">"I spoke with 3 insiders at my top target companies."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">BUILD YOUR SEARCH BLUEPRINT</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <div className="position-relative d-inline-block">
                <img src="https://via.placeholder.com/200" className="rounded-circle shadow" alt="Strategy Coach" />
                <span className="position-absolute bottom-0 end-0 badge rounded-pill bg-info text-dark p-3 shadow border border-white">Zoom Session</span>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-dark">Job Search Campaign Kickoff</h4>
              <p className="text-muted">Stop wasting hours on Easy-Apply. We spend 60 minutes building a high-conversion outreach system tailored to your seniority level.</p>
              <ul className="list-unstyled fs-5 mt-3">
                <li className="mb-2"><i className="bi bi-check2-square text-primary me-2"></i> Custom Outreach Scripting</li>
                <li className="mb-2"><i className="bi bi-check2-square text-primary me-2"></i> Hidden Market Research</li>
                <li className="mb-2"><i className="bi bi-check2-square text-primary me-2"></i> Weekly Action Planner</li>
              </ul>
              <a href="#" className="btn btn-dark rounded-pill px-5 py-3 mt-3 shadow-lg">Start My Strategy Sprint</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
