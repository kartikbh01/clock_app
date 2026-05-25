import { StopwatchState } from "../types/types.js";
import { formatTime } from "../utils/timeFormatter.js";

export function initStopwatch(): void {
  const stopwatchDisplay = document.querySelector(
    "#stopwatch-display"
  ) as HTMLDivElement;

  const swStartBtn = document.querySelector("#sw-start") as HTMLButtonElement;
  const swPauseBtn = document.querySelector("#sw-pause") as HTMLButtonElement;
  const swResetBtn = document.querySelector("#sw-reset") as HTMLButtonElement;

  const stopwatchState: StopwatchState = {
    elapsedTime: 0,
    intervalId: null,
    status: "idle",
  };

  function updateStopwatchDisplay(): void {
    stopwatchDisplay.textContent = formatTime(stopwatchState.elapsedTime);
  }

  function startStopwatch(): void {
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

  function pauseStopwatch(): void {
    swStartBtn.disabled = false;
    swPauseBtn.disabled = true;
    if (stopwatchState.intervalId !== null) {
      clearInterval(stopwatchState.intervalId);
      stopwatchState.intervalId = null;
    }

    stopwatchState.status = "paused";
  }

  function resetStopwatch(): void {
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
