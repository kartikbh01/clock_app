interface StopwatchState {
  elapsedTime: number;
  intervalId: number | null;
  status: "idle" | "started" | "paused";
}

interface TimerState {
  totalTime: number;
  remainingTime: number;
  intervalId: number | null;
  status: "idle" | "started" | "paused";
}

// Tabs
const stopwatchTab = document.querySelector(
  "#stopwatch-tab"
) as HTMLButtonElement;

const timerTab = document.querySelector("#timer-tab") as HTMLButtonElement;

const stopwatchSection = document.querySelector(
  "#stopwatch-section"
) as HTMLElement;

const timerSection = document.querySelector("#timer-section") as HTMLElement;

// Stopwatch Elements
const stopwatchDisplay = document.querySelector(
  "#stopwatch-display"
) as HTMLDivElement;

const swStartBtn = document.querySelector("#sw-start") as HTMLButtonElement;
const swPauseBtn = document.querySelector("#sw-pause") as HTMLButtonElement;
const swResetBtn = document.querySelector("#sw-reset") as HTMLButtonElement;
swPauseBtn.disabled = true;

// Timer Elements
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

// States
const stopwatchState: StopwatchState = {
  elapsedTime: 0,
  intervalId: null,
  status: "idle",
};

const timerState: TimerState = {
  totalTime: 0,
  remainingTime: 0,
  intervalId: null,
  status: "idle",
};

// Tab Logic
function showStopwatch(): void {
  stopwatchTab.classList.add("active");
  timerTab.classList.remove("active");

  stopwatchSection.classList.add("active-section");
  timerSection.classList.remove("active-section");
}

function showTimer(): void {
  timerTab.classList.add("active");
  stopwatchTab.classList.remove("active");

  timerSection.classList.add("active-section");
  stopwatchSection.classList.remove("active-section");
}
stopwatchTab.addEventListener("click", showStopwatch);
timerTab.addEventListener("click", showTimer);

// Stopwatch Logic

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

// Timer Logic

function getTimerInputValues(): number {
  const minutes = Number(minutesInput.value) || 0;
  const seconds = Number(secondsInput.value) || 0;

  return minutes * 60 + seconds;
}

function updateTimerDisplay(): void {
  timerDisplay.textContent = formatTimerTime(timerState.remainingTime);
}

function startTimer(): void {
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

function pauseTimer(): void {
  timerPauseBtn.disabled = true;
  timerStartBtn.disabled = false;
  if (timerState.intervalId !== null) {
    clearInterval(timerState.intervalId);
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

// Utility Functions
function formatTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function formatTimerTime(totalSeconds: number): string {
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
