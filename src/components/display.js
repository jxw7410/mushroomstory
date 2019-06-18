import TileSheet from './tilesheet';
import ViewPort from './viewport';

class Display {
    constructor() {
        this.overlapCanvas = document.createElement("canvas").getContext('2d')
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.mainSheet = new TileSheet(16, 16);
        this.startBackground = new TileSheet(0, 0);
        this.background = new TileSheet(0, 0);
        this.cloudSprite = new TileSheet(0, 0);
        this.cloud_pos_x = 0;

        this.iteration = 0;

        this.viewPort = new ViewPort();
    }

    drawMap(map, columns, player) {
        const t_size = 16;//Default size

        this.viewPort.focus(player);

        let x_min = Math.floor(this.viewPort.x / t_size);
        let y_min = Math.floor(this.viewPort.y / t_size);
        let x_max = Math.ceil((this.viewPort.x + this.viewPort.width) / t_size);
        let y_max = Math.ceil((this.viewPort.y + this.viewPort.height) / t_size);

        let offset_x = Math.floor(-this.viewPort.x + x_min * t_size);
        let offset_y = Math.floor(-this.viewPort.y + y_min * t_size);
   
        this.viewPort.indices = {};

        for (let x = x_min; x < x_max; x++) {
            for (let y = y_min; y < y_max; y++) {
                let index = y * columns + x;
                let value = map[index] - 1;

                //this extracts the sprites from the sprite sheet
                let source_x = (value % this.mainSheet.columns) * t_size;
                let source_y = Math.floor(value / this.mainSheet.columns) * t_size;

                //This maps the sprite to the view port
                let destination_x = Math.floor((x - x_min) * t_size + offset_x);
                let destination_y = Math.floor((y - y_min) * t_size + offset_y);
                

                //This important for animation since this memorizes what indices will render on our view port;
                this.viewPort.indices[index] = [ destination_x, destination_y];

                this.ctx.drawImage(this.mainSheet.image,
                    source_x, source_y, t_size,
                    t_size, destination_x, destination_y,
                    t_size , t_size );
            }
        }
    }

    updateViewPort(map){
        this.viewPort.max_x = map.columns * map.tile_size - this.viewPort.width;
        this.viewPort.max_y = map.rows * map.tile_size - this.viewPort.height;

    }


    drawPlayer(player) {
        player.animate(this.ctx);
    }



    drawFood(food_models, map) {
        food_models.forEach(food_model => {
            if (food_model.status === 1) {
                const index = (food_model.pos_y * map.columns + food_model.pos_x )/ map.tile_size;
                if(this.viewPort.indices[index])
                    food_model.animate(this.ctx, this.viewPort.indices[index][0], this.viewPort.indices[index][1]);
                else 
                    food_model.animate(this.ctx);
            }
        })
    }

    drawPlatform(platforms, map){
        let index; 

        platforms.forEach(platform => {
            index = Math.floor(platform.pos_y * map.columns / map.tile_size) + Math.floor(platform.pos_x / map.tile_size);
          
            if (this.viewPort.indices[index]){
                platform.animate(this.ctx, this.viewPort.indices[index][0], this.viewPort.indices[index][1])
            }
            else
                platform.animate(this.ctx);
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


    drawStartBackground() {
        this.ctx.drawImage(this.startBackground.image, 0, 0, this.canvas.width, this.canvas.height);
    }

    drawStartText(){
        this.ctx.font = "30px sans serif";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Welcome to MushroomStory", this.canvas.width / 2 + 2, this.canvas.height / 2);
        this.ctx.fillText("Please Press Enter to Continue", this.canvas.width / 2 + 2, this.canvas.height / 2 + 30);

        this.ctx.font = "30px sans serif";
        this.ctx.fillStyle = "orange";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Welcome to MushroomStory", this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.fillText("Please Press Enter to Continue", this.canvas.width / 2, this.canvas.height / 2 + 30);
    }

    drawEndText() {
        this.ctx.font = "30px sans serif";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.fillText("The End.", this.canvas.width / 2 + 2, this.canvas.height / 2);
        this.ctx.fillText("Thanks for playing!", this.canvas.width / 2 + 2, this.canvas.height / 2 + 30);


        this.ctx.font = "30px sans serif";
        this.ctx.fillStyle = "orange";
        this.ctx.textAlign = "center";
        this.ctx.fillText("The End.", this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.fillText("Thanks for playing!", this.canvas.width / 2, this.canvas.height / 2 + 30);
    }
}



export default Display;