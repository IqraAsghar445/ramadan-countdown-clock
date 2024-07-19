function updateCountdown() {
    const ramzanStartDate = moment('2025-03-01'); 
    const now = moment();

    const duration = moment.duration(ramzanStartDate.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

//  call to display the countdown immediately on page load
updateCountdown();
