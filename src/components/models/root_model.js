

class RootModel{
    constructor(pos_x, pos_y){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.old_pos_x = pos_x;
        this.old_pos_y = pos_y;
    }

    centerX() {
        return this.pos_y + this.width * 0.5;
    }

    centerY() {
        return this.pos_y+ this.height * 0.5;
    }

    top() {
        return this.pos_y;
    }

    old_top(){
        return this.old_pos_y;
    }

    bottom() {
        return this.pos_y + this.height;
    }

    old_bottom(){
        return this.old_pos_y + this.height;
    }

    left() {
        return this.pos_x;
    }

    old_left(){
        return this.old_pos_x;
    }


    right() {
        return this.pos_x + this.width;
    }

    old_right(){
        return this.old_pos_x + this.width;
    }
}

export default RootModel;