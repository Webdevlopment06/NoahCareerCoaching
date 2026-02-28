import React from 'react'

export default function Volunteer() {
  return (
    <main>
      <section className="py-5 text-white bg-grad-teal">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3 text-uppercase">Your Time. Their Future.</h1>
              <p className="lead mb-4 opacity-75">Change doesn't happen by chance; it happens by choice. Join a community of over 500 volunteers dedicated to making a measurable difference.</p>
              <div className="mt-4">
                <h5 className="fw-bold mb-3">Our Mission Pulse</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-heart-fill text-warning me-2"></i> 100% Local Impact</li>
                  <li className="mb-2"><i className="bi bi-people-fill text-warning me-2"></i> Inclusive Community</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="p-4 bg-white rounded-4 shadow-lg text-dark border-top border-5 border-success">
                <h5 className="fw-bold text-success mb-3">2025 Impact Report</h5>
                <div className="text-start mb-2">
                  <small className="fw-bold">Meals Delivered</small>
                  <div className="progress progress-h-10">
                    <div className="progress-bar bg-success w-85"></div>
                  </div>
                </div>
                <div className="text-start mb-2">
                  <small className="fw-bold">Students Mentored</small>
                  <div className="progress progress-h-10">
                    <div className="progress-bar bg-primary w-60"></div>
                  </div>
                </div>
                <p className="small text-muted mt-3">"Volunteering here changed my perspective on my city." — Jane D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">THE ANATOMY OF A CHANGE-MAKER</h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3 text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">[Unique Skills]</div>
                <div className="px-3 fs-3">+</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">[2 Hours / Week]</div>
              </div>
              <div className="d-flex align-items-center text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">[Shared Mission]</div>
                <div className="px-3 fs-3">=</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-success">Sustainable Impact</div>
              </div>
            </div>
            <div className="col-md-6 ps-md-5 border-start">
              <ul className="list-unstyled fs-5">
                <li className="mb-3"><i className="bi bi-geo-alt-fill me-2 text-success"></i> Flexible Local Opportunities</li>
                <li className="mb-3"><i className="bi bi-laptop me-2 text-success"></i> Remote Skill-Based Roles</li>
                <li className="mb-3"><i className="bi bi-stars me-2 text-success"></i> Training & Support Provided</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-5">WHY VOLUNTEER WITH US?</h3>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="p-4 rounded-4 bg-white border border-success text-success d-flex align-items-center shadow-sm">
                <i className="bi bi-gift fs-2 me-3"></i>
                <span className="small">"I am giving back to my community."</span>
              </div>
            </div>
            <div className="col-md-1 fs-2 fw-bold text-success">→</div>
            <div className="col-md-5">
              <div className="p-4 rounded-4 text-white d-flex align-items-center shadow bg-grad-teal-90">
                <i className="bi bi-infinity fs-2 me-3 text-warning"></i>
                <span className="small fw-bold">"I am growing skills while creating real-world change."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-e9f7ef">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">FIND YOUR PERFECT FIT</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img src="/images/services-imgs/volunteer-coordinator.jpg" className="rounded-4 border border-4 border-white shadow" alt="Volunteer Coordinator" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-dark">Virtual Orientation Session</h4>
              <p className="text-muted">Meet our team via Zoom to discuss your interests, availability, and how your unique talents can best serve the mission.</p>
              <ul className="list-unstyled fs-5 mt-3">
                <li className="mb-2"><i className="bi bi-calendar-check text-success me-2"></i> 15-Minute Skills Match</li>
                <li className="mb-2"><i className="bi bi-shield-lock text-success me-2"></i> Safety & Ethics Training</li>
                <li className="mb-2"><i className="bi bi-chat-dots text-success me-2"></i> Meet Fellow Volunteers</li>
              </ul>
              <a href="#" className="btn btn-success rounded-pill px-4 py-2 mt-3 shadow-sm">Schedule My Orientation</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
