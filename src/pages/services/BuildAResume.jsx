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
      <div className="container max-w-900">
        <div className="grid-2-col">
          <div>
            <div className="step">
              <h2>Step 1: Personal Information</h2>
              <label>Name
                <input value={name === 'Your Name' ? '' : name} onChange={e => setName(e.target.value || 'Your Name')} className="form-control" />
              </label>
              <label>Email
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
              </label>
              <label>Phone
                <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control" />
              </label>
            </div>

            <div className="step mt-3">
              <h2>Step 2: Professional Summary</h2>
              <label>Summary
                <textarea value={summary} onChange={e => setSummary(e.target.value)} className="form-control" />
              </label>
            </div>

            <div className="step mt-3">
              <h2>Step 3: Work Experience</h2>
              <label>Experience
                <textarea value={experience} onChange={e => setExperience(e.target.value)} placeholder="Job title, company, achievements..." className="form-control" />
              </label>
            </div>

            <div className="step mt-3">
              <h2>Step 4: Education</h2>
              <label>Education
                <textarea value={education} onChange={e => setEducation(e.target.value)} placeholder="School, degree, year..." className="form-control" />
              </label>
            </div>

            <div className="step mt-3">
              <h2>Step 5: Skills</h2>
              <label>Skills (comma separated)
                <input value={skills} onChange={e => setSkills(e.target.value)} className="form-control" />
              </label>
            </div>
          </div>

          <div className="resume-preview">
            <h2 id="preview-name">{name || 'Your Name'}</h2>
            <p id="preview-contact">{email || 'Email'}{email && phone ? ' | ' : ''}{phone || 'Phone'}</p>

            <div className="section">
              <h3>Summary</h3>
              <p id="preview-summary">{summary}</p>
            </div>

            <div className="section">
              <h3>Experience</h3>
              <p id="preview-experience">{experience}</p>
            </div>

            <div className="section">
              <h3>Education</h3>
              <p id="preview-education">{education}</p>
            </div>

            <div className="section">
              <h3>Skills</h3>
              <p id="preview-skills">{skills ? skills.split(',').map(s => s.trim()).join(' • ') : ''}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
