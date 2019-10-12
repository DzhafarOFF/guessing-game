class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.res = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() { 
        this.res = Math.ceil((this.max + this.min) / 2)
        return this.res;
    }

    lower() {
        this.setRange(this.min, this.res);
    }

    greater() {
        this.setRange(this.res, this.max);
    }
}

module.exports = GuessingGame;
