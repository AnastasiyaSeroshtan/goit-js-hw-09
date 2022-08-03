import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', handleSubmitButtonClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() =>{
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay)
  })
};

function handleSubmitButtonClick(event) {
  event.preventDefault();

  let delayValue = + inputDelay.value;
  let stepValue = + inputStep.value;
  let amountValue = + inputAmount.value;

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
    .then((success) => { Notify.success(success)})
    .catch((error) => { Notify.failure(error)});
    
    delayValue += stepValue;
  }
}
