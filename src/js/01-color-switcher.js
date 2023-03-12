const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let internalId = null;

startButton.addEventListener('click', () => {
  internalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(internalId);

  startButton.disabled = false;
});
