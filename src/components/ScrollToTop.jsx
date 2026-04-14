import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Prevent browser history from restoring scroll position automatically.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If there's a hash, try to scroll to that element; otherwise scroll to top
    // useLayoutEffect ensures this happens before the browser paints.
    if (hash) {
      const id = hash.replace("#", "");
      // allow route rendering to complete
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
}
