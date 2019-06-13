import UserModel from '../components/user_model'
import * as Maps from '../resources/maps';

class World {
    constructor(){
        this.gravity = 0.5;
        this.friction = 0.6;
        this.player = new UserModel(10, 0);
        this.collision = this.collision.bind(this);
        this.update = this.update.bind(this);
        
        this.tile_size = 4; //represets 4 pixel
        this.column = 76; //This has to match exactly to the sprite sheet 
        this.rows = 38


        this.height = this.tile_size * this.rows;
        this.width = this.tile_size * this.column;

        this.map = Maps.map1;
        this.collisionMap = null;


        this.collision = this.collision.bind(this);
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

        top = Math.floor(object.pos_y / this.tile_size);
        left = Math.floor(object.pos_x / this.tile_size);


        //collision map value
        value = this.collisionMap[top * this.columns + left]
        this.isCollide(value, object, left * this.tile_size, top * this.tile_size);
       
        
    }


    isCollide(value, object, pos_x, pos_y){
        //This function determines the value of the object to know
        //What kind of collision is present.
        switch(value){
            
        }
    }


    update(){
        if (this.player.jumping)
            this.player.delta_y += this.gravity;
        console.log(this.player.pos_x, this.width);
        this.player.update();
        this.collision(this.player);
    }
}

export default World;

/*

*/