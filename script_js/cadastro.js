//Capturando os elementos helpers
let emailHelper = document.getElementById("email_helper");
let senhaHelper = document.getElementById("senha_helper");
let senha2Helper = document.getElementById("senha_2_helper");
let nomeHelper = document.getElementById("nome_helper");

//Capturando os elementos de campo obrigatório
let emailSpan = document.querySelector('span[type="popup_email"]');
let senhaSpan = document.querySelector('span[type="popup_senha"]');
let senha2Span = document.querySelector('span[type="popup_senha_2"]');
let nomeSpan = document.querySelector('span[type="popup_nome"]');

//Capturando os elementos de input
let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");
let senha2Input = document.getElementById("isenha");
let nomeInput = document.getElementById("nome");

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
manutencaoPopup(senha2Input, senha2Span);
manutencaoPopup(nomeInput, nomeSpan);

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
    if (senha.length >= 6) {
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

senha2Input.addEventListener("change", (e) => {
let valorSenha = senhaInput.value;
let valorSenha2 = e.target.value;
    if (valorSenha === valorSenha2){
        senha2Span.classList.remove("popup_obrigatorio")
        senha2Span.innerHTML = "✓";
        senha2Helper.innerHTML = "";
        senha2Span.style.color = "#FF0096";
        senha2Span.style.fontSize = "20px";
    } else if (valorSenha2.length == 0){
        senha2Helper.classList.remove("visivel");
        senha2Span.innerHTML = "";
    }else {
        senha2Helper.classList.add("visivel");
        senha2Helper.innerHTML = "As senhas devem ser idênticas";
        senha2Span.innerHTML = "";
    }
})

//Cálculo de DPP
let DPP = document.getElementById("calculo_dpp");
let dataDPP = document.getElementById("DPP");

DPP.addEventListener("click", (e) => {
    let data = prompt("Insira a data da sua última menstruação: (dia/mês/ano - dd/mm/aaaa)");
    
    //dividindo string em dia, mês e ano
    let parteData = data.split("/");
    
    //convertendo as partes da data para numeros inteiros
    let dia = parseInt(parteData[0]);
    let mes = parseInt(parteData[1]);
    let ano = parseInt(parteData[2]);
    
    //convertendo objeto Date em string para impressão
    let base = new Date(ano, mes, dia);
    base.setDate(base.getDate() + 280);
    let diaCalculado = base.getDate();
    if(diaCalculado < 10) {
        diaCalculado = "0" + diaCalculado
    }
    let mesCalculado = base.getMonth();
    if(mesCalculado < 10) {
        mesCalculado = "0" + mesCalculado
    }
    let anoCalculado = base.getFullYear();
    
    let dataComp = "A sua data prevista do parto é: " + diaCalculado + "/" + mesCalculado + "/" + anoCalculado + " " + "(Lembrando que essa data é uma estimativa. Sempre é recomendado consultar um profissional de saúde para uma avaliação precisa da data prevista do parto.)";
    
    alert(dataComp);    
})