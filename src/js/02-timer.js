
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '5px',
  opacity: 1,
  borderRadius: '8px',
  timeout: 3000,
  messageMaxLength: 110,
  closeButton: false,
});

const refs = {
  input: document.querySelector('input#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  mins: document.querySelector('[data-minutes]'),
  secs: document.querySelector('[data-seconds]'),
};

    const fpOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (checkRightDate(selectedDates[0].getTime())) {
      refs.btnStart.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future.');
      refs.btnStart.disabled = true;
    }

    inputDate = selectedDates[0];
  },
};


let inputDate = null;

refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', onCountTimer);

flatpickr(refs.input, fpOptions);

function onCountTimer(evt) {
  evt.preventDefault();

  const countdownId = setInterval(() => {
    const countdownTime = checkRightDate(inputDate);
    if (!countdownTime) {
      clearInterval(countdownId);
      Notify.success('Congratilations!');
    }

    displayCountdown(countdownTime);
  }, 1000);
}

function displayCountdown(time) {
  const { days, hours, minutes, seconds } = convertMs(time);
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = minutes;
  refs.secs.textContent = seconds;
}

function checkRightDate(date) {
  const currentDate = Date.now();
  const distance = date - currentDate;

  return date > currentDate ? distance : null;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
