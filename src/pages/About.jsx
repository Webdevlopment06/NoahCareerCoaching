import React from 'react'

export default function About() {
  return (
    <main>
      <section id="hero" className="about-hero">
        <div className="about-hero-overlay" />
        <div className="position-relative">
          <h1 className="display-3 fw-bold mb-3 fs-hero-clamp">
            Our Mission
          </h1>

          <p className="lead fs-lead-clamp">
            Empowering individuals to grow, transform, and find purpose through guidance,
            education, and meaningful support.
          </p>
        </div>
      </section>

      <div id="founder" className="about-founder">
        <div className="container my-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img src="/images/career.png" className="img-fluid w-100 h-100 object-fit-cover rounded min-h-400"
                alt="Large Section" />
            </div>

            <div className="col-lg-6 d-flex flex-column align-items-center text-center">
              <img src="/images/chris.png" className="rounded-circle mb-3 img-180" alt="Christopher Noah" />

              <p className="mb-4 px-3 text-dark">
                Christopher Noah is the CEO and founder of Noah Career Coaching. His drive and passion to provide help to
                people has motivated him to create this 100% volunteer non-profit.
              </p>

              <div className="d-flex gap-3">
                <a href="https://www.facebook.com/p/Noah-Career-Coaching-61578635225209/" target="_blank" className="text-dark">
                  <i className="bi bi-facebook fs-3"></i>
                </a>
                <a href="https://www.instagram.com/p/DOytPcRkRr5/" target="_blank" className="text-dark">
                  <i className="bi bi-instagram fs-3"></i>
                </a>
                <a href="https://www.linkedin.com/in/christopher-noah-a48a8a376" target="_blank" className="text-dark">
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
                <a href="#" target="_blank" className="text-dark">
                  <i className="bi bi-twitter-x fs-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="join" className="py-5 about-join">
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-4">How to Join</h2>
          <p className="mb-5">Choose the path that best fits your goals and start benefiting right away.</p>

          <div className="row g-5">
            <div className="col-lg-6">
              <div className="p-4 rounded bg-white">
                <h3 className="fw-bold text-dark mb-3">Join as a Volunteer</h3>

                <div className="row gy-4">
                  <div className="col-12">
                    <div className="p-4 rounded shadow-sm">
                      <h4 className="fw-bold text-dark">1. Apply to Volunteer</h4>
                      <p className="text-dark">Submit a short volunteer application to help us learn how you'd like to
                        contribute.</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-4 rounded shadow-sm">
                      <h4 className="fw-bold text-dark">2. Orientation</h4>
                      <p className="text-dark">Attend a brief orientation session to understand our mission, roles, and
                        expectations.</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-4 rounded shadow-sm">
                      <h4 className="fw-bold text-dark">3. Start Volunteering</h4>
                      <p className="text-dark">Begin supporting our programs and making an impact in the community.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded bg-white">
                <h3 className="fw-bold text-dark mb-3">Join as a Client</h3>

                <div className="row gy-4">
                  <div className="col-12">
                    <div className="p-4 rounded shadow-sm">
                      <h4 className="fw-bold text-dark">1. Apply Online</h4>
                      <p className="text-dark">Submit your quick online application so we can understand your career goals.
                      </p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-4 rounded shadow-sm">
                      <h4 className="fw-bold text-dark">2. Meet Our Team</h4>
                      <p className="text-dark">Attend an introduction session so we can personalize your coaching experience.
                      </p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-4 rounded shadow-sm">
                      <h4 className="fw-bold text-dark">3. Get Started</h4>
                      <p className="text-dark">Gain access to our career programs, resources, and personalized support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="donation" className="py-5 donation-section">
        <div className="container text-center">
          <blockquote className="fs-3 fw-semibold lh-140">
            "Your generosity fuels the mission — every donation helps non‑profits transform lives and build stronger
            communities."
          </blockquote>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Support Our Mission</h2>
            <p className="lead mx-auto max-w-700">
              Your contribution helps us continue offering essential community support,
              career guidance, and resources to individuals in need. Every donation
              makes a difference.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center p-4">
                <h4 className="fw-bold mb-3">$25</h4>
                <p>Helps us provide educational materials and resources to clients.</p>
                <a href="#" className="btn btn-primary mt-auto">Donate $25</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center p-4">
                <h4 className="fw-bold mb-3">$50</h4>
                <p>Supports one-on-one coaching sessions for individuals in need.</p>
                <a href="#" className="btn btn-primary mt-auto">Donate $50</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center p-4">
                <h4 className="fw-bold mb-3">Custom Amount</h4>
                <p>Your generosity helps us expand our programs and reach more people.</p>
                <a href="#" className="btn btn-primary mt-auto">Donate Any Amount</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="text-muted mx-auto max-w-700">
              Noah Career Coaching is committed to transparency and impact.
              All donations directly support program growth, client resources,
              and community outreach initiatives.
            </p>
          </div>
        </div>
      </section>

      
    </main>
  )
}
