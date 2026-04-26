const photoData = [
    { id: 1, src: "../images/event1.webp", category: "events", title: "वार्षिक संमेलन", description: "अकॅडमीतील महत्त्वपूर्ण कार्यक्रमातील उत्सवी क्षण." },
    { id: 2, src: "../images/event2.webp", category: "sports", title: "क्रीडा स्पर्धा", description: "मैदानी स्पर्धांमध्ये सहभागी होताना विद्यार्थी." },
    { id: 3, src: "../images/event3.webp", category: "academics", title: "विज्ञान प्रदर्शन", description: "विद्यार्थी प्रकल्पांद्वारे प्रत्यक्ष शिक्षण आणि सादरीकरण." },
    { id: 4, src: "../images/event4.webp", category: "cultural", title: "सांस्कृतिक सादरीकरण", description: "आत्मविश्वास आणि सर्जनशीलतेने भरलेला रंगमंचीय क्षण." },
    { id: 5, src: "../images/event5.webp", category: "events", title: "यश गौरव दिन", description: "विद्यार्थी सन्मान, आनंद आणि अभिमानाचा सोहळा." },
    { id: 6, src: "../images/event6.webp", category: "sports", title: "मैदानी उपक्रम", description: "वर्गाबाहेरील टीमवर्क आणि उत्साही हालचाली." },
    { id: 7, src: "../images/event7.webp", category: "academics", title: "ग्रंथालय अभ्यास वेळ", description: "शांत अभ्यास आणि वाचन संस्कृतीचे सुंदर चित्र." },
    { id: 8, src: "../images/event8.webp", category: "cultural", title: "संगीत क्षण", description: "सहभाग आणि कलात्मक अभिव्यक्तीने सजलेला कार्यक्रम." },
    { id: 9, src: "../images/event9.webp", category: "events", title: "स्वागत कार्यक्रम", description: "विद्यार्थी आणि पालकांसाठी मनमोकळा सुरुवातीचा क्षण." },
    { id: 10, src: "../images/event10.webp", category: "sports", title: "क्रिकेट उपक्रम", description: "स्पर्धा, उत्साह आणि संघभावना दाखवणारा खेळ." },
    { id: 11, src: "../images/event11.webp", category: "academics", title: "प्रयोगशाळा सराव", description: "वर्गातील संकल्पनांना हाताळून समजून घेण्याचा अनुभव." },
    { id: 12, src: "../images/caum1.webp", category: "cultural", title: "कला दालन", description: "विद्यार्थ्यांची सर्जनशीलता आणि दृश्य अभिव्यक्ती." }
];

class PhotoGallery {
    constructor() {
        this.photos = [];
        this.currentFilter = "all";
        this.currentLightboxIndex = 0;
        this.filteredPhotos = [];
        this.init();
    }

    async init() {
        await this.loadPhotos();
        this.setupEventListeners();
        this.renderGallery();
        if (typeof AOS !== "undefined") {
            AOS.init({ duration: 800, once: true, offset: 80 });
        }
    }

    async loadPhotos() {
        await new Promise((resolve) => setTimeout(resolve, 300));
        this.photos = [...photoData];
        this.filteredPhotos = [...this.photos];
    }

    setupEventListeners() {
        document.querySelectorAll(".filter-btn").forEach((button) => {
            button.addEventListener("click", (event) => this.handleFilter(event));
        });

        document.getElementById("lightboxClose").addEventListener("click", () => this.closeLightbox());
        document.getElementById("lightboxPrev").addEventListener("click", () => this.previousImage());
        document.getElementById("lightboxNext").addEventListener("click", () => this.nextImage());
        document.getElementById("lightbox").addEventListener("click", (event) => {
            if (event.target.id === "lightbox") this.closeLightbox();
        });

        document.addEventListener("keydown", (event) => this.handleKeydown(event));
    }

    handleFilter(event) {
        const filter = event.currentTarget.dataset.filter;

        document.querySelectorAll(".filter-btn").forEach((button) => button.classList.remove("active"));
        event.currentTarget.classList.add("active");

        this.currentFilter = filter;
        this.filterPhotos();
        this.renderGallery();
    }

    filterPhotos() {
        this.filteredPhotos = this.currentFilter === "all"
            ? [...this.photos]
            : this.photos.filter((photo) => photo.category === this.currentFilter);
    }

    renderGallery() {
        const container = document.getElementById("galleryContainer");

        if (!this.filteredPhotos.length) {
            container.innerHTML = '<div class="loading">छायाचित्रे उपलब्ध नाहीत.</div>';
            return;
        }

        container.innerHTML = this.filteredPhotos
            .map(
                (photo, index) => `
                    <div class="gallery-item" data-index="${index}">
                        <div class="gallery-image">
                            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                            <div class="gallery-overlay">
                                <div class="overlay-content">
                                    <h3>${photo.title}</h3>
                                    <p>${photo.description}</p>
                                    <button class="gallery-zoom" data-index="${index}" aria-label="View ${photo.title} in full size">
                                        <i class="fas fa-search-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            )
            .join("");

        container.querySelectorAll(".gallery-zoom").forEach((button) => {
            button.addEventListener("click", (event) => {
                event.stopPropagation();
                this.openLightbox(Number(event.currentTarget.dataset.index));
            });
        });

        container.querySelectorAll(".gallery-item").forEach((item) => {
            item.addEventListener("click", () => this.openLightbox(Number(item.dataset.index)));
        });
    }

    openLightbox(index) {
        this.currentLightboxIndex = index;
        const photo = this.filteredPhotos[index];

        document.getElementById("lightboxImg").src = photo.src;
        document.getElementById("lightboxImg").alt = photo.title;
        document.getElementById("lightboxCaption").textContent = `${photo.title} - ${photo.description}`;
        document.getElementById("lightbox").classList.add("active");
        document.body.style.overflow = "hidden";
        this.updateLightboxNavigation();
    }

    closeLightbox() {
        document.getElementById("lightbox").classList.remove("active");
        document.body.style.overflow = "";
    }

    previousImage() {
        this.openLightbox((this.currentLightboxIndex - 1 + this.filteredPhotos.length) % this.filteredPhotos.length);
    }

    nextImage() {
        this.openLightbox((this.currentLightboxIndex + 1) % this.filteredPhotos.length);
    }

    updateLightboxNavigation() {
        const display = this.filteredPhotos.length > 1 ? "flex" : "none";
        document.getElementById("lightboxPrev").style.display = display;
        document.getElementById("lightboxNext").style.display = display;
    }

    handleKeydown(event) {
        const lightbox = document.getElementById("lightbox");
        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") this.closeLightbox();
        if (event.key === "ArrowLeft") this.previousImage();
        if (event.key === "ArrowRight") this.nextImage();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.gallery = new PhotoGallery();
});
