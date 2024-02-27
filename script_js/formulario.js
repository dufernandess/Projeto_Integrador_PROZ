//Capturando os elementos helpers
let emailHelper = document.getElementById("email_helper");
let nomeHelper = document.getElementById("nome_helper");
let textareaHelper = document.getElementById("textarea_helper");

//Capturando os elementos de campo obrigatório
let emailSpan = document.querySelector('span[type="popup_email"]');
let nomeSpan = document.querySelector('span[type="popup_nome"]');
let textareaSpan = document.querySelector('span[type="popup_textarea"]');

//Capturando dos campos para sinalização do correct
let corretoSpanNome = document.querySelector('span[type="correct"]');
let corretoSpanEmail = document.querySelector('span[type="correct2"]');

//Capturando os elementos de input
let emailInput = document.getElementById("email");
let nomeInput = document.getElementById("nome");
let textareaInput = document.getElementById("necessidade");

//Capurando elementos para ativação do botão submit
let cadastrar = document.querySelector(".submit");
let confirmarEmail = false;
let confirmarSenha = false;
let confirmarTextarea = false;


//inserindo efeitos de backgroud nos campos de input
//efeito campo nome
nomeInput.addEventListener("mouseover", () => {
    nomeInput.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    nomeInput.style.backgroundColor = "rgb(255, 233, 246)";    
})

nomeInput.addEventListener("mouseout", () => {
    nomeInput.style.boxShadow = "none";   
    nomeInput.style.backgroundColor = "rgb(244, 247, 255)";
    
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

//efeito campo textarea
textareaInput.addEventListener("mouseover", () => {
    textareaInput.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    textareaInput.style.backgroundColor = "rgb(255, 233, 246)";    
})

textareaInput.addEventListener("mouseout", () => {
    textareaInput.style.boxShadow = "none";   
    textareaInput.style.backgroundColor = "white";
    
})

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
        confirmarNome = true;
        corretoSpanNome.innerText = "✓";
        nomeHelper.innerText = "";
        corretoSpanNome.style.color = "#FF0096";
        corretoSpanNome.style.fontSize = "20px";
    } else if (nome.length == 0){
        nomeHelper.classList.remove("visivel");
        corretoSpanNome.innerText = "";
        confirmarNome = false;
    } else {
        nomeHelper.classList.add("visivel");
        nomeHelper.innerText = "Você deve inserir, no mínimo, 5 caracteres";
        corretoSpanNome.innerText = "";
        confirmarNome = false;
    }
})

//validando campo email:
emailInput.addEventListener("change", (e) => {
    let email = e.target.value;
    if (email.includes("@") && email.includes(".com")) {
        confirmarEmail = true;
        corretoSpanEmail.innerText = "✓";
        emailHelper.innerText = "";
        corretoSpanEmail.style.color = "#FF0096";
        corretoSpanEmail.style.fontSize = "20px";
    } else if (email.length == 0){
        emailHelper.classList.remove("visivel");
        corretoSpanEmail.innerText = "";
        confirmarEmail = false;
    }else {
        emailHelper.classList.add("visivel");
        emailHelper.innerText = "Digite um e-mail válido (deve conter @ e .com)";
        corretoSpanEmail.innerText = "";
        confirmarEmail = false;
    }
})

//validando campo textarea:
textareaInput.addEventListener("change", (e) => {
    let textarea = e.target.value;
    if (textarea.length > 15) {
        confirmarTextarea = true;
        textareaSpan.innerText = "✓";
        textareaHelper.innerText = "";
        textareaSpan.style.color = "#FF0096";
        textareaSpan.style.fontSize = "20px";
        textareaSpan.style.marginLeft = "25px";
    } else if (textarea.length == 0){
        textareaHelper.classList.remove("visivel");
        textareaSpan.innerText = "";
        confirmarTextarea = false;
    } else {
        textareaHelper.classList.add("visivel");
        textareaHelper.innerText = "Você deve inserir, no mínimo, 15 caracteres";
        textareaSpan.innerText = "";
        confirmarTextarea = false;
    }
})

//Manutenção da ativação do botão submit
cadastrar.addEventListener("click", (e) => {
    if(confirmarEmail == false || confirmarNome == false || confirmarTextarea == false) {
        e.preventDefault();
        alert("Preencha todos os campos obrigatórios corretamente!");
    }else {
        alert("Formulário enviado com sucesso!");
    }
})
