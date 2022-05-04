import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('button[data-start]'),
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
        onClose(selectedDates) {
            const selectedDate = new Date(selectedDates[0]);
            const currentDate = new Date();
            const deltaDate = selectedDate - currentDate;
            console.log(deltaDate);
    },
};

flatpickr(refs.input, options);

