import React from 'react'
import SmoothScrollLink from '/src/components/SmoothScrollLink'
import RoleCard from '/src/components/RoleCard'

export default function Hospitality() {
  return (
    <main>
      {/* section with image container */}
      <section className="hosp-hero-bg flex-ai-center justify-content-center py-5">
        <div className="container">
          {/* heading */}
          <header className="hero-panel">
            <h1 className="display-3 fw-bolder text-white mb-3 animate-fade-in">
              Your Future in{' '}
              <span className="text-white">Hospitality &amp; Tourism</span>
            </h1>
            <p className="fs-5 text-white mx-auto mb-4 max-w-800 animate-slide-up">
              Hospitality is a global industry focused on creating memorable guest
              experiences in hotels, restaurants, events, and travel services.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-center">
              <SmoothScrollLink
                to="roles"
                className="btn btn-warning btn-lg fw-semibold shadow-sm rounded-3 text-dark"
              >
                Explore Roles
              </SmoothScrollLink>
              <a href="/contact" className="btn btn-primary btn-lg fw-semibold shadow-sm rounded-3">Find Your Path</a>
            </div>
          </header>
        </div>
      </section>
      {/* end of art image */}
      <div className="container-xl py-4 py-lg-5">
        {/* start of second */}
        {/* primary color backing */}
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">
            Key Hospitality &amp; Tourism Roles
          </h2>
          <p className="text-muted mb-4">
            Detailing careers across accommodation, food service, and experience
            management.
          </p>
          {/* new section idea */}
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4 animate-scale-up">
                <RoleCard
                  icon="bi bi-lightbulb"
                  title="Accommodation and Lodging"
                  modalTarget="#strategyModal-hospitality"
                >
                  This field focuses on welcoming guests and managing lodging
                  operations including front desk, reservations, housekeeping,
                  and guest services to ensure comfortable, reliable stays.
                </RoleCard>
              </div>
              <div className="col-lg-4 animate-scale-up">
                <RoleCard
                  icon="bi bi-graph-up-arrow"
                  title="Food and Beverage Services"
                  modalTarget="#financeModal-hospitality"
                >
                  Food and Beverage Services centers on the preparation,
                  presentation, and service of meals and drinks in restaurants,
                  cafés, catering companies, and bars. Roles range from culinary
                  and service staff to management and operations.
                </RoleCard>
              </div>
              <div className="col-lg-4 animate-scale-up">
                <RoleCard
                  icon="bi bi-gear"
                  title="Tourism and Events"
                  modalTarget="#opsModal"
                >
                  This field involves planning, promoting, and delivering travel
                  experiences and organized events such as conferences, festivals,
                  and tours. Professionals coordinate logistics, marketing, vendors,
                  and guest experiences to create memorable and well-run events.
                </RoleCard>
              </div>
            </div>
          </div>
          {/* road map section */}
          <section id="roadmap" className="mb-5 py-5 bg-light rounded-4">
            <div className="container">
              <h2 className="fs-2 fw-bold section-heading-custom text-dark text-center mb-5">
                Hospitality &amp; Tourism Career Roadmap
              </h2>
              <div className="roadmap-wrapper position-relative">
                <div className="roadmap-line d-none d-lg-block" />
                <div className="row g-4 text-center justify-content-center">
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">01</div>
                    <h4 className="fw-bold mt-3" />
                    <p className="small text-muted">
                      Front Desk Agent / Guest Services Associate / Hotel Porter /
                      Bell Attendant / Restaurant Host / Hostess / Server / Food
                      &amp; Beverage Attendant / Housekeeping Attendant / Tour Guide
                      Assistant / Reservations Agent / Event Setup Staff / Cruise or
                      Resort Crew Member
                      <br />
                      <span className="badge bg-warning text-dark">Years 0-2</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">02</div>
                    <h4 className="fw-bold mt-3">
                      Skilled &amp; Supervisory Roles
                    </h4>
                    <p className="small text-muted">
                      Front Office Supervisor / Guest Experience Coordinator /
                      Restaurant Supervisor / Event Coordinator / Catering Manager /
                      Travel Consultant / Advisor / Tour Operations Coordinator /
                      Revenue or Reservations Supervisor / Spa or Recreation
                      Supervisor / Concierge
                      <br />
                      <span className="badge bg-warning text-dark">Years 2-5</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">03</div>
                    <h4 className="fw-bold mt-3">
                      Management &amp; Strategic Operations
                    </h4>
                    <p className="small text-muted">
                      Hotel Manager / Resort Operations Manager / Food &amp;
                      Beverage Manager / Events Manager / Tourism Program Manager /
                      Sales &amp; Marketing Manager (Hospitality) / Revenue Manager
                      / Destination Marketing Manager / Cruise Director / Lodging
                      Operations Manager
                      <br />
                      <span className="badge bg-warning text-dark">Years 5-10</span>
                    </p>
                  </div>
                  <div className="col-lg-3 step-item">
                    <div className="roadmap-node shadow">04</div>
                    <h4 className="fw-bold mt-3">
                      Executive Leadership &amp; Industry Influence
                    </h4>
                    <p className="small text-muted">
                      General Manager (Hotel or Resort) / Director of Hospitality
                      Operations / Vice President of Tourism / Director of
                      Destination Development / Chief Experience Officer (CXO) /
                      Director of Sales &amp; Revenue Strategy / Tourism Board
                      Executive / Hospitality Consultant / Resort or Property Owner
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
            className="skills-panel"
          >
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              Essential Skills and Knowledge
            </h2>
            <p className="text-muted mb-5">
              The core of hospitality is exceptional service and seamless
              operations.
            </p>
            <div className="row g-5">
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">
                  Point-of-Sale (POS) Systems
                </h3>
                <div className="row g-4">
                  <div className="col-6 flex-ai-center">
                    <i className="bi bi-calculator-fill me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">
                      Property Management Systems (PMS)
                    </span>
                  </div>
                  <div className="col-6 flex-ai-center">
                    <i className="bi bi-table me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">
                      Inventory &amp; Supply Chain Management
                    </span>
                  </div>
                  <div className="col-6 flex-ai-center">
                    <i className="bi bi-diagram-3-fill me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">
                      Food Safety &amp; Hygiene (HACCP)
                    </span>
                  </div>
                  <div className="col-6 flex-ai-center">
                    <i className="bi bi-bar-chart-line-fill me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">Multilingual Ability</span>
                  </div>
                  <div className="col-6 flex-ai-center">
                    <i className="bi bi-cloud-check-fill me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">Budgeting and Cost Control</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="fs-4 fw-semibold text-dark mb-4 border-bottom pb-2">
                  Guest-Focused Skills
                </h3>
                <div className="row g-4">
                  <div className="col-12 flex-ai-center">
                    <i className="bi bi-people-fill me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">
                      Exceptional Customer Service and Tact
                    </span>
                  </div>
                  <div className="col-12 flex-ai-center">
                    <i className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">
                      Stress Tolerance and Calm Under Pressure
                    </span>
                  </div>
                  <div className="col-12 flex-ai-center">
                    <i className="bi bi-chat-dots-fill me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">
                      Conflict Resolution and Diplomacy
                    </span>
                  </div>
                  <div className="col-12 flex-ai-center">
                    <i className="bi bi-lightbulb-fill me-3 fs-3 text-f1b327" />
                    <span className="fw-medium">
                      Sales and Upselling Proficiency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* future trends */}
          <section
            id="future"
            className="skills-panel"
          >
            <h2 className="fs-2 fw-bold section-heading-custom text-dark">
              Future Trends and Growth
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-secondary bg-warning-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-secondary mb-2">
                    Experiential Travel
                  </h3>
                  <ul className="text-muted small">
                    <li>
                      Shift from passive sightseeing to immersive cultural,
                      wellness, and adventure tourism.
                    </li>
                    <li>
                      Growth in roles focused on designing unique, personalized
                      guest itineraries.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-custom-primary bg-primary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-custom-primary mb-2 text-dark">
                    Sustainability and Ethical Tourism
                  </h3>
                  <p className="small text-muted mb-0">
                    The demand for eco-friendly operations, carbon-neutral travel,
                    and supporting local communities is creating new roles in
                    sustainability compliance.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border-start border-4 border-secondary bg-secondary-subtle rounded-3">
                  <h3 className="fs-5 fw-semibold text-secondary mb-2">
                    Seamless Automation
                  </h3>
                  <p className="small text-muted mb-0">
                    Implementation of mobile check-in/check-out, keyless entry,
                    robotic housekeeping, and virtual concierges is reshaping
                    front-of-house operations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      {/* hero section with buisness background */}
      <section className="hosp-hero-bg flex-ai-center justify-content-center py-5">
        <div className="container">
          {/* VI. Conclusion Call to action */}
          <section className="hero-panel">
            <h2 className="fs-3 text-white fw-bold mb-3">
              Ready to Deliver Excellence?
            </h2>
            <p className="fs-5 mb-4 mx-auto text-white max-w-700">
              Hospitality is a dynamic, people-centric career. Start building your
              network and focusing on service skills, which are the cornerstone of
              success in this industry.
            </p>
            <a href="/contact" className="btn btn-warning btn-lg text-custom-primary fw-bold rounded-3 shadow-lg">
              Book Your Career Journey
            </a>
          </section>
          {/* end of section and div */}
        </div>
      </section>
      {/* modals */}
      {/* modal 1 */}
      <div
        className="modal fade"
        id="strategyModal-hospitality"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">
                Accommodation &amp; Front Desk Operations
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
                    <div className="center-card h-100">
                    <img
                      src="/images/career-imgs/hos-imgs/hospitality1.png"
                      alt="Front Desk and Guest Services"
                      className="img-round-shadow"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                      <div className="p-3 bg-warning-subtle rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Front Desk Agent / Guest Services Associate
                        </p>
                        <p className="mb-0 text-muted small">
                          Welcome guests, handle check-in/out, manage reservations,
                          and resolve guest needs to create positive experiences.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Concierge / Guest Relations
                        </p>
                        <p className="mb-0 text-muted small">
                          Provide local recommendations, book services, and deliver
                          personalized assistance to enhance guest stays.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Reservations Specialist / Revenue Coordinator
                        </p>
                        <p className="mb-0 text-muted small">
                          Manage booking systems, optimize occupancy and pricing,
                          and coordinate groups and blocks.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-primary-subtle rounded-3 border h-100">
                        <p className="fw-bold fs-5 mb-1 text-dark">
                          Housekeeping Supervisor / Room Attendant
                        </p>
                        <p className="mb-0 text-muted small">
                          Ensure cleanliness, manage room turnover, supervise staff,
                          and maintain quality standards.
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
        id="financeModal-hospitality"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content border-0 rounded-4 shadow-lg">
            <div className="modal-header bg-warning text-black rounded-top-4">
              <h5 className="modal-title fw-bold">Food &amp; Beverage and Culinary Services</h5>
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
                        Executive Chef / Sous Chef
                      </p>
                      <p className="mb-0 text-muted small">
                        Lead kitchen operations, design menus, manage staff, and
                        maintain food quality and safety standards.
                      </p>
                    </div>
                    <div className="p-4 bg-primary-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Restaurant Manager / Floor Supervisor
                      </p>
                      <p className="mb-0 text-muted small">
                        Oversee service, staffing, guest satisfaction, and daily
                        restaurant operations.
                      </p>
                    </div>
                    <div className="p-4 bg-light rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Pastry Chef / Line Cook
                      </p>
                      <p className="mb-0 text-muted small">
                        Execute menu items, maintain consistency, and support
                        culinary production under the chef's direction.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="center-card h-100">
                    <img
                      src="/images/career-imgs/hos-imgs/hospitality2.jpg"
                      alt="Food and Beverage Operations"
                      className="img-round-shadow"
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
              <h5 className="modal-title fw-bold">Events, Operations &amp; Revenue Management</h5>
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
                    <div className="center-card h-100">
                    <img
                      src="/images/career-imgs/hos-imgs/hospitality3.jpg"
                      alt="Events and Operations"
                      className="img-round-shadow"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100">
                    <div className="p-4 bg-warning-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Event Coordinator
                      </p>
                      <p className="mb-0 text-muted small">
                        Plan and execute events, manage vendors, timelines, and
                        on-site logistics to ensure successful experiences.
                      </p>
                    </div>
                    <div className="p-4 bg-primary-subtle rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Operations Manager
                      </p>
                      <p className="mb-0 text-muted small">
                        Oversee daily property operations, staffing, procurement,
                        and guest service standards.
                      </p>
                    </div>
                    <div className="p-4 bg-light rounded-3 border">
                      <p className="fw-bold fs-5 text-dark mb-1">
                        Revenue Manager / Sales &amp; Catering
                      </p>
                      <p className="mb-0 text-muted small">
                        Manage pricing strategies, group sales, and catering
                        contracts to maximize revenue and occupancy.
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
