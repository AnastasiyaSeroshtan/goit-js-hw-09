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
