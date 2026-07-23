/* ==========================================
   INDIA INFORMATION PORTAL
   script.js
   PART-1
========================================== */

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1000);

    }

});

// =========================
// STICKY HEADER
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ==========================================
   PART-2
   MOBILE MENU & NAVIGATION
========================================== */

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

}

// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});

// =========================
// SMOOTH SCROLL
// =========================

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    });

});
/* ==========================================
   PART-3
   DARK MODE
========================================== */

// =========================
// CREATE DARK MODE BUTTON
// =========================

const themeButton = document.createElement("button");

themeButton.innerHTML = "🌙";

themeButton.id = "themeToggle";

document.body.appendChild(themeButton);

// =========================
// BUTTON STYLE
// =========================

themeButton.style.position = "fixed";
themeButton.style.bottom = "165px";
themeButton.style.right = "25px";
themeButton.style.width = "55px";
themeButton.style.height = "55px";
themeButton.style.border = "none";
themeButton.style.borderRadius = "50%";
themeButton.style.cursor = "pointer";
themeButton.style.fontSize = "22px";
themeButton.style.zIndex = "999";
themeButton.style.background = "#2563eb";
themeButton.style.color = "#fff";
themeButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";

// =========================
// LOAD SAVED THEME
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.innerHTML = "☀️";

}

// =========================
// TOGGLE THEME
// =========================

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeButton.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeButton.innerHTML = "🌙";

    }

});
/* ==========================================
   PART-4
   SEARCH FUNCTION
========================================== */

// =========================
// SEARCH ELEMENTS
// =========================

const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

// =========================
// LIVE SEARCH
// =========================

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase().trim();

        let visibleCards = 0;

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";
                visibleCards++;

            } else {

                card.style.display = "none";

            }

        });

        // =========================
        // NO RESULT MESSAGE
        // =========================

        let noResult = document.getElementById("noResult");

        if (!noResult) {

            noResult = document.createElement("h2");
            noResult.id = "noResult";
            noResult.innerText = "❌ No Results Found";
            noResult.style.textAlign = "center";
            noResult.style.color = "#f59e0b";
            noResult.style.marginTop = "30px";
            document.body.appendChild(noResult);

        }

        if (visibleCards === 0) {

            noResult.style.display = "block";

        } else {

            noResult.style.display = "none";

        }

    });

              }
/* ==========================================
   PART-5
   SCROLL ANIMATIONS
========================================== */

// =========================
// FADE-UP ANIMATION
// =========================

const fadeElements = document.querySelectorAll(
    ".card, .section-title, .section-subtitle, .contact-form"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

fadeElements.forEach(element => {

    element.classList.add("fade-up");

    observer.observe(element);

});

// =========================
// HERO ANIMATION
// =========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const scroll = window.pageYOffset;

    hero.style.backgroundPositionY = `${scroll * 0.4}px`;

});

// =========================
// CARD HOVER EFFECT
// =========================

const allCards = document.querySelectorAll(".card");

allCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
   PART-6
   CONTACT FORM VALIDATION
========================================== */

// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector("textarea");

        // Remove old message
        const oldMsg = document.querySelector(".form-message");
        if (oldMsg) oldMsg.remove();

        const info = document.createElement("p");
        info.className = "form-message";
        info.style.marginTop = "15px";
        info.style.textAlign = "center";
        info.style.fontWeight = "600";

        // Validation

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            info.innerText = "❌ Please fill all fields.";
            info.style.color = "#ff4d4d";

            contactForm.appendChild(info);

            return;
        }

        // Email Validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {

            info.innerText = "❌ Please enter a valid email address.";
            info.style.color = "#ff4d4d";

            contactForm.appendChild(info);

            return;
        }

        // Success

        info.innerText =
            "✅ Thank you! Your message has been sent successfully.";

        info.style.color = "#22c55e";

        contactForm.appendChild(info);

        // Reset Form

        setTimeout(() => {

            contactForm.reset();

        }, 1000);

        // Hide Message

        setTimeout(() => {

            info.remove();

        }, 4000);

    });

}
/* ==========================================
   PART-7
   LIVE CLOCK & GREETING
========================================== */

// =========================
// CREATE TOP INFO BAR
// =========================

const infoBar = document.createElement("div");

infoBar.id = "infoBar";

infoBar.style.width = "100%";
infoBar.style.background = "#2563eb";
infoBar.style.color = "#fff";
infoBar.style.padding = "10px";
infoBar.style.textAlign = "center";
infoBar.style.fontSize = "15px";
infoBar.style.fontWeight = "600";

document.body.prepend(infoBar);

// =========================
// UPDATE DATE & TIME
// =========================

function updateInfoBar() {

    const now = new Date();

    const hours = now.getHours();

    let greeting = "";

    if (hours < 12) {

        greeting = "🌅 Good Morning";

    } else if (hours < 18) {

        greeting = "☀️ Good Afternoon";

    } else {

        greeting = "🌙 Good Evening";

    }

    const date = now.toLocaleDateString("en-IN", {

        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

    const time = now.toLocaleTimeString("en-IN");

    infoBar.innerHTML = `
        ${greeting} |
        📅 ${date} |
        🕒 ${time}
    `;

}

// First Run

updateInfoBar();

// Update Every Second

setInterval(updateInfoBar, 1000);

// =========================
// WELCOME MESSAGE
// =========================

window.addEventListener("load", () => {

    console.log("Welcome to India Information Portal");

});
/* ==========================================
   PART-8
   NEWS • ANNOUNCEMENT • VISITOR COUNTER
========================================== */

// =========================
// ANNOUNCEMENT BAR
// =========================

const announcement = document.createElement("div");

announcement.id = "announcementBar";

announcement.innerHTML =
"📢 Welcome to India Information Portal | Government Services | Jobs | Education | Tourism | Health";

announcement.style.background = "#f59e0b";
announcement.style.color = "#111";
announcement.style.padding = "10px";
announcement.style.fontWeight = "600";
announcement.style.textAlign = "center";

document.body.insertBefore(announcement, document.body.firstChild);

// =========================
// VISITOR COUNTER
// =========================

let visitors = localStorage.getItem("visitorCount");

if (!visitors) {

    visitors = 1;

} else {

    visitors = Number(visitors) + 1;

}

localStorage.setItem("visitorCount", visitors);

const visitorBox = document.createElement("div");

visitorBox.innerHTML = `👥 Visitors: ${visitors}`;

visitorBox.style.position = "fixed";
visitorBox.style.left = "20px";
visitorBox.style.bottom = "20px";
visitorBox.style.padding = "12px 18px";
visitorBox.style.background = "#2563eb";
visitorBox.style.color = "#fff";
visitorBox.style.borderRadius = "12px";
visitorBox.style.fontWeight = "600";
visitorBox.style.zIndex = "999";

document.body.appendChild(visitorBox);

// =========================
// NEWS TICKER
// =========================

const news = [

"🇮🇳 Welcome to India Information Portal",

"💼 Explore Government & Private Jobs",

"🎓 Find Scholarships & Education Updates",

"🚆 Railway • Banking • Health Services",

"🏖️ Discover Tourist Places Across India"

];

let newsIndex = 0;

const newsBar = document.createElement("marquee");

newsBar.style.background = "#111827";
newsBar.style.color = "#fff";
newsBar.style.padding = "10px";

document.body.insertBefore(newsBar, announcement.nextSibling);

function updateNews(){

    newsBar.textContent = news[newsIndex];

    newsIndex++;

    if(newsIndex >= news.length){

        newsIndex = 0;

    }

}

updateNews();

setInterval(updateNews,4000);

// =========================
// WELCOME POPUP
// =========================

setTimeout(()=>{

alert("🎉 Welcome to India Information Portal!");

},1500);
/* ==========================================
   PART-9
   SETTINGS • SHORTCUTS • PREMIUM FEATURES
========================================== */

// =========================
// SETTINGS PANEL
// =========================

const settingsBtn = document.createElement("button");

settingsBtn.innerHTML = "⚙️";
settingsBtn.id = "settingsBtn";

settingsBtn.style.position = "fixed";
settingsBtn.style.left = "20px";
settingsBtn.style.bottom = "90px";
settingsBtn.style.width = "55px";
settingsBtn.style.height = "55px";
settingsBtn.style.border = "none";
settingsBtn.style.borderRadius = "50%";
settingsBtn.style.background = "#f59e0b";
settingsBtn.style.color = "#fff";
settingsBtn.style.fontSize = "22px";
settingsBtn.style.cursor = "pointer";
settingsBtn.style.zIndex = "999";

document.body.appendChild(settingsBtn);

// =========================
// SETTINGS PANEL
// =========================

const settingsPanel = document.createElement("div");

settingsPanel.innerHTML = `
<h3>⚙️ Settings</h3>
<p>Luxury Theme Enabled</p>
<p>Dark Mode Available</p>
<p>Search Enabled</p>
`;

settingsPanel.style.position = "fixed";
settingsPanel.style.left = "20px";
settingsPanel.style.bottom = "160px";
settingsPanel.style.width = "220px";
settingsPanel.style.padding = "20px";
settingsPanel.style.borderRadius = "15px";
settingsPanel.style.background = "#111827";
settingsPanel.style.color = "#fff";
settingsPanel.style.display = "none";
settingsPanel.style.zIndex = "999";

document.body.appendChild(settingsPanel);

settingsBtn.onclick = () => {

    settingsPanel.style.display =
    settingsPanel.style.display === "block"
    ? "none"
    : "block";

};

// =========================
// KEYBOARD SHORTCUTS
// =========================

document.addEventListener("keydown", (e) => {

    if (e.key === "/") {

        e.preventDefault();

        const search = document.querySelector(".search-box input");

        if (search) {

            search.focus();

        }

    }

    if (e.key === "Escape") {

        settingsPanel.style.display = "none";

    }

});

// =========================
// DOUBLE CLICK TO TOP
// =========================

document.addEventListener("dblclick", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================
// ONLINE / OFFLINE STATUS
// =========================

window.addEventListener("online", () => {

    console.log("Internet Connected");

});

window.addEventListener("offline", () => {

    alert("⚠️ Internet Connection Lost");

});
/* ==========================================
   PART-10
   FINAL INITIALIZATION & OPTIMIZATION
========================================== */

// =========================
// WEBSITE STARTUP
// =========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ India Information Portal Loaded Successfully");

});

// =========================
// AUTO UPDATE FOOTER YEAR
// =========================

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} India Information Portal. All Rights Reserved.`;

}

// =========================
// SIMPLE PAGE ANALYTICS
// =========================

const pageViews =
    Number(localStorage.getItem("pageViews") || 0) + 1;

localStorage.setItem("pageViews", pageViews);

console.log("Page Views:", pageViews);

// =========================
// DISABLE RIGHT CLICK
// =========================

document.addEventListener("contextmenu", function(e){

    e.preventDefault();

});

// =========================
// DISABLE F12 / DEV TOOLS SHORTCUTS
// =========================

document.addEventListener("keydown", function(e){

    if(
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ){

        e.preventDefault();

    }

});

// =========================
// GLOBAL ERROR HANDLER
// =========================

window.addEventListener("error", function(event){

    console.error("Error:", event.message);

});

// =========================
// CONNECTION STATUS
// =========================

window.addEventListener("online", () => {

    console.log("✅ Internet Connected");

});

window.addEventListener("offline", () => {

    console.log("❌ Internet Disconnected");

});

// =========================
// FINAL MESSAGE
// =========================

console.log(`
========================================
🇮🇳 INDIA INFORMATION PORTAL
Luxury Edition
Version 1.0
Status : Ready
========================================
`);
