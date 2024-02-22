function toggleNav() {
  var navEnlaces = document.querySelector('.nav-enlaces');
  navEnlaces.classList.toggle('active');
}

function toggleModal() {
  var modal = document.getElementById('myModal');
  modal.classList.toggle('show-modal');
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.classList.remove('show-modal');
}

window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
      modal.classList.remove('show-modal');
  }
}

// Mostrar el modal cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('myModal');
  modal.classList.add('show-modal');
});

// Agregar evento al botón para abrir el modal
document.getElementById('openModalButton').addEventListener('click', function() {
  toggleModal();
});
