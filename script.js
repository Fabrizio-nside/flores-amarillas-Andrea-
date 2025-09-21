function createFallingFlower() {
  const flower = document.createElement('div');
  flower.classList.add('falling-flower');
  flower.textContent = '🌻';
  
  // Posición aleatoria horizontal
  flower.style.left = `${Math.random() * 100}vw`;
  flower.style.animationDuration = `${3 + Math.random() * 4}s`;

  document.body.appendChild(flower);

  // Eliminar después de que termina la animación
  flower.addEventListener('animationend', () => {
    flower.remove();
  });
}

setInterval(createFallingFlower, 500);
function createFallingFlower() {
  const flower = document.createElement('div');
  flower.classList.add('falling-flower');
  flower.textContent = '🌻';
  
  // Posición aleatoria horizontal
  flower.style.left = `${Math.random() * 100}vw`;
  flower.style.animationDuration = `${3 + Math.random() * 4}s`;

  document.body.appendChild(flower);

  // Eliminar después de que termina la animación
  flower.addEventListener('animationend', () => {
    flower.remove();
  });
}

setInterval(createFallingFlower, 500);
function createFallingFlower() {
  const flower = document.createElement('div');
  flower.classList.add('falling-flower');
  flower.textContent = '🌻';
  
  // Posición aleatoria horizontal
  flower.style.left = `${Math.random() * 100}vw`;
  flower.style.animationDuration = `${3 + Math.random() * 4}s`;

  document.body.appendChild(flower);

  // Eliminar después de que termina la animación
  flower.addEventListener('animationend', () => {
    flower.remove();
  });
}

setInterval(createFallingFlower, 500);
