const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// Set the target date for the countdown
const targetDate = new Date('2024-01-01T00:00:00');

function countdown() {
    const currentDate = new Date();

    const totalSeconds = (targetDate - currentDate) / 1000;

    if (totalSeconds <= 0) {
        // Redirect to another web page when the countdown is over
        window.location.href = 'https://hny-ant-2024.netlify.app';
    } else {
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// Initial call
countdown();

// Update the countdown every second
setInterval(countdown, 1000);
