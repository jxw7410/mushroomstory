class Engine {
    constructor(update, render) {
        this.accumulated_time = 0;
        this.time = window.performance.now();

        this.FPS = 1000 / 60;
        this.update = update;
        this.render = render;
        this.updated = false;
        this.RAF = null;
        this.run = this.run.bind(this);
        this.timeout = null;
        this._stop = false;  
    }

    run() {
        if (!this._stop){
            this.update();
            this.render();
            this.RAF = window.requestAnimationFrame(this.run);
        }
    }

    stop(){
        this._stop = true;
    }

    resume(){
        this._stop = false;
    }
}

export default Engine;