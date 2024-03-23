const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Controlador de eventos para mover el círculo con las teclas WASD
document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'w':
      y -= 10;
      break;
    case 'a':
      x -= 10;
      break;
    case 's':
      y += 10;
      break;
    case 'd':
      x += 10;
      break;
  }
  drawCircle(x, y, size);
});
