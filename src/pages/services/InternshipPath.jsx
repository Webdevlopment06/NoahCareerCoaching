import React from "react";
import ServiceHero from "/src/components/ServiceHero";

export default function InternshipPath() {
  return (
    <main>
      <ServiceHero
        title="Bridge the Gap from Campus to Career"
        subtitle="Stop wondering how to get experience without having any. Our pathways are designed to turn your classroom knowledge into corporate impact."
      >
        <div className="small text-white">
          <h5 className="fw-bold mb-3 text-white">Your Journey Map</h5>
          <div className="small text-white">
            Skill Discovery • Real-World Project Placement
          </div>
        </div>
      </ServiceHero>

      <section className="py-5 bg-white darkmode-override">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            THE ANATOMY OF A STANDOUT INTERN
          </h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="flex-ai-center mb-3 text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">
                  [Academic Projects]
                </div>
                <div className="px-3 fs-3">+</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">
                  [Soft Skills]
                </div>
              </div>
              <div className="flex-ai-center text-center">
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-muted">
                  [Technical Certs]
                </div>
                <div className="px-3 fs-3">=</div>
                <div className="border p-3 rounded-4 shadow-sm flex-grow-1 fw-bold text-primary">
                  The High-Potential Hire
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <i className="bi bi-mortarboard me-2 text-primary"></i>{" "}
                  Relevant Coursework Optimization
                </li>
                <li className="mb-3">
                  <i className="bi bi-github me-2 text-primary"></i> Portfolio &
                  Project GitHubs
                </li>
                <li className="mb-3">
                  <i className="bi bi-chat-heart me-2 text-primary"></i>{" "}
                  Professional Communication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light darkmode-override">
        <div className="container text-center">
          <h3 className="fw-bold mb-5">FROM THEORY TO IMPACT</h3>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="p-4 rounded-pill bg-light darkmode-override border border-primary text-primary flex-ai-center shadow-sm">
                <i className="bi bi-book fs-2 me-3"></i>
                <span className="small">"I learned how to code in Java."</span>
              </div>
            </div>
            <div className="col-md-1 fs-2 fw-bold text-primary">→</div>
            <div className="col-md-5">
              <div className="p-4 rounded-pill text-white flex-ai-center shadow bg-grad-yellow-indigo">
                <i className="bi bi-cpu fs-2 me-3 text-warning"></i>
                <span className="small fw-bold">
                  "I built a scalable API that handled 5k requests."
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-f0f4f8">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">
            LAND YOUR FIRST INTERNSHIP
          </h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                loading="lazy"
                src="/images/services-imgs/mentor2.jpg"
                className="rounded-pill border border-4 border-white shadow shadow-lg"
                alt="Mentor"
              />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-dark">Early Career Strategy</h4>
              <p className="text-muted">
                Work with mentors who have hired hundreds of interns at top tech
                and finance firms.
              </p>
              <ul className="list-unstyled fs-5 mt-3">
                <li className="mb-2">
                  <i className="bi bi-lightning-fill text-primary me-2"></i>{" "}
                  Behavioral Interview Drills
                </li>
                <li className="mb-2">
                  <i className="bi bi-lightning-fill text-primary me-2"></i>{" "}
                  Cold Outreach Strategy
                </li>
                <li className="mb-2">
                  <i className="bi bi-lightning-fill text-primary me-2"></i>{" "}
                  Portfolio Review & Audit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
