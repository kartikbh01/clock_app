import { TimerState } from "../types/types.js";
import { formatTimerTime } from "../utils/timeFormatter.js";

export function initTimer(): void {
  const minutesInput = document.querySelector(
    "#minutes-input"
  ) as HTMLInputElement;

  const secondsInput = document.querySelector(
    "#seconds-input"
  ) as HTMLInputElement;

  const timerDisplay = document.querySelector("#timer-display") as HTMLDivElement;

  const timerStartBtn = document.querySelector(
    "#timer-start"
  ) as HTMLButtonElement;

  const timerPauseBtn = document.querySelector(
    "#timer-pause"
  ) as HTMLButtonElement;

  const timerResetBtn = document.querySelector(
    "#timer-reset"
  ) as HTMLButtonElement;


  const timerState: TimerState = {
    totalTime: 0,
    remainingTime: 0,
    intervalId: null,
    status: "idle",
  };

  function getTimerInputValues(): number {
    const minutes = Number(minutesInput.value) || 0;
    const seconds = Number(secondsInput.value) || 0;

    return minutes * 60 + seconds;
  }

  function updateTimerDisplay(): void {
    timerDisplay.textContent = formatTimerTime(timerState.remainingTime);
  }

  function startTimer(): void {
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

  function pauseTimer(): void {
    timerPauseBtn.disabled = true;
    timerStartBtn.disabled = false;
    if (timerState.intervalId !== null) {
      clearInterval(timerState.intervalId);
      timerState.intervalId = null;
    }

    timerState.status = "paused";
  }

  function resetTimer(): void {
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
