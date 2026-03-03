import React, { useState } from 'react'

export default function BuildAResume() {
  const [name, setName] = useState('Your Name')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [summary, setSummary] = useState('')
  const [experience, setExperience] = useState('')
  const [education, setEducation] = useState('')
  const [skills, setSkills] = useState('')

  return (
    <main>
      <header className="page-header">
        <h1>Build Your Resume Step by Step</h1>
        <p>Fill out each section and see your resume update live</p>
      </header>
      <div className="container py-4">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-8">
            <div className="card p-3 mb-3">
              <h5 className="mb-2">Step 1: Personal Information</h5>
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input value={name === 'Your Name' ? '' : name} onChange={e => setName(e.target.value || 'Your Name')} className="form-control" />
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
              </div>
              <div className="mb-2">
                <label className="form-label">Phone</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control" />
              </div>
            </div>

            <div className="card p-3 mb-3">
              <h5 className="mb-2">Step 2: Professional Summary</h5>
              <textarea value={summary} onChange={e => setSummary(e.target.value)} className="form-control" rows={4} />
            </div>

            <div className="card p-3 mb-3">
              <h5 className="mb-2">Step 3: Work Experience</h5>
              <textarea value={experience} onChange={e => setExperience(e.target.value)} placeholder="Job title, company, achievements..." className="form-control" rows={4} />
            </div>

            <div className="card p-3 mb-3">
              <h5 className="mb-2">Step 4: Education</h5>
              <textarea value={education} onChange={e => setEducation(e.target.value)} placeholder="School, degree, year..." className="form-control" rows={3} />
            </div>

            <div className="card p-3 mb-3">
              <h5 className="mb-2">Step 5: Skills</h5>
              <input value={skills} onChange={e => setSkills(e.target.value)} className="form-control" placeholder="Comma separated" />
            </div>
          </div>

          <aside className="col-lg-4">
            <div className="card p-3 bg-light">
              <h4 id="preview-name" className="mb-1">{name || 'Your Name'}</h4>
              <p id="preview-contact" className="text-muted mb-3">{email || 'Email'}{email && phone ? ' | ' : ''}{phone || 'Phone'}</p>

              <div className="mb-3">
                <h6 className="mb-1">Summary</h6>
                <p id="preview-summary" className="mb-0 pre-wrap">{summary}</p>
              </div>

              <div className="mb-3">
                <h6 className="mb-1">Experience</h6>
                <p id="preview-experience" className="mb-0 pre-wrap">{experience}</p>
              </div>

              <div className="mb-3">
                <h6 className="mb-1">Education</h6>
                <p id="preview-education" className="mb-0 pre-wrap">{education}</p>
              </div>

              <div>
                <h6 className="mb-1">Skills</h6>
                <p id="preview-skills" className="mb-0">{skills ? skills.split(',').map(s => s.trim()).join(' • ') : ''}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
