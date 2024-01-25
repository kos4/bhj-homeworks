class MoleGame {
  constructor() {
    this.elementDead = document.getElementById('dead');
    this.elmentLost = document.getElementById('lost');
    this.win = 10;
    this.losing = 5;

    this.regEvent();
  }

  getHole(index) {
    return document.getElementById('hole' + index);
  }

  checkHole(event) {
    if (event.target.classList.contains('hole_has-mole')) {
      this.elementDead.textContent = Number(this.elementDead.textContent) + 1;
    } else {
      this.elmentLost.textContent = Number(this.elmentLost.textContent) + 1;
    }
    this.checkResult();
  }

  regEvent() {
    for (let i = 1; i <= 9; i++) {
      this.getHole(i).onclick = (event) => {
        this.checkHole(event);
      };
    }
  }

  checkResult() {
    if (Number(this.elmentLost.textContent) === this.losing) {
      alert('Вы проиграли.');
      this.resetCounts();
    } else if (Number(this.elementDead.textContent) === this.win) {
      alert('Вы победили!');
      this.resetCounts();
    }
  }

  resetCounts() {
    this.elementDead.textContent = 0;
    this.elmentLost.textContent = 0;
  }
}

const moleGame = new MoleGame();