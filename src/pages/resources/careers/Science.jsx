import React from 'react'

export default function Science() {
  return (
    <main>
      <section className="science-hero-bg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <header className="rounded-4 shadow-lg p-4 p-md-5 mb-5 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3">Your Future in <span className="text-white">Science &amp; Research</span></h1>
            <p className="fs-5 text-white mx-auto mb-4" style={{ maxWidth: 800 }}>
              Research, laboratory and field roles that advance knowledge and discovery.
            </p>
          </header>
        </div>
      </section>

      <div className="container-xl py-4 py-lg-5">
        <section id="roles" className="mb-5">
          <h2 className="fs-2 fw-bold section-heading-custom text-black">Science Roles</h2>
          <p className="text-muted mb-4">Research scientists, lab techs, and technical specialists.</p>
        </section>
      </div>
    </main>
  )
}
