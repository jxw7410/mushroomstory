class Controller {
    constructor(){
        this.leftPress = false;
        this.rightPress = false;
        this.jumpPress = false;
        this.doublejumpPress = false;

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    handleKeyPress(e){
        if (e.key === 'ArrowLeft' || e.keyCode === '37')
            this.leftPress = e.type === 'keydown' ? true : false;
        else if (e.key === 'ArrowRight' || e.key_code === '39')
            this.rightPress = e.type === 'keydown' ? true : false;
        else if (e.key === 'a' || e.keyCode === '65')
            this.doublejumpPress = e.type === 'keydown' ? true : false;
        else if (e.key === " " || e.keyCode === '32')
            this.jumpPress = e.type === 'keydown' ? true : false;

    }
}

export default Controller;