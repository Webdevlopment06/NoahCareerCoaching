fetch("/NoahCareerCoaching/partials/nav.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("site-nav").innerHTML = html;
  })
  .catch(err => console.error("Nav failed to load:", err));
