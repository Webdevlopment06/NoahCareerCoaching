import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TEMPLATES = {
    classic: {
        name: 'Full Name',
        email: 'name@example.com',
        phone: '(555) 555-5555',
        summary: 'Experienced professional with a track record of delivering results in fast-paced environments.',
        experience: 'Job Title — Company\n• Achievement 1\n• Achievement 2',
        education: 'University — B.S. in Relevant Field, 20xx',
        skills: 'Communication, Problem Solving, Project Management'
    },
    modern: {
        name: 'Your Name',
        email: 'you@domain.com',
        phone: '(555) 123-4567',
        summary: 'Creative and data-driven professional focused on measurable impact and agile delivery.',
        experience: 'Product Manager — Acme Corp\n• Launched X product\n• Improved Y metric by 30%',
        education: 'College — Degree, 20xx',
        skills: 'Product Strategy, UX, Analytics'
    },
    creative: {
        name: 'Designer Name',
        email: 'design@me.com',
        phone: '(555) 987-6543',
        summary: 'Multidisciplinary designer blending visual storytelling and user research to create delightful experiences.',
        experience: 'Senior Designer — Studio\n• Led rebrand\n• Designed multi-platform campaigns',
        education: 'Art School — BFA, 20xx',
        skills: 'Visual Design, Illustration, Branding'
    },
    executive: {
        name: 'Executive Name',
        email: 'leader@company.com',
        phone: '(555) 000-1111',
        summary: 'Strategic leader with extensive experience scaling teams and driving operational excellence.',
        experience: 'Director of Operations — Enterprise\n• Scaled organization from 10→100+\n• Delivered $X in savings',
        education: 'MBA — Top School, 20xx',
        skills: 'Leadership, Strategy, P&L Management'
    }
}

export default function ResumeTemplates() {
    const navigate = useNavigate()
    const [preview, setPreview] = useState(null)

    const useTemplate = (key) => {
        try {
            localStorage.setItem('buildResumeDraft', JSON.stringify(TEMPLATES[key]))
        } catch (e) {
            // ignore storage errors
        }
        navigate('/services/build-resume')
    }

    const openPreview = (key) => setPreview(TEMPLATES[key])
    const closePreview = () => setPreview(null)

    return (
        <main className="resume-template-container py-5">
            <div className="container">
                <header className="text-center mb-4">
                    <h1 className="fw-bold">Choose a Resume Template</h1>
                    <p className="text-muted">Select a design that fits your career goals</p>
                </header>

                <div className="resume-templates-grid">
                    <article className="resume-template-card">
                        <div className="resume-template-preview flex-ai-center justify-content-center">Classic</div>
                        <div className="resume-template-body">
                            <h3>Classic</h3>
                            <p className="text-muted">Clean, professional, and ATS-friendly.</p>
                            <div className="resume-template-actions">
                                <button onClick={() => openPreview('classic')} className="resume-template-btn resume-template-btn-preview btn btn-outline-secondary me-2">Preview</button>
                                <button onClick={() => useTemplate('classic')} className="resume-template-btn resume-template-btn-select btn btn-primary">Use Template</button>
                            </div>
                        </div>
                    </article>

                    <article className="resume-template-card">
                        <div className="resume-template-preview flex-ai-center justify-content-center">Modern</div>
                        <div className="resume-template-body">
                            <h3>Modern</h3>
                            <p className="text-muted">Stylish layout with a contemporary feel.</p>
                            <div className="resume-template-actions">
                                <button onClick={() => openPreview('modern')} className="resume-template-btn resume-template-btn-preview btn btn-outline-secondary me-2">Preview</button>
                                <button onClick={() => useTemplate('modern')} className="resume-template-btn resume-template-btn-select btn btn-primary">Use Template</button>
                            </div>
                        </div>
                    </article>

                    <article className="resume-template-card">
                        <div className="resume-template-preview flex-ai-center justify-content-center">Creative</div>
                        <div className="resume-template-body">
                            <h3>Creative</h3>
                            <p className="text-muted">Perfect for designers, artists, and creatives.</p>
                            <div className="resume-template-actions">
                                <button onClick={() => openPreview('creative')} className="resume-template-btn resume-template-btn-preview btn btn-outline-secondary me-2">Preview</button>
                                <button onClick={() => useTemplate('creative')} className="resume-template-btn resume-template-btn-select btn btn-primary">Use Template</button>
                            </div>
                        </div>
                    </article>

                    <article className="resume-template-card">
                        <div className="resume-template-preview flex-ai-center justify-content-center">Executive</div>
                        <div className="resume-template-body">
                            <h3>Executive</h3>
                            <p className="text-muted">Bold and refined for leadership roles.</p>
                            <div className="resume-template-actions">
                                <button onClick={() => openPreview('executive')} className="resume-template-btn resume-template-btn-preview btn btn-outline-secondary me-2">Preview</button>
                                <button onClick={() => useTemplate('executive')} className="resume-template-btn resume-template-btn-select btn btn-primary">Use Template</button>
                            </div>
                        </div>
                    </article>
                </div>

                {preview && (
                    <div className="modal-backdrop show" style={{ position: 'fixed', inset: 0, zIndex: 1050, background: 'rgba(0,0,0,0.5)' }} onClick={closePreview} />
                )}

                {preview && (
                    <div className="position-fixed top-50 start-50 translate-middle bg-white border rounded p-4" style={{ zIndex: 1060, width: 'min(820px, 95%)', maxHeight: '90vh', overflow: 'auto' }}>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <h4 className="mb-0">Template Preview</h4>
                            <button className="btn-close" onClick={closePreview} aria-label="Close preview" />
                        </div>
                        <section>
                            <h2 className="fw-bold">{preview.name}</h2>
                            <p className="text-muted">{preview.email}{preview.email && preview.phone ? ' | ' : ''}{preview.phone}</p>
                            <h6>Summary</h6>
                            <p className="pre-wrap">{preview.summary}</p>
                            <h6>Experience</h6>
                            <p className="pre-wrap">{preview.experience}</p>
                            <h6>Education</h6>
                            <p className="pre-wrap">{preview.education}</p>
                            <h6>Skills</h6>
                            <p>{preview.skills}</p>
                        </section>
                        <div className="mt-3 text-end">
                            <button className="btn btn-outline-secondary me-2" onClick={closePreview}>Close</button>
                            <button className="btn btn-primary" onClick={() => { useTemplate(Object.keys(TEMPLATES).find(k => TEMPLATES[k] === preview)) }}>Use this Template</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}
