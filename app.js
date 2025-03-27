// Pika-pika suerte!
// Estado inicial
const imgPicachu = document.querySelector("img");

// NO MODIFICAR (salvo para conseguir el color sangría)
document.querySelector('#colors').addEventListener('click', updateBgColor);

function updateBgColor(event) {
    //Actualizar DOM
    imgPicachu.style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;
}