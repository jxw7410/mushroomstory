

class RootModel{
    constructor(){

    }

    centerX() {
        return this.posX + this.width * 0.5;
    }

    centerY() {
        return this.posY + this.height * 0.5;
    }

    top() {
        return this.posY;
    }

    bottom() {
        return this.posY + this.height;
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }
}

export default RootModel;