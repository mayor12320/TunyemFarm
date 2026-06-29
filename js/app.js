document.addEventListener("DOMContentLoaded", () => {

    // =====================
    // Hamburger Menu
    // =====================

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            hamburger.classList.toggle("open");
            navLinks.classList.toggle("nav-open");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("open");
                navLinks.classList.remove("nav-open");
            });
        });

        document.addEventListener("click", (e) => {
            if (!e.target.closest("nav")) {
                hamburger.classList.remove("open");
                navLinks.classList.remove("nav-open");
            }
        });

    }

    // =====================
    // Back To Top
    // =====================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});