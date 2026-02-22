import React from 'react'

export default function Interview() {
  return (
    <main>
      <section className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3 text-uppercase">Why your resume might be getting ghosted</h1>
              <p className="lead mb-4 opacity-75">Most Fortune 500 companies use an Applicant Tracking System or (ATS). If your resume isn't optimized, it stays hidden.</p>
              <div className="mt-4">
                <h5 className="fw-bold mb-3">Key Takeaways</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-info me-2"></i> Plain Text is King</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-info me-2"></i> Standard Headers</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="p-3 bg-white rounded-3 shadow-lg opacity-75">
                <div style={{ height: 250, width: '100%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#cc0000', fontSize: 80 }}>F</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">THE ANATOMY OF A HIGH-IMPACT RESUME</h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div className="border p-3 rounded shadow-sm flex-grow-1 text-center fw-bold text-muted">Action Verb</div>
                <div className="px-3 fs-3">+</div>
                <div className="border p-3 rounded shadow-sm flex-grow-1 text-center fw-bold text-muted">Quantifiable Task</div>
              </div>
              <div className="d-flex align-items-center">
                <div className="border p-3 rounded shadow-sm flex-grow-1 text-center fw-bold text-muted">Action Verb</div>
                <div className="px-3 fs-3">=</div>
                <div className="border p-3 rounded shadow-sm flex-grow-1 text-center fw-bold text-primary">Business Impact</div>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <ul className="list-unstyled fs-5">
                <li className="mb-3"><i className="bi bi-file-earmark-person me-2 text-primary"></i> The Professional Summary</li>
                <li className="mb-3"><i className="bi bi-grid-3x3-gap me-2 text-primary"></i> The Skills Matrix</li>
                <li className="mb-3"><i className="bi bi-list-task me-2 text-primary"></i> The Experience Block</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fw-bold mb-5">MASTER THE "POWER BULLET" FORMULA</h3>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="p-4 rounded-pill bg-danger text-white d-flex align-items-center shadow">
                <i className="bi bi-x-circle fs-2 me-3"></i>
                <span className="small">Responsible for managing a team of five.</span>
              </div>
            </div>
            <div className="col-md-1 text-center fs-2 fw-bold">=</div>
            <div className="col-md-5">
              <div className="p-4 rounded-pill bg-info text-white d-flex align-items-center shadow" style={{ background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)' }}>
                <i className="bi bi-star-fill fs-2 me-3 text-warning"></i>
                <span className="small fw-bold">Managed a cross-functional team of 5 to deliver $250k projects.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: '#f1b327' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">1-ON-1 VIRTUAL STRATEGY SESSIONS</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img src="https://via.placeholder.com/200" className="rounded-circle border border-4 border-white shadow shadow-lg" alt="Coach" />
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled fs-5">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Live Screen-Sharing</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Narrative Building</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> LinkedIn Alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
