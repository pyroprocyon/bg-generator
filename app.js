const button = document.querySelector('#color-btn');

function randomColor() {
  const clr1 = Math.floor(Math.random() * 255) + 1;
  const clr2 = Math.floor(Math.random() * 255) + 1;
  const clr3 = Math.floor(Math.random() * 255) + 1;

  return `rgb(${clr1}, ${clr2}, ${clr3})`;
}

function changeBgColor() {
  const colorText = document.querySelector('#color');
  const colorA = randomColor();
  const colorB = randomColor();

  document.body.style.background = `linear-gradient(to right, ${colorA}, ${colorB})`;
  colorText.textContent = `${colorA} -> ${colorB}`;
}

button.addEventListener('click', changeBgColor);
