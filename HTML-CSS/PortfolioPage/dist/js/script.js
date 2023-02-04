let header = document.getElementById("header");
let navbar = document.getElementById("navbar");

window.onscroll = () =>{
    if(window.pageYOffset > navbar.offsetTop){
        navbar.style.padding="1rem";
    }else {
        navbar.style.padding="1.8rem";
    }
} 

//hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//Intersection Observer

const sections = document.querySelectorAll("section");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");

observer = new IntersectionObserver(
  (entries) => {
    
    for (const entry of entries) {
      let isTrue = entry.isIntersecting;

      if (isTrue) {
        if (entry.target.id === "portfolio") { 
          item1.classList.add("activeBg");
        }
        if (entry.target.id === "about") {
          item2.classList.add("activeBg");
        }
        if (entry.target.id === "contact") {
          item3.classList.add("activeBg");
        }
      } else {
        item1.classList.remove("activeBg");
        item2.classList.remove("activeBg");
        item3.classList.remove("activeBg");
      }
    }
  }
);

sections.forEach((section) => {
  observer.observe(section);
});