"use strict";
// Tabs
const stopwatchTab = document.querySelector("#stopwatch-tab");
const timerTab = document.querySelector("#timer-tab");
const stopwatchSection = document.querySelector("#stopwatch-section");
const timerSection = document.querySelector("#timer-section");
// Stopwatch Elements
const stopwatchDisplay = document.querySelector("#stopwatch-display");
const swStartBtn = document.querySelector("#sw-start");
const swPauseBtn = document.querySelector("#sw-pause");
const swResetBtn = document.querySelector("#sw-reset");
swPauseBtn.disabled = true;
// Timer Elements
const minutesInput = document.querySelector("#minutes-input");
const secondsInput = document.querySelector("#seconds-input");
const timerDisplay = document.querySelector("#timer-display");
const timerStartBtn = document.querySelector("#timer-start");
const timerPauseBtn = document.querySelector("#timer-pause");
const timerResetBtn = document.querySelector("#timer-reset");
// States
const stopwatchState = {
    elapsedTime: 0,
    intervalId: null,
    status: "idle",
};
const timerState = {
    totalTime: 0,
    remainingTime: 0,
    intervalId: null,
    status: "idle",
};
// Tab Logic
function showStopwatch() {
    stopwatchTab.classList.add("active");
    timerTab.classList.remove("active");
    stopwatchSection.classList.add("active-section");
    timerSection.classList.remove("active-section");
}
function showTimer() {
    timerTab.classList.add("active");
    stopwatchTab.classList.remove("active");
    timerSection.classList.add("active-section");
    stopwatchSection.classList.remove("active-section");
}
stopwatchTab.addEventListener("click", showStopwatch);
timerTab.addEventListener("click", showTimer);
// Stopwatch Logic
function updateStopwatchDisplay() {
    stopwatchDisplay.textContent = formatTime(stopwatchState.elapsedTime);
}
function startStopwatch() {
    swStartBtn.disabled = true;
    swPauseBtn.disabled = false;
    if (stopwatchState.status === "started") {
        return;
    }
    stopwatchState.status = "started";
    stopwatchState.intervalId = window.setInterval(() => {
        stopwatchState.elapsedTime++;
        updateStopwatchDisplay();
    }, 1000);
}
function pauseStopwatch() {
    swStartBtn.disabled = false;
    swPauseBtn.disabled = true;
    if (stopwatchState.intervalId !== null) {
        clearInterval(stopwatchState.intervalId);
    }
    stopwatchState.status = "paused";
}
function resetStopwatch() {
    pauseStopwatch();
    stopwatchState.elapsedTime = 0;
    updateStopwatchDisplay();
}
swStartBtn.addEventListener("click", startStopwatch);
swPauseBtn.addEventListener("click", pauseStopwatch);
swResetBtn.addEventListener("click", resetStopwatch);
// Timer Logic
function getTimerInputValues() {
    const minutes = Number(minutesInput.value) || 0;
    const seconds = Number(secondsInput.value) || 0;
    return minutes * 60 + seconds;
}
function updateTimerDisplay() {
    timerDisplay.textContent = formatTimerTime(timerState.remainingTime);
}
function startTimer() {
    timerPauseBtn.disabled = false;
    timerStartBtn.disabled = true;
    if (timerState.status === "started") {
        return;
    }
    if (timerState.remainingTime === 0) {
        timerState.totalTime = getTimerInputValues();
        timerState.remainingTime = timerState.totalTime;
    }
    if (timerState.remainingTime <= 0) {
        return;
    }
    timerState.status = "started";
    timerState.intervalId = window.setInterval(() => {
        timerState.remainingTime--;
        updateTimerDisplay();
        if (timerState.remainingTime <= 0) {
            pauseTimer();
            timerState.remainingTime = 0;
            updateTimerDisplay();
            alert("Timer Finished!");
        }
    }, 1000);
}
function pauseTimer() {
    timerPauseBtn.disabled = true;
    timerStartBtn.disabled = false;
    if (timerState.intervalId !== null) {
        clearInterval(timerState.intervalId);
    }
    timerState.status = "paused";
}
function resetTimer() {
    pauseTimer();
    timerState.totalTime = 0;
    timerState.remainingTime = 0;
    minutesInput.value = "";
    secondsInput.value = "";
    updateTimerDisplay();
}
timerStartBtn.addEventListener("click", startTimer);
timerPauseBtn.addEventListener("click", pauseTimer);
timerResetBtn.addEventListener("click", resetTimer);
// Utility Functions
function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
function formatTimerTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
}
// Initial Render
swPauseBtn.disabled = true;
timerPauseBtn.disabled = true;
updateStopwatchDisplay();
updateTimerDisplay();
