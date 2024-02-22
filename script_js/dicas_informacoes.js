// zoom.js
let imagem1 = document.getElementById("fig1");
console.log(imagem1)
imagem.addEventListener("mouseover", () => {
    imagem.style.transform = "scale(1.2)";
    imagem.style.transition = "transform 0.3s ease-in-out";
});

imagem.addEventListener("mouseout", function() {
    imagem.style.transform = "scale(1)";
});

/*
document.addEventListener("DOMContentLoaded", function() {
    const imagem = document.getElementById("fig1");
    
    imagem.addEventListener("mouseover", function() {
        imagem.style.transform = "scale(1.2)";
        imagem.style.transition = "transform 0.3s ease-in-out";
    });
    
    imagem.addEventListener("mouseout", function() {
        imagem.style.transform = "scale(1)";
    });
}); */