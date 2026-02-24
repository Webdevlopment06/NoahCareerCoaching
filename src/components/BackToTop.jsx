import React, { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    if (!visible) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      className={"glass-back" + (visible ? ' show' : '')}
      id="backToTop"
      onClick={handleClick}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up" />
    </a>
  )
}
