class CookieClicker {
  constructor() {
    this.elementCounter = document.getElementById('clicker__counter');
    this.elementSpeed = document.getElementById('clicker__speed');
    this.elementCookie = document.getElementById('cookie');
    this.width = this.elementCookie.width;
    this.changeWidth = 100;
    this.timerStart = new Date();
    this.timerEnd = 0;
  }

  init() {
    this.elementCookie.onclick = (event) => {
      this.getSpeed();
      this.countClick();
    };
  }

  getSpeed() {
    this.timerEnd = new Date();
    this.elementSpeed.textContent = (1 / ((this.timerEnd - this.timerStart) / 1000)).toFixed(2);
    this.timerStart = this.timerEnd;
  }

  countClick() {
    this.elementCounter.textContent = Number(this.elementCounter.textContent) + 1;
    this.elementCookie.width = this.width + this.changeWidth;
    setTimeout(() => {
      this.elementCookie.width = this.width;
    }, 100);
  }
}

const cookieClicker = new CookieClicker();
cookieClicker.init();