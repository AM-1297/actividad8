const buttonBar = document.querySelector('.button-bar');

// Establecer un escuchador de eventos en el elemento padre de los botones
buttonBar.addEventListener('click', event => {
  // Verificar si el elemento clickeado es un botón
  if (event.target.tagName === 'BUTTON') {
    // Obtener el color del atributo data-color del botón clickeado
    const color = event.target.dataset.color;
    // Establecer el fondo de button-bar al color obtenido
    buttonBar.style.backgroundColor = color;
  }
});
