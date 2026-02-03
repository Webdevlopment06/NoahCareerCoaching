const navHTML = `
<nav class="navbar navbar-expand-lg nav-bg shadow-sm fixed-top">
  <div class="container">
    <!-- Logo -->
    <a class="navbar-brand" href="/src/index.html">
      <img src="/images/nav-logo.png" height="40" alt="Logo">
    </a>

    <!-- Mobile Toggle -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse justify-content-center" id="navMenu">
      <ul class="navbar-nav mx-auto text-center">

        <!-- Home -->
        <li class="nav-item" id="nav-home">
          <a class="nav-link navfont blackText" href="/src/index.html">HOME</a>
        </li>

        <!-- About Dropdown -->
        <li class="nav-item dropdown position-static" id="nav-about">
          <a class="nav-link dropdown-toggle navfont blackText" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
            ABOUT
          </a>
          <div class="dropdown-menu w-100 p-4 text-center" aria-labelledby="aboutDropdown">
            <div class="container">
              <div class="row mb-2">
                <div class="col-md-6">
                  <a class="dropdown-item" href="/src/about.html">Mission Statement</a>
                </div>
                <div class="col-md-6">
                  <a class="dropdown-item" href="/src/about.html#founder">About Our Founder</a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <a class="dropdown-item" href="/src/about.html#join">How To Join</a>
                </div>
                <div class="col-md-6">
                  <a class="dropdown-item" href="/src/about.html#donation">Donation</a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Services Dropdown -->
        <li class="nav-item dropdown position-static" id="nav-services">
          <a class="nav-link dropdown-toggle navfont blackText" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
            SERVICES
          </a>
          <div class="dropdown-menu w-100 p-4 text-center" aria-labelledby="servicesDropdown">
            <div class="container">
              <div class="row mb-2">
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/services/resume.html">Resume Development</a>
                </div>
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/services/interview.html">Interview Coaching</a>
                </div>
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/services/jobSearch.html">Job Search Strategy</a>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/services/professionalDev.html">Professional Development</a>
                </div>
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/services/internshipPath.html">Internship Pathways</a>
                </div>
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/services/volunteer.html">Volunteer Opportunities</a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Resources Dropdown -->
        <li class="nav-item dropdown position-static" id="nav-resources">
          <a class="nav-link dropdown-toggle navfont blackText" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown">
            RESOURCES
          </a>
          <div class="dropdown-menu w-100 p-4 text-center" aria-labelledby="resourcesDropdown">
            <div class="container">
              <div class="row mb-2">
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/resources/explore.html">Explore Careers</a>
                </div>
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/resources/assessments.html">Career Assessments</a>
                </div>
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/resources/stories.html">Career Change Stories</a>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/resources/equalE.html">Equal Employer Information</a>
                </div>
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/resources/youth.html">Youth Information</a>
                </div>
                <div class="col-md-4">
                  <a class="dropdown-item" href="/src/resources/state.html">Resources By State</a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Contact -->
        <li class="nav-item" id="nav-contact">
          <a class="nav-link navfont blackText" href="/src/contact.html">GET INVOLVED</a>
        </li>
      </ul>

      <div class="text-center">
        <a src="#donate" class="btn btn-warning navfont ms-lg-3">GET FREE COACHING</a>
      </div>
      <div class="text-center">
        <a class="btn btn-warning navfont ms-lg-3">DONATE</a>
      </div>
    </div>
  </div>
</nav>
`;


document.addEventListener('DOMContentLoaded', function () {

  // Add meta tags
  const head = document.head;
  if (head) {
    head.innerHTML += `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
  `;
  }

  // Insert navbar
  const placeholder = document.getElementById('nav-inserter');
  if (placeholder) {
    placeholder.innerHTML = navHTML;
    // Set section active
    let activeSection = '';
    if (window.location.pathname === '/src/index.html') {
      activeSection = 'home';
    } else if (window.location.pathname.startsWith('/src/about.html')) {
      activeSection = 'about';
    } else if (window.location.pathname.startsWith('/src/services/')) {
      activeSection = 'services';
    } else if (window.location.pathname.startsWith('/src/resources/')) {
      activeSection = 'resources';
    } else if (window.location.pathname === '/src/contact.html') {
      activeSection = 'contact';
    }
    if (activeSection) {
      const navItem = document.getElementById('nav-' + activeSection);
      if (navItem) {
        const link = navItem.querySelector('.nav-link');
        if (link) link.classList.add('active');
      }
    }
  }

  // Add back to top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (!backToTop) return;
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
  

  // Add Bootstrap JS
  const bootstrapScript = document.createElement('script');
  bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
  bootstrapScript.onload = function() {
    // Add carousel script if carousel exists (after Bootstrap loads)
    if (document.querySelector('#heroCarousel')) {
      const carouselScript = document.createElement('script');
      carouselScript.textContent = `
        const myCarousel = document.querySelector('#heroCarousel');
        const carousel = new bootstrap.Carousel(myCarousel, {
          interval: 2500,
          ride: 'carousel'
        });
      `;
      document.body.appendChild(carouselScript);
    }
  };
  document.body.appendChild(bootstrapScript);
});


