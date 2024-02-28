

let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputNecessidade = document.getElementById("necessidade")
let formulario = document.querySelector("form");
let nomeHelper = document.getElementById("nome_helper");
let emailHelper = document.getElementById("email_helper");
let necessidadeHelper = document.getElementById("necessidade_helper");
let nomeSpan = document.querySelector('span[type="popup_nome"]');
let emailSpan = document.querySelector('span[type="popup_email"]');
let necessidadeSpan = document.querySelector('span[type="popup_necessidade"]');
let corretoSpanNome = document.querySelector('span[type="correct"]');
let corretoSpanEmail = document.querySelector('span[type="correct2"]');
let corretoSpanNecessidade = document.querySelector('span[type="correct3"]');

//Capurando elementos para ativação do botão submit
let enviar = document.querySelector(".submit");
let confirmarNome = false;
let confirmarEmail = false;
let confirmarNecessidade = false;
console.log(enviar)

inputNome.addEventListener("mouseover", colocarBackground);
inputEmail.addEventListener("mouseover", colocarBackground);
inputNecessidade.addEventListener("mouseover", colocarBackground);

inputNome.addEventListener("mouseout", tirarBackground);
inputEmail.addEventListener("mouseout", tirarBackground);
inputNecessidade.addEventListener("mouseout", tirarBackgroundNecessidade);

function colocarBackground() {
  this.style.boxShadow = "0 0 15px 5px rgba(255, 0, 150, 0.2)";   
  this.style.backgroundColor = "rgb(255, 233, 246)"; 
}

function tirarBackground() {
  this.style.boxShadow = "none";   
  this.style.backgroundColor = "rgb(253, 242, 249)";
}

function tirarBackgroundNecessidade() {
  this.style.boxShadow = "none";   
  this.style.backgroundColor = "white";
}
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
manutencaoPopup(inputNome, nomeSpan);
manutencaoPopup(inputEmail, emailSpan);
manutencaoPopup(inputNecessidade, necessidadeSpan);

//validando campo nome:
inputNome.addEventListener("change", (e) => {
  let nome = e.target.value;    
  if (nome.length > 5) {
      confirmarNome = true;
      nomeSpan.classList.remove("popup_obrigatorio");       
      corretoSpanNome.innerText = "✓";
      nomeHelper.innerText = "";
      corretoSpanNome.style.color = "#FF0096";
      corretoSpanNome.style.fontSize = "20px";
  } else if (nome.length == 0){
      nomeHelper.innerText = "";
      confirmarNome = false;
      nomeSpan.innerText = "";
      corretoSpanNome.innerText = "";
  } else {
      confirmarNome = false;
      nomeHelper.innerText = "Você deve inserir, no mínimo, 5 caracteres";
      nomeSpan.innerText = "";
      corretoSpanNome.innerText = "";
  }
})

//validando campo email:
inputEmail.addEventListener("change", (e) => { 
  let email = e.target.value;     
  if (email.includes("@") && email.includes(".com")) {
      confirmarEmail = true;
      emailSpan.classList.remove("popup_obrigatorio");
      corretoSpanEmail.innerText = "✓";
      emailHelper.innerText = "";
      corretoSpanEmail.style.color = "#FF0096";
      corretoSpanEmail.style.fontSize = "20px";
  } else if (email.length == 0){
    emailHelper.innerText = "";
    confirmarNome = false;
    emailSpan.innerText = "";
    corretoSpanEmail.innerText = "";
  }else {
    confirmarEmail = false;
    emailHelper.innerText = "Digite um e-mail válido (deve conter @ e .com)";
    emailSpan.innerText = "";
    corretoSpanEmail.innerText = "";
  }
})

//validando campo textarea:
inputNecessidade.addEventListener("change", (e) => {
  let necessidade = e.target.value;    
  if (necessidade.length > 5) {
      confirmarNecessidade = true;
      necessidadeSpan.classList.remove("popup_obrigatorio");       
      corretoSpanNecessidade.innerText = "✓";
      necessidadeHelper.innerText = "";
      corretoSpanNecessidade.style.color = "#FF0096";
      corretoSpanNecessidade.style.fontSize = "20px";
  } else if (necessidade.length == 0){
      necessidadeHelper.classList.remove("visivel");
      confirmarNecessidade = false;
      necessidadeSpan.innerText = "";
      corretoSpanNecessidade.innerText = "";
  } else {
      confirmarNecessidade = false;
      necessidadeHelper.innerText = "Você deve inserir, no mínimo, 5 caracteres";
      necessidadeSpan.innerText = "";
      corretoSpanNecessidade.innerText = "";
  }
  enviar();
})

//Manutenção da ativação do botão submit
enviar.addEventListener("click", (e) => {  
  if(confirmarNome == false || confirmarEmail == false || confirmarNecessidade == false) {
      e.preventDefault();
      alert("Preencha todos os campos obrigatórios corretamente.");
  }else {
      alert("Cadastro realizado com sucesso!");
  }
})