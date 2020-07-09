const timer = (id, deadline) => {

    /// input: '2020-12-12'
    function findDeadlineRemainder(deadline) {
        const t = Date.parse(deadline) - Date.now(),
            sec = Math.floor(t / 1000 % 60),
            min = Math.floor(t / (1000 * 60) % 60),
            hour = Math.floor(t / (1000 * 3600) % 24),
            day = Math.floor(t / (1000 * 3600 * 24));
        return {
            total: t,
            seconds: sec,
            minutes: min,
            hours: hour,
            days: day
        }
    }

    const timerElement = document.querySelector(id),
        days = timerElement.querySelector('#days'),
        hours = timerElement.querySelector('#hours'),
        minutes = timerElement.querySelector('#minutes'),
        seconds = timerElement.querySelector('#seconds');
    const intervalTimer = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
        const t = findDeadlineRemainder(deadline);
        // update view
        days.textContent = addZero(t.days);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);
        // stop interval execution
        if (t <= 0) clearInterval(intervalTimer);
    }

    function addZero(val) {
        if (val < 10) {
            return "0" + val;
        } else {
            return val;
        }
    }
}

export default timer;