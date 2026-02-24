import React from 'react'

export default function Healthcare() {
  return (
    <main>
      {/* section with image container */}
      <section className="health-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          {/* heading */}
          <header className=" rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3">
              Your Future in{" "}
              <span className="text-white">Healthcare &amp; Wellness</span>
            </h1>
            <p className="fs-5 text-white mx-auto mb-4 max-w-800">
              Healthcare offers diverse, demanding, and immensely rewarding careers
              from direct patient care to research and administration.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <a
                href="#roles"
                className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark"
              >
                Explore Roles
              </a>
              <a
                href="#education"
                className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3"
              >
                Find Your Path
              </a>
            </div>
          </header>
          {/* end of section and div */}
        </div>
      </section>
      {/* end of art image */}
      <main className="container-xl py-4 py-lg-5">
        {/* start of second */}
        {/* primary color backing */}
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">
            Key Healthcare &amp; Wellness Roles
          </h2>
          <p className="text-muted mb-4">
            Detailing high-impact roles across clinical, allied, and administrative
            health.
          </p>
          {/* new section idea */}
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm">
                  <div className="icon-box  mb-3">
                    <i className="bi bi-lightbulb fs-3" />
                  </div>
                  <h3 className="fw-bold">Clinical &amp; Direct Patient Care</h3>
                  <p className="text-muted">
                    This field focuses on providing hands-on medical services
                    directly to patients, including conducting examinations,
                    administering treatments, monitoring conditions, and offering
                    education and emotional support. Professionals in this field
                    play a critical role in diagnosing illnesses, managing care
                    plans, and ensuring patient safety and comfort throughout the
                    healthcare process.
                  </p>
                  <a
                    href="#"
                    className="btn btn-warning text-decoration-none fw-bold mt-auto "
                    data-bs-toggle="modal"
                    data-bs-target="#strategyModal"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3">
                    <i className="bi bi-graph-up-arrow fs-3" />
                  </div>
                  <h3 className="fw-bold">Allied Health &amp; Therapy</h3>
                  <p className="text-muted">
                    Careers in this area encompasses a wide range of specialized
                    healthcare roles that support diagnosis, treatment, and
                    rehabilitation. These professionals—such as therapists,
                    technologists, and technicians—help patients restore function,
                    improve mobility, manage chronic conditions, and enhance overall
                    quality of life while collaborating closely with clinical care
                    teams
                  </p>
                  <a
                    href="#"
                    className="btn btn-warning text-decoration-none fw-bold mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#financeModal"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card creative-card h-100 p-4 shadow-sm">
                  <div className="icon-box mb-3">
                    <i className="bi bi-gear  fs-3" />
                  </div>
                  <h3 className="fw-bold">Management &amp; Informatics</h3>
                  <p className="text-muted">
                    This field combines healthcare leadership, administration, and
                    technology to optimize how healthcare systems operate. This
                    field focuses on managing staff and resources, implementing
                    health information systems, analyzing data, and improving
                    workflows to enhance efficiency, compliance, and patient
                    outcomes across healthcare organizations.
                  </p>
                  <a
                    href="#"
                    className=" btn btn-warning text-decoration-none fw-bold mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#opsModal"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* road map section */}
          <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
            <div className="container">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">
                Finance Career Roadmap
              </h2>
              <div className="roadmap-wrapper position-relative">
                <div className="roadmap-line d-none d-lg-block" />
                <div className="row g-4 text-center justify-content-center">
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">01</div>
                    <h4 className="fw-bold mt-3">Entry &amp; Foundational Roles</h4>
                    <p className="small text-muted">
                      Certified Nursing Assistant (CNA)/ Medical Assistant (MA) /
                      Phlebotomist / Patient Care Technician / Health Unit
                      Coordinator
                      <br />
                      <span className="badge bg-warning text-dark">Years 0-2</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">02</div>
                    <h4 className="fw-bold mt-3">
                      Technical &amp; Allied Health Roles
                    </h4>
                    <p className="small text-muted">
                      Registered Nurse (RN) / Radiologic Technologist / Respiratory
                      Therapist / Physical Therapist Assistant (PTA) / Occupational
                      Therapy Assistant (OTA) / Health Information Technician
                      <br />
                      <span className="badge bg-warning text-dark">Years 2-5</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">03</div>
                    <h4 className="fw-bold mt-3">
                      Advanced Clinical or Specialized Roles
                    </h4>
                    <p className="small text-muted">
                      Nurse Practitioner (NP) / Physician Assistant (PA) / Clinical
                      Nurse Specialist / Physical Therapist (PT) / Occupational
                      Therapist (OT) / Healthcare Data Analyst
                      <br />
                      <span className="badge bg-warning text-dark">Years 5-8</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">04</div>
                    <h4 className="fw-bold mt-3">
                      Leadership, Management &amp; Executive Roles
                    </h4>
                    <p className="small text-muted">
                      Healthcare Administrator / Clinical Director / Nurse Executive
                      (CNO) / Health Informatics Manager / Hospital Operations
                      Manager / Public Health Director
                      <br />
                      <span className="badge bg-warning text-dark">Years 10+</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="skills"
            className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
          >
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              Essential Skills and Knowledge
            </h2>
            <p className="text-muted mb-5">
              Core competencies include clinical knowledge, communication, and
              emotional resilience.
            </p>
            <div className="row g-5">
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">
                  Clinical &amp; Scientific Skills
                </h3>
                <div className="row g-4">
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-calculator-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">Anatomy &amp; Physiology</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-table me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">Pharmacology</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-diagram-3-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Diagnostic Testing &amp; Analysis
                    </span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-bar-chart-line-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">Infection Control</span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-cloud-check-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      EHR/Medical Software Proficiency
                    </span>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <i
                      className="bi bi-shield-check me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">Medical Terminology</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">
                  Interpersonal &amp; Emotional Skills
                </h3>
                <div className="row g-4">
                  <div className="col-12 d-flex align-items-center">
                    <i
                      className="bi bi-people-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Empathy and Compassionate Care
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <i
                      className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Crisis Management and Calm Under Pressure
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <i
                      className="bi bi-chat-dots-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Teamwork and Interprofessional Communication
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <i
                      className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327"
                    />
                    <span className="fw-medium">
                      Attention to Detail and Accuracy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* future trends */}
          <section
            id="future"
            className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
          >
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              Future Trends and Growth
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-secondary bg-warning-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-secondary mb-2">
                    Telehealth and Remote Monitoring
                  </h3>
                  <ul className="text-muted small">
                    <li>
                      Explosion in virtual patient visits and remote patient
                      monitoring technology.
                    </li>
                    <li>
                      Demand for professionals skilled in digital platforms and
                      remote diagnostics.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-primary bg-primary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">
                    Geriatric and Home Care
                  </h3>
                  <p className="small text-muted mb-0">
                    Due to aging populations, specialized care for the elderly and
                    growth in in-home care services are major growth areas.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-secondary mb-2">
                    Health Data Analytics
                  </h3>
                  <p className="small text-muted mb-0">
                    Careers focused on utilizing vast clinical data to improve
                    patient outcomes, manage public health crises, and reduce costs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      {/* hero section with buisness background */}
      <section className="health-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          {/* VI. Conclusion Call to action */}
          <section className=" rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h2 className="fs-3 text-white fw-bold mb-3">
              Ready to Make an Impact?
            </h2>
            <p className="fs-5 mb-4 mx-auto text-white max-w-700">
              The journey into healthcare is challenging but incredibly rewarding.
              Start by seeking clinical experience today to solidify your commitment
              and path.
            </p>
            <a
              href="#roles"
              className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg"
            >
              Find Your Healthcare Calling
            </a>
          </section>
          {/* end of section and div */}
        </div>
      </section>
      {/* modals */}
      {/* modal 1 */}
      <div
        className="modal fade"
        id="strategyModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">
                Clinical and Direct Patient Care
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="/images/finance1.png"
                      alt="Investment Banking and Advisory"
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                      <div className="p-3 bg-warning-subtle rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Physician (MD/DO)
                        </p>
                        <p className="mb-0 text-muted small">
                          Diagnosing and treating complex diseases; surgical or
                          specialized care.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Registered Nurse (RN)
                        </p>
                        <p className="mb-0 text-muted small">
                          Administering care, patient education, and coordinating
                          treatment teams.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Nurse Practitioner (NP)
                        </p>
                        <p className="mb-0 text-muted small">
                          Advanced nursing roles, often with prescriptive authority
                          and independent practice.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-primary-subtle rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Physician Assistant (PA)
                        </p>
                        <p className="mb-0 text-muted small">
                          Practicing medicine under the supervision of a physician,
                          conducting exams and diagnosing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal 2 */}
      <div
        className="modal fade"
        id="financeModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Allied Health and Therapy</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100">
                    <div className="p-4 bg-warning-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Physical Therapist (PT)
                      </p>
                      <p className="mb-0 text-muted small">
                        Helping patients regain movement and manage pain after
                        injury or illness.
                      </p>
                    </div>
                    <div className="p-4 bg-primary-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Medical Technologist
                      </p>
                      <p className="mb-0 text-muted small">
                        Performing complex laboratory tests and analyzing results to
                        aid in diagnosis and treatment.
                      </p>
                    </div>
                    <div className="p-4 bg-light rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Radiologic Technologist
                      </p>
                      <p className="mb-0 text-muted small">
                        Operating imaging equipment (X-rays, CT scans, MRIs) to
                        create diagnostic images.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="/images/finance2.png"
                      alt="Finance and HR"
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal 3 */}
      <div className="modal fade" id="opsModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Management and Informatics</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4 p-md-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-4 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="/images/business3.jpg"
                      alt="Operations and PMP"
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100">
                    <div className="p-4 bg-warning-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Hospital Administrator
                      </p>
                      <p className="mb-0 text-muted small">
                        Overseeing operations, finance, and quality control of
                        healthcare facilities.
                      </p>
                    </div>
                    <div className="p-4 bg-primary-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Health Informatics Specialist
                      </p>
                      <p className="mb-0 text-muted small">
                        Managing patient data, electronic health records (EHR), and
                        IT security.
                      </p>
                    </div>
                    <div className="p-4 bg-light rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Public Health Specialist
                      </p>
                      <p className="mb-0 text-muted small">
                        Analyzing community health trends, developing preventative
                        programs, and managing epidemics.
                      </p>
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
