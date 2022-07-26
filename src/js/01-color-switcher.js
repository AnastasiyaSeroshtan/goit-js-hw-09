const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timeId = null;

btnStart.addEventListener('click', handleBtnStartClick);
btnStop.addEventListener('click', handleBtnStopClick);
btnStop.setAttribute('disabled', 'disabled');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function handleBtnStartClick() {
    btnStart.setAttribute("disabled", "disabled");
    btnStop.removeAttribute('disabled');
    timeId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000); 
}

function handleBtnStopClick() {
    clearInterval(timeId);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', 'disabled');
}
