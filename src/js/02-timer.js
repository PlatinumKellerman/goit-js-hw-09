import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    input: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    selectedDate: ""
}
refs.startButton.disabled = true;
refs.input.classList.add('date-input');
refs.startButton.classList.add('input-button');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        refs.selectedDate = new Date(selectedDates[0]); 
        if (Date.now() >= refs.selectedDate) {
            Notify.failure("Please choose a date in the future"), Notify.init({
                width: '400px',
                position: 'center-top',
                timeout: 2000,
                borderRadius: '20px',
                fontSize: '20px',
                cssAnimationStyle: 'zoom',
                closeButton: true,
            });
            refs.startButton.disabled = true;
            refs.startButton.classList.toggle('isActive');
        } else {
            refs.startButton.disabled = false;
            refs.startButton.classList.toggle('isActive');
        }
    },
};
const flatpicker = flatpickr(refs.input, options);


refs.startButton.addEventListener('click', startingTimer)
function startingTimer() {
    const intervalID = setInterval(() => {
        const deltaTime = refs.selectedDate - Date.now();
        const timeComponents = convertMs(deltaTime);
        timeChange(timeComponents)
        if (deltaTime < 1000) {
            clearInterval(intervalID);
    }
    }, 1000);
    
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

function timeChange({ days, hours, minutes, seconds }) {
refs.days.textContent =  addLeadingZero(days);
refs.hours.textContent = addLeadingZero(hours);
refs.minutes.textContent = addLeadingZero(minutes);
refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

