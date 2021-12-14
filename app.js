const button = document.querySelector('#color-btn');
const randomColor = () => Math.floor(Math.random() * 255) + 1;

function changeBgColor() {
  const colorText = document.querySelector('#color');
  let clr1 = randomColor();
  let clr2 = randomColor();
  let clr3 = randomColor();

  /* document.body.style.backgroundColor = `rgb(${clr1}, ${clr2}, ${clr3})`; */
  document.body.style.background = `linear-gradient(
    to right, 
    rgb(${clr1}, ${clr2}, ${clr3}), 
    rgb(${clr3}, ${clr1}, ${clr2})
    )`;

  colorText.textContent = `rgb(${clr1}, ${clr2}, ${clr3}) +
    rgb(${clr3}, ${clr1}, ${clr2})`;
}

button.addEventListener('click', changeBgColor);
