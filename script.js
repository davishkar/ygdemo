const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function animateCounter(element) {
    if (!element || element.dataset.counted === "true") return;

    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || "";

    element.dataset.counted = "true";

    if (prefersReducedMotion.matches) {
        element.textContent = `${target}${suffix}`;
        return;
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);

        element.textContent = `${value}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
}

function initCounters() {
    const counters = document.querySelectorAll(".stat-number[data-target]");
    if (!counters.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.45 }
    );

    counters.forEach((counter) => observer.observe(counter));
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 850,
            once: true,
            offset: 90,
            easing: "ease-out-cubic"
        });
    }

    initCounters();
});
