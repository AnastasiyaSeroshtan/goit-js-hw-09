// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// import throttle from 'lodash.throttle';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formEl = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');

// console.log(inputDelay);
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');




const LOCAL_KEY = "feedback-form-state";
const formData = localStorage.getItem(LOCAL_KEY) ? JSON.parse(localStorage.getItem(LOCAL_KEY)):{};

const saveItem = localStorage.getItem(LOCAL_KEY);
        if (saveItem) {
            const itemParse = JSON.parse(saveItem);
            inputDelay.value = itemParse.delay || "";
            inputStep.value = itemParse.step || "";
            inputAmount.value = itemParse.amount || "";
        }
        else {
          inputDelay.value = "";
          inputStep.value = "";
          inputAmount.value = "";
        }

// formEl.addEventListener("input", throttle(handleSaveInputValue, 500));
// formEl.addEventListener('input', onGetInputValue);

// formEl.addEventListener('submit', createSomePromise);

formEl.addEventListener("input", handleSaveInputValue);
formEl.addEventListener('submit', handleSubmitButtonClick);

function handleSaveInputValue(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}




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

// createPromise(2, delay).then(result => console.log(result)).catch(error => console.error(error));


// function createSomePromise(){
//   for (let i = 1; i <= amount; i += 1) {
//     position +=1;
//     delay += step;
//     createPromise(position, delay)
//   }
// };

function handleSubmitButtonClick(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));

let delayValue = + inputDelay.value;
let stepValue = + inputStep.value;
let amountValue = + inputAmount.value;

for (let i = 1; i <= amountValue; i += 1) {
  createPromise(i, delayValue)
  .then((resp) => { Notify.success(resp)    })
           .catch((resp) => { Notify.failure(resp)    })
  delayValue += stepValue;
}



  localStorage.removeItem(LOCAL_KEY);
  event.currentTarget.reset();
}
// function onSubmitForm(event) {
//   event.preventDefault();
//   let delayValue = + delayInput.value;
//   let stepValue = + stepInput.value;
//   let amountValue = + amountInput.value + 1;
//     for (let i = 1 ; i < amountValue; i+=1){
//             createPromise(i,delayValue)
//            .then((resp) => { Notify.success(resp)    })
//            .catch((resp) => { Notify.failure(resp)    })
//            delayValue += stepValue
//       }
//   };
// / createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });




// for (let i = 1; i <= amountValue; i += 1) {
//   createPromise(i, delayValue)
//   .then(({ i, delayValue }) => {
//     console.log(`✅ Fulfilled promise ${i} in ${delayValue}ms`);
//   })
//   .catch(({ i, delayValue }) => {
//     console.log(`❌ Rejected promise ${i} in ${delayValue}ms`);
//   });