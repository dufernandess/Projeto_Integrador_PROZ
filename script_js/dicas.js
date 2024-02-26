let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
console.log(img1);

function colocarOpacidade() {
    this.style.opacity = '0.8';
}

function tirarOpacidade() {
    this.style.opacity = '1';
}

img1.addEventListener('mouseover', colocarOpacidade);
img2.addEventListener('mouseover', colocarOpacidade);
img3.addEventListener('mouseover', colocarOpacidade);
img4.addEventListener('mouseover', colocarOpacidade);

img1.addEventListener('mouseout', tirarOpacidade);
img2.addEventListener('mouseout', tirarOpacidade);
img3.addEventListener('mouseout', tirarOpacidade);
img4.addEventListener('mouseout', tirarOpacidade);