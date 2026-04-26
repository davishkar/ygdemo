document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const navbar = document.getElementById("navbar");
    const backToTop = document.getElementById("backToTop");

    const setMenuState = (isOpen) => {
        if (!navToggle || !navLinks) return;
        navToggle.classList.toggle("active", isOpen);
        navLinks.classList.toggle("active", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("nav-open", isOpen);
    };

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            setMenuState(!navLinks.classList.contains("active"));
        });

        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => setMenuState(false));
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
                setMenuState(false);
            }
        });
    }

    const handleScrollState = () => {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 24);
        }

        if (backToTop) {
            backToTop.classList.toggle("show", window.scrollY > 320);
        }
    };

    handleScrollState();
    window.addEventListener("scroll", handleScrollState, { passive: true });

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
