
// WEST BENGAL INFORMATION PORTAL


// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}

// ===============================
// SEARCH
// ===============================

const searchInput=document.getElementById("search");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ===============================
// WELCOME MESSAGE
// ===============================

window.onload=function(){

setTimeout(()=>{

alert("Welcome to West Bengal Information Portal 🇮🇳");

},800);

};

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="12px 15px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#0b3d91";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="18px";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// ===============================
// CARD ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.6s ease";

observer.observe(card);

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

// ===============================
// AUTO SCROLLING UPDATES
// ===============================

const updateBox=document.querySelector(".update-box");

if(updateBox){

setInterval(()=>{

const first=updateBox.firstElementChild;

updateBox.appendChild(first);

},4000);

}

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll("button,.hero-btn,.card a").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.style.position="absolute";
circle.style.width="20px";
circle.style.height="20px";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.6)";
circle.style.left=e.offsetX+"px";
circle.style.top=e.offsetY+"px";
circle.style.transform="translate(-50%,-50%)";
circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ===============================
// CURRENT YEAR
// ===============================

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML=`© ${new Date().getFullYear()} West Bengal Information Portal. All Rights Reserved.`;

}

console.log("West Bengal Information Portal Loaded Successfully.");


...



...

console.log("West Bengal Information Portal Loaded Successfully.");

// ===============================
// IMAGE SLIDER
// ===============================

let slideIndex = 0;

showSlides();

function showSlides() {

let slides = document.getElementsByClassName("slides");

for (let i = 0; i < slides.length; i++) {

slides[i].style.display = "none";

}

slideIndex++;

if (slideIndex > slides.length) {

slideIndex = 1;

}

slides[slideIndex - 1].style.display = "block";

setTimeout(showSlides, 3000);

}
// WEATHER DEMO

function getWeather(){

document.getElementById("city").innerHTML="Kolkata";

document.getElementById("temp").innerHTML="31°C";

document.getElementById("condition").innerHTML="Partly Cloudy";

}

getWeather();
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".navbar");

menu.onclick=function(){
    nav.classList.toggle("active");
};
// Force show all cards
window.addEventListener("load", function () {

    document.querySelectorAll(".card").forEach(function(card){
        card.style.opacity = "1";
        card.style.visibility = "visible";
        card.style.display = "block";
        card.style.transform = "none";
    });

    document.querySelectorAll(".card h3, .card p, .card a").forEach(function(el){
        el.style.opacity = "1";
        el.style.visibility = "visible";
        el.style.color = "#000";
    });

});
