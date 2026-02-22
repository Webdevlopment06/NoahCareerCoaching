import React from 'react'

export default function Hospitality() {
  return (
    <main>
      <section className="hospitality-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3">Your Future in <span className="text-white">Hospitality</span></h1>
            <p className="fs-5 text-white mx-auto mb-4" style={{ maxWidth: 800 }}>
              Service-industry roles in hotels, food service, and events management.
            </p>
          </header>
        </div>
      </section>

      <div className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">Hospitality Roles</h2>
          <p className="text-muted mb-4">Front-line service, management and event roles explained.</p>
        </section>
      </div>
    </main>
  )
}
