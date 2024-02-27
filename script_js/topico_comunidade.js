const arrayPostagens = [
    {
        titulo: "Teste Clear blue 6 dias antes",
        autor: "gabriela",
        conteudo: "Estou tentando engravidar e sou mega ansiosa. Hoje, faltando 6 dias para o dia previsto, comprei o teste da clear BLUE 6DIAS ANTES. Na hora , só enxerguei uma sombra...",
        data: "27 de janeiro de 2024"
    },
    {
        titulo: "Aborto retido FIV",
        autor: "tatiane_nova",
        conteudo: "Fiz uma FIV com analise genetica e tive meu posito com o beta alto .. e mesmo assim apos 7 semanas a gravidez nao evoluiu algo ja passou por isso , fazendo a analise genetica nos embrioes...",
        data: "12 de fevereiro de 2024"
    },
    {
        titulo: "Testante novamente",
        autor: "socorro2019",
        conteudo: "Tenho 44 anos, mãe de dois meninos. Casei novamente, e quero muito ser mamãe. Quero compartilhar com vcs, a felicidade em ter o nosso pacotinho de amor...",
        data: "26 de março de 2024"
    },
    {
        titulo: "Síndrome de Turner",
        autor: "carol",
        conteudo: "Hoje fiz a morfológica do primeiro trimestre, com 12 semanas e 3 dias, e minha neném tem síndrome de Turner. Eu estou em choque e sem saber o que pensar, alguma de vocês passando por isso?...",
        data: "17 de janeiro de 2024"
    }
]

for(let i=0; i<arrayPostagens.length; i++) {
    // Criar um elemento
    let article = document.createElement("article");

    // Manipular o elemento
    // Capturar o elemento pai
    let section = document.getElementById("conteudo");
    article.innerHTML = `
    <h4 class="titulo">${arrayPostagens[i].titulo}</h4> 
    <div class="autor">
        <img src="./img/autor.png" class="img-autor">
        <h5>${arrayPostagens[i].autor}</h5>
    </div>
    <p class="duvida">${arrayPostagens[i].conteudo}</p>
    <h6 class="time">${arrayPostagens[i].data}</h6>
    <div class="interacoes">
        <img src="./img/curtida.png" class="curtida">
        <h6>54</h6>
        <img src="./img/comentario.png" class="comentario">
        <h6>25</h6>
    </div>
    `
    article.id = `post-${i+1}`;
    article.className = "topico";

    // Adicionar o elemento na página
    section.appendChild(article);
}