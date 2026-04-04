import React, { useEffect, useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null) // { type: 'success'|'error', text }
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    // restore draft if present
    try {
      const raw = localStorage.getItem('contactDraft')
      if (raw) {
        const d = JSON.parse(raw)
        if (d.name) setName(d.name)
        if (d.email) setEmail(d.email)
        if (d.message) setMessage(d.message)
      }
    } catch (e) {}
  }, [])

  useEffect(() => {
    const t = setTimeout(() => {
      try { localStorage.setItem('contactDraft', JSON.stringify({ name, email, message })) } catch (e) {}
    }, 400)
    return () => clearTimeout(t)
  }, [name, email, message])

  const validate = () => {
    if (!name.trim()) return 'Please enter your name.'
    if (!email.trim()) return 'Please enter your email.'
    // basic email check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email.'
    if (!message.trim()) return 'Please enter a message.'
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setStatus({ type: 'error', text: err })
      return
    }
    setSubmitting(true)
    setStatus(null)

    // try opening mail client as a no-backend fallback
    const to = 'client@noahcareercoachingapp.com'
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}${email ? ` <${email}>` : ''}`)
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`

    // open mail client (user agent handles) and treat as success
    try {
      window.location.href = mailto
      setStatus({ type: 'success', text: 'Mail client opened. If it did not open, check your default mail app.' })
      localStorage.removeItem('contactDraft')
    } catch (e) {
      setStatus({ type: 'success', text: 'Message prepared — copy it from the preview if needed.' })
    }

    setSubmitting(false)
  }

  return (
    <main className="container py-5">
      <div className="row align-items-start">
        <div className="col-md-6 mb-4">
          <h1 className="fw-bold">Contact</h1>
          <p className="lead">Reach out for coaching, partnerships, or press — we'd love to hear from you.</p>

          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:client@noahcareercoachingapp.com">client@noahcareercoachingapp.com</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:+12163029179">(216) 302-9179</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-linkedin me-2"></i>
              <a href="https://www.linkedin.com/company/noah-career-coaching" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-instagram me-2"></i>
              <a href="https://www.instagram.com/noahcareercoaching/" target="_blank" rel="noreferrer noopener">Instagram</a>
            </li>
            <li className="mb-2">
              <img loading="lazy" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tiktok.svg" alt="TikTok" className="me-2 icon-svg-small" />
              <a href="https://www.tiktok.com/@noahcareercoaching" target="_blank" rel="noreferrer noopener">TikTok</a>
            </li>
          </ul>

          <p className="small text-muted">Prefer email? Expect a reply within 48 hours.</p>
        </div>

        <div className="col-md-6">
          <h2 className="h5 fw-bold">Send a message</h2>
          {status && (
            <div className={`alert ${status.type === 'error' ? 'alert-danger' : 'alert-success'}`} role="alert" aria-live="polite">
              {status.text}
            </div>
          )}

          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} className="form-control" type="text" placeholder="Your name" aria-required="true" aria-invalid={!!(status && status.type === 'error' && status.text.includes('name'))} />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" type="email" placeholder="you@email.com" aria-required="true" aria-invalid={!!(status && status.type === 'error' && status.text.includes('email'))} />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control" rows={5} placeholder="How can we help?" aria-required="true" aria-invalid={!!(status && status.type === 'error' && status.text.includes('message'))}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? 'Sending…' : 'Send message'}</button>
            <p className="mt-2 small text-muted">This form opens your mail client as a no-backend demo. Replace with a backend or form provider (Formspree, Netlify Forms, etc.).</p>
          </form>
        </div>
      </div>
    </main>
  )
}

