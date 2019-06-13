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
    }

    run() {
        this.update();
        this.render();
        this.RAF = window.requestAnimationFrame(this.run);
    }

}

export default Engine;