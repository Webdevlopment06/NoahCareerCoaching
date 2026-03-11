import React from "react";

export default function SmoothScrollLink({ to = "roles", children, className, ...props }) {
  const handleClick = (e) => {
    // Only intercept same-page hash links
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      // account for fixed navbar height so target isn't hidden
      const nav = document.querySelector('nav.navbar.fixed-top') || document.querySelector('nav.navbar')
      const navHeight = nav ? nav.offsetHeight : 0
      const extra = 12
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight - extra
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
      try {
        window.history.replaceState(null, '', `#${to}`)
      } catch (err) {
        // ignore
      }
    }
  };

  return (
    <a href={`#${to}`} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
