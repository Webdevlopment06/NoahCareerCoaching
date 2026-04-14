import React from "react";
import RoleCard from "/src/components/RoleCard";
import SmoothScrollLink from "/src/components/SmoothScrollLink";

export default function CareerTemplate({
  hero = {},
  roles = [],
  roadmap = [],
  skills = {},
  future = [],
  cta = {},
}) {
  return (
    <main>
      <section
        className={`${hero.bgClass || "hero-bg"} flex-ai-center justify-content-center py-5`}
      >
        <div className="container">
          <header className="hero-panel">
            <h1 className="display-3 fw-bolder text-white mb-3 animate-fade-in">
              {hero.title}
            </h1>
            <p className="fs-5 text-white mx-auto mb-4 max-w-800 animate-slide-up">
              {hero.blurb}
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <SmoothScrollLink
                to="roles"
                className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark"
              >
                {hero.ctaPrimary || "Explore Roles"}
              </SmoothScrollLink>
              <a
                href="/contact"
                className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3"
              >
                {hero.ctaSecondary || "Find Your Path"}
              </a>
            </div>
          </header>
        </div>
      </section>

      <div className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">
            {hero.rolesHeading || "Key Roles"}
          </h2>
          {hero.rolesSub && <p className="text-muted mb-4">{hero.rolesSub}</p>}

          <div className="container py-5">
            <div className="row g-4">
              {roles.map((r, idx) => (
                <div className="col-lg-4 animate-scale-up" key={r.title + idx}>
                  <RoleCard
                    icon={r.icon}
                    title={r.title}
                    modalTarget={`#${r.modalId}`}
                    btnLabel={r.btnLabel}
                  >
                    {r.summary}
                  </RoleCard>
                </div>
              ))}
            </div>
          </div>

          <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
            <div className="container">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">
                {hero.roadmapHeading || "Career Roadmap"}
              </h2>
              <div className="roadmap-wrapper position-relative">
                <div className="roadmap-line d-none d-lg-block"></div>
                <div className="row g-4 text-center justify-content-center">
                  {roadmap.map((step, i) => (
                    <div className="col-lg-3 step-item" key={i}>
                      <div className="roadmap-node shadow">
                        {String(step.step).padStart(2, "0")}
                      </div>
                      <h4 className="fw-bold mt-3">{step.title}</h4>
                      <p className="small text-muted">
                        {step.text}
                        <br />
                        <span className="badge bg-warning text-dark">
                          {step.years}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="skills-panel">
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              {hero.skillsHeading || "Essential Skills and Knowledge"}
            </h2>
            {hero.skillsSub && (
              <p className="text-muted mb-5">{hero.skillsSub}</p>
            )}
            <div className="row g-5">
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">
                  Hard Skills (Analytical)
                </h3>
                <div className="row g-4">
                  {skills.hard?.map((s, i) => (
                    <div className="col-6 flex-ai-center" key={i}>
                      <i className={`${s.icon} me-3 fs-3 text-f1b327`}></i>
                      <span className="fw-medium">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">
                  Soft Skills (Leadership)
                </h3>
                <div className="row g-4">
                  {skills.soft?.map((s, i) => (
                    <div className="col-12 flex-ai-center" key={i}>
                      <i className={`${s.icon} me-3 fs-3 text-f1b327`}></i>
                      <span className="fw-medium">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="future" className="skills-panel">
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              {hero.futureHeading || "Future Trends and Growth"}
            </h2>
            <div className="row g-4">
              {future.map((f, i) => (
                <div className="col-md-4" key={i}>
                  <div
                    className={`p-3 border-start border-4 ${f.borderClass || "border-secondary"} ${f.bgClass || "bg-light"} rounded-3`}
                  >
                    <h3 className="fs-5 fw-semibold mb-2">{f.title}</h3>
                    <p className="small text-muted mb-0">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>

      <section
        className={`${hero.bgClass || "hero-bg"} flex-ai-center justify-content-center py-5`}
      >
        <div className="container">
          <section className="hero-panel">
            <h2 className="fs-3 text-white fw-bold mb-3">{cta.title}</h2>
            <p className="fs-5 mb-4 mx-auto text-white max-w-700">{cta.text}</p>
            <a
              href="/contact"
              className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg"
            >
              {cta.button || "Start"}
            </a>
          </section>
        </div>
      </section>

      {/* Modals rendered from roles data */}
      {roles
        .filter((r) => r.modal)
        .map((r) => (
          <div
            className="modal fade"
            id={r.modalId}
            tabIndex="-1"
            aria-hidden="true"
            key={r.modalId}
          >
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content border-0 rounded-4 shadow-lg">
                <div className="modal-header bg-warning text-black rounded-top-4">
                  <h5 className="modal-title fw-bold">{r.modal.title}</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-4 p-md-5">
                  <div className="row g-4 align-items-center">
                    <div className="col-12 col-lg-6">
                      {r.modal.image && (
                        <div className="center-card h-100">
                          <img
                            src={r.modal.image}
                            alt={r.modal.title}
                            className="img-round-shadow"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="d-flex flex-column gap-3 h-100">
                        {r.modal.items?.map((it, i) => (
                          <div
                            className={`p-4 ${it.bgClass || "bg-light"} rounded-3 border`}
                            key={i}
                          >
                            <p className="fw-bold fs-5 text-dark mb-1">
                              {it.title}
                            </p>
                            <p className="mb-0 text-muted small">{it.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </main>
  );
}
