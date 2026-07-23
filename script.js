/* ==========================================
   INDIA INFORMATION PORTAL
   script.js
   PART-1
========================================== */


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
/* =========================
   PART-11 : AI Chat Toggle
========================= */

const aiButton = document.querySelector(".ai-chat-button");
const aiChatBox = document.querySelector(".ai-chat-box");

if (aiButton && aiChatBox) {

    aiButton.addEventListener("click", () => {

        if (aiChatBox.style.display === "block") {
            aiChatBox.style.display = "none";
        } else {
            aiChatBox.style.display = "block";
        }

    });

}

/* =========================
   Welcome Message
========================= */

window.addEventListener("load", () => {
    console.log("India Information Portal Version 2.0 Loaded Successfully");
});
/* =========================
   PART-12 : Dark Mode & Smooth Scroll
========================= */

// Dark Mode Toggle

const darkModeBtn = document.querySelector(".dark-mode-btn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "darkMode",
            document.body.classList.contains("dark-mode")
        );

    });

}

// Load Saved Theme

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark-mode");

}

// Smooth Scroll for Navigation Links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
/* =========================
   PART-13 : Notifications, Search & Card Animation
========================= */

// Welcome Notification

setTimeout(() => {

    const message = document.createElement("div");

    message.className = "notification";

    message.innerText = "🇮🇳 Welcome to India Information Portal";

    document.body.appendChild(message);

    setTimeout(() => {

        message.remove();

    }, 4000);

}, 1500);

// Search Filter

const searchInput = document.querySelector("#searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value) ? "block" : "none";

        });

    });

}

// Card Animation on Scroll

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));
/* =========================
   PART-14 : AI Chat, Voice Search & Text-to-Speech
========================= */

// AI Chat (Simple Demo)

const aiInput = document.querySelector(".ai-footer input");
const aiSend = document.querySelector(".ai-footer button");
const aiBody = document.querySelector(".ai-body");

if (aiInput && aiSend && aiBody) {

    aiSend.addEventListener("click", sendMessage);

    aiInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {

        const text = aiInput.value.trim();

        if (!text) return;

        aiBody.innerHTML += `
            <p><strong>You:</strong> ${text}</p>
        `;

        setTimeout(() => {

            aiBody.innerHTML += `
                <p><strong>AI:</strong> Thanks! AI integration will be added soon.</p>
            `;

            aiBody.scrollTop = aiBody.scrollHeight;

        }, 600);

        aiInput.value = "";

    }

}

// Voice Search

if ("webkitSpeechRecognition" in window) {

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-IN";

    const voiceBtn = document.querySelector(".fa-microphone");

    if (voiceBtn) {

        voiceBtn.addEventListener("click", () => {

            recognition.start();

        });

    }

    recognition.onresult = function(event) {

        if (aiInput) {
            aiInput.value = event.results[0][0].transcript;
        }

    };

}

// Text To Speech

function speakText(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-IN";

    window.speechSynthesis.speak(speech);

}

const speaker = document.querySelector(".fa-volume-high");

if (speaker) {

    speaker.addEventListener("click", () => {

        speakText("Welcome to India Information Portal.");

    });

}
/* =========================
   PART-15 : USER FEATURES
========================= */

// Notification Button

const notificationBtn = document.querySelector(".fa-bell");

if (notificationBtn) {

    notificationBtn.addEventListener("click", () => {

        alert("🔔 You have no new notifications.");

    });

}

// Bookmark Button

document.querySelectorAll(".fa-bookmark").forEach(bookmark => {

    bookmark.addEventListener("click", () => {

        alert("❤️ Page added to bookmarks.");

    });

});

// Login Demo

document.querySelectorAll("button").forEach(button => {

    if (button.textContent.trim() === "Login") {

        button.addEventListener("click", () => {

            alert("👤 Login feature will be connected soon.");

        });

    }

});

// Download Buttons

document.querySelectorAll("button").forEach(button => {

    if (
        button.textContent.includes("Download") ||
        button.textContent.includes("Generate CV")
    ) {

        button.addEventListener("click", () => {

            alert("📄 Download will start after backend integration.");

        });

    }

});

// PWA Install (Basic)

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    deferredPrompt = e;

});

const installBtn = [...document.querySelectorAll("button")].find(btn =>
    btn.textContent.trim() === "Install"
);

if (installBtn) {

    installBtn.addEventListener("click", async () => {

        if (!deferredPrompt) {

            alert("App installation is not available right now.");

            return;

        }

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;

        deferredPrompt = null;

    });

}

/* =========================
   PART-16 : ADVANCED FEATURES
========================= */

// Scroll Progress Bar

const progressBar = document.createElement("div");
progressBar.id = "scroll-progress";

progressBar.style.cssText = `
position:fixed;
top:0;
left:0;
height:4px;
width:0%;
background:#0d6efd;
z-index:99999;
`;

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

// Language Switcher (Demo)

const languageBtn = document.querySelector(".fa-language");

if (languageBtn) {

    languageBtn.addEventListener("click", () => {

        alert("🌐 Hindi, English and Bengali support will be available soon.");

    });

}

// Loading Animation

window.addEventListener("load", () => {

    document.body.classList.remove("loading");

});

// Advanced Search

const searchBox = document.querySelector("#searchInput");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const keyword = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(keyword)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// Keyboard Shortcut (Ctrl + K)

document.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.key.toLowerCase()==="k"){

        e.preventDefault();

        if(searchBox){

            searchBox.focus();

        }

    }

});
/* =========================
   PART-17 : THEME, AI & SETTINGS
========================= */

// Save Theme Automatically

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Save Theme Whenever It Changes

function saveTheme() {

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("dark-mode-btn")) {
        setTimeout(saveTheme, 100);
    }

});

// AI Auto Reply (Demo)

const aiReplies = [
    "Hello! How can I help you?",
    "Please visit the Government Services section.",
    "You can search jobs from the Jobs page.",
    "Thank you for using India Information Portal.",
    "Have a great day!"
];

function getAIReply() {
    return aiReplies[Math.floor(Math.random() * aiReplies.length)];
}

if (typeof aiBody !== "undefined" && aiBody) {

    aiSend?.addEventListener("click", () => {

        setTimeout(() => {

            aiBody.innerHTML += `
                <p><strong>AI:</strong> ${getAIReply()}</p>
            `;

            aiBody.scrollTop = aiBody.scrollHeight;

        }, 700);

    });

}

// Save User Name

const profileName = document.querySelector('input[placeholder="Full Name"]');

if (profileName) {

    profileName.value = localStorage.getItem("userName") || "";

    profileName.addEventListener("input", () => {

        localStorage.setItem("userName", profileName.value);

    });

}

// Welcome User

window.addEventListener("load", () => {

    const name = localStorage.getItem("userName");

    if (name) {
        console.log("Welcome back, " + name + "!");
    }

});
/* =========================
   PART-18 : TOAST, VISITOR, SHARE & RATING
========================= */

// Toast Notification

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast-message";

    toast.innerText = message;

    toast.style.cssText = `
        position:fixed;
        bottom:20px;
        right:20px;
        background:#0d6efd;
        color:#fff;
        padding:15px 20px;
        border-radius:10px;
        z-index:99999;
        box-shadow:0 10px 25px rgba(0,0,0,.2);
    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    },3000);

}

// Visitor Counter

let visitors = Number(localStorage.getItem("visitorCount")) || 0;

visitors++;

localStorage.setItem("visitorCount", visitors);

console.log("Visitor Count:", visitors);

// Share Website

function shareWebsite(){

    if(navigator.share){

        navigator.share({
            title:"India Information Portal",
            text:"Check out this awesome India Information Portal!",
            url:window.location.href
        });

    }else{

        showToast("Sharing is not supported on this browser.");

    }

}

// Share Button

document.querySelectorAll("button").forEach(btn=>{

    if(btn.textContent.trim()==="Share"){

        btn.addEventListener("click",shareWebsite);

    }

});

// Like Button

document.querySelectorAll("button").forEach(btn=>{

    if(btn.textContent.trim()==="Like"){

        btn.addEventListener("click",()=>{

            showToast("❤️ Thank you for liking!");

        });

    }

});

// Rating Demo

document.querySelectorAll(".rating-star").forEach(star=>{

    star.addEventListener("click",()=>{

        const value=star.dataset.rating;

        localStorage.setItem("websiteRating",value);

        showToast("⭐ Thanks for rating us "+value+"/5");

    });

});

// Auto Save Settings

window.addEventListener("beforeunload",()=>{

    localStorage.setItem("lastVisit",new Date().toLocaleString());

});
/* =========================
   PART-19 : AUTO FEATURES
========================= */

// Auto Dark Mode (Based on System Theme)

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
}

// Weather Placeholder

function loadWeather() {

    console.log("Weather API will be connected here.");

}

loadWeather();

// News Placeholder

function loadNews() {

    console.log("News API will be connected here.");

}

loadNews();

// AI Search (Demo)

const aiSearch = document.querySelector("#searchInput");

if (aiSearch) {

    aiSearch.addEventListener("change", () => {

        console.log("Searching:", aiSearch.value);

    });

}

// PWA Online / Offline Status

window.addEventListener("online", () => {

    showToast("🟢 Internet Connected");

});

window.addEventListener("offline", () => {

    showToast("🔴 Internet Disconnected");

});

// Auto Save Scroll Position

window.addEventListener("beforeunload", () => {

    localStorage.setItem("scrollPosition", window.scrollY);

});

window.addEventListener("load", () => {

    const saved = localStorage.getItem("scrollPosition");

    if (saved) {

        window.scrollTo(0, Number(saved));

    }

});

// Back to Top Button

const topBtn = document.querySelector(".scroll-top");

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
/* =========================
   PART-20 : FINAL INITIALIZATION
========================= */

// Safe Initialization

document.addEventListener("DOMContentLoaded", () => {

    console.log("🇮🇳 India Information Portal v2.0 Started");

    showToast("✅ Website Loaded Successfully");

});

// Global Error Handler

window.addEventListener("error", (event) => {

    console.error("Error:", event.message);

});

// Lazy Loading Images

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});

// Network Status

function updateNetworkStatus() {

    if (navigator.onLine) {

        console.log("🟢 Online");

    } else {

        console.log("🔴 Offline");

    }

}

window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

updateNetworkStatus();

// Performance Timer

window.addEventListener("load", () => {

    const loadTime = performance.now().toFixed(0);

    console.log("⚡ Page Loaded in " + loadTime + " ms");

});

// Footer Year

const footerYear = document.querySelector(".current-year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

// Keyboard Shortcut (Alt + H)

document.addEventListener("keydown", (e) => {

    if (e.altKey && e.key.toLowerCase() === "h") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

// Final Message

console.log("🚀 India Information Portal Version 2.0 Ready");
