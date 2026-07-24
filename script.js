"use strict";

document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Scroll To Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (!scrollTopBtn) return;

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// Search
const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// Active Navigation Link
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section[id]").forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {
            link.classList.add("active");
        }
    });

});

// Fade-in Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, section").forEach(item => {
    observer.observe(item);

// Dark Mode
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

}

// Visitor Counter
let visitors = Number(localStorage.getItem("visitors")) || 0;
visitors++;

localStorage.setItem("visitors", visitors);

const visitorBox = document.getElementById("visitorCount");

if (visitorBox) {
    visitorBox.textContent = visitors;
}
// AI Assistant (Simple Chat)

const aiForm = document.getElementById("aiForm");
const aiInput = document.getElementById("aiInput");
const aiOutput = document.getElementById("aiOutput");

if (aiForm && aiInput && aiOutput) {

    aiForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const question = aiInput.value.trim();

        if (!question) return;

        let answer = "Sorry, is question ka answer abhi available nahi hai.";

        if (question.toLowerCase().includes("india")) {
            answer = "India duniya ka sabse bada democracy hai.";
        } else if (question.toLowerCase().includes("capital")) {
            answer = "India ki capital New Delhi hai.";
        } else if (question.toLowerCase().includes("pm")) {
            answer = "Current Prime Minister ki information Live Information Hub me dekhi ja sakti hai.";
        }

        aiOutput.innerHTML = `
            <div class="user-msg"><b>You:</b> ${question}</div>
            <div class="ai-msg"><b>AI:</b> ${answer}</div>
        `;

        aiInput.value = "";
    });

}
// Live Date & Time

const dateTimeBox = document.getElementById("liveDateTime");

function updateDateTime() {

    if (!dateTimeBox) return;

    const now = new Date();

    dateTimeBox.textContent = now.toLocaleString("en-IN", {
        dateStyle: "full",
        timeStyle: "medium"
    });
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Current Year
const yearBox = document.getElementById("currentYear");

if (yearBox) {
    yearBox.textContent = new Date().getFullYear();
}
// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const message = document.getElementById("message")?.value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();
    });

}

// Newsletter Subscription

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = newsletterForm.querySelector("input[type='email']");

        if (email && email.value.trim() !== "") {
            alert("Subscription successful!");
            newsletterForm.reset();
        } else {
            alert("shawsachi0000@gmail.com.");
        }
    });

}
// FAQ Accordion

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

// Card Hover Effect

const allCards = document.querySelectorAll(".card");

allCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});

// Console Message
console.log("India Information Portal Loaded Successfully");
// Quick Action Buttons

document.querySelectorAll(".quick-action").forEach(button => {

    button.addEventListener("click", () => {

        const url = button.dataset.url;

        if (url) {
            window.open(url, "_blank");
        }

    });

});

// External Links

document.querySelectorAll("[data-link]").forEach(item => {

    item.addEventListener("click", () => {

        const link = item.dataset.link;

        if (link) {
            window.open(link, "_blank");
        }

    });

});

// Copy Text Buttons

document.querySelectorAll("[data-copy]").forEach(btn => {

    btn.addEventListener("click", async () => {

        const text = btn.dataset.copy;

        if (!text) return;

        try {
            await navigator.clipboard.writeText(text);
            alert("Copied successfully!");
        } catch {
            alert("Copy failed.");
        }
// Auto Update Footer Year
const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to India Information Portal!");
});

// Close DOMContentLoaded
});
