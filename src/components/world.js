import UserModel from './user_model'
import maps from './all_maps';
import FoodModel from './food_model';
import TileSheet from './tilesheet';

class World {
    constructor(){
        this.gravity = 0.5;
        this.friction = 0.6;
        this.player = new UserModel(0, 0);
        this.collision = this.collision.bind(this);
        this.update = this.update.bind(this);
        
        this.tile_size = 16; //represets 16 pixel
        this.columns = 76; //This has to match evenly to the canvas width
        this.rows = 38; //match to canvas height


        this.height = this.tile_size * this.rows;
        this.width = this.tile_size * this.columns;


        this.maps = maps();
        this.map_index = 0;
        this.map = null;
        this.map_assets = null;
        this.collisionMap = null;
        
        this.foodSpriteSheet = new TileSheet(16, 8);
        this.food_models = null;

        this.generateFoodModels = this.generateFoodModels.bind(this);
    }

    //Could be player or maybe even moving platforms
    load(){
        this.map = this.maps[this.map_index].background;
        this.map_assets = this.maps[this.map_index].assets;
        this.collisionMap = this.maps[this.map_index].collision;
        this.player.pos_x = this.maps[this.map_index].init_x;
        this.player.pos_y = this.maps[this.map_index].init_y;
        this.generateFoodModels();
    }
    generateFoodModels(){
        this.food_models = this.maps[this.map_index].foodsprite_coordinates.map( coord => {
            return new FoodModel(coord.x * this.tile_size, coord.y * this.tile_size, this.foodSpriteSheet, this.player);
        });
    }

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
            //Wall Slide right
            case 32:
                this.collideRight(object, tile_x + this.tile_size, 'SLIDE');
                return;

            //Wall slide left
            case 30:
                this.collideLeft(object, tile_x, 'SLIDE');
                return;
            case 21:
                if (this.collideTop(object, tile_y)) return;
                //debugger
                this.collideLeft(object, tile_x, 'SLIDE');
                return;
            case 22:
                if (this.collideTop(object, tile_y)) return;
                this.collideRight(object, tile_x + this.tile_size, 'SLIDE');
                return;
            //Bottom-left
            case 81:
                if (this.collideBottom(object, tile_y + this.tile_size)) return;
                this.collideLeft(object, tile_x);
                return
            
            //Bottom-right
            case 84:
                if (this.collideBottom(object, tile_y + this.tile_size)) return;
                this.collideRight(object, tile_x + this.tile_size);
                return;
            //Top-right
            case 16:
                if (this.collideTop(object, tile_y)) return;
                this.collideRight(object, tile_x + this.tile_size);
                return;
            //Top-left
            case 14:
                if (this.collideTop(object, tile_y)) return;
                this.collideLeft(object, tile_x);

            case 1: 
                if (this.collideTop (object, tile_y)) return;
                this.collideBottom(object, tile_y + this.tile_size);
                return;

            case 3:
                this.collideLeft(object, tile_x);
                return
            case 4:
                this.collideRight(object, tile_x + this.tile_size); 
                return;
        }
    }


    collideTop(object, tile_y){
       return object.handleCollideTop(tile_y);    
    }

    collideLeft(object, tile_x, type){
        return object.handleCollideLeft(tile_x, type);
    }

    collideRight(object, tile_x, type){
       return object.handleCollideRight(tile_x, type)
    }

    collideBottom(object, tile_y){
        return object.handleCollideBottom(tile_y);
    }

    update(){
        this.player.update(this.gravity, 0.6);
        this.collision(this.player);
        this.map_collision(this.player);
        this.food_models.forEach( food_model => food_model.collide());
    }
}

export default World;

/*

*/