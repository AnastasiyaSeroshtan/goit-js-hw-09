import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const STORAGE_KEY = 'feedback-msg';

btnStartEl.setAttribute("disabled", "disabled");
let timeId = null;
let deadline = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      
      console.log('selectedDates[0] in onClose', selectedDates[0]);

     deadline = selectedDates[0];
      console.log(deadline);

      const today = new Date;
      console.log('today in onClose', today);

    //   const delte = deadline - today;
    //     console.log(deadline - today);
       

    if (selectedDates[0] < today) {
        alert('Please choose a date in the future');
    }
    else {
        btnStartEl.removeAttribute("disabled");
    }

    
    btnStartEl.addEventListener('click', onBtnStartClick);
    function onBtnStartClick () {
        timeId = setInterval(convertMs, 1000);
        console.log(timeId);
        // console.log('setInterval(convertMs, 1000)', setInterval(convertMs, 1000));
       
            
      };

    },
  };

  function pad (value) {
    return String(value).padStart(2, '0');

  };

  

    function convertMs(ms) {
        const today = new Date;
        const delte = deadline - today
        console.log(delte);
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = pad(Math.floor(delte / day));
        // Remaining hours
        const hours = pad(Math.floor((delte % day) / hour));
        // Remaining minutes
        const minutes = pad(Math.floor(((delte % day) % hour) / minute));
        // Remaining seconds
        const seconds = pad(Math.floor((((delte% day) % hour) % minute) / second));
      
        
        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;

        // console.log(days);
        // console.log(hours);
        // console.log(minutes);
        // console.log(seconds);
        return { days, hours, minutes, seconds };
      }
      

      flatpickr(inputEl, options);


 // console.log(selectedDates[0]);
    // const deadline = selectedDates[0];
    // console.log(deadline);

//    const sdf = options.onClose(selectedDates[0]);
//    console.log(sdf);

// inputEl.addEventListener('input', onInput);

// function onInput(evt) {
// //   console.log(evt.target);
// const message = evt.target.value;
// // console.log(message);
// localStorage.setItem(STORAGE_KEY, message);
// }



//     // const deadline = new Date("2030-03-16 14:25:00");
//     const deadline = localStorage.getItem(STORAGE_KEY);
//     // console.log('deadline', deadline);
    
//     const today = new Date();
//     // console.log('today', today);

    
    // console.log(ms);

    //   console.log(convertMs(ms));   
    
    // setInterval(convertMs, 1000)// 

   

    // timeId = setInterval(convertMs, 1000);
        
    // if (days = 0 && (hourse = 0) && (minutes = 0) && (seconds = 0)) {
    //     clearInterval(timeId);
    // }