// Variables
const listaTweets = document.getElementById('lista-tweets');


// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}


// Funciones

// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault(); // Evitar que se abra el action del formulario

    // Leer el valor del textarea (id="tweet")
    const tweet = document.getElementById('tweet').value;

    // Crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadir elemento a la lista (div id="lista-tweets")
    const li = document.createElement('li');
    li.innerText = tweet;
    // Añadiendo botón de borrar al tweet
    li.appendChild(botonBorrar);
    // Añadiendo tweet a la lista
    listaTweets.appendChild(li);
}