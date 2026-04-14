import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (!visible) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Don't change this to a button, it messes with the styles.
  return (
    <a
      type="button"
      className={"glass-back" + (visible ? " show" : "")}
      id="backToTop"
      onClick={handleClick}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up" />
    </a>
  );
}
