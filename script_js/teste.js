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






