let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCount = 1;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").textContent = "Pause";
    }
    running = !running;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("time").textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

function reset() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 1;
    document.getElementById("time").textContent = formatTime(hours, minutes, seconds);
    document.getElementById("lapList").innerHTML = '';
    document.getElementById("startStop").textContent = "Start";
}

function recordLap() {
    const lapTime = formatTime(hours, minutes, seconds);
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById("lapList").appendChild(lapItem);
    lapCount++;
}
