//Funções para carregar as imagens, seus textos e links através de slides
function slide1(){
    document.getElementById('img_id').src="img/carrossel_index_1.jpg";
    CaracteristicasImagem();
    let fig = document.getElementById('fig');
    fig.innerText = "Tô grávida! E agora?";
    document.getElementById('aId').href="";
    setTimeout("slide2()", 3000)
}

function slide2(){
    document.getElementById('img_id').src="img/carrossel_index_2.jpg";
    CaracteristicasImagem();
    let fig = document.getElementById('fig');
    fig.innerText = "Econtro de gestantes da HRSP";
    document.getElementById('aId').href="https://bebe.abril.com.br/gravidez/encontro-de-gestantes-conheca-os-beneficios-desse-momento";
    setTimeout("slide3()", 3000)
}

function slide3(){
    document.getElementById('img_id').src="img/carrossel_index_3.jpg";
    CaracteristicasImagem();
    let fig = document.getElementById('fig');
    fig.innerText = "Receba conteúdos exclusivos sobre a sua gravidez!"
    document.getElementById('aId').href="./login.html";
    setTimeout("slide4()", 3000)
}

function slide4(){
    document.getElementById('img_id').src="img/carrossel_index_4.jpg";
    CaracteristicasImagem();
    let fig = document.getElementById('fig');
    fig.innerText = "Precisa de algum tipo de ajuda?"
    document.getElementById('aId').href="./central_de_apoio.html";
    setTimeout("slide1()", 3000)
}

//Obtém as características da imagem no CSS
function CaracteristicasImagem() {    
    let img = document.getElementById('img_id');
    // Obtém o objeto de estilo computado
    let estiloComputado = window.getComputedStyle(img);
    
    let tamanhoImg = estiloComputado.getPropertyValue('width');
    img.style.widows = tamanhoImg;
}