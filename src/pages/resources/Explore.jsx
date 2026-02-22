import React, { useMemo, useState } from 'react'

const CAREERS = [
  { id: 'business', title: 'Business', subtitle: 'Management', category: 'corporate', icon: '/images/buisness-hero-bg.jpg' },
  { id: 'creative', title: 'Creative Arts', subtitle: 'Design & Media', category: 'creative', icon: '/images/art1.png' },
  { id: 'education', title: 'Education', subtitle: 'Teaching', category: 'service', icon: '/images/education-hero-bg.jpg' },
  { id: 'finance', title: 'Finance', subtitle: 'Accounting', category: 'corporate', icon: '/images/finance1.png' },
  { id: 'healthcare', title: 'Healthcare', subtitle: 'Medical', category: 'stem', icon: '/images/healthcare-hero-bg.png' },
  { id: 'hospitality', title: 'Hospitality', subtitle: 'Service', category: 'service', icon: '/images/hosp-hero-bg.jpg' },
  { id: 'law', title: 'Law & Safety', subtitle: 'Legal', category: 'corporate', icon: '/images/law-hero-bg.jpg' },
  { id: 'science', title: 'Science', subtitle: 'Research', category: 'stem', icon: '/images/science-hero-bg.jpg' },
  { id: 'trades', title: 'Skilled Trades', subtitle: 'Specialized', category: 'service', icon: '/images/trade-hero-bg.jpg' },
  { id: 'technology', title: 'Technology', subtitle: 'IT & Coding', category: 'stem', icon: '/images/tech1.png' }
]

export default function Explore() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    return CAREERS.filter(c => {
      const q = query.trim().toLowerCase()
      const matchesFilter = filter === 'all' || c.category === filter
      const matchesQuery = !q || c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q)
      return matchesFilter && matchesQuery
    })
  }, [filter, query])

  return (
    <main>
      <section className="explore-hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/images/explorcareers.mp4" type="video/mp4" />
        </video>
        <div className="container position-relative z-1 text-center text-white">
          <h1 className="fw-bold display-6">Explore Career Pathways</h1>
          <p className="opacity-75 small">Find the right industry for your professional journey</p>
        </div>
      </section>

      <div className="container filter-container py-4">
        <div className="card filter-card p-3">
          <div className="row g-3 align-items-center">
            <div className="col-md-8">
              <div className="d-flex flex-wrap gap-2" id="filterBtnGroup">
                {['all', 'stem', 'corporate', 'service', 'creative'].map(f => (
                  <button key={f} className={`btn btn-outline-primary rounded-pill ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f.toUpperCase()}</button>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group input-group-sm">
                <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
                <input value={query} onChange={e => setQuery(e.target.value)} type="text" id="careerSearch" className="form-control border-start-0" placeholder="Search industry..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container py-5">
        <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-5">
          {visible.map(c => (
            <div key={c.id} className="col career-item">
              <div className="card career-mini-card border-0 shadow-sm">
                <div className="icon-header"><img src={c.icon} className="career-icon" alt={c.title} /></div>
                <div className="card-body p-3 text-center d-flex flex-column">
                  <h6 className="fw-bold mb-1">{c.title}</h6>
                  <p className="extra-small text-muted mb-3">{c.subtitle}</p>
                  <button className="btn btn-primary btn-sm mt-auto rounded-pill">View Path</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <a href="#" className="glass-back" id="backToTop">
        <i className="bi bi-arrow-up"></i>
      </a>
    </main>
  )
}
