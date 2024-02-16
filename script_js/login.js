//Capturando os elementos helpers
let emailHelper = document.getElementById("email_helper");
let senhaHelper = document.getElementById("senha_helper")

//Capturando os elementos de campo obrigatório
let emailSpan = document.querySelector('span[type="popup_email"]');
let senhaSpan = document.querySelector('span[type="popup_senha"]');

//Capturando os elementos de input
let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");

//Capurando elementos para ativação do botão submit
let cadastrar = document.querySelector(".submit");
let confirmarEmail = false;
let confirmarSenha = false;

//inserindo efeitos de backgroud nos campos de input
//efeito campo senha
senhaInput.addEventListener("mouseover", () => {
    senhaInput.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    senhaInput.style.backgroundColor = "rgb(255, 233, 246)";    
})

senhaInput.addEventListener("mouseout", () => {
    senhaInput.style.boxShadow = "none";   
    senhaInput.style.backgroundColor = "rgb(244, 247, 255)";
    
})

//efeito campo email
emailInput.addEventListener("mouseover", () => {
    emailInput.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    emailInput.style.backgroundColor = "rgb(255, 233, 246)";    
})

emailInput.addEventListener("mouseout", () => {
    emailInput.style.boxShadow = "none";   
    emailInput.style.backgroundColor = "rgb(244, 247, 255)";
    
})

//Função genérica para adicionar e retirar classe Popup
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

manutencaoPopup(emailInput, emailSpan);
manutencaoPopup(senhaInput, senhaSpan);

//validando campo email:
emailInput.addEventListener("change", (e) => {
    let email = e.target.value;
    if (email.includes("@") && email.includes(".com")) {
        confirmarEmail = true;
        senhaSpan.classList.remove("popup_obrigatorio");
        emailSpan.innerText = "✓";
        emailHelper.innerText = "";
        emailSpan.style.color = "#FF0096";
        emailSpan.style.fontSize = "20px";
    } else if (email.length == 0){
        emailHelper.classList.remove("visivel");
        emailSpan.innerText = "";
        confirmarEmail = false;
    }else {
        emailHelper.classList.add("visivel");
        emailHelper.innerText = "Digite um e-mail válido (deve conter @ e .com)";
        emailSpan.innerText = "";
        confirmarEmail = false;
    }
})

//validando campo senha:
senhaInput.addEventListener("change", (e) => {
    let senha = e.target.value;
    if (senha.length > 6) {
        confirmarSenha = true;
        senhaSpan.classList.remove("popup_obrigatorio");
        senhaSpan.innerText = "✓";
        senhaHelper.innerText = "";
        senhaSpan.style.color = "#FF0096";
        senhaSpan.style.fontSize = "20px";
    } else if (senha.length == 0){
        senhaHelper.classList.remove("visivel");
        senhaSpan.innerText = "";
        confirmarSenha = false;
    }else {
        senhaHelper.classList.add("visivel");
        senhaHelper.innerText = "Sua senha deve conter, no mínimo, 6 caracteres";
        senhaSpan.innerText = "";
        confirmarSenha = false;
    }
})

//Solicitando e-mail para reenvio de senha esquecida
let esqueciSenha = document.getElementById("esqueci_senha")
esqueciSenha.addEventListener("click", (e) => {
    let email = prompt("Por favor, insira seu endereço de e-mail cadastrado para reenvio da senha:");
    if (!email.includes("@") && !email.includes(".com")) {
        alert("Digite um e-mail válido (deve conter @ e .com)");
    let email = prompt("Por favor, insira seu endereço de e-mail cadastrado para reenvio da senha:");
    }
})

//Manutenção da ativação do botão submit
cadastrar.addEventListener("click", (e) => {
    if(confirmarSenha == false || confirmarEmail == false) {
        e.preventDefault();
    }
})