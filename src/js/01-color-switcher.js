const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

const intervalDelay = 1000;

let timer = null;

btnStart.addEventListener('click', onChangeColorBtnStart);
btnStop.addEventListener('click', onChangeColorBtnStop);

function onChangeColorBtnStart() {
    btnStart.setAttribute('disabled')
    timer = setInterval(onChangeColor, intervalDelay)
}

function onChangeColorBtnStop() {
    btnStop.removeAttribute('disabled')
    clearInterval(timer)
}

function onChangeColor() {
     document.body.style.backgroundColor = getRandomHexColor()
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
