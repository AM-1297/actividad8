const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

function chooseName() {
  const randomIndex = Math.floor(Math.random() * names.length); // Generar un índice aleatorio dentro del rango de nombres
  const randomName = names[randomIndex]; // Obtener el nombre aleatorio utilizando el índice generado
  para.textContent = randomName; // Establecer el texto del párrafo como el nombre aleatorio
}

// Llamar a la función chooseName para imprimir un nombre aleatorio una vez
chooseName();

// No editar el código a continuación

section.innerHTML = ' ';
section.appendChild(para);
