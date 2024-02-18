//Capturando o elemento
let dropdownMenu = document.getElementById("dropdownMenu");

function mostrarMenu() {
  dropdownMenu.style.display = "block";
}

function ocultarMenu() {
  dropdownMenu.style.display = "none";
}

// Selecionar o contêiner do menu dropdown
var dropdownContainer = document.getElementById("dropdownContainer");

// Adicionar ouvintes de eventos para mostrar e ocultar o menu
dropdownContainer.addEventListener("mouseover", mostrarMenu);
dropdownContainer.addEventListener("mouseleave", ocultarMenu);