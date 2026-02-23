import React from 'react'

export default function Science() {
  return (
    <main>
      <section className="science-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-dark mb-3">
              Your Future in{" "}
              <span className="text-custom-primary">
                Science, Research &amp; Discovery
              </span>
            </h1>
            <p className="fs-5 text-muted mx-auto mb-4" style={{ maxWidth: 800 }}>
              The scientific field is the bedrock of innovation, offering careers
              that push the boundaries of knowledge in biology, chemistry, physics,
              and environmental solutions.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <a
                href="#roles"
                className="btn btn-success btn-lg fw-semibold shadow-sm rounded-3 text-white"
              >
                Explore Research Fields
              </a>
              <a
                href="#education"
                className="btn btn-info btn-lg fw-semibold shadow-sm rounded-3 text-dark"
              >
                View Academic Paths
              </a>
            </div>
          </header>
        </div>
      </section>
      <main className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">
            Key Scientific and Research Roles
          </h2>
          <p className="text-muted mb-4">
            Detailing high-impact roles across fundamental science, biotechnology,
            and environmental research.
          </p>
          <div className="container py-4">
            <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Biological and Medical Sciences
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/sciencepath/biology1.png"
                      alt="Biologists and Medical Researchers in a lab"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">Research Biologist</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Conducting experiments to study living organisms,
                          ecosystems, and biological processes.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">Biotechnologist</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Developing new products and techniques in
                          medicine, agriculture, and industry using living systems.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">Epidemiologist</p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Investigating disease patterns and causes in
                          populations to inform public health strategies.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5">
                          Clinical Research Coordinator
                        </p>
                        <p className="mb-0 text-muted small">
                          *Focus:* Managing and overseeing clinical trials for new
                          drugs and treatments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Physical and Environmental Sciences
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-4 h-100">
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Chemist / Materials Scientist</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Studying the composition, structure, and properties
                        of matter and developing new substances.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Environmental Consultant</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Advising organizations on environmental compliance,
                        pollution control, and sustainability practices.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Physicist / Astronomer</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Investigating the fundamental laws of nature, from
                        subatomic particles to the structure of the universe.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/sciencepath/physical2.png"
                      alt="Environmental Science and Chemistry Lab"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Data and Computational Science
              </h3>
              <div className="row g-4">
                <div className="col-12 col-lg-6 order-lg-1">
                  <div className="h-100 bg-light rounded-3 border d-flex align-items-center justify-content-center p-3">
                    <img
                      src="images/sciencepath/data3.png"
                      alt="Data Scientist and Computational Modeling"
                      className="img-fluid rounded-2"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-lg-2">
                  <div className="d-flex flex-column gap-4 h-100">
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Data Scientist (Science Focus)</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Applying advanced statistical and computational
                        methods to massive scientific datasets (e.g., genomics,
                        climate).
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Bioinformatician</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Developing software and algorithms to analyze
                        complex biological data, particularly DNA and protein
                        sequences.
                      </p>
                    </div>
                    <div className="p-3 bg-light rounded-3 border">
                      <p className="fw-bold fs-5">Science Writer / Communicator</p>
                      <p className="mb-0 text-muted small">
                        *Focus:* Translating complex scientific research and
                        findings for public consumption, policy makers, or
                        specialized journals.
                      </p>
                    </div>
                  </div>
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
          <p className="text-muted mb-4">
            Core competencies include methodological rigor, statistical mastery, and
            intellectual curiosity.
          </p>
          <div className="row g-4">
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-custom-primary mb-3">
                Technical &amp; Research Skills
              </h3>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                  Statistical Modeling (R, Python)
                </span>
                <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                  Experimental Design (DOE)
                </span>
                <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                  Laboratory Techniques (PCR, Chromatography)
                </span>
                <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                  Data Visualization
                </span>
                <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                  Grant Writing
                </span>
                <span className="badge text-bg-success-subtle border border-success px-3 py-2 fs-6 text-dark">
                  Scientific Ethics &amp; Compliance
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="fs-4 fw-semibold text-custom-secondary mb-3">
                Cognitive &amp; Interpersonal Skills
              </h3>
              <ul className="list-unstyled space-y-3 text-muted">
                <li className="d-flex align-items-start mb-2">
                  <span
                    className="badge bg-custom-secondary rounded-pill me-2 mt-1"
                    style={{ width: 8, height: 8 }}
                  />
                  Intellectual Curiosity and Problem-Solving
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span
                    className="badge bg-custom-secondary rounded-pill me-2 mt-1"
                    style={{ width: 8, height: 8 }}
                  />
                  Attention to Detail and Accuracy in Data Collection
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span
                    className="badge bg-custom-secondary rounded-pill me-2 mt-1"
                    style={{ width: 8, height: 8 }}
                  />
                  Patience and Resilience in the Face of Failure
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span
                    className="badge bg-custom-secondary rounded-pill me-2 mt-1"
                    style={{ width: 8, height: 8 }}
                  />
                  Interdisciplinary Collaboration
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container py-4">
          <section id="education" className="mb-5">
            <h2 className="fs-2 fw-bold section-heading-custom text-dark mb-4">
              Educational and Entry Paths 🔬
            </h2>
            <div className="row g-4">
              <div className="col-12 col-lg-6 order-lg-1">
                <div className="row row-cols-1 row-cols-md-2 g-4 h-100">
                  <div className="col">
                    <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                      <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                        Bachelor's Degree (Entry Level)
                      </h3>
                      <p className="card-text small text-muted">
                        A BS/BA is the starting point, enabling roles like Lab
                        Technician, Research Assistant, or Data Analyst.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                      <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                        Master's Degree (Mid-Level)
                      </h3>
                      <p className="card-text small text-muted">
                        The MS/MA leads to specialized roles like Bioinformatician,
                        Senior Analyst, or Environmental Scientist.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                      <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                        Doctoral Degree (Lead Researcher)
                      </h3>
                      <p className="card-text small text-muted">
                        A PhD is typically required for Principal Investigator,
                        Academic Professor, or Senior R&amp;D Scientist positions.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card p-4 rounded-4 shadow-sm h-100 border-0">
                      <h3 className="fs-5 fw-semibold text-custom-primary mb-2">
                        Postdoctoral Fellowships
                      </h3>
                      <p className="card-text small text-muted">
                        Essential for academic track careers; a period of intensive,
                        specialized research following the PhD.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-lg-2">
                <div className="h-100 bg-light rounded-4 shadow-sm border d-flex align-items-center justify-content-center p-3">
                  <img
                    src="images/sciencepath/education4.png"
                    alt="Scientific Career Path Diagram showing degree and research flow"
                    className="img-fluid rounded-2"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section
          id="future"
          className="mb-5 bg-white rounded-4 shadow-sm p-4 p-md-5"
        >
          <h2 className="fs-2 fw-bold section-heading-custom text-dark">
            Future Trends and Growth
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-custom-secondary bg-info-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-custom-secondary mb-2 text-dark">
                  Personalized Medicine (Genomics)
                </h3>
                <ul className="text-muted small">
                  <li>
                    Explosion of careers in genetic counseling, genome sequencing,
                    and targeted drug development.
                  </li>
                  <li>
                    Requires deep understanding of biochemistry and large-scale data
                    analysis.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-custom-primary bg-success-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">
                  Climate Technology (ClimaTech)
                </h3>
                <p className="small text-muted mb-0">
                  Growing need for atmospheric scientists, geoscientists, and
                  chemical engineers focused on carbon capture, renewable energy
                  storage, and climate modeling.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                <h3 className="fs-5 fw-semibold text-secondary mb-2">
                  Quantum Computing and Physics
                </h3>
                <p className="small text-muted mb-0">
                  Front-line research careers in developing new quantum computing
                  hardware, algorithms, and applications for complex simulations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="science-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <section className="bg-white rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h2 className="fs-3 fw-bold mb-3">
              Ready to Make the Next Great Discovery?
            </h2>
            <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: 700 }}>
              The foundation of science is curiosity. Get involved in undergraduate
              research or laboratory work early to validate your passion and build
              essential practical skills.
            </p>
            <a
              href="#roles"
              className="btn btn-success btn-lg fw-bold rounded-3 shadow-lg text-white"
            >
              Begin Your Research
            </a>
          </section>
        </div>
      </section>
    </main>
  )
}
