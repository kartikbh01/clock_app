// Tabs
const stopwatchTab = document.querySelector(
  "#stopwatch-tab"
) as HTMLButtonElement;

const timerTab = document.querySelector("#timer-tab") as HTMLButtonElement;

const stopwatchSection = document.querySelector(
  "#stopwatch-section"
) as HTMLElement;

const timerSection = document.querySelector("#timer-section") as HTMLElement;

// Stopwatch
const stopwatchDisplay = document.querySelector(
  "#stopwatch-display"
) as HTMLDivElement;

const swStartBtn = document.querySelector("#sw-start") as HTMLButtonElement;

const swPauseBtn = document.querySelector("#sw-pause") as HTMLButtonElement;

const swResetBtn = document.querySelector("#sw-reset") as HTMLButtonElement;

// Timer
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
swStartBtn.addEventListener("click", () => {});

// 3. Stopwatch pause
swPauseBtn.addEventListener("click", () => {});

// 4. Stopwatch reset
swResetBtn.addEventListener("click", () => {});

// 5. Timer start
timerStartBtn.addEventListener("click", () => {});

// 6. Timer pause
timerPauseBtn.addEventListener("click", () => {});

// 7. Timer reset
timerResetBtn.addEventListener("click", () => {});

// 8. Update displays


// 9. Input validation
