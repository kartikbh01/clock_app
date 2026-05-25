"use strict";
// Tabs
const stopwatchTab = document.querySelector("#stopwatch-tab");
const timerTab = document.querySelector("#timer-tab");
const stopwatchSection = document.querySelector("#stopwatch-section");
const timerSection = document.querySelector("#timer-section");
// Stopwatch
const stopwatchDisplay = document.querySelector("#stopwatch-display");
const swStartBtn = document.querySelector("#sw-start");
const swPauseBtn = document.querySelector("#sw-pause");
const swResetBtn = document.querySelector("#sw-reset");
// Timer
const minutesInput = document.querySelector("#minutes-input");
const secondsInput = document.querySelector("#seconds-input");
const timerDisplay = document.querySelector("#timer-display");
const timerStartBtn = document.querySelector("#timer-start");
const timerPauseBtn = document.querySelector("#timer-pause");
const timerResetBtn = document.querySelector("#timer-reset");
// 1. Tab switching
stopwatchTab.addEventListener("click", () => {
    stopwatchTab.classList.add("active");
    timerTab.classList.remove("active");
    stopwatchSection.classList.add("active-section");
    timerSection.classList.remove("active-section");
});
timerTab.addEventListener("click", () => {
    timerTab.classList.add("active");
    stopwatchTab.classList.remove("active");
    timerSection.classList.add("active-section");
    stopwatchSection.classList.remove("active-section");
});
// 2. Stopwatch start
swStartBtn.addEventListener("click", () => { });
// 3. Stopwatch pause
swPauseBtn.addEventListener("click", () => { });
// 4. Stopwatch reset
swResetBtn.addEventListener("click", () => { });
// 5. Timer start
timerStartBtn.addEventListener("click", () => { });
// 6. Timer pause
timerPauseBtn.addEventListener("click", () => { });
// 7. Timer reset
timerResetBtn.addEventListener("click", () => { });
// 8. Update displays
// 9. Input validation
