import Display from './display';
import World from './world';
import Engine from './engine';
import Controller from './controller';
import Timer from './timer';

class Game {
    constructor() {
        this.display = new Display();
        this.world = new World(this.display, this);
        this.player = this.world.player;
        this.controller = new Controller(this);
        this.sounds = {};
        this.engine = null;

        this.timer = new Timer(this);
        this.muted = false;
        this.game_state = 'START';

        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    renderStart() {
        this.display.drawStartBackground();
        this.display.drawStartText();
    }

    renderGame() {
        this.display.drawMap(this.world.map.main_layer, this.world.columns, this.player);
        this.display.drawMap(this.world.map.assets, this.world.columns, this.player)
        this.display.drawPlatform(this.world.platform_models, this.world.map);
        this.display.drawFood(this.world.food_models, this.world.map);
        this.display.drawPlayer(this.player);
    }

    renderEnd() {
        this.display.drawStartBackground();
        this.display.drawEndText();
    }

    render() {
        this.display.clearCanvas();
        this.display.drawBackground();
        this.display.drawClouds();
        switch (this.game_state) {
            case 'START':
                this.renderStart();
                break;
            case 'PLAY':
                this.renderGame();
                break;
            case 'END':
                this.renderEnd();
                break;
            default:
                break;
        }
    }

    update() {
        if (this.game_state === 'PLAY') {
            if (this.controller.leftPress)
                this.player.moveLeft();

            if (this.controller.rightPress)
                this.player.moveRight();

            if (this.controller.jumpPress){
                if (!this.player.jumping)
                    this.player.jump();
                else 
                    this.player.doubleJump();
                this.controller.jumpPress = false;
            }


            this.world.update();
        }
    }

    mute() {
        if (!this.muted) {
            Object.values(this.sounds).forEach(audio => {
                if (Array.isArray(audio))
                    audio.forEach(ele => ele.muted = true)
                else
                    audio.muted = true;
            });
            this.muted = true;
        }
    }

    unmute() {
        if (this.muted) {
            Object.values(this.sounds).forEach(audio => {
                if (Array.isArray(audio))
                    audio.forEach(ele => ele.muted = false)
                else
                    audio.muted = false;
            });
            this.muted = false;
        }
        
    }

    handleMute(e){
        e.preventDefault();
        if (this.game_state !== 'START'){
            if (this.muted){
                this.unmute();
                e.target.innerText = 'Mute';
            } else {
                this.mute();
                e.target.innerText = 'Unmute';
            }
        }
        e.target.blur();
    }

    handlePause(e){
        e.preventDefault();
        if (this.game_state === 'PLAY'){
            if (this.engine._stop){
                this.engine.resume();
                this.engine.run();
                this.timer.resume();
                e.target.innerText = 'Pause';
                document.getElementById('pause-screen').style.opacity = 0;
            } else {
                this.engine.stop();
                e.target.innerText = 'Resume'
                this.timer.pause();
                document.getElementById('pause-screen').style.opacity = 0.5;
            }
        }
        e.target.blur();
    }

    handleReset(e){
        e.preventDefault();
        if(this.game_state !== 'START' && !this.engine._stop){ 
            if(this.game_state === 'END'){
                this.unmute();
                document.getElementById('mute-button').innerHTML = 'Mute';
            }
            this.world.map_index = 0;
            this.player.points = 0;
            this.player.delta_x = 0;
            this.player.delta_y = 0;
            this.player.updatePoints(0);
            this.sounds.bgm.currentTime = 0;
            this.timer.clear();
            this.timer.start();
            this.world.load();
            this.game_state = 'PLAY';
            //debugger
        }
        e.target.blur();
    }

    start() {
        const mute_button = document.getElementById('mute-button');
        const pause_button = document.getElementById('pause-button');
        const reset_button = document.getElementById('reset-button');

        mute_button.addEventListener('click', this.handleMute, false);
        pause_button.addEventListener('click', this.handlePause, false);
        reset_button.addEventListener('click', this.handleReset, false)

        document.addEventListener('keydown', this.controller.handleKeyPress)
        document.addEventListener('keyup', this.controller.handleKeyPress)


        this.engine = new Engine(this.update, this.render);

        const init = new Promise((resolve, reject) => {
            this.display.mainSheet.image.src = './assets/images/SimpleTileset2.png';
            this.display.startBackground.image.src = './assets/images/Background1.png';
            this.display.cloudSprite.image.src = './assets/images/Background2.png';
            this.display.background.image.src = './assets/images/Background3.png';
            this.player.playerSpriteLeft.image.src = './assets/images/Mushroom.png';
            this.player.playerSpriteRight.image.src = './assets/images/Mushroom_reverse.png';
            this.world.foodSpriteSheet.image.src = './assets/images/Food.png';
            this.world.platformSheet = this.display.mainSheet;

            this.sounds.bgm = new Audio("./assets/sounds/maplestory.mp3");
            this.sounds.jump = []
            for(let i = 0; i < 5; i++ )
                this.sounds.jump.push(new Audio("./assets/sounds/jumping.wav"));
            this.sounds.walk = new Audio("./assets/sounds/walking.wav");
            this.sounds.slide = new Audio("./assets/sounds/gravel.wav");
            this.sounds.bubble = new Audio("./assets/sounds/bubble.mp3")
            this.sounds.bgm.loop = true;

            this.player.sounds = this.sounds;
            this.world.sounds = this.sounds;

            resolve("Engine Execute!");
        });

        init.then(response => {
            this.world.load();
            this.timer.start();
            this.sounds.jump.volume = 0.2;
            this.sounds.slide.volume = 0.4;
            this.engine.run();
        });

    }

}

export default Game;