// Obtener el botón
var mybutton = document.getElementById("myBtn");

// Mostrar el botón cuando el usuario se desplace hacia abajo 20px desde la parte superior de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, volver al principio de la página
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
