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

//Capturando dos campos para sinalização do correct
let corretoSpanNome = document.querySelector('span[type="correct"]');
let corretoSpanEmail = document.querySelector('span[type="correct2"]');
let corretoSpanSenha = document.querySelector('span[type="correct3"]');
let corretoSpanConfSenha = document.querySelector('span[type="correct4"]');

//Capturando os elementos de input
let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");
let senha2Input = document.getElementById("isenha");
let nomeInput = document.getElementById("nome");

//Capurando elementos para ativação do botão submit
let cadastrar = document.querySelector(".submit");
let confirmarNome = false;
let confirmarEmail = false;
let confirmarSenha = false;
let confirmarSenha2 = false;

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

//efeito campo senha
senhaInput.addEventListener("mouseover", () => {
    senhaInput.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    senhaInput.style.backgroundColor = "rgb(255, 233, 246)";    
})

senhaInput.addEventListener("mouseout", () => {
    senhaInput.style.boxShadow = "none";   
    senhaInput.style.backgroundColor = "rgb(244, 247, 255)";
    
})

//efeito campo confirmar senha
senha2Input.addEventListener("mouseover", () => {
    senha2Input.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
    senha2Input.style.backgroundColor = "rgb(255, 233, 246)";    
})

senha2Input.addEventListener("mouseout", () => {
    senha2Input.style.boxShadow = "none";   
    senha2Input.style.backgroundColor = "rgb(244, 247, 255)";
    
})


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
manutencaoPopup(emailInput, emailSpan);
manutencaoPopup(senhaInput, senhaSpan);
manutencaoPopup(senha2Input, senha2Span);
manutencaoPopup(nomeInput, nomeSpan);


//validando campo nome:
nomeInput.addEventListener("change", (e) => {
    let nome = e.target.value;    
    if (nome.length > 5) {
        confirmarNome = true;
        nomeSpan.classList.remove("popup_obrigatorio");       
        corretoSpanNome.innerText = "✓";
        nomeHelper.innerText = "";
        corretoSpanNome.style.color = "#FF0096";
        corretoSpanNome.style.fontSize = "20px";
    } else if (nome.length == 0){
        nomeHelper.classList.remove("visivel");
        confirmarNome = false;
        corretoSpanNome.innerText = "";
        nomeSpan.innerText = "";
    } else {
        nomeHelper.classList.add("visivel");
        confirmarNome = false;
        nomeHelper.innerText = "Você deve inserir, no mínimo, 5 caracteres";
        nomeSpan.innerText = "";
        corretoSpanNome.innerText = "";
    }
})

//validando campo email:
emailInput.addEventListener("change", (e) => { 
    let email = e.target.value;     
    if (email.includes("@") && email.includes(".com")) {
        confirmarEmail = true;
        senhaSpan.classList.remove("popup_obrigatorio");
        corretoSpanEmail.innerText = "✓";
        emailHelper.innerText = "";
        corretoSpanEmail.style.color = "#FF0096";
        corretoSpanEmail.style.fontSize = "20px";
    } else if (email.length == 0){
        emailHelper.classList.remove("visivel");
        emailSpan.innerText = "";
        corretoSpanEmail.innerText = "";
        confirmarEmail = false;
    }else {
        emailHelper.classList.add("visivel");
        emailHelper.innerText = "Digite um e-mail válido (deve conter @ e .com)";
        corretoSpanEmail.innerText = "";
        emailSpan.innerText = "";
        confirmarEmail = false;
    }
})

//validando campo senha:
senhaInput.addEventListener("change", (e) => {
    let senha = e.target.value;    
    if (senha.length >= 6) {
        senhaSpan.classList.remove("popup_obrigatorio");
        confirmarSenha = true;
        corretoSpanSenha.innerText = "✓";
        senhaHelper.innerText = "";
        corretoSpanSenha.style.color = "#FF0096";
        corretoSpanSenha.style.fontSize = "20px";
    } else if (senha.length == 0){
        senhaHelper.classList.remove("visivel");
        senhaSpan.innerText = "";
        corretoSpanSenha.innerText = "";
        confirmarSenha = false;
    }else {
        senhaHelper.classList.add("visivel");
        senhaHelper.innerText = "Sua senha deve conter, no mínimo, 6 caracteres";
        senhaSpan.innerText = "";
        corretoSpanSenha.innerText = "";
        confirmarSenha = false;
    }
})
//validando campo de confirmar senha:
senha2Input.addEventListener("change", (e) => {
let valorSenha = senhaInput.value;
let valorSenha2 = e.target.value;
    if (valorSenha === valorSenha2){
        senha2Span.classList.remove("popup_obrigatorio");
        confirmarSenha2 = true;
        corretoSpanConfSenha.innerText = "✓";
        senha2Helper.innerText = "";
        corretoSpanConfSenha.style.color = "#FF0096";
        corretoSpanConfSenha.style.fontSize = "20px";
    } else if (valorSenha2.length == 0){
        senha2Helper.classList.remove("visivel");
        senha2Span.innerText = "";
        corretoSpanConfSenha.innerText = "";
        confirmarSenha2 = false;
    }else {
        senha2Helper.classList.add("visivel");
        senha2Helper.innerText = "As senhas devem ser idênticas";
        senha2Span.innerText = "";
        corretoSpanConfSenha.innerText = "";
        confirmarSenha2 = false;
    }
    cadastrar();
})

//capturanto elementos utilizados para o formulário adicional que auxilia o cálculo de DPP
let dpp = document.getElementById("calculo_dpp");
let sectionForm = document.querySelector(".divisao_form");
let formDPP = document.querySelector(".formulario_dpp"); 
let dppFinal = document.getElementById("DPP_3");
let dppPrincipal = document.getElementById("DPP");

//Abrindo o assistente de cálculo de DPP
dpp.addEventListener("click", (e) => {
    e.preventDefault(); 
    sectionForm.style.justifyContent = "space-between";
    formDPP.style.display = "block";
    formDPP.scrollIntoView();     
});

//realizando o calculo de DPP
let calcular = document.querySelector(".button_calcular");
let resultadoDPP = document.querySelector(".resultado_dpp");

calcular.addEventListener("click", (e) => {
e.preventDefault();

let data = document.querySelector("#DPP_2").value

if(data == "" || data == null) {
    alert("Você deve preencher a data da sua última menstruação!")
} else{

//dividindo string em dia, mês e ano
let parteData = data.split("-");
    
//convertendo as partes da data para numeros inteiros
let dia = parseInt(parteData[2]);
let mes = parseInt(parteData[1]);
let ano = parseInt(parteData[0]);

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

let dataComp = anoCalculado + "-" + mesCalculado + "-" + diaCalculado 

dppFinal.value = dataComp;
resultadoDPP.style.display = "block";
dppPrincipal.value = dataComp;
}
})

//Manutenção da ativação do botão submit
cadastrar.addEventListener("click", (e) => {
    let checkbox = document.querySelector("#termo_ok")    
    if(confirmarSenha2 == false || confirmarSenha == false || confirmarEmail == false || confirmarNome == false || checkbox.checked == false) {
        e.preventDefault();
        alert("Preencha todos os campos obrigatórios corretamente e esteja de acordo com a nossa Política de Privacidade e Termos de Uso");
    }else {
        alert("Cadastro realizado com sucesso!");
    }
})
    



