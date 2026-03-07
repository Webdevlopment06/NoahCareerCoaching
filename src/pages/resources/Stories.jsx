import React from 'react'

const SAMPLE_STORIES = [
  {
    id: 1,
    title: 'From Retail to UX Designer',
    excerpt:
      'Aisha built a focused portfolio and completed three real projects to transition into product design within nine months.',
    author: 'Aisha R.',
    date: 'Mar 2025',
  },
  {
    id: 2,
    title: 'Bootcamp to Backend Engineer',
    excerpt:
      'After a targeted bootcamp and open-source contributions, Miguel landed a backend role at a fast-growing startup.',
    author: 'Miguel T.',
    date: 'Nov 2024',
  },
  {
    id: 3,
    title: 'Career Pivot: Admin to Project Manager',
    excerpt:
      'With volunteer project coordination experience and a short PM course, Priya secured an entry PM role.',
    author: 'Priya S.',
    date: 'Jan 2025',
  },
  {
    id: 4,
    title: 'Military to Civilian Tech',
    excerpt:
      'Jamal translated technical skills and leveraged mentorship to enter the civilian tech workforce.',
    author: 'Jamal B.',
    date: 'Feb 2025',
  },
  {
    id: 5,
    title: 'Teacher to Data Analyst',
    excerpt:
      'Sara used classroom data projects and an online certificate to demonstrate transferable skills and land interviews.',
    author: 'Sara L.',
    date: 'Dec 2024',
  },
  {
    id: 6,
    title: 'Hospitality to Finance Ops',
    excerpt:
      'Carlos highlighted operations experience and process improvements to move into finance operations.',
    author: 'Carlos M.',
    date: 'Oct 2024',
  },
]

function StoryCard({ title, excerpt, author, date }) {
  return (
    <article className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden">
      <div className="w-100" style={{ height: 180, background: '#e9ecef' }} aria-hidden="true" />
      <div className="card-body">
        <h5 className="card-title mb-2">{title}</h5>
        <p className="card-text small text-muted mb-4">{excerpt}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="small text-secondary">{author} • {date}</div>
          <button type="button" className="btn btn-sm btn-outline-primary">Read story</button>
        </div>
      </div>
    </article>
  )
}

export default function Stories() {
  return (
    <main className="container py-5">
      <h1 className="mb-4">Career Change Stories</h1>

      <section aria-label="Stories list">
        <div className="row g-4">
          {SAMPLE_STORIES.map(s => (
            <div key={s.id} className="col-12 col-md-6 col-lg-4">
              <StoryCard {...s} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
