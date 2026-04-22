import React from "react";
import ServiceHero from "/src/components/ServiceHero";

export default function JobSearch() {
  return (
    <main>
      <ServiceHero
        title="Stop Applying. Start Conversing."
        subtitle={`80% of jobs are never posted publicly. Our strategy moves you out of the crowded applicant pool and into the "Hidden Job Market" through targeted networking.`}
      >
        <div className="small text-white">
          <h5 className="fw-bold mb-3 text-white">Tactical Pillars</h5>
          <div className="small text-white">
            Targeted Company Mapping • The 2-Step Networking Flywheel
          </div>
        </div>
      </ServiceHero>

      <section className="py-5 bg-white darkmode-override">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            THE ANATOMY OF A MODERN CAMPAIGN
          </h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="flex-ai-center mb-3 text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">
                  Target List
                </div>
                <div className="px-3 fs-3">+</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">
                  Warm Outreach
                </div>
              </div>
              <div className="flex-ai-center text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">
                  Referral Loop
                </div>
                <div className="px-3 fs-3">=</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-dark">
                  The Priority Interview
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-md-5 border-start border-info border-3">
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <i className="bi bi-search me-2 text-info"></i> Boolean Search
                  Mastery
                </li>
                <li className="mb-3">
                  <i className="bi bi-linkedin me-2 text-info"></i> LinkedIn
                  Social Selling
                </li>
                <li className="mb-3">
                  <i className="bi bi-calendar-event me-2 text-info"></i>{" "}
                  Interview Feedback Loops
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light darkmode-override">
        <div className="container text-center">
          <h3 className="fw-bold mb-5">UPGRADE YOUR OUTREACH</h3>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="p-4 rounded-4 bg-white darkmode-override border border-secondary text-muted flex-ai-center shadow-sm">
                <i className="bi bi-mailbox fs-2 me-3"></i>
                <span className="small">
                  "I applied to 50 jobs on LinkedIn today."
                </span>
              </div>
            </div>
            <div className="col-md-1 fs-2 fw-bold text-dark">→</div>
            <div className="col-md-5">
              <div className="p-4 rounded-4 text-white flex-ai-center shadow bg-grad-blue">
                <i className="bi bi-rocket-takeoff fs-2 me-3 text-info"></i>
                <span className="small fw-bold">
                  "I spoke with 3 insiders at my top target companies."
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light darkmode-override">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">
            BUILD YOUR SEARCH BLUEPRINT
          </h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <div className="position-relative d-inline-block">
                <img
                  loading="lazy"
                  src="/images/services-imgs/strategy-coach.jpg"
                  className="rounded-circle shadow"
                  alt="Strategy Coach"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-dark">Job Search Campaign Kickoff</h4>
              <p className="text-muted">
                Stop wasting hours on Easy-Apply. We spend 60 minutes building a
                high-conversion outreach system tailored to your seniority
                level.
              </p>
              <ul className="list-unstyled fs-5 mt-3">
                <li className="mb-2">
                  <i className="bi bi-check2-square text-primary me-2"></i>{" "}
                  Custom Outreach Scripting
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-square text-primary me-2"></i>{" "}
                  Hidden Market Research
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-square text-primary me-2"></i>{" "}
                  Weekly Action Planner
                </li>
              </ul>
              <a
                href="/contact"
                className="btn btn-dark rounded-pill px-5 py-3 mt-3 shadow-lg"
              >
                Start My Strategy Sprint
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
