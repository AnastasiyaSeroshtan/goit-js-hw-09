import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');


btnStartEl.setAttribute("disabled", "disabled");
let timeId = null;
let deadline = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    deadline = selectedDates[0];
    const today = new Date;
    
    if (selectedDates[0] < today) {
      Notify.failure('Please choose a date in the future');
    }
    else {
        btnStartEl.removeAttribute("disabled");
    }

    btnStartEl.addEventListener('click', onBtnStartClick, { once: true }); 
    },
};

function onBtnStartClick (e) {
  inputEl.setAttribute('disabled', 'disabled');
  btnStartEl.setAttribute("disabled", "disabled");
  timeId = setInterval(convertMs, 1000);
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
  const today = new Date;
  const delte = deadline - today
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(delte / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((delte % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((delte % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((delte% day) % hour) % minute) / second));
    
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    clearInterval(timeId);
    inputEl.removeAttribute('disabled');
    btnStartEl.removeAttribute("disabled");
  }
  
  return { days, hours, minutes, seconds };
  }
    
flatpickr(inputEl, options);
