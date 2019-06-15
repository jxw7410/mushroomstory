import TileSheet from './tilesheet';


class Display {
    constructor() {
        this.overlapCanvas = document.createElement("canvas").getContext('2d')
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.tile_sheet = new TileSheet(16, 16);
        this.background = new TileSheet(0, 0);
        this.cloudSprite = new TileSheet(0, 0);
        this.cloud_pos_x = 0;

        this.ViewPort = {
            x: 0,
            y: 0,
            width: 608,
            height: 304,
            max_x: 76 * 16 - 608,
            max_y: 38 * 16 - 304,
            pairs: {}
        }
    }

    drawMap(map, columns, player) {
        this.scrollTo(player);

        let x_min = Math.floor(this.ViewPort.x / 16);
        let y_min = Math.floor(this.ViewPort.y / 16);
        let x_max = Math.ceil((this.ViewPort.x + this.ViewPort.width) / 16);
        let y_max = Math.ceil((this.ViewPort.y + this.ViewPort.height) / 16);

        let offset_x = Math.floor(-this.ViewPort.x + x_min * 16);
        let offset_y = Math.floor(-this.ViewPort.y + y_min * 16);
   
        this.ViewPort.pairs = {};

        for (let x = x_min; x < x_max; x++) {
            for (let y = y_min; y < y_max; y++) {
                let index = y * columns + x;
                let value = map[index] - 1;

                //this extracts the sprites from the sprite sheet
                let source_x = (value % this.tile_sheet.columns) * this.tile_sheet.tile_size;
                let source_y = Math.floor(value / this.tile_sheet.columns) * this.tile_sheet.tile_size;

                //This maps the sprite to the view port
                let destination_x = Math.floor((x - x_min) * 16 + offset_x);
                let destination_y = Math.floor((y - y_min) * 16 + offset_y);
                

                //This important for animation since this memorizes what indices will render on our view port;
                this.ViewPort.pairs[index] = [ destination_x, destination_y];

                this.ctx.drawImage(this.tile_sheet.image,
                    source_x, source_y, this.tile_sheet.tile_size,
                    this.tile_sheet.tile_size, destination_x, destination_y,
                    this.tile_sheet.tile_size, this.tile_sheet.tile_size);
            }
        }
    }

    scrollTo(object){

        object.screenX = this.ViewPort.width / 2;
        object.screenY = this.ViewPort.height / 2;

        this.ViewPort.x = object.pos_x - this.ViewPort.width * 0.5;
        this.ViewPort.y = object.pos_y -  this.ViewPort.height * 0.5;

        this.ViewPort.x = Math.max(0, Math.min(this.ViewPort.x, this.ViewPort.max_x));
        this.ViewPort.y = Math.max(0, Math.min(this.ViewPort.y, this.ViewPort.max_y));

        if ( object.pos_x < this.ViewPort.width / 2  ||
            object.pos_x > this.ViewPort.max_x + this.ViewPort.width / 2) {
                object.screenX = object.pos_x - this.ViewPort.x;
           }

        if (object.pos_y < this.ViewPort.height / 2 ||
            object.pos_y > this.ViewPort.max_y + this.ViewPort.height / 2) {
            object.screenY = object.pos_y - this.ViewPort.y;
        }
    }

    drawPlayer(player) {

        player.animate(this.ctx);
    }

    drawFood(food_models) {
        food_models.forEach(food_model => {
            if (food_model.status === 1) {
                const index = (food_model.pos_y * 76 + food_model.pos_x )/ 16;
                if(this.ViewPort.pairs[index])
                    food_model.animate(this.ctx, this.ViewPort.pairs[index][0], this.ViewPort.pairs[index][1]);

            }
        })
    }

    drawClouds() {
        this.ctx.drawImage(this.cloudSprite.image, 0 - this.cloud_pos_x, 0, this.canvas.width * 2, this.canvas.height * 2);

        this.ctx.drawImage(this.cloudSprite.image, this.canvas.width * 2 - this.cloud_pos_x, 0, this.canvas.width * 2, this.canvas.height * 2);



        this.cloud_pos_x += 0.5;

        if (this.cloud_pos_x === this.canvas.width * 2)
            this.cloud_pos_x = 0;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawBackground() {
        this.ctx.drawImage(this.background.image, 0, 0, this.canvas.width * 2, this.canvas.height * 2);
    }
}


export default Display;