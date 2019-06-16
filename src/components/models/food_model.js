import RootModel from "./root_model";
import {collisionDetection} from '../../utils/util_tools'

class FoodModel extends RootModel{
    constructor(pos_x, pos_y, foodSpriteSheet, player){
        super(pos_x, pos_y);

        this.player = player;
        this.width = 16;
        this.height = 16;

        this.status = 1;
    

        this.animation_count = 4;
        this.delta_y = 1;
        this.accumulated_time = 0;
    
        this.foodSpriteSheet = foodSpriteSheet;
        this.frame_set = { sx: 64, sy: 32 }

    }


    updateTime(){
        this.accumulated_time += 10;
        
        if (this.accumulated_time === 100)
            this.accumulated_time = 0;
    }

    updatePosition(){
        if (this.animation_count === 8 || this.animation_count === 0)
            this.delta_y *= -1;
        this.animation_count += this.delta_y
    }

    animate(ctx, dest_x, dest_y){
        if (dest_x || dest_y)
            ctx.drawImage(this.foodSpriteSheet.image, this.frame_set.sx, this.frame_set.sy, this.width, this.height,
                    dest_x, dest_y + this.animation_count - 5, this.width, this.height);
        
       if (this.accumulated_time === 0)
            this.updatePosition();
        
        this.updateTime();
    }   

    collide(){
        if(collisionDetection(this, this.player)){
            this.status = 0;
        }
    }
}

export default FoodModel;