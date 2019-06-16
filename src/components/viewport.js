class ViewPort{
    constructor(){
        this.x = 0;
        this.y = 0;
        //Set to match canvas height/width;
        this.width = 608;
        this.height = 304;
        this.max_x = 0;
        this.max_y = 0;
        this.indices = {};
    }


    focus(object){
        object.screen_x = this.width / 2;
        object.screen_y = this.height / 2;
        this.x = object.pos_x - this.width * 0.5;
        this.y = object.pos_y - this.height * 0.5;

        this.x = Math.max(0, Math.min(this.x, this.max_x));
        this.y = Math.max(0, Math.min(this.y, this.max_y));

        if (object.pos_x < this.width / 2 || 
            object.pos_x > this.max_x + this.width / 2 )
                object.screen_x = object.pos_x - this.x;

        if (object.pos_y < this.height / 2 || 
            object.pos_y > this.max_y + this.height / 2)
                object.screen_y = object.pos_y - this.y;
    }
}


export default ViewPort;