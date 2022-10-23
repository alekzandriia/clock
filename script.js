const secondHand = document.getElementById("seconds")
const minuteHand = document.getElementById("minutes")
const hourHand = document.getElementById("hours")


function setDate() {
    const now = new Date();
    seconds = now.getSeconds();
    minutes = now.getMinutes();
    hours = now.getHours();

    secondsRotate = (((seconds/60)*360) +90)
    secondHand.style.transform = `rotate(${secondsRotate}deg)`

    minutesRotate = (((minutes/60)*360) +90)
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`

    hoursRotate = (((hours/12)*360) +90)
    hourHand.style.transform = `rotate(${hoursRotate}deg)`

    console.log(`Current Time ${hours}:${minutes}:${seconds}`)
}

setInterval(setDate, 1000)