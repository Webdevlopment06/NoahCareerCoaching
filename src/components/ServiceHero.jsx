import React from 'react'

export default function ServiceHero({
  title,
  subtitle,
  ctaText,
  ctaLink = '/contact',
  imgSrc,
  variant = 'primary',
  children,
}) {
  const bgClass = variant === 'primary' ? 'hero-gradient-indigo-orange' : 'resume-banner'

  return (
    <section className={`${bgClass} py-5 text-white`}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold mb-3 text-uppercase animate-fade-in">{title}</h1>
            {subtitle && <p className="lead mb-4 opacity-75">{subtitle}</p>}
            <div className="mt-4 animate-slide-in-left d-flex gap-3 justify-content-start">
              {ctaText && (
                <a href={ctaLink} className="btn btn-primary btn-lg px-4 rounded-pill">{ctaText}</a>
              )}
              {children}
            </div>
          </div>

          {imgSrc && (
            <div className="col-lg-5 text-center d-none d-lg-block">
              <div className="p-4 bg-white rounded-4 shadow-lg text-dark animate-scale-up">
                <img loading="lazy" src={imgSrc} className="rounded-circle border border-4 border-white shadow" alt="Hero" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
