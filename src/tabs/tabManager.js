export function initTabs() {
    const stopwatchTab = document.querySelector("#stopwatch-tab");
    const timerTab = document.querySelector("#timer-tab");
    const stopwatchSection = document.querySelector("#stopwatch-section");
    const timerSection = document.querySelector("#timer-section");
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
}
