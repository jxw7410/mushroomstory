import RootModel from './root_model';
import {collisionDetection} from '../../utils/util_tools';

class PlatformModel extends RootModel{
    constructor(pos_x, pos_y, delta, traversal, tileSheet, player){
        super(pos_x, pos_y);

        this.player = player;
        this.height = 16;
        this.width = 64;
        //Because my dumb condition triggers a reverse logic immediately
        this.delta_x = -delta; 
        this.delta_y = delta;
        
        this.accumulated_time = 0;
        this.traversal = traversal;
        this.traversal_distance = 0;
        this.tileSheet = tileSheet;
        this.frame_set = { sx: 0, sy: 48 }

    }

    updateTime(){
        this.accumulated_time += 10;

        if (this.accumulated_time === 10)
            this.accumulated_time = 0;
    }

    updatePosition(){
        if (this.traversal_distance === 0 || 
            this.traversal_distance === this.traversal.distance){
                this.delta_x *= -1;
                this.delta_y *= -1;
            }
        
        
        if (this.traversal.type === 'HORIZONTAL'){
            this.pos_x += this.delta_x;
            this.traversal_distance += this.delta_x;
        }
        else{ 
            this.pos_y += this.delta_y;
            this.traversal_distance -= this.delta_y;
        }
    }

    animate(ctx, dest_x, dest_y){
        if (dest_x || dest_y)
            ctx.drawImage(this.tileSheet.image, this.frame_set.sx, this.frame_set.sy, this.width, this.height,
                dest_x + (this.pos_x % 16), dest_y + (this.pos_y % 16), this.width, this.height)
        
        if (this.accumulated_time === 0)
            this.updatePosition();

        this.updateTime();
    }

    collide(){
        if(collisionDetection(this, this.player)){
            if (this.traversal.type === 'HORIZONTAL' && 
                this.player.bottom() > this.top() && 
                this.player.old_bottom() <= this.top()){

                this.player.pos_x += this.delta_x;
                this.player.pos_y = (this.top()- 0.01) - this.player.height;
                this.player.jumping = false;
                this.player.doubleJumping = false;
                this.player.type ='platform';
           
                if (this.player.delta_y > 0)
                    this.player.delta_y = 0;
                
            }
            else if (this.traversal.type === 'VERTICAL'){
                //debugger
                this.player.pos_y += this.delta_y;
                this.player.pos_y = this.pos_y - 0.01;
                this.player.jumping = false;
                this.player.doubleJumping = false;
                this.player.type = 'platform';
                if (this.player.delta_y > 0)
                    this.player.delta_y = 0;
            }        
        }
    }
}

export default PlatformModel;

