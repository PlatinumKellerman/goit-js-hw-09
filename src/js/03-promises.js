import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelayInput: document.querySelector('input[name="delay"]'),
  delayStepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  submitButton: document.querySelector('button[type="submit"]'),
}

refs.form.addEventListener('submit', onFormSubmit)
function onFormSubmit(e) {
  e.preventDefault();
  const inputValues = {
    firstDelayValue: Number(refs.firstDelayInput.value),
    delayStepValue: Number(refs.delayStepInput.value),
    amountInputValue: Number(refs.amountInput.value)
  }
  newPromiseLoop(inputValues)
}

function newPromiseLoop({ amountInputValue, delayStepValue, firstDelayValue }) {
  let newDelay = firstDelayValue;
  for (let i = 1; i <= amountInputValue; i += 1) {
    createPromise(i, newDelay)
      .then(({ position, firstDelayValue }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${firstDelayValue}ms`);
      })
      .catch(({ position, firstDelayValue }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${firstDelayValue}ms`);
      });
    newDelay += delayStepValue;
  }
}

function createPromise(position, firstDelayValue) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, firstDelayValue: firstDelayValue });
      } else {
        reject({ position: position, firstDelayValue: firstDelayValue });
      }
    }, firstDelayValue);
  });
}
