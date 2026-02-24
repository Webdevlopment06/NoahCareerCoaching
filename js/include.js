document.addEventListener("DOMContentLoaded", () => {
  fetch("/partials/nav.html")
    .then(res => {
      if (!res.ok) throw new Error("Nav not found");
      return res.text();
    })
    .then(html => {
      document.getElementById("site-nav").innerHTML = html;
    })
    .catch(err => console.error("Nav load error:", err));
});
