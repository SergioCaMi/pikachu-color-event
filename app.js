// Pika-pika suerte!

// NO MODIFICAR (salvo para conseguir el color sangría)

document.querySelector('#first').addEventListener('click', updateBgColor);
document.querySelector('#second').addEventListener('click', updateBgColor);
document.querySelector('#third').addEventListener('click', updateBgColor);

// MODIFICAR A PARTIR DE AQUÍ 
document.querySelector('#fourth').addEventListener('click', updateBgColor);
const imgPicachu = document.querySelector("img");
const colorSangría = window.getComputedStyle(document.querySelector('#fourth')).backgroundColor;
var colorPikachu;

function updateBgColor(event) {
    console.log(event.target);
    console.log(colorSangría);
    if (event.target.getAttribute("id")=="fourth"){
        colorPikachu=colorSangría
    } else {
        colorPikachu = event.target.getAttribute("data-color");
    }
    imgPicachu.style.backgroundColor = colorPikachu;
}