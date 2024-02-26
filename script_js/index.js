let carrossel = document.querySelector("#fotoMamae");

carrossel.addEventListener("mouseover", () => {    
    carrossel.style.background = "blur(5px)";    
})

carrossel.addEventListener("mouseout", () => {
    nomeInput.style.boxShadow = "none";   
    nomeInput.style.backgroundColor = "rgb(244, 247, 255)";
    
})