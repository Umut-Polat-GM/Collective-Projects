let header = document.getElementById("header");
let navbar = document.getElementById("navbar");

window.onscroll = () =>{
    if(window.pageYOffset > navbar.offsetTop){
        navbar.style.padding="1.4rem";
    }else {
        navbar.style.padding="2.2rem";
    }
} 