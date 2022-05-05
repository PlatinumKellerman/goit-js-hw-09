import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    selectedDate: ""
}

refs.startButton.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        refs.selectedDate = new Date(selectedDates[0]); 
        if (Date.now() >= refs.selectedDate) {
            window.alert("Please choose a date in the future");
            refs.startButton.disabled = true;
        } else {
            refs.startButton.disabled = false;
        }
    },
};
const flatpicker = flatpickr(refs.input, options);

refs.startButton.addEventListener('click', startingTimer)
function startingTimer() {
    setInterval(() => {
        const deltaTime = refs.selectedDate - Date.now();
        const timeComponents = convertMs(deltaTime);
        timeChange(timeComponents)
    }, 1000)
}



function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}


function pad(value) {
    return String(value).padStart(2, '0');
}


function timeChange({ days, hours, minutes, seconds }) {
refs.days.textContent = {days } ;
refs.hours.textContent = { hours };
refs.minutes.textContent = { minutes };
refs.seconds.textContent = seconds ;
}

