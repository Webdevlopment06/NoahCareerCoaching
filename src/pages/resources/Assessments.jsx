import React from 'react'

export default function Assessments() {
  return (
    <main>
      <section className="career-top-banner">
        <div className="banner-row">
          <div className="banner-col banner-col-img">
            <img src="/images/ncc4.png" alt="Banner" />
          </div>
          <div className="banner-col banner-col-text">
            <h1>Career Assessments</h1>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Career Assessments</h2>
          <p className="text-muted mx-auto max-w-700">
            Noah Career Coaching believes clarity is the foundation of confident career decisions.
            Below are some trusted quizzes to help you along your journey.
          </p>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-8">
            <div className="card h-100 assessment-card featured">
              <div className="card-body d-md-flex align-items-center">
                <div className="p-3 text-center">
                  <img src="/images/16personalities.png" alt="16Personalities" className="img-fluid mb-3 mb-md-0 max-w-140" />
                </div>
                <div className="ps-md-4">
                  <span className="badge bg-info mb-2">Featured Assessment</span>
                  <h3 className="card-title h4 fw-bold">16Personalities</h3>
                  <p className="card-text text-muted">A free personality type test based on the Myers-Briggs framework that
                    gives insight into your traits and work life.</p>
                  <p className="small fw-bold mb-3"><i className="bi bi-clock"></i> Quick Stat: 10 mins | Free</p>
                  <a href="https://www.16personalities.com/" target="_blank" rel="noreferrer" className="btn btn-yellow px-4">Take
                    Assessment</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card h-100 assessment-card text-center">
              <div className="card-body d-flex flex-column justify-content-center">
                <img src="/images/truity.png" alt="Truity" className="img-fluid mb-3 max-w-100 mx-auto" />
                <h3 className="card-title h4 fw-bold">Truity</h3>
                <p className="card-text text-muted">A 15-minute free assessment to match you with suitable careers.</p>
                <p className="small fw-bold mb-3">Quick Stat: 15 mins | Free</p>
                <a href="https://www.truity.com/" target="_blank" rel="noreferrer" className="btn btn-yellow w-100">Start Quiz</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 assessment-card text-center">
              <div className="card-body p-4">
                <img src="/images/careerfitter.png" alt="CareerFitter" className="img-fluid mb-2 max-w-80" />
                <h5 className="fw-bold">CareerFitter</h5>
                <p className="small text-muted">Focuses on work personality and home/work balance.</p>
                <p className="extra-small fw-bold mb-3">10 mins | Free</p>
                <a href="https://www.careerfitter.com/free_test/careerbuilder/test" target="_blank" rel="noreferrer"
                  className="btn btn-outline-dark btn-sm w-100">Start Quiz</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 assessment-card text-center">
              <div className="card-body p-4">
                <img src="/images/bigfuture.png" alt="BigFuture" className="img-fluid mb-2 max-w-80" />
                <h5 className="fw-bold">BigFuture</h5>
                <p className="small text-muted">College Board quiz matching interests to careers.</p>
                <p className="extra-small fw-bold mb-3">15 mins | Free</p>
                <a href="https://bigfuture.collegeboard.org/career-search/career-quiz" target="_blank" rel="noreferrer"
                  className="btn btn-outline-dark btn-sm w-100">Start Quiz</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 assessment-card text-center">
              <div className="card-body p-4">
                <img src="/images/coursera.png" alt="Coursera" className="img-fluid mb-2 max-w-80" />
                <h5 className="fw-bold">Coursera</h5>
                <p className="small text-muted">A deep dive into skills, interests, and working styles.</p>
                <p className="extra-small fw-bold mb-3">20 mins | Free</p>
                <a href="https://www.coursera.org/resources/career-quiz" target="_blank" rel="noreferrer"
                  className="btn btn-outline-dark btn-sm w-100">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 assessment-card text-center">
              <div className="card-body p-4">
                <img src="/images/123Test.png" alt="123Test" className="img-fluid mb-2 max-w-80" />
                <h5 className="fw-bold">123Test Career Quiz</h5>
                <p className="small text-muted">A fully free career-aptitude quiz based on the Holland Code model.</p>
                <p className="extra-small fw-bold mb-3">15 mins | Free</p>
                <a href="https://www.123test.com/career-test/#its123-testAnchor" target="_blank" rel="noreferrer"
                  className="btn btn-outline-dark btn-sm w-100">Take Quiz</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  )
}
