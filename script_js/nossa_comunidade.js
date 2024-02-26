// Selecionar o elemento <img> pelo seu ID
let imagem1 = document.getElementById('imagem1');
let imagem2 = document.getElementById('imagem2');
let imagem3 = document.getElementById('imagem3');

function colocarOpacidade() {
    this.style.opacity = '0.8'; // Altera a opacidade para 80%
};

function tirarOpacidade() {
    this.style.opacity = '1'; // Volta para 100%
}

// Adicionando o evento mouseover nas imagens
imagem1.addEventListener('mouseover', colocarOpacidade);
imagem2.addEventListener('mouseover', colocarOpacidade);
imagem3.addEventListener('mouseover', colocarOpacidade);

// Adicionando o evento mouseout nas imagens
imagem1.addEventListener('mouseout', tirarOpacidade);
imagem2.addEventListener('mouseout', tirarOpacidade);
imagem3.addEventListener('mouseout', tirarOpacidade);