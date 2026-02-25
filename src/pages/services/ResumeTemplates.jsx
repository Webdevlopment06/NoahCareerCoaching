import React from 'react'

export default function ResumeTemplates() {
    return (
        <main className="resume-template-container py-5">
            <div className="container">
                <header className="text-center mb-4">
                    <h1 className="fw-bold">Choose a Resume Template</h1>
                    <p className="text-muted">Select a design that fits your career goals</p>
                </header>

                <div className="resume-templates-grid">
                    <article className="resume-template-card">
                        <div className="resume-template-preview d-flex align-items-center justify-content-center">Classic</div>
                        <div className="resume-template-body">
                            <h3>Classic</h3>
                            <p className="text-muted">Clean, professional, and ATS-friendly.</p>
                            <div className="resume-template-actions">
                                <button className="resume-template-btn resume-template-btn-preview btn btn-outline-secondary me-2">Preview</button>
                                <button className="resume-template-btn resume-template-btn-select btn btn-primary">Use Template</button>
                            </div>
                        </div>
                    </article>

                    <article className="resume-template-card">
                        <div className="resume-template-preview d-flex align-items-center justify-content-center">Modern</div>
                        <div className="resume-template-body">
                            <h3>Modern</h3>
                            <p className="text-muted">Stylish layout with a contemporary feel.</p>
                            <div className="resume-template-actions">
                                <button className="resume-template-btn resume-template-btn-preview btn btn-outline-secondary me-2">Preview</button>
                                <button className="resume-template-btn resume-template-btn-select btn btn-primary">Use Template</button>
                            </div>
                        </div>
                    </article>

                    <article className="resume-template-card">
                        <div className="resume-template-preview d-flex align-items-center justify-content-center">Creative</div>
                        <div className="resume-template-body">
                            <h3>Creative</h3>
                            <p className="text-muted">Perfect for designers and creatives.</p>
                            <div className="resume-template-actions">
                                <button className="resume-template-btn resume-template-btn-preview btn btn-outline-secondary me-2">Preview</button>
                                <button className="resume-template-btn resume-template-btn-select btn btn-primary">Use Template</button>
                            </div>
                        </div>
                    </article>

                    <article className="resume-template-card">
                        <div className="resume-template-preview d-flex align-items-center justify-content-center">Executive</div>
                        <div className="resume-template-body">
                            <h3>Executive</h3>
                            <p className="text-muted">Bold and refined for leadership roles.</p>
                            <div className="resume-template-actions">
                                <button className="resume-template-btn resume-template-btn-preview btn btn-outline-secondary me-2">Preview</button>
                                <button className="resume-template-btn resume-template-btn-select btn btn-primary">Use Template</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    )
}