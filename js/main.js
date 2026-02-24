document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. BACK TO TOP LOGIC ---
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });
    }

    // --- 2. CAREER GRID FILTERING ---
    const filterButtons = document.querySelectorAll('#filterBtnGroup .btn');
    const careerItems = document.querySelectorAll('.career-item');
    const searchInput = document.getElementById('careerSearch');

    if (careerItems.length > 0) {
        const applyFilters = () => {
            const activeBtn = document.querySelector('#filterBtnGroup .btn.active');
            const activeFilter = activeBtn ? activeBtn.dataset.filter : 'all';
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

            careerItems.forEach(item => {
                const categoryMatch = activeFilter === 'all' || item.dataset.category === activeFilter;
                const titleText = item.querySelector('h6').innerText.toLowerCase();
                const textMatch = titleText.includes(searchTerm);
                
                item.style.display = (categoryMatch && textMatch) ? 'block' : 'none';
            });
        };

        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                applyFilters();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', applyFilters);
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Global Scroll-to-Top Logic ---
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // --- Global Carousel Initializer ---
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(c => {
        new bootstrap.Carousel(c, {
            interval: 2500,
            ride: 'carousel'
        });
    });

    // --- Active Link Highlight (Optional but helpful) ---
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
