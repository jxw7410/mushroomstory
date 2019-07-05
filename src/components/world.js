import UserModel from './models/user_model'
import maps from './all_maps';
import FoodModel from './models/food_model';
import TileSheet from './tilesheet';
import PlatformModel from './models/platform_model';

class World {
    constructor(display, game){
        this.game = game;
        this.display = display;

        this.gravity = 0.5;
        this.friction = 0.6;
        this.player = new UserModel(0, 0);
        this.collision = this.collision.bind(this);
        this.update = this.update.bind(this);
        
        this.tile_size = 16; //represets 16 pixel
        this.columns = 0; //This has to match evenly to actual dimension of the map
        this.rows = 0; //This has to match evenly to the actual dimension of the map
    

        this.height = 0;
        this.width = 0;
        this.sounds = null;

        this.maps = maps();
        this.map_index = 0;
        this.map = null;
        this.checkPointIndex = 0;
        
        this.foodSpriteSheet = new TileSheet(16, 8);
        this.platformSheet = null //Going to share the same tilesheet as the maps
        //For other sprites maybe
        this.food_models = null;
        this.platform_models = null;
    }

  
    load(){
        this.map = this.maps[this.map_index]
        this.player.pos_x = this.map.init_x;
        this.player.pos_y = this.map.init_y;
        this.checkPointIndex = 0;
        this.player.init_x = this.player.pos_x;
        this.player.init_y = this.player.pos_y;
        this.columns = this.map.columns;
        this.rows = this.map.rows;
        this.width = this.columns * this.tile_size;
        this.height = this.rows * this.tile_size;
   
        this.display.updateViewPort(this.map);
        this.generateFoodModels();
        this.generatePlatformModels();
    }

    nextMap(){
        this.map_index += 1;
        if (this.map_index >= this.maps.length){
            this.game.game_state = 'END'
            this.game.mute();
        }
        else 
            this.load();
    }

    updateCheckPoint() {
        if (this.checkPointIndex < this.map.checkpoints.length){
            const { x, y } = this.map.checkpoints[this.checkPointIndex];
            if (this.player.init_x !== x && this.player.init_y !== y) {
                this.player.init_x = x * 16;
                this.player.init_y = y * 16;
            }
            this.checkPointIndex++;
        }
    }

    generateFoodModels(){
        this.food_models = this.map.food_coordinates.map( coord => {
            return new FoodModel(coord.x * this.tile_size, coord.y * this.tile_size, this.foodSpriteSheet, this.sounds, this.player);
        });
    }

    generatePlatformModels(){
        this.platform_models = this.map.platforms.map( platform =>{
            return new PlatformModel(platform.x * this.tile_size, platform.y * this.tile_size, platform.delta, platform.traversal, this.platformSheet, this.player);
        })
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



    map_collision(player){  
        let bottom, top, left, right, value;

        top = Math.ceil(player.top() / this.tile_size);
        left = Math.floor(player.left() / this.tile_size);
        value = this.map.collision[top * this.columns + left]
        this.isCollide(value, player, left * this.tile_size, top * this.tile_size);
       

        top = Math.ceil(player.top() / this.tile_size);
        right = Math.floor(player.right() / this.tile_size);
        value = this.map.collision[top * this.columns + right];
        this.isCollide(value, player, right * this.tile_size, top * this.tile_size);
        
    

        bottom = Math.floor(player.bottom() / this.tile_size);
        left = Math.floor(player.left() / this.tile_size);
        value = this.map.collision[top * this.columns + left];
        this.isCollide(value, player, left * this.tile_size, bottom * this.tile_size);

       

        bottom = Math.floor(player.bottom() / this.tile_size);
        right = Math.floor(player.right() / this.tile_size);
        value = this.map.collision[top * this.columns + right];
        this.isCollide(value, player, right * this.tile_size, bottom * this.tile_size);

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
            case 46:
                if (this.collideLeft(object, tile_x)) return;
                if (this.collideBottom(object, tile_y + this.tile_size)) return;
                
            //Bottom-right
            case 48:
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
                this.collideTop (object, tile_y);
                return;
            case 2:
                this.collideBottom(object, tile_y + this.tile_size);
                return
            case 3:
                this.collideLeft(object, tile_x);
                return
            case 4:
                this.collideRight(object, tile_x + this.tile_size); 
                return;
            //Checkpoint
            case 31:
                this.updateCheckPoint();
                return;
            case 60:
                this.nextMap();
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
        this.platform_models.forEach( platform => platform.collide() );
    }
}

export default World;

