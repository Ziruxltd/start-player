class Timer {
  private initialTime: number;
  private remainingTime: number;
  private timerId: number | null;
  private isRunning: boolean;

  constructor(seconds: number) {
    if (seconds < 0) {
      throw new Error("Initial time cannot be negative");
    }
    this.initialTime = seconds;
    this.remainingTime = seconds;
    this.timerId = null;
    this.isRunning = false;
  }

  start(callback?: (time: number) => void): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.timerId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        if (callback) callback(this.remainingTime);
      } else {
        this.stop();
      }
    }, 1000);
  }

  stop(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isRunning = false;
  }

  reset(): void {
    this.stop();
    this.remainingTime = this.initialTime;
  }

  getTime(): number {
    return this.remainingTime;
  }

  isTimerRunning(): boolean {
    return this.isRunning;
  }
}

export default Timer;