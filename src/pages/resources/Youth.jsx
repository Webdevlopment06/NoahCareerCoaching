import React from 'react'

export default function Youth() {
  return (
    <main className="container py-5">
      <section className="py-5 text-white" style={{background: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)'}}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3 text-uppercase">Start Your Story Here.</h1>
              <p className="lead mb-4 fw-bold" style={{color: '#2D3436'}}>The "No Experience" paradox ends today. We help you
                translate school, hobbies, and grit into a professional profile that gets you hired.</p>

              <div className="bg-white bg-opacity-25 p-3 rounded-3 mb-4 border border-white">
                <h6 className="fw-bold mb-2 text-dark"><i className="bi bi-info-circle-fill me-2"></i>Under-18 Legal Essentials:</h6>
                <div className="row small text-dark">
                  <div className="col-6"><strong>Work Permits:</strong> Most states require a certificate from your school.</div>
                  <div className="col-6"><strong>Hour Limits:</strong> Federal law limits shifts during school weeks (usually {`<`} 3 hours/day).</div>
                </div>
              </div>

              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-star-fill text-white me-2"></i> <strong>Skill Discovery:</strong>
                    Mapping chores and sports to corporate needs.</li>
                  <li className="mb-2"><i className="bi bi-star-fill text-white me-2"></i> <strong>Network Mapping:</strong>
                    Using teachers and coaches as your first references.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="p-4 bg-white rounded-4 shadow-lg text-dark border-bottom border-5 border-warning">
                <h5 className="fw-bold text-danger mb-3">High-Conversion Youth Roles</h5>
                <p className="small text-muted mb-3">These industries actively seek first-time workers because they value
                  energy over experience:</p>
                <div className="list-group list-group-flush text-start mb-3">
                  <div className="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                    <span><i className="bi bi-cup-hot me-2 text-warning"></i> Quick Service Retail</span>
                    <span className="badge bg-light text-dark border small">Fast Pace</span>
                  </div>
                  <div className="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                    <span><i className="bi bi-sun me-2 text-warning"></i> Parks &amp; Recreation</span>
                    <span className="badge bg-light text-dark border small">Teamwork</span>
                  </div>
                  <div className="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                    <span><i className="bi bi-laptop me-2 text-warning"></i> Digital Assistant</span>
                    <span className="badge bg-light text-dark border small">Tech-Savvy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-2">THE ANATOMY OF A STUDENT RESUME</h2>
          <p className="text-center text-muted mb-5">Recruiters don't expect a 10-year history; they expect these three
            building blocks:</p>

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="p-4 border rounded-4 shadow-sm bg-light">
                <h5 className="fw-bold"><i className="bi bi-plus-square-fill text-danger me-2"></i>The Reliability Formula</h5>
                <p className="small text-muted">Since you don't have past bosses, we use "Proxies" for reliability:</p>
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 border rounded bg-white small w-100 text-center">95%+ School Attendance</div>
                  <div className="px-2">+</div>
                  <div className="p-2 border rounded bg-white small w-100 text-center">3.0+ GPA or Awards</div>
                </div>
                <p className="fw-bold text-center text-danger mb-0">= PROOF OF DISCIPLINE</p>
              </div>
            </div>

            <div className="col-md-6 ps-md-5">
              <div className="mb-4">
                <h5 className="fw-bold text-danger">The "Big Three" Soft Skills</h5>
                <div className="mb-3">
                  <strong>1. Punctuality (The Clock):</strong> If you are 5 minutes early, you are on time. Mention your
                  perfect attendance or commitment to early morning sports practices.
                </div>
                <div className="mb-3">
                  <strong>2. Coachability (The Sponge):</strong> Employers want to know you can follow instructions. Use
                  examples of learning a complex instrument or a new sports play.
                </div>
                <div>
                  <strong>3. Public Interaction:</strong> Have you done debate, theater, or fundraisers? That is "Customer
                  Service" in the making.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-2">HOW TO SPEAK "MANAGER"</h3>
          <p className="text-muted mb-5">Change how you describe your life to match the language of a job description.</p>

          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">Student Speak</span>
                  <p>"I worked on a group science project."</p>
                  <div className="fs-4 my-2 text-danger">↓</div>
                  <span className="badge bg-danger mb-2">Boss Speak</span>
                  <p className="fw-bold text-dark">"Collaborated in a 4-person team to meet strict deadlines and present
                    technical data to an audience."</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">Student Speak</span>
                  <p>"I mowed lawns in my neighborhood."</p>
                  <div className="fs-4 my-2 text-danger">↓</div>
                  <span className="badge bg-danger mb-2">Boss Speak</span>
                  <p className="fw-bold text-dark">"Operated heavy machinery, managed a recurring service schedule, and
                    handled direct cash transactions for 5+ clients."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{backgroundColor: '#FFF9E6'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <div className="p-4 bg-white rounded-4 shadow border border-warning">
                <h5 className="fw-bold">Common Interview Questions:</h5>
                <ul className="text-start small mt-3">
                  <li>"Tell me about a time you had a conflict with a teammate."</li>
                  <li>"What would you do if a customer was angry?"</li>
                  <li>"How do you handle a busy schedule with school?"</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold text-dark">Master the "STAR" Method</h2>
              <p className="text-muted">During our 1-on-1 Zoom call, we practice the <strong>Situation, Task, Action,
                  Result</strong> method. It's a storytelling trick that makes you sound like a professional with years of
                experience.</p>

              <div className="row g-2 mt-4">
                <div className="col-sm-6"><i className="bi bi-check-circle-fill text-danger"></i> Mock Phone Screens</div>
                <div className="col-sm-6"><i className="bi bi-check-circle-fill text-danger"></i> Professional Email Writing</div>
                <div className="col-sm-6"><i className="bi bi-check-circle-fill text-danger"></i> Body Language Tips</div>
                <div className="col-sm-6"><i className="bi bi-check-circle-fill text-danger"></i> Resume Review</div>
              </div>

              <a href="#" className="btn btn-danger btn-lg rounded-pill px-5 py-3 mt-4 shadow fw-bold text-uppercase">Book My
                Practice Session</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white border-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-4 text-uppercase" style={{color: '#FF6B6B'}}>The "Permission to Work" Roadmap</h2>
              <p className="text-muted mb-5">Before you can collect your first paycheck, you need to ensure you are legally
                "Work Ready." Federal and State laws vary, but these are the non-negotiables for applicants under 18.</p>

              <div className="accordion accordion-flush shadow-sm border rounded-4 overflow-hidden" id="legalAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse"
                      data-bs-target="#step1">
                      1. Secure Your Employment Certificate (Work Permit)
                    </button>
                  </h2>
                  <div id="step1" className="accordion-collapse collapse show" data-bs-parent="#legalAccordion">
                    <div className="accordion-body bg-light">
                      Most states require minors to have a certificate on file.
                      <ul className="mt-2">
                        <li><strong>Where to get it:</strong> Usually your high school guidance office or the State
                          Department of Labor website.</li>
                        <li><strong>What you need:</strong> Proof of age (Birth Certificate), a signature from your
                          parents, and often a "Promise of Employment" from your future boss.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse"
                      data-bs-target="#step2">
                      2. Know Your Working Hour Limits
                    </button>
                  </h2>
                  <div id="step2" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
                    <div className="accordion-body bg-light">
                      <p><strong>Ages 14-15:</strong> Max 3 hours on a school day; Max 18 hours per school week. Work must
                        occur between 7 AM and 7 PM.</p>
                      <p><strong>Ages 16-17:</strong> No federal hourly limit, but many states cap shifts at 8-10 hours to
                        ensure you stay rested for school.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse"
                      data-bs-target="#step3">
                      3. Prohibited "Hazardous" Occupations
                    </button>
                  </h2>
                  <div id="step3" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
                    <div className="accordion-body bg-light">
                      To keep you safe, the law prevents minors from doing certain tasks. You generally cannot:
                      <ul className="mt-2">
                        <li>Operate power-driven meat slicers or bakery mixers.</li>
                        <li>Drive a motor vehicle as a primary job duty.</li>
                        <li>Work in roofing, mining, or demolition.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 rounded-4 shadow-lg p-4" style={{backgroundColor: '#2D3436', color: 'white'}}>
                <h4 className="fw-bold mb-4 text-warning"><i className="bi bi-card-checklist me-2"></i>Grab These Documents</h4>
                <p className="small opacity-75 mb-4">Have these ready in a folder before you go to your school or your
                  interview:</p>

                <div className="form-check mb-3">
                  <input className="form-check-input bg-warning border-0" type="checkbox" checked disabled />
                  <label className="form-check-label">Official Proof of Age (Passport or Birth Certificate)</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input bg-warning border-0" type="checkbox" checked disabled />
                  <label className="form-check-label">Social Security Card (Original or Copy)</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input bg-warning border-0" type="checkbox" checked disabled />
                  <label className="form-check-label">Written Parent/Guardian Consent Form</label>
                </div>
                <div className="form-check mb-4">
                  <input className="form-check-input bg-warning border-0" type="checkbox" checked disabled />
                  <label className="form-check-label">School Official Sign-off (Verify your GPA)</label>
                </div>

                <div className="p-3 bg-white bg-opacity-10 rounded-3">
                  <h6 className="fw-bold text-warning mb-1">State Search Tool</h6>
                  <p className="small mb-0">Rules vary by state. Search "[Your State] Youth Labor Laws" to find your local
                    Department of Labor portal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
