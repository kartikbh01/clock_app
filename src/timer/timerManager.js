import { formatTimerTime } from "../utils/timeFormatter.js";
export function initTimer() {
    const minutesInput = document.querySelector("#minutes-input");
    const secondsInput = document.querySelector("#seconds-input");
    const timerDisplay = document.querySelector("#timer-display");
    const timerStartBtn = document.querySelector("#timer-start");
    const timerPauseBtn = document.querySelector("#timer-pause");
    const timerResetBtn = document.querySelector("#timer-reset");
    const timerState = {
        totalTime: 0,
        remainingTime: 0,
        intervalId: null,
        status: "idle",
    };
    function getTimerInputValues() {
        const minutes = Number(minutesInput.value) || 0;
        const seconds = Number(secondsInput.value) || 0;
        return minutes * 60 + seconds;
    }
    function updateTimerDisplay() {
        timerDisplay.textContent = formatTimerTime(timerState.remainingTime);
    }
    function startTimer() {
        if (timerState.remainingTime === 0) {
            timerState.totalTime = getTimerInputValues();
            timerState.remainingTime = timerState.totalTime;
        }
        if (timerState.remainingTime <= 0) {
            return;
        }
        timerPauseBtn.disabled = false;
        timerStartBtn.disabled = true;
        if (timerState.status === "started") {
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
            timerState.intervalId = null;
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
    // Initial UI state
    timerPauseBtn.disabled = true;
    updateTimerDisplay();
}
