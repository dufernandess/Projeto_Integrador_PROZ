//Capturando os elementos helpers
let emailHelper = document.getElementById("email_helper");
let senhaHelper = document.getElementById("senha_helper")

//Capturando os elementos de campo obrigatório
let emailSpan = document.querySelector('span[type="popup_email"]');
let senhaSpan = document.querySelector('span[type="popup_senha"]');

//Capturando os elementos de input
let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");

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
        senhaSpan.classList.remove("popup_obrigatorio")
        emailSpan.innerHTML = "✓";
        emailHelper.innerHTML = "";
        emailSpan.style.color = "#FF0096";
        emailSpan.style.fontSize = "20px";
    } else if (email.length == 0){
        emailHelper.classList.remove("visivel");
        emailSpan.innerHTML = "";
    }else {
        emailHelper.classList.add("visivel");
        emailHelper.innerHTML = "Digite um e-mail válido (deve conter @ e .com)";
        emailSpan.innerHTML = "";
    }
})

//validando campo senha:
senhaInput.addEventListener("change", (e) => {
    let senha = e.target.value;
    if (senha.length > 6) {
        senhaSpan.classList.remove("popup_obrigatorio")
        senhaSpan.innerHTML = "✓";
        senhaHelper.innerHTML = "";
        senhaSpan.style.color = "#FF0096";
        senhaSpan.style.fontSize = "20px";
    } else if (senha.length == 0){
        senhaHelper.classList.remove("visivel");
        senhaSpan.innerHTML = "";
    }else {
        senhaHelper.classList.add("visivel");
        senhaHelper.innerHTML = "Sua senha deve conter, no mínimo, 6 caracteres";
        senhaSpan.innerHTML = "";
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
