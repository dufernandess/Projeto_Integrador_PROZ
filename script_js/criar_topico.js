let inputNome = document.getElementById("titulo");
let inputDescricao = document.getElementById("descricao");
let formulario = document.querySelector("form");

inputNome.addEventListener("focus", ()=> {
    inputNome.style.backgroundColor = "lightgreen"
});

inputDescricao.addEventListener("focus", ()=> {
    inputDescricao.style.backgroundColor = "lightgreen"
});

//inserindo efeitos de backgroud nos campos de input
//efeito campo nome
inputNome.addEventListener("mouseover", () => {
    inputNome.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    inputNome.style.backgroundColor = "rgb(255, 233, 246)";    
})

inputNome.addEventListener("mouseout", () => {
    inputNome.style.boxShadow = "none";   
    inputNome.style.backgroundColor = "rgb(244, 247, 255)";
    
})

inputDescricao.addEventListener("mouseover", () => {
    inputDescricao.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    inputDescricao.style.backgroundColor = "rgb(255, 233, 246)";    
})

inputDescricao.addEventListener("mouseout", () => {
    inputDescricao.style.boxShadow = "none";   
    inputDescricao.style.backgroundColor = "rgb(244, 247, 255)";
    
})