class Timer {
    constructor(game) {
        this.game = game;
        this.interval = null;
        this.seconds = 0;
        this.minutes = 0;
        //TBH if you need to reach hours to beat my game, you need a life.
        this.hours = 0;
        this.state = null;
        this.updateTime = this.updateTime.bind(this);
        this.timeHTMLEntity = document.getElementById('time');
    }

    updateTime() {
        if (this.game.game_state === 'PLAY' && this.state !== 'PAUSE') {
            this.seconds += 1;
            if (this.seconds === 60) {
                this.seconds = 0;
                this.minutes += 1;
            }

            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
            }

            if (this.hours === 24) {
                this.hours = 0;
            }

            this.timeHTMLEntity.innerHTML = `
                ${this.hours > 9 ? this.hours : `0${this.hours}`}:${this.minutes > 9 ? this.minutes : `0${this.minutes}`}:${this.seconds > 9 ? this.seconds : `0${this.seconds}`}`;
        }
    }

    pause(){
        this.state = 'PAUSE';
    }

    resume(){
        this.state = null;
    }

    start() {
        this.interval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    clear() {
        clearInterval(this.interval);
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;

        this.timeHTMLEntity.innerHTML = `${this.hours > 9 ? this.hours : `0${this.hours}`}:${this.minutes > 9 ? this.minutes : `0${this.minutes}`}:${this.seconds > 9 ? this.seconds : `0${this.seconds}`}`
    }

}

export default Timer;