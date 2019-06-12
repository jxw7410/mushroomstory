class Engine{
    constructor(update, render){
        this.update = update;
        this.render = render;
        this.run = this.run.bind(this);
    }

    run() {
        this.render();
        this.update();
        window.requestAnimationFrame(run);
    }
}

export default Engine;