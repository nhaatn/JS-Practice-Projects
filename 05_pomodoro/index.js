const start_BTN = document.querySelector("#start");
const reset_BTN = document.querySelector("#reset");
const pause_BTN = document.querySelector("#pause");

const work_minutes = document.querySelector("#work_minutes");
const work_seconds = document.querySelector("#work_seconds");

const break_minutes = document.querySelector("#break_minutes");
const break_seconds = document.querySelector("#break_seconds");

const numOfCycles = document.querySelector("#counter");

// Store a reference to a timer variable
let startTime = "";

start_BTN.addEventListener("click", () => {
    if (startTime === "") {
        startTime = setInterval(timer, 1000);
    } else {
        alert("Timer is already running");
    }
});

reset_BTN.addEventListener("click", () => {
    work_minutes.innerText = 25;
    work_seconds.innerText = 00;

    break_minutes.innerText = 10;
    break_seconds.innerText = 00;

    numOfCycles.innerText = 0;

    pauseInterval(); // Makes the timer stop after clicking reset

    startTime = ''; // Allows to click start again
});

pause_BTN.addEventListener("click", () => {
    pauseInterval();
    startTime = ''; // Allows to click start again
})

// START TIMER
function timer() {
    // Work timer countdown
    if (work_seconds.innerText != 0) {
        work_seconds.innerText--;
    } else if (work_minutes.innerText != 0 && work_seconds.innerText == 0) {
        work_seconds.innerText = 59;
        work_minutes.innerText--;
    }

    // Break timer countdown
    if (work_minutes.innerText == 0 && work_seconds.innerText == 0) {
        if (break_seconds.innerText != 0) {
            break_seconds.innerText--;
        } else if (
            break_minutes.innerText != 0 &&
            break_seconds.innerText == 0
        ) {
            break_seconds.innerText = 59;
            break_minutes.innerText--;
        }
    }

    // Increment counter by 1 if one full cycle is completed
    if (
        work_minutes.innerText == 0 &&
        work_seconds.innerText == 0 &&
        break_minutes.innerText == 0 &&
        break_seconds.innerText == 0
    ) {
        work_minutes.innerText = 25;
        work_seconds.innerText = 00;

        break_minutes.innerText = 10;
        break_seconds.innerText = 00;

        numOfCycles.innerText++;
    }
}

// STOP TIMER 
function pauseInterval() {
    clearInterval(startTime);
}