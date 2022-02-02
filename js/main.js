const btnStart = document.querySelector('.main__button.main__button--start');
const btnRepeat = document.querySelector('.main__button.main__button--repeat');
const btnReset = document.querySelector('.main__button.main__button--reset');
const main = document.querySelector('.main');

let interval;

btnStart.addEventListener('click', () => {
	interval = setInterval(valueCount, 1000);
	main.classList.add('counting');
	console.log(timer);
});
btnRepeat.addEventListener('click', stop);

function valueCount() {
	let timerEl = document.querySelector('#timer');
	let timer = parseInt(timerEl.value);
	timer--;
	timerEl.value = timer;
	if (timer == -1) {
		stop();
		timerEl.value = 0;
		main.classList.remove('counting');
		main.classList.add('end-view');
	}
}
function stop() {
	clearInterval(interval);
}
