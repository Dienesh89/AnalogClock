function moveClockHands() {
    const hourHand = document.querySelector('.hr div');
    const minuteHand = document.querySelector('.min div');
    const secondHand = document.querySelector('.sec div');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the degrees for the clock hands
    const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteDeg = (360 / 60) * minutes;
    
    // Calculate seconds including fractions to achieve continuous rotation
    const secondDeg = (360 / 60) * (seconds + now.getMilliseconds() / 1000);

    // Apply the rotation to the clock hands
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Call the function to move the clock hands initially
moveClockHands();

// Update the clock hands continuously
setInterval(moveClockHands, 1000 / 60); // Update every 1/60th of a second for smoother animation
