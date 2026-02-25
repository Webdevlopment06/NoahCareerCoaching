import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
      <div className="text-center p-4">
        <h1 className="display-4 fw-bold mb-3">404 — Page Not Found</h1>
        <p className="lead mb-4">We couldn't find the page you're looking for.</p>
        <Link to="/" className="btn btn-primary btn-lg">Return Home</Link>
      </div>
    </main>
  )
}
