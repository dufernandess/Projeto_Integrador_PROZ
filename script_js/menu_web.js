let menuWeb = document.querySelector(".nav_web")
let eMenuWeb = document.querySelector("#elemento")
let menuHamb = document.querySelector(".menu-toggle")
let menuX = document.querySelector("#x")
let main = document.querySelector("main");
let buttonLogin = document.querySelector("#button_login");
let logo = document.querySelector(".logo");
let footer = document.querySelector("footer");

menuHamb.addEventListener("click", () => {    
    menuWeb.style.marginLeft = "0vw";
    main.style.filter = "blur(2px)";    
    footer.style.filter = "blur(2px)";
    buttonLogin.style.filter = "blur(2px)";
    logo.style.filter = "blur(2px)";
    
})

menuX.addEventListener("click", () => {    
    menuWeb.style.marginLeft = "-100vw";
    main.style.filter = "blur(0px)";    
    footer.style.filter = "blur(0px)";
    buttonLogin.style.filter = "blur(0px)";
    logo.style.filter = "blur(0px)";
})

eMenuWeb.addEventListener('mouseover', () => {
    eMenuWeb.style.backgroundColor = 'blue';
})

