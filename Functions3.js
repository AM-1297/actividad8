const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

// Función para generar un número aleatorio entre dos límites
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para elegir un nombre aleatorio del array proporcionado
function chooseName(namesArray) {
  const index = random(0, namesArray.length - 1); // Genera un índice aleatorio dentro del rango de nombres
  return namesArray[index]; // Devuelve el nombre en el índice generado
}

// Llama a la función chooseName con el array names y establece el resultado en el textContent del párrafo
para.textContent = chooseName(names);

// No editar el código a continuación

section.innerHTML = ' ';
section.appendChild(para);
