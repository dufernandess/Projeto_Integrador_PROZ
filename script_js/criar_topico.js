//Capturando os elementos
let nomeInput = document.getElementById("nome");

function foco() {
    nomeInput.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    nomeInput.style.backgroundColor = "rgb(255, 233, 246)"; 
}

//Inserindo efeito de background
nomeInput.addEventListener("focus", foco);
