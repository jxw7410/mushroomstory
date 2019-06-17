class Controller {
    constructor(game){
        this.game = game;
        this.leftPress = false;
        this.rightPress = false;
        this.jumpPress = false;
        this.doublejumpPress = false;

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    controlSetStart(e){
        //debugger
        if (e.key === 'Enter' || e.keyCode === '13'){
            this.game.game_state = 'PLAY';
            this.game.sounds.bgm.play();
        }
    }

    controlSetPlay(e){
        if (e.key === 'ArrowLeft' || e.keyCode === '37')
            this.leftPress = e.type === 'keydown' ? true : false;
        else if (e.key === 'ArrowRight' || e.key_code === '39')
            this.rightPress = e.type === 'keydown' ? true : false;
        else if (e.key === 'a' || e.keyCode === '65')
            this.doublejumpPress = e.type === 'keydown' ? true : false;
        else if (e.key === " " || e.keyCode === '32') {
            this.jumpPress = e.type === 'keydown' ? true : false;
        }
    }

    handleKeyPress(e){
        switch(this.game.game_state){
            case 'START':
                this.controlSetStart(e);
                break;
            case 'PLAY':
                this.controlSetPlay(e);
                break;
            case 'END':
                break;
        }
    }
}

export default Controller;