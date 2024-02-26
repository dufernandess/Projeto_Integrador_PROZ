let menuWeb = document.querySelector(".nav_web")
let menuHamb = document.querySelector(".menu-toggle")
let menuX = document.querySelector("#x")
let main = document.querySelector("main");
let buttonLogin = document.querySelector("#button_login");
let logo = document.querySelector(".logo");
let footer = document.querySelector("footer");
let linkAcompanhamento = document.getElementById("navegacao_2");
let linkPlanejamento = document.getElementById("navegacao_planejamento");
let linkComunidade = document.getElementById("navegacao_comunidade");
let linkDicas = document.getElementById("navegacao_dicas");
let linkApoio = document.getElementById("navegacao_apoio");

let elementoJavaScript = document.createElement("li");
elementoJavaScript.innerText = "Nova gravidez";
elementoJavaScript.id = "nova-gravidez";

let elementoPai = document.getElementById("dropdown-web");

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

let dropdownweb = document.getElementById("dropdown-web");

dropdownweb.innerHTML = `
<ul>
    <li><a href="nossa_comunidade.html">Nova gravidez</a></li>
    <li><a href="nossa_comunidade.html">Puerpério</a></li>
    <li><a href="nossa_comunidade.html">Alimentação</a></li>
    <li><a href="nossa_comunidade.html">Psicológico</a></li>
</ul>
`

