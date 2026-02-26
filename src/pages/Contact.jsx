import React, { useEffect } from 'react'

export default function Contact() {

  return (
    <main className="container py-5">
      <div className="row align-items-start">
        <div className="col-md-6 mb-4">
          <h1 className="fw-bold">Contact</h1>
          <p className="lead">Reach out for coaching, partnerships, or press — we'd love to hear from you.</p>

          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:noahcareercoaching@gmail.com">noahcareercoaching@gmail.com</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:+12163029179">(216) 302-9179</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-linkedin me-2"></i>
              <a href="https://www.linkedin.com/company/noah-career-coaching" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-instagram me-2"></i>
              <a href="https://www.instagram.com/noahcareercoaching/" target="_blank" rel="noreferrer">Instagram</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-camera-video me-2"></i>
              <a href="https://www.tiktok.com/@noahcareercoaching" target="_blank" rel="noreferrer">TikTok</a>
            </li>
          </ul>

          <p className="small text-muted">Prefer email? Expect a reply within 48 hours.</p>
        </div>

        <div className="col-md-6">
          <h2 className="h5 fw-bold">Send a message</h2>
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" type="text" placeholder="Your name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" placeholder="you@email.com" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={5} placeholder="How can we help?" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send message</button>
            <p className="mt-2 small text-muted">This form is a demo. Replace with your backend endpoint or a form provider (Formspree, Netlify Forms, etc.).</p>
          </form>
        </div>
      </div>
    </main>
  )
}

