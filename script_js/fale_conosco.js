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

