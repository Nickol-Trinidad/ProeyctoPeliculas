// Obtener el formulario y los elementos del DOM
const form = document.querySelector('form');
const userIdInput = document.getElementById('userId');
const criticatextInput = document.getElementById('criticatext');
const commentIdInput = document.getElementById('commentId');

// Función para manejar el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores del formulario
    const userId = userIdInput.value;
    const criticatext = criticatextInput.value;
    const commentId = commentIdInput.value || generateUniqueId(); // Generar ID único si no existe

    // Guardar el comentario en localStorage
    localStorage.setItem(commentId, JSON.stringify({ userId, criticatext }));

    // Limpiar los campos del formulario
    userIdInput.value = '';
    criticatextInput.value = '';

    // Actualizar la lista de comentarios
    displayComments();
});

// Función para mostrar los comentarios almacenados en localStorage
function displayComments() {
    const cardContainer = document.querySelector('.card-container2 ul');
    cardContainer.innerHTML = ''; // Limpiar lista de comentarios antes de actualizar

    // Recorrer todos los items almacenados en localStorage y mostrarlos
    for (let i = 0; i < localStorage.length; i++) {
        const commentId = localStorage.key(i);
        const commentData = JSON.parse(localStorage.getItem(commentId));

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p><strong>Usuario:</strong> ${commentData.userId}</p>
            <p><strong>Crítica:</strong> ${commentData.criticatext}</p>
        `;
        cardContainer.appendChild(listItem);
    }
}

// Función para generar un ID único (podrías utilizar una librería para IDs únicos)
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Mostrar comentarios al cargar la página
displayComments();
