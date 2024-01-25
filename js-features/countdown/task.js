class Timer {
  constructor() {
    this.intervalId = null;
    this.element = document.getElementById("timer");
    this.timer = Number(this.element.textContent);
  }

  init() {
    this.intervalId = setInterval(() => {
      this.timer -= 1;

      if (this.timer < 1) {
        this.timer = 0;
        alert('Вы победили в конкурсе');
        clearInterval(this.intervalId);
        window.location.href = "/js-features/countdown/download.test";
      }

      //this.element.textContent = this.timer;
      this.element.textContent = this.getCurrentFormattedTime();
    }, 1000);
  }

  getCurrentFormattedTime () {
    const date = new Date(0, 0, 0, 0, 0, this.timer);
    return (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) + ":" + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()) + ":" +  (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
  }
}

const timer = new Timer();
timer.init();