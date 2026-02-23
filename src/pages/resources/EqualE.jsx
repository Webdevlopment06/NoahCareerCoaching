import React from 'react'

export default function EqualE() {
  return (
    <main>
    {/* hero section */}
    <section className="py-5 text-white" style={{background: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)'}}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3 text-uppercase">Equal Opportunity & Your Rights</h1>
            <p className="lead mb-4 opacity-75">We are committed to a workplace free from discrimination and harassment.
              Employment decisions are based on merit, competence, and performance—not personal characteristics.</p>
            <div className="d-flex gap-3">
              <span className="badge border border-light p-2 px-3">Federal Compliance</span>
              <span className="badge border border-light p-2 px-3">Inclusive Hiring</span>
              <span className="badge border border-light p-2 px-3">Accessibility First</span>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block text-center">
            <i className="bi bi-shield-check text-info" style={{fontSize: '120px'}}></i>
          </div>
        </div>
      </div>
    </section>

    {/* protected characteristics */}
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold mb-4">Understanding Protected Classes</h2>
        <p className="text-muted mb-5">Discrimination occurs when an adverse employment action (hiring, firing, pay,
          promotion) is taken based on any of the following protected characteristics:</p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="h-100 p-4 border-start border-4 border-primary bg-light shadow-sm">
              <h5 className="fw-bold">Title VII & ADEA</h5>
              <p className="small">Protects against discrimination based on <strong>Race, Color, Religion, Sex, National
                  Origin</strong>, and <strong>Age</strong> (40 and older).</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 border-start border-4 border-info bg-light shadow-sm">
              <h5 className="fw-bold">ADA & GINA</h5>
              <p className="small">Protects qualified individuals with <strong>Physical or Mental Disabilities</strong> and
                prohibits the use of <strong>Genetic Information</strong> in hiring.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 border-start border-4 border-dark bg-light shadow-sm">
              <h5 className="fw-bold">Equal Pay Act</h5>
              <p className="small">Requires that men and women in the same workplace be given <strong>equal pay for equal
                  work</strong> in all forms of compensation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* reasonable accommodations */}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Requesting Accommodation</h2>
            <p>We provide reasonable accommodations for the known physical or mental limitations of an otherwise
              qualified individual with a disability who is an applicant or an employee.</p>

            <div className="mt-4">
              <div className="d-flex mb-3">
                <div className="me-3 fs-3 fw-bold text-primary">01</div>
                <div>
                  <h6 className="fw-bold">The Request</h6>
                  <p className="small">Contact our HR Accessibility Team during the application or interview phase.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3 fs-3 fw-bold text-primary">02</div>
                <div>
                  <h6 className="fw-bold">The Interactive Process</h6>
                  <p className="small">A collaborative discussion to identify the precise limitations and potential
                    accommodations.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3 fs-3 fw-bold text-primary">03</div>
                <div>
                  <h6 className="fw-bold">Implementation</h6>
                  <p className="small">Applying tools (e.g., screen readers, flexible scheduling) that allow you to perform
                    essential job functions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="card border-0 shadow-lg rounded-4 p-4 text-white bg-dark">
              <h5 className="fw-bold text-info"><i className="bi bi-exclamation-triangle-fill me-2"></i>Retaliation is Illegal
              </h5>
              <p className="small">It is strictly prohibited for an employer to retaliate against you for:</p>
              <ul className="small opacity-75">
                <li>Filing a discrimination charge.</li>
                <li>Participating in an investigation.</li>
                <li>Opposing discriminatory practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* reporting a violation */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Reporting & Enforcement</h2>
          <p className="text-muted">If you believe your rights have been violated, we provide multiple secure channels for
            reporting.</p>
        </div>

        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-4 border rounded-4 h-100">
              <i className="bi bi-envelope-at fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Internal HR Portal</h5>
              <p className="small text-muted">Submit a confidential report through our Employee Relations platform.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-4 h-100">
              <i className="bi bi-telephone-outbound fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Ethics Hotline</h5>
              <p className="small text-muted">Call our 24/7 anonymous third-party hotline for unbiased intake.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-4 h-100">
              <i className="bi bi-bank fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">The EEOC</h5>
              <p className="small text-muted">Applicants also have the right to file a charge with the U.S. Equal Employment
                Opportunity Commission.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* sexual harassment section */}
    <section className="py-5 text-white" style={{background: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)'}}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3 text-uppercase">Harassment Prevention Guide</h1>
            <p className="lead mb-4 opacity-75">Professionalism is our baseline. Harassment is any unwelcome conduct based
              on a protected characteristic that creates an intimidating, hostile, or offensive environment.</p>
            <div className="bg-white bg-opacity-10 p-3 rounded-3 border border-light border-opacity-25">
              <small className="fw-bold text-info"><i className="bi bi-info-circle me-1"></i> Core Principle:</small>
              <p className="small mb-0 italic">"It is not the intent of the perpetrator, but the impact on the victim and
                the workplace that defines harassment."</p>
            </div>
          </div>
          <div className="col-lg-4 text-center d-none d-lg-block">
            <i className="bi bi-person-check text-info shadow-sm" style={{fontSize: '100px'}}></i>
          </div>
        </div>
      </div>
    </section>

    {/* red flags / green flags */}
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold mb-5 text-center">Recognizing the Forms of Harassment</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm bg-light">
              <div className="card-body p-4">
                <h5 className="fw-bold text-danger"><i className="bi bi-chat-square-dots-fill me-2"></i>Verbal Conduct</h5>
                <ul className="small text-muted ps-3">
                  <li>Epithets, slurs, or negative stereotyping.</li>
                  <li>"Jokes" targeting a specific gender, race, or religion.</li>
                  <li>Unwelcome sexual advances or suggestive comments.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm bg-light">
              <div className="card-body p-4">
                <h5 className="fw-bold text-danger"><i className="bi bi-eye-fill me-2"></i>Visual Conduct</h5>
                <ul className="small text-muted ps-3">
                  <li>Displaying derogatory posters, cartoons, or drawings.</li>
                  <li>Inappropriate leering or suggestive gestures.</li>
                  <li>Sharing offensive memes or emails via company devices.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm bg-light">
              <div className="card-body p-4">
                <h5 className="fw-bold text-danger"><i className="bi bi-hand-index-thumb-fill me-2"></i>Physical Conduct</h5>
                <ul className="small text-muted ps-3">
                  <li>Unwelcome touching, patting, or pinching.</li>
                  <li>Blocking or impeding normal movement.</li>
                  <li>Physical assault or threats of violence.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* two categories */}
    <section className="py-5 bg-light border-top border-bottom">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h3 className="fw-bold">1. Quid Pro Quo</h3>
            <p className="text-muted">Latin for <em>"This for That."</em> Occurs when a supervisor or person in authority
              conditions a job benefit (promotion, raise, or keeping a job) on an employee's submission to unwelcome
              sexual advances.</p>
            <div className="p-3 bg-white rounded border-start border-4 border-danger small">
              <strong>Example:</strong> "If you go to dinner with me tonight, I'll make sure you get that bonus."
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">2. Hostile Work Environment</h3>
            <p className="text-muted">Occurs when unwelcome conduct is <strong>severe or pervasive</strong> enough to change
              the conditions of employment and create an abusive atmosphere.</p>
            <div className="p-3 bg-white rounded border-start border-4 border-danger small">
              <strong>Example:</strong> Continuous, daily use of racial slurs that makes it impossible for an employee
              to focus on their work.
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* bystander intervention */}
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Be an Upstander, Not a Bystander</h2>
        <p className="mb-5 text-muted mx-auto" style={{maxWidth: '700px'}}>A safe workplace is everyone's responsibility. If
          you witness harassment, we encourage a "See Something, Say Something" culture.</p>

        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="p-4 rounded-4 border shadow-sm">
              <h6 className="fw-bold">Direct Action</h6>
              <p className="small text-muted">If safe, tell the individual their behavior is unwelcome and must stop.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 border shadow-sm">
              <h6 className="fw-bold">Document & Support</h6>
              <p className="small text-muted">Note dates, times, and witnesses. Offer support to the person being targeted.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 border shadow-sm">
              <h6 className="fw-bold">Formal Report</h6>
              <p className="small text-muted">Report to HR or use the anonymous hotline. Every report is investigated.</p>
            </div>
          </div>
        </div>

        <div className="mt-5 p-4 rounded-pill bg-dark text-white d-inline-block px-5">
          <span className="fw-bold text-info">Zero Tolerance Policy:</span> Confirmed harassment will result in disciplinary
          action, up to and including immediate termination.
        </div>
      </div>
    </section>
  </main>
  )
}
