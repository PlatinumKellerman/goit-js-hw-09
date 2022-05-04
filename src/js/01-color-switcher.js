const refs = {
    body: document.querySelector('body'),
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]')
}

refs.startButton.addEventListener('click', getRandomHexColor)


function qqq() {
    refs.body.style.background
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}