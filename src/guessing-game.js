class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.num = this.max - this.min;
        this.num = Math.floor(this.num / 2)
        this.num = this.max - this.num;
        this.middle = this.num;
        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
