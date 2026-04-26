const coursesData = {
    marathi: [
        {
            icon: "fas fa-book",
            title: "इयत्ता ४ थी",
            summary: "ओळखीच्या भाषिक वातावरणात भक्कम पायाभरणी.",
            features: [
                "मराठी, इंग्रजी, हिंदी, गणित आणि विज्ञान विषयांवर मजबूत आधार",
                "वाचन, लेखन आणि दैनंदिन शिस्तीची सवय",
                "पुढील इयत्तांसाठी आत्मविश्वासपूर्ण तयारी"
            ]
        },
        {
            icon: "fas fa-pen-ruler",
            title: "इयत्ता ५ वी आणि ६ वी",
            summary: "मुख्य विषयांमध्ये संकल्पनांची टप्प्याटप्प्याने वाढ.",
            features: [
                "नियमित पुनरावृत्ती आणि संतुलित विषय मार्गदर्शन",
                "संगणक परिचय आणि संस्कारप्रधान वर्गसंस्कृती",
                "समज, मांडणी आणि अभिव्यक्तीत वाढता आत्मविश्वास"
            ]
        },
        {
            icon: "fas fa-brain",
            title: "इयत्ता ७ वी ते १० वी",
            summary: "अधिक सखोल अभ्यास आणि परीक्षेसाठी मजबूत तयारी.",
            features: [
                "मराठी माध्यमातील विषयानुरूप मार्गदर्शन",
                "सराव, शंका निरसन आणि संकल्पनांची पुनर्बांधणी",
                "बोर्ड पातळीवरील शैक्षणिक अपेक्षांसाठी सहाय्य"
            ]
        },
        {
            icon: "fas fa-seedling",
            title: "संस्कार आणि अभ्यास सवयी",
            summary: "फक्त गुणांपलीकडे जाऊन सर्वांगीण घडणारा विद्यार्थी.",
            features: [
                "शिस्त, वेळेचे नियोजन आणि सातत्यपूर्ण अभ्यास",
                "आदरयुक्त वर्गसंस्कृती आणि शिक्षकांचे मार्गदर्शन",
                "शैक्षणिक व वैयक्तिक विकासासाठी संतुलित दिनक्रम"
            ]
        }
    ],
    "semi-english": [
        {
            icon: "fas fa-language",
            title: "इयत्ता ४ थी",
            summary: "द्विभाषिक शिक्षणाकडे सहज आणि आत्मविश्वासपूर्ण वाटचाल.",
            features: [
                "मुख्य विषयांसाठी सोप्या आणि ओळखीच्या पद्धतीने मार्गदर्शन",
                "गणित आणि विज्ञानात सरावातून आत्मविश्वास",
                "भाषांतराच्या टप्प्यावर शिक्षकांचे सातत्यपूर्ण सहाय्य"
            ]
        },
        {
            icon: "fas fa-book-reader",
            title: "इयत्ता ५ वी आणि ६ वी",
            summary: "वाढत्या इंग्रजी परिचयासाठी संतुलित शैक्षणिक आधार.",
            features: [
                "सर्व मुख्य विषयांसोबत संज्ञांची स्पष्ट ओळख",
                "संवादकौशल्य आणि समज वाढवणारे उपक्रम",
                "मिश्र माध्यमातील संकोच कमी करणारा सातत्यपूर्ण सराव"
            ]
        },
        {
            icon: "fas fa-chart-line",
            title: "इयत्ता ७ वी ते १० वी",
            summary: "सोयीस्कर शिकण्यापासून प्रगत अभ्यासाकडे नेणारा सक्षम मार्ग.",
            features: [
                "उच्च स्तरावरील विषयांसाठी योग्य शैक्षणिक तयारी",
                "रचनेबद्ध पुनरावृत्ती आणि संकल्पनांची स्पष्टता",
                "बोर्डाभिमुख शिक्षणासाठी आत्मविश्वास वाढवणारा ट्रॅक"
            ]
        }
    ],
    english: [
        {
            icon: "fas fa-graduation-cap",
            title: "इयत्ता ४ थी",
            summary: "इंग्रजी माध्यमातील शिक्षणासाठी सुरुवातीपासून आत्मविश्वास.",
            features: [
                "सोप्या समजावणीसह मुख्य विषयांची ओळख",
                "वाचन, समज आणि स्पष्ट उत्तर देण्याची सवय",
                "भाषिक संवाद आणि विषयनिहाय शब्दसंग्रहाची पायाभरणी"
            ]
        },
        {
            icon: "fas fa-comments",
            title: "इयत्ता ५ वी आणि ६ वी",
            summary: "भाषेतील प्रवाहीपणा, स्पष्टता आणि वर्गातील सहभागात वाढ.",
            features: [
                "इंग्रजी माध्यमातून सर्व मुख्य विषयांचे समर्थन",
                "सखोल समज वाढवणारे संकल्पनाप्रधान अध्यापन",
                "वर्गातील आत्मविश्वास आणि व्यक्तिमत्त्व विकास"
            ]
        },
        {
            icon: "fas fa-trophy",
            title: "इयत्ता ७ वी ते १० वी",
            summary: "इंग्रजी माध्यमातील उत्कृष्ट कामगिरीसाठी धारदार तयारी.",
            features: [
                "गणित आणि विज्ञानातील प्रगत संकल्पनांसाठी सहाय्य",
                "परीक्षाभिमुख तयारी आणि समस्या सोडवण्याची सवय",
                "लेखी आणि मौखिक सादरीकरणातील प्रगती"
            ]
        }
    ],
    "exam-prep": [
        {
            icon: "fas fa-medal",
            title: "संरक्षण क्षेत्र प्रवेश पायाभूत तयारी",
            summary: "शिस्तप्रिय आणि स्पर्धात्मक वाटचालीसाठी प्रारंभिक दिशा.",
            features: [
                "संरक्षण क्षेत्राशी संबंधित प्रवेश उद्दिष्टांसाठी मार्गदर्शन",
                "मॉक सराव आणि तयारीचे सहाय्य",
                "दिनक्रम आणि तयारीतून आत्मविश्वास वाढवणे"
            ]
        },
        {
            icon: "fas fa-atom",
            title: "MHT-CET पायाभूत तयारी",
            summary: "राज्यस्तरीय प्रवेश परीक्षेसाठी दीर्घकालीन संकल्पनात्मक आधार.",
            features: [
                "भौतिकशास्त्र, रसायनशास्त्र, गणित किंवा जीवशास्त्रातील मजबूत पायाभरणी",
                "समस्या सोडवण्याचा दृष्टिकोन आणि नियमित सराव",
                "शालेय टप्प्यापासून सवयीने तयार होणारी स्पर्धा तयारी"
            ]
        },
        {
            icon: "fas fa-heartbeat",
            title: "NEET फाउंडेशन",
            summary: "वैद्यकीय क्षेत्राकडे वाटचाल करणाऱ्या विद्यार्थ्यांसाठी विज्ञानकेंद्रित दिशा.",
            features: [
                "जीवशास्त्र, भौतिकशास्त्र आणि रसायनशास्त्रातील मूलभूत ताकद",
                "संकल्पनांची उजळणी आणि विषयातील आत्मविश्वास",
                "भविष्यातील स्पर्धा परीक्षांसाठी मजबूत आधार"
            ]
        },
        {
            icon: "fas fa-calculator",
            title: "JEE फाउंडेशन",
            summary: "अभियांत्रिकी विचारसरणीसाठी विश्लेषणात्मक तयारी.",
            features: [
                "गणित आणि विज्ञानातील तर्कशक्तीसाठी मार्गदर्शन",
                "समस्या सोडवण्याची शिस्त आणि टप्प्याटप्प्याने संकल्पना",
                "भविष्यातील अभियांत्रिकी तयारीसाठी सक्षम सुरुवात"
            ]
        }
    ]
};

class CoursesSection {
    constructor() {
        this.currentMedium = "marathi";
        this.scrollContainer = document.querySelector(".horizontal-scroll-container");
        this.tabs = document.querySelectorAll(".medium-tab");
        this.scrollLeftBtn = document.querySelector(".scroll-left");
        this.scrollRightBtn = document.querySelector(".scroll-right");
        this.init();
    }

    init() {
        this.loadCourses(this.currentMedium);
        this.bindEvents();
        this.updateScrollButtons();
    }

    bindEvents() {
        this.tabs.forEach((tab) => {
            tab.addEventListener("click", (event) => this.switchMedium(event.currentTarget.dataset.medium));
        });

        this.scrollLeftBtn.addEventListener("click", () => this.scroll(-320));
        this.scrollRightBtn.addEventListener("click", () => this.scroll(320));
        this.scrollContainer.addEventListener("scroll", () => this.updateScrollButtons());
        this.addTouchSupport();
        this.addKeyboardSupport();
    }

    switchMedium(medium) {
        if (medium === this.currentMedium) return;

        this.scrollContainer.classList.add("loading");
        this.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.medium === medium));

        setTimeout(() => {
            this.currentMedium = medium;
            this.loadCourses(medium);
            this.scrollContainer.classList.remove("loading");
            this.scrollContainer.scrollLeft = 0;
            this.updateScrollButtons();
        }, 180);
    }

    loadCourses(medium) {
        const courses = coursesData[medium] || [];
        this.scrollContainer.innerHTML = `
            <div class="course-medium-content active" data-medium="${medium}">
                ${this.createCourseContent(courses)}
            </div>
        `;
    }

    createCourseContent(courses) {
        return courses
            .map(
                (course) => `
                    <div class="course-card">
                        <div class="course-icon"><i class="${course.icon}"></i></div>
                        <h3>${course.title}</h3>
                        <p>${course.summary}</p>
                        <ul class="course-features">
                            ${course.features.map((feature) => `<li>${feature}</li>`).join("")}
                        </ul>
                    </div>
                `
            )
            .join("");
    }

    scroll(distance) {
        this.scrollContainer.scrollBy({ left: distance, behavior: "smooth" });
    }

    updateScrollButtons() {
        const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;
        const hasMoreLeft = scrollLeft > 5;
        const hasMoreRight = scrollLeft < scrollWidth - clientWidth - 5;

        this.scrollLeftBtn.style.opacity = hasMoreLeft ? "1" : "0.55";
        this.scrollRightBtn.style.opacity = hasMoreRight ? "1" : "0.55";
        this.scrollLeftBtn.disabled = !hasMoreLeft;
        this.scrollRightBtn.disabled = !hasMoreRight;
    }

    addTouchSupport() {
        let startX = 0;
        let scrollStart = 0;
        let isDragging = false;

        this.scrollContainer.addEventListener("mousedown", (event) => {
            isDragging = true;
            startX = event.pageX - this.scrollContainer.offsetLeft;
            scrollStart = this.scrollContainer.scrollLeft;
            this.scrollContainer.style.cursor = "grabbing";
        });

        this.scrollContainer.addEventListener("mouseleave", () => {
            isDragging = false;
            this.scrollContainer.style.cursor = "auto";
        });

        this.scrollContainer.addEventListener("mouseup", () => {
            isDragging = false;
            this.scrollContainer.style.cursor = "auto";
        });

        this.scrollContainer.addEventListener("mousemove", (event) => {
            if (!isDragging) return;
            event.preventDefault();
            const currentX = event.pageX - this.scrollContainer.offsetLeft;
            this.scrollContainer.scrollLeft = scrollStart - (currentX - startX) * 2;
        });
    }

    addKeyboardSupport() {
        document.addEventListener("keydown", (event) => {
            if (!document.activeElement.closest(".horizontal-scroll-container, .medium-tabs")) return;

            if (event.key === "ArrowLeft") this.scroll(-320);
            if (event.key === "ArrowRight") this.scroll(320);

            const index = parseInt(event.key, 10) - 1;
            if (index >= 0 && this.tabs[index]) {
                this.tabs[index].click();
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.coursesSection = new CoursesSection();
    if (typeof AOS !== "undefined") {
        AOS.init({ duration: 800, once: true, offset: 80 });
    }
});
