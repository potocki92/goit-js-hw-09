const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let intervalId = null;

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function startColorSwitcher() {
  intervalId = setInterval(changeColor, 1000);
  startBtn.disabled = true;
}

function stopColorSwitcher() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startColorSwitcher);
stopBtn.addEventListener('click', stopColorSwitcher);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
