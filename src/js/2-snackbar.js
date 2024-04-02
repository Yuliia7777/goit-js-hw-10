import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

{
  document
    .querySelector('.form')

    .addEventListener('submit', function (event) {
      event.preventDefault();

      const state = document.querySelector('input[name="state"]:checked').value;
      const delay = parseInt(document.getElementById('inputDelay').value);

      const promise = new Promise((resolve, reject) => {
        if (state === 'fulfilled') {
            setTimeout(() => {
                resolve(delay);
            }, delay);
        } else if (state === 'rejected') {
            setTimeout(() => {
                reject(delay);
            }, delay);
        }
    });
    

      promise
        .then(delay => {
          let message = `${state} promises in ${delay}ms`;
          console.log(message);
          iziToast.success({
            message: message,
            position: 'topRight',
            timeout: 2000,
          });
        })
        .catch(delay => {
          let message = `${state} promises in ${delay}ms`;
          console.log(message);
          iziToast.warning({
            message: message,
            position: 'topRight',
            timeout: 2000,
          });
        });
    });



}  

