// Pika-pika suerte!
// Estado inicial
const imgPicachu = document.querySelector("img");
const colorSangría = window.getComputedStyle(document.querySelector('#fourth')).backgroundColor;
var colorPikachu = "#000000";

// NO MODIFICAR (salvo para conseguir el color sangría)
//Controlar Eventos
document.querySelector('#first').addEventListener('click', updateBgColor);
document.querySelector('#second').addEventListener('click', updateBgColor);
document.querySelector('#third').addEventListener('click', updateBgColor);
document.querySelector('#fourth').addEventListener('click', updateBgColor);

function updateBgColor(event) {
    //Modificar Variables
    if (event.target.getAttribute("id")=="fourth"){
        colorPikachu=colorSangría
    } else {
        colorPikachu = event.target.getAttribute("data-color");
    }
    //Actualizar DOM
    imgPicachu.style.backgroundColor = colorPikachu;
}