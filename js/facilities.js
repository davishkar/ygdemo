// Facilities Section – extracted from script.js for facilities.html page

const facilitiesData = [
  { id: 1, name: "विज्ञान प्रयोगशाळा", icon: "fas fa-flask", description: "प्रायोगिक शिक्षणासाठी आधुनिक आणि सुसज्ज प्रयोगशाळा", delay: 100 },
  { id: 2, name: "रोबोटिक्स लॅब", icon: "fas fa-robot", description: "रोबोटिक्स, कोडिंग आणि नवनवीन प्रयोगांसाठी सुविधा", delay: 200 },
  { id: 3, name: "वसतिगृह", icon: "fas fa-bed", description: "विद्यार्थ्यांसाठी सुरक्षित, आरामदायी आणि शिस्तबद्ध निवासव्यवस्था", delay: 300 },
  { id: 4, name: "२४x७ प्रकाशव्यवस्था", icon: "fas fa-lightbulb", description: "सुरक्षित आणि परिणामकारक शिक्षणासाठी उजळ परिसर", delay: 400 },
  { id: 5, name: "स्वच्छ पिण्याचे पाणी", icon: "fas fa-tint", description: "स्वच्छ पाणी आणि स्वच्छतेच्या आवश्यक सुविधा", delay: 500 },
  { id: 6, name: "स्मार्ट वर्गखोल्या", icon: "fas fa-chalkboard-teacher", description: "डिजिटल साधनांसह आधुनिक अध्यापनासाठी वर्ग", delay: 600 },
  { id: 7, name: "ग्रंथालय", icon: "fas fa-book-reader", description: "अभ्यास, वाचन आणि संदर्भ साहित्याचा समृद्ध साठा", delay: 700 },
  { id: 8, name: "खेळाचे मैदान", icon: "fas fa-futbol", description: "खेळ, शारीरिक विकास आणि उपक्रमांसाठी विस्तीर्ण मैदान", delay: 800 },
  { id: 9, name: "CCTV सुरक्षा", icon: "fas fa-video", description: "विद्यार्थी सुरक्षिततेसाठी २४x७ कॅम्पस देखरेख", delay: 900 },
  { id: 10, name: "वाहतूक सुविधा", icon: "fas fa-bus", description: "विद्यार्थ्यांसाठी सुरक्षित आणि वेळेवर वाहतूक व्यवस्था", delay: 1000 },
  { id: 11, name: "संगणक प्रयोगशाळा", icon: "fas fa-desktop", description: "आयटी शिक्षणासाठी इंटरनेटसह पूर्ण सुसज्ज लॅब", delay: 1100 },
];

class FacilitiesManager {
  constructor() { this.facilities = []; this.init(); }

  async init() {
    await this.loadFacilities();
    this.renderFacilities();
    if (typeof AOS !== "undefined") AOS.init({ duration: 800, once: true });
  }

  async loadFacilities() {
    await new Promise(resolve => setTimeout(resolve, 800));
    this.facilities = [...facilitiesData];
  }

  renderFacilities() {
    const container = document.getElementById("facilitiesGrid");
    if (!this.facilities.length) { container.innerHTML = '<div class="loading">सुविधांची माहिती उपलब्ध नाही.</div>'; return; }
    container.innerHTML = this.facilities.map(f => `
      <div class="facility-card glassmorphism" data-aos="zoom-in" data-aos-delay="${f.delay}">
        <div class="facility-icon"><i class="${f.icon}"></i></div>
        <h3>${f.name}</h3>
        <p>${f.description}</p>
      </div>`).join("");
    if (typeof AOS !== "undefined") AOS.refresh();
  }
}

document.addEventListener("DOMContentLoaded", () => { window.facilitiesManager = new FacilitiesManager(); });
