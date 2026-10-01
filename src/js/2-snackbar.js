import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const toastOptions = {
  position: 'topRight',
  icon: '',
  close: false,
  progressBar: false,
  messageColor: '#fff',
  messageSize: '16',
};

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.show({
        ...toastOptions,
        message: `✅ Fulfilled promise in ${delay}ms`,
        backgroundColor: '#6dcb8f',
      });
    })
    .catch(delay => {
      iziToast.show({
        ...toastOptions,
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: '#ec6b5e',
      });
    });

  form.reset();
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
