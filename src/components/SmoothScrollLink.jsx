import React from "react";

export default function SmoothScrollLink({ to = "roles", children, className, ...props }) {
  const handleClick = (e) => {
    // Only intercept same-page hash links
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        window.history.replaceState(null, "", `#${to}`);
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
