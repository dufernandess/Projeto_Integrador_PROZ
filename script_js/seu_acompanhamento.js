
    //verifica o periodo gestacional para indicação correta da página
    let seuAcompanhamento = document.getElementById("navegacao");
    seuAcompanhamento.addEventListener("click", (e) => {
    let semanas = prompt("De quantas semanas você está?");   
    
    if(semanas >= 1 && semanas <= 4) {
    document.getElementById('navegacao').href="./semana_1_a_4.html";    
    }else if(semanas >= 5 && semanas <= 8){
    document.getElementById('navegacao').href="./semana_5_a_8.html";
    }else if(semanas >= 9 && semanas <= 12){
    document.getElementById('navegacao').href="./semana_9_a_12.html";
    }else if(semanas >= 13 && semanas <= 16){
    document.getElementById('navegacao').href="./semana_13_a_16.html";
    }else if(semanas >= 17 && semanas <= 20){
    document.getElementById('navegacao').href="./semana_17_a_20.html";
    }else if(semanas >= 21 && semanas <= 24){
    document.getElementById('navegacao').href="./semana_21_a_24.html";
    }else if(semanas >= 25 && semanas <= 27){
    document.getElementById('navegacao').href="./semana_25_a_27.html";
    }else if(semanas >= 28 && semanas <= 32){
    document.getElementById('navegacao').href="./semana_28_a_32.html";
    }else if(semanas >= 33 && semanas <= 36){
    document.getElementById('navegacao').href="./semana_33_a_36.html";
    }else if(semanas >= 37 && semanas <= 40){
    document.getElementById('navegacao').href="./semana_37_a_40.html";
    }else {
    alert("Você inseriu um valor incorreto. O valor deve ser de 1 a 40 semanas");
    }
  })

  
  //verifica o periodo gestacional para indicação correta da página para o menu web
  let seuAcompanhamento2 = document.getElementById("navegacao_2");
  seuAcompanhamento2.addEventListener("click", (e) => {
    let semanas = prompt("De quantas semanas você está?");   
    
    if(semanas >= 1 && semanas <= 4) {
    document.getElementById('navegacao').href="./semana_1_a_4.html";    
    }else if(semanas >= 5 && semanas <= 8){
    document.getElementById('navegacao').href="./semana_5_a_8.html";
    }else if(semanas >= 9 && semanas <= 12){
    document.getElementById('navegacao').href="./semana_9_a_12.html";
    }else if(semanas >= 13 && semanas <= 16){
    document.getElementById('navegacao').href="./semana_13_a_16.html";
    }else if(semanas >= 17 && semanas <= 20){
    document.getElementById('navegacao').href="./semana_17_a_20.html";
    }else if(semanas >= 21 && semanas <= 24){
    document.getElementById('navegacao').href="./semana_21_a_24.html";
    }else if(semanas >= 25 && semanas <= 27){
    document.getElementById('navegacao').href="./semana_25_a_27.html";
    }else if(semanas >= 28 && semanas <= 32){
    document.getElementById('navegacao').href="./semana_28_a_32.html";
    }else if(semanas >= 33 && semanas <= 36){
    document.getElementById('navegacao').href="./semana_33_a_36.html";
    }else if(semanas >= 37 && semanas <= 40){
    document.getElementById('navegacao').href="./semana_37_a_40.html";
    }else {
    alert("Você inseriu um valor incorreto. O valor deve ser de 1 a 40 semanas");
    }
  })