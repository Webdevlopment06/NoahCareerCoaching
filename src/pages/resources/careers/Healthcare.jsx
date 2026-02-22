import React from 'react'

export default function Healthcare() {
  return (
    <main>
      <section className="healthcare-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3">Your Future in <span className="text-white">Healthcare</span></h1>
            <p className="fs-5 text-white mx-auto mb-4" style={{ maxWidth: 800 }}>
              Medical, allied health and support roles that keep communities healthy.
            </p>
          </header>
        </div>
      </section>

      <div className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">Healthcare Roles</h2>
          <p className="text-muted mb-4">Nurses, clinicians, technicians and administrative roles overview.</p>
        </section>
      </div>
    </main>
  )
}
