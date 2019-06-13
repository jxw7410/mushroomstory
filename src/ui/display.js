import TileSheet from './tilesheet';
import Animate from './animate';


class Display {
    constructor(){
        this.overlapCanvas = document.createElement("canvas").getContext('2d')
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.tile_sheet = new TileSheet(16, 16);
        this.playerSpriteForward = new TileSheet(32, 30);
        this.playerSpriteBackward = new TileSheet(32, 30);
        this.background = new TileSheet(0, 0);
        this.cloudSprite = new TileSheet(0, 0);
        this.cloud_pos_x = 0;

    

        this.drawMap = this.drawMap.bind(this);
        this.drawPlayer = this.drawPlayer.bind(this);


    }

    drawMap(map, columns){
        for (let index = map.length - 1; index > -1; --index){

            let value = map[index] - 1;

            let source_x = (value % this.tile_sheet.columns) * this.tile_sheet.tile_size;
            let source_y = Math.floor(value / this.tile_sheet.columns) * this.tile_sheet.tile_size;
            let destination_x = (index % columns) * this.tile_sheet.tile_size;
            let destination_y = Math.floor(index / columns) * this.tile_sheet.tile_size;

            this.ctx.drawImage(this.tile_sheet.image, 
                    source_x, source_y, this.tile_sheet.tile_size, 
                    this.tile_sheet.tile_size, destination_x, destination_y,
                    this.tile_sheet.tile_size, this.tile_sheet.tile_size);

 
        }
    }
    
    drawPlayer(pos_x, pos_y, delta_x, delta_y, direction, frames){
        let frameSet;


        if (delta_x > 0 && !delta_y ){
            this.ctx.drawImage(this.playerSprite.image, 7, 10, 20, 20, 
                            Math.round(pos_x), Math.round(pos_y), 16, 16);
        } else {
            return
        }
        
    }

    drawClouds(){
        //debugger
        this.ctx.drawImage(this.cloudSprite.image, 0 - this.cloud_pos_x, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.cloudSprite.image, this.canvas.width-this.cloud_pos_x, 0, this.canvas.width, this.canvas.height);



        this.cloud_pos_x += 1;

        if (this.cloud_pos_x === this.canvas.width)
            this.cloud_pos_x = 0;
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawBackground(){
        this.ctx.drawImage(this.background.image, 0, 0, this.canvas.width, this.canvas.height);
    }
}


export default Display;