const button = document.querySelector('#color-btn');

function random() {
   return Math.floor(Math.random() * 255) + 1;
}

function randomColor() {
   return `rgb(${random()}, ${random()}, ${random()})`;
}

function changeBgColor() {
   const colorText = document.querySelector('#color');
   const colorA = randomColor();
   const colorB = randomColor();

   document.body.style.background = `linear-gradient(to right, ${colorA}, ${colorB})`;
   colorText.textContent = `${colorA} -> ${colorB}`;
}

button.addEventListener('click', changeBgColor);
