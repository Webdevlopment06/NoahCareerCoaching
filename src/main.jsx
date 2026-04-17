import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/utilities.css";
import "./styles/pages.css";
import "./styles/animations.css"; // Import animations
import App from "./App";

// Initialize theme early to avoid flash of incorrect theme
const initTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark");
      return;
    }
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", !!prefersDark);
  } catch (e) {
    // ignore
  }
};
initTheme();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
