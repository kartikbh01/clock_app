import { formatTime } from "../utils/timeFormatter.js";
export function initStopwatch() {
    const stopwatchDisplay = document.querySelector("#stopwatch-display");
    const swStartBtn = document.querySelector("#sw-start");
    const swPauseBtn = document.querySelector("#sw-pause");
    const swResetBtn = document.querySelector("#sw-reset");
    const stopwatchState = {
        elapsedTime: 0,
        intervalId: null,
        status: "idle",
    };
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
            stopwatchState.intervalId = null;
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
    // Initial UI state
    swPauseBtn.disabled = true;
    updateStopwatchDisplay();
}
