const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

function drawRectangle(x, y, width, height, color) {
  // Borrar el lienzo antes de dibujar un nuevo rectángulo
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Establecer el color del rectángulo
  ctx.fillStyle = color;
  
  // Dibujar el rectángulo en el lienzo
  ctx.fillRect(x, y, width, height);
}

// Llamar a la función drawRectangle para dibujar el rectángulo con las variables proporcionadas
drawRectangle(x, y, width, height, color);
