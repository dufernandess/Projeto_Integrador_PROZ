//Capturando os elementos helpers
let emailHelper = document.getElementById("email_helper");
let nomeHelper = document.getElementById("nome_helper");
let textareaHelper = document.getElementById("textarea_helper");

//Capturando os elementos de campo obrigatório
let emailSpan = document.querySelector('span[type="popup_email"]');
let nomeSpan = document.querySelector('span[type="popup_nome"]');
let textareaSpan = document.querySelector('span[type="popup_textarea"]');

//Capturando os elementos de input
let emailInput = document.getElementById("email");
let nomeInput = document.getElementById("nome");
let textareaInput = document.getElementById("necessidade");

//Função genérica para adicionar e retirar classe Popup
function manutencaoPopup(input, span) {

    if(input == textareaInput) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        span.classList.add("popup_obrigatorio_textarea");
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        span.classList.remove("popup_obrigatorio_textarea");
    })

    }else {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        span.classList.add("popup_obrigatorio");
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        span.classList.remove("popup_obrigatorio");
    })
}
}

manutencaoPopup(nomeInput, nomeSpan);
manutencaoPopup(emailInput, emailSpan);
manutencaoPopup(textareaInput, textareaSpan);

//validando campo nome:
nomeInput.addEventListener("change", (e) => {
    let nome = e.target.value;
    if (nome.length > 5) {
        nomeSpan.innerHTML = "✓";
        nomeSpan.style.color = "#FF0096";
        nomeSpan.style.fontSize = "20px";
    } else if (nome.length == 0){
        nomeHelper.classList.remove("visivel");
        nomeSpan.innerHTML = "";
    } else {
        nomeHelper.classList.add("visivel");
        nomeHelper.innerHTML = "Você deve inserir, no mínimo, 5 caracteres";
        nomeSpan.innerHTML = "";
    }
})

//validando campo email:
emailInput.addEventListener("change", (e) => {
    let email = e.target.value;
    if (email.includes("@") && email.includes(".com")) {
        emailSpan.innerHTML = "✓";
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

//validando campo textarea:
textareaInput.addEventListener("change", (e) => {
    let textarea = e.target.value;
    if (textarea.length > 15) {
        textareaSpan.innerHTML = "✓";
        textareaSpan.style.color = "#FF0096";
        textareaSpan.style.fontSize = "20px";
        textareaSpan.style.marginLeft = "25px";
    } else if (textarea.length == 0){
        textareaHelper.classList.remove("visivel");
        textareaSpan.innerHTML = "";
    } else {
        textareaHelper.classList.add("visivel");
        textareaHelper.innerHTML = "Você deve inserir, no mínimo, 15 caracteres";
        textareaSpan.innerHTML = "";
    }
})

