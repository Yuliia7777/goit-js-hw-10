import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

{
  let _selectedDate = new Date();
  let dateTimePicker = document.getElementById('datetime-picker');
  let btnStart = document.getElementById('btn-start');
  btnStart.addEventListener('click', function () {
    startCountdown(_selectedDate);
  });

  function ProcessSelectedDate(dateStr, showError = false) {
    const selectedDate = new Date(dateStr);
    const currentDate = new Date();

    if (selectedDate >= currentDate) {
      _selectedDate = selectedDate;
      btnStart.disabled = false;
      flatPicker.set('minDate', 'today');
      return;
    }

    if (selectedDate < currentDate) {
      btnStart.disabled = true;
      if (showError)
        iziToast.error({
          message: 'Please choose a date in the future!',
          position: 'topRight',
          timeout: 2000,
        });
      return;
    }
  }

  const flatpickr_option = {
    //minDate: 'today',
    enableTime: true,
    enableSeconds: true,
    dateFormat: 'Y-m-d H:i:S',
    onChange: function (selectedDates, dateStr, instance) {
      ProcessSelectedDate(dateStr);
    },
    onClose: function (selectedDates, dateStr, instance) {
      ProcessSelectedDate(dateStr, true);
    },
  };
  let flatPicker = flatpickr('#datetime-picker', flatpickr_option);

  const timer = setInterval(function () {
    flatpickr_option.defaultDate = new Date();
    flatpickr('#datetime-text', flatpickr_option);
  }, 1000);

  function startCountdown(selectedDate) {
    dateTimePicker.disabled = true;
    btnStart.disabled = true;

    let intervalId = setInterval(function () {
      const currentDate = new Date();
      const ms = selectedDate.getTime() - currentDate.getTime();
      const data = convertMs(ms);

      setHtmlDataValues(data);

      let values = Object.values(data);
      if (values.every(item => item === 0)) {
        clearInterval(intervalId);
        dateTimePicker.value = '';
        return;
      }
    }, 1000);
  }

  function formatDateTimeValue(value) {
    let digits = 2;
    if (value > 100) {
      digits = 3;
    }
    return String(value).padStart(digits, '0');
  }

  function setHtmlDataValues(data) {
    document.querySelector('.value[data-days]').innerHTML = formatDateTimeValue(
      data.days
    );
    document.querySelector('.value[data-hours]').innerHTML =
      formatDateTimeValue(data.hours);
    document.querySelector('.value[data-minutes]').innerHTML =
      formatDateTimeValue(data.minutes);
    document.querySelector('.value[data-seconds]').innerHTML =
      formatDateTimeValue(data.seconds);
    return;
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);

    const hours = Math.floor((ms % day) / hour);

    const minutes = Math.floor(((ms % day) % hour) / minute);

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

