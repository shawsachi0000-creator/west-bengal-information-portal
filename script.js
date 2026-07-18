// ===============================
// WEST BENGAL INFORMATION PORTAL
// SCRIPT.JS - PART 1
// ===============================

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
