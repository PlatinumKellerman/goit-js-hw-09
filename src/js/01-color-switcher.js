const refs = {
    body: document.querySelector('body'),
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
    isActive: false
}

refs.startButton.addEventListener('click', onColorChange)
function onColorChange() {
    if (refs.isActive === true) {
        return
    } else {
        intervalID = setInterval(getRandomHexColor, 1000);
        refs.isActive = true;
    }
    
}

function getRandomHexColor() {
  refs.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.stopButton.addEventListener('click', onStopButtonClick)
function onStopButtonClick() {
    refs.isActive = false;
    clearInterval(intervalID);
}