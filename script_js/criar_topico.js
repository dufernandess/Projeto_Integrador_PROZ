let inputTitulo = document.getElementById("titulo");
let inputDescricao = document.getElementById("descricao");
let formulario = document.querySelector("form");
let tituloHelper = document.getElementById("titulo_helper");
let descricaoHelper = document.getElementById("descricao_helper");
let tituloSpan = document.querySelector('span[type="popup_titulo"]');
let descricaoSpan = document.querySelector('span[type="popup_descricao"]');
let corretoSpanTitulo = document.querySelector('span[type="correct"]');
let corretoSpanDescricao = document.querySelector('span[type="correct2"]');

function colocarBackground() {
    this.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    this.style.backgroundColor = "rgb(255, 233, 246)"; 
}

function tirarBackground() {
    this.style.boxShadow = "none";   
    this.style.backgroundColor = "rgb(244, 247, 255)";
}

inputTitulo.addEventListener("mouseover", colocarBackground);
inputDescricao.addEventListener("mouseover", colocarBackground);

inputTitulo.addEventListener("mouseout", tirarBackground);
inputDescricao.addEventListener("mouseout", tirarBackground);

//Função genérica para adicionar e retirar classe Popup obrigatório
function manutencaoPopup(input, span) {

    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        span.classList.add("popup_obrigatorio");
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        span.classList.remove("popup_obrigatorio");
    })
}
//manutenção da classe popup obrigatório
manutencaoPopup(inputTitulo, tituloSpan);
manutencaoPopup(inputDescricao, descricaoSpan);

//Capurando elementos para ativação do botão submit
let criar = document.querySelector(".submit");
let confirmarTitulo = false;
let confirmarDescricao = false;
console.log(criar)

//validando campo titulo:
inputTitulo.addEventListener("change", (e) => {
    let titulo = e.target.value;    
    if (titulo.length > 5) {
        confirmarTitulo = true;
        tituloSpan.classList.remove("popup_obrigatorio");       
        corretoSpanTitulo.innerText = "✓";
        tituloHelper.innerText = "";
        corretoSpanTitulo.style.color = "#FF0096";
        corretoSpanTitulo.style.fontSize = "20px";
    } else if (titulo.length == 0){
        tituloHelper.innerText = "";
        confirmarTitulo = false;
        tituloSpan.innerText = "";
        corretoSpanTitulo.innerText = "";
    } else {
        confirmarTitulo = false;
        tituloHelper.innerText = "Você deve inserir, no mínimo, 5 caracteres";
        tituloSpan.innerText = "";
        corretoSpanTitulo.innerText = "";
    }
})

//validando campo textarea:
inputDescricao.addEventListener("change", (e) => {
    let descricao = e.target.value;    
    if (descricao.length > 5) {
        confirmarDescricao = true;
        descricaoSpan.classList.remove("popup_obrigatorio");       
        corretoSpanDescricao.innerText = "✓";
        descricaoHelper.innerText = "";
        corretoSpanDescricao.style.color = "#FF0096";
        corretoSpanDescricao.style.fontSize = "20px";
    } else if (titulo.length == 0){
        descricaoHelper.classList.remove("visivel");
        confirmarDescricao = false;
        descricaoSpan.innerText = "";
        corretoSpanDescricao.innerText = "";
    } else {
        confirmarDescricao = false;
        descricaoHelper.innerText = "Você deve inserir, no mínimo, 5 caracteres";
        descricaoSpan.innerText = "";
        corretoSpanDescricao.innerText = "";
    }
    criar();
})


console.log(confirmarTitulo);
console.log(confirmarDescricao);

//Manutenção da ativação do botão submit
criar.addEventListener("click", (e) => {  
    if(confirmarTitulo == false || confirmarDescricao == false) {
        e.preventDefault();
        alert("Preencha todos os campos obrigatórios corretamente.");
    }else {
        alert("Cadastro realizado com sucesso!");
    }
})

