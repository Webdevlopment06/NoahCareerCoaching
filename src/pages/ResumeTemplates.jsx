import React from 'react'

export default function ResumeTemplates() {
  return (
    <main>
      <div className="resumetTemplate-container">
        <header>
          <h1>Choose a Resume Template</h1>
          <p>Select a design that fits your career goals</p>
        </header>
      </div>

      <div className="container">
        <div className="resume-templates-grid">

          <div className="resume-template-card-classic resume-template-card">
            <div className="resume-template-preview">Classic</div>
            <div className="resume-template-body">
              <h3>Classic</h3>
              <p>Clean, professional, and ATS-friendly.</p>
              <div className="resume-template-actions">
                <button className="resume-template-btn btn-preview">Preview</button>
                <button className="resume-template-btn btn-select">Use Template</button>
              </div>
            </div>
          </div>

          <div className="resume-template-card-modern resume-template-card">
            <div className="resume-template-preview">Modern</div>
            <div className="resume-template-body">
              <h3>Modern</h3>
              <p>Stylish layout with a contemporary feel.</p>
              <div className="resume-template-actions">
                <button className="resume-template-btn btn-preview">Preview</button>
                <button className="resume-template-btn btn-select">Use Template</button>
              </div>
            </div>
          </div>

          <div className="resume-template-card-creative resume-template-card">
            <div className="resume-template-preview">Creative</div>
            <div className="resume-template-body">
              <h3>Creative</h3>
              <p>Perfect for designers and creatives.</p>
              <div className="resume-template-actions">
                <button className="resume-template-btn btn-preview">Preview</button>
                <button className="resume-template-btn btn-select">Use Template</button>
              </div>
            </div>
          </div>

          <div className="resume-template-card-executive resume-template-card">
            <div className="resume-template-preview">Executive</div>
            <div className="resume-template-body">
              <h3>Executive</h3>
              <p>Bold and refined for leadership roles.</p>
              <div className="resume-template-actions">
                <button className="resume-template-btn btn-preview">Preview</button>
                <button className="resume-template-btn btn-select">Use Template</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      
    </main>
  )
}
