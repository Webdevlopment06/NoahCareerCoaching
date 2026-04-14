import React from "react";
import ServiceHero from "/src/components/ServiceHero";

export default function Interview() {
  return (
    <main>
      <ServiceHero
        title="Why your resume might be getting ghosted"
        subtitle="Most Fortune 500 companies use an Applicant Tracking System or (ATS). If your resume isn't optimized, it stays hidden."
      >
        <div className="small text-white">
          <h5 className="fw-bold mb-3 text-white">Key Takeaways</h5>
          <div className="small text-white">
            Plain Text is King • Standard Headers
          </div>
        </div>
      </ServiceHero>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            THE ANATOMY OF A HIGH-IMPACT RESUME
          </h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="flex-ai-center mb-3">
                <div className="border p-3 rounded shadow-sm flex-grow-1 text-center fw-bold text-muted">
                  Action Verb
                </div>
                <div className="px-3 fs-3">+</div>
                <div className="border p-3 rounded shadow-sm flex-grow-1 text-center fw-bold text-muted">
                  Quantifiable Task
                </div>
              </div>
              <div className="flex-ai-center">
                <div className="border p-3 rounded shadow-sm flex-grow-1 text-center fw-bold text-muted">
                  Action Verb
                </div>
                <div className="px-3 fs-3">=</div>
                <div className="border p-3 rounded shadow-sm flex-grow-1 text-center fw-bold text-primary">
                  Business Impact
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <i className="bi bi-file-earmark-person me-2 text-primary"></i>{" "}
                  The Professional Summary
                </li>
                <li className="mb-3">
                  <i className="bi bi-grid-3x3-gap me-2 text-primary"></i> The
                  Skills Matrix
                </li>
                <li className="mb-3">
                  <i className="bi bi-list-task me-2 text-primary"></i> The
                  Experience Block
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fw-bold mb-5">
            MASTER THE "POWER BULLET" FORMULA
          </h3>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="p-4 rounded-pill bg-danger text-white flex-ai-center shadow">
                <i className="bi bi-x-circle fs-2 me-3"></i>
                <span className="small">
                  Responsible for managing a team of five.
                </span>
              </div>
            </div>
            <div className="col-md-1 text-center fs-2 fw-bold">=</div>
            <div className="col-md-5">
              <div className="p-4 rounded-pill bg-info text-white flex-ai-center shadow bg-grad-cyan">
                <i className="bi bi-star-fill fs-2 me-3 text-warning"></i>
                <span className="small fw-bold">
                  Managed a cross-functional team of 5 to deliver $250k
                  projects.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-f1b327">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">
            1-ON-1 VIRTUAL STRATEGY SESSIONS
          </h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src="/images/services-imgs/coach.jpg"
                className="rounded-circle border border-4 border-white shadow shadow-lg"
                alt="Coach"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled fs-5">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  Live Screen-Sharing
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  Narrative Building
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  LinkedIn Alignment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
