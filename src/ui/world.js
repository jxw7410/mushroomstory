import UserModel from '../components/user_model'
import * as map1 from '../resources/map-1.json';
import * as map1_collision from '../resources/map1_collide.json';


class World {
    constructor(){
        this.gravity = 0.098;
        this.friction = 0.6;
        this.player = new UserModel(10, 130);
        this.collision = this.collision.bind(this);
        this.update = this.update.bind(this);
        
        this.tile_size = 4; //represets 4 pixel
        this.columns = 76; //This has to match evenly to the canvas width
        this.rows = 38; //match to canvas height


        this.height = this.tile_size * this.rows;
        this.width = this.tile_size * this.columns;

        this.map = map1.layers[0].data;
        this.collisionMap = map1_collision.layers[0].data;


        this.collision = this.collision.bind(this);
        this.isCollide = this.isCollide.bind(this);
        this.map_collision = this.map_collision.bind(this);
    }

    //Could be player or maybe even moving platforms
    collision(object){
        if (object.pos_x < 0) 
           object.handleCollisionWithWorld('1', this);
        else if (object.pos_x + object.width  > this.width)
           object.handleCollisionWithWorld('2', this);
        
        //This will be modified so if the user falls out of bound, he/she resets
        if (object.pos_y + object.height > this.height)
            object.handleCollisionWithWorld('3', this);
        else if (object.pos_y < 0) 
            object.handleCollisionWithWorld('4', this);
        
    }


    //I like snake casing, deal with it.
    map_collision(object){  
        let bottom, top, left, right, value;

        top = Math.floor(object.top() / this.tile_size);
        left = Math.floor(object.left() / this.tile_size);
        value = this.collisionMap[top * this.columns + left]
        this.isCollide(value, object, left * this.tile_size, top * this.tile_size);
       

        top = Math.floor(object.top() / this.tile_size);
        right = Math.floor(object.right() / this.tile_size);
        value = this.collisionMap[top * this.columns + right];
        this.isCollide(value, object, right * this.tile_size, top * this.tile_size);
        
    

        bottom = Math.floor(object.bottom() / this.tile_size);
        left = Math.floor(object.left() / this.tile_size);
        value = this.collisionMap[top * this.columns + left];
        this.isCollide(value, object, left * this.tile_size, bottom * this.tile_size);

       

        bottom = Math.floor(object.bottom() / this.tile_size);
        right = Math.floor(object.right() / this.tile_size);
        value = this.collisionMap[top * this.columns + right];
        this.isCollide(value, object, right * this.tile_size, bottom * this.tile_size);

    }   


    isCollide(value, object, tile_x, tile_y){
        switch(value){
            case 769:
                this.collideRight(object, tile_x + this.tile_size, 'SLIDE');
                return;
            case 770:
                this.collideLeft(object, tile_x, 'SLIDE');
                return;
        
            case 1519:
                if (this.collideBottom(object, tile_y + this.tile_size)) return;
                this.collideLeft(object, tile_x);
                return
            case 1520:
                if (this.collideBottom(object, tile_y + this.tile_size)) return;
                this.collideRight(object, tile_x + this.tile_size);
                return;
            case 1: 
                //debugger
                if (this.collideTop (object, tile_y)) return;
                this.collideBottom(object, tile_y + this.tile_size);
                return;
            case 2:
                if (this.collideBottom(object, tile_y + this.tile_size)) return;
                this.collideTop(object, tile_y);
                return;

            case 3:
                this.collideLeft(object, tile_x);
                return
            case 4:
                this.collideRight(object, tile_x + this.tile_size); 
                return;
            default: 
                break;
        }
    }


    collideTop(object, tile_y){
        //debugger
        if (object.bottom() > tile_y && object.old_bottom() <= tile_y ){
            //debugger
            object.pos_y = (tile_y-0.01) - object.height;
            object.delta_y = 0;
            object.delta_x = 0;
            object.jumping = false;
            object.doubleJumping = false;
            object.type = null;
            return true;
        } 
        return false;
    }


    collideLeft(object, tile_x, type){
        if (type === 'SLIDE'){
            if (object.right() > tile_x){
                object.pos_x = (tile_x - 0.01) - object.width;
                object.delta_x = 0;
                object.delta_y = 0.1;
                object.jumping = false;
                object.doubleJumping = false;
                object.type = "slide-left";
                return true;
            }
        }
        else if (object.right() > tile_x && object.old_right() <= tile_x){
            object.pos_x = (tile_x - 0.01) - object.width;
            object.delta_x = 0; 
            object.type = null;
            return true;
        } else if (object.right() > tile_x) {
            object.pos_x = (tile_x - 0.01) - object.width;
            object.delta_x = 0;
            object.type = null;
            return true;
        }

        return false;
    }

    collideRight(object, tile_x, type){
        if (type === 'SLIDE'){
            if(object.left() < tile_x){
                object.pos_x = tile_x;
                object.delta_y = 0.1;
                object.delta_x = 0;
                object.type = "slide-right";
                object.jumping = false;
                object.doubleJumping = false;
                return true;
            }
        }
        else if(object.left() < tile_x && object.old_left() >= tile_x){
            object.pos_x = tile_x;
            object.delta_x = 0;
            object.type = null;
            return true;
        }
        else if (object.left() < tile_x){ 
            object.pos_x = tile_x;
            object.delta_x = 0;
            object.type = null;
            return true;
        }
        return false;
    }

    collideBottom(object, tile_y){
        if (object.top() < tile_y && object.old_top() >= tile_y){
            object.pos_y = tile_y;
            object.delta_y = 0;
            object.delta_x = 0;
            object.type = null;
            return true;
        }
        return false;
    }

    update(){
        this.player.delta_y += this.gravity;
    
        this.player.update();
        this.collision(this.player);
        this.map_collision(this.player);
    }
}

export default World;

/*

*/