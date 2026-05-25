export interface StopwatchState {
  elapsedTime: number;
  intervalId: number | null;
  status: "idle" | "started" | "paused";
}

export interface TimerState {
  totalTime: number;
  remainingTime: number;
  intervalId: number | null;
  status: "idle" | "started" | "paused";
}
