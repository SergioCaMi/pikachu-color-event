// Pika-pika suerte!
// Estado inicial
const imgPicachu = document.querySelector("img");

// NO MODIFICAR (salvo para conseguir el color sangría)
//Controlar Eventos
document.querySelector('#first').addEventListener('click', updateBgColor);
document.querySelector('#second').addEventListener('click', updateBgColor);
document.querySelector('#third').addEventListener('click', updateBgColor);
document.querySelector('#fourth').addEventListener('click', updateBgColor);

function updateBgColor(event) {
    //Actualizar DOM
    imgPicachu.style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;
}