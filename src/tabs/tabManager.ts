export function initTabs(): void {
  const stopwatchTab = document.querySelector(
    "#stopwatch-tab"
  ) as HTMLButtonElement;

  const timerTab = document.querySelector("#timer-tab") as HTMLButtonElement;

  const stopwatchSection = document.querySelector(
    "#stopwatch-section"
  ) as HTMLElement;

  const timerSection = document.querySelector("#timer-section") as HTMLElement;

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
}
