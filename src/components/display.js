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



        this.drawMap = this.drawMap.bind(this);
        this.drawPlayer = this.drawPlayer.bind(this);


    }

    drawMap(map, columns) {
        for (let index = map.length - 1; index > -1; --index) {

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

        drawPlayer(player) {
        player.animate(this.ctx);
    }

    drawFood(food_models){
        food_models.forEach( food_model => {
            if (food_model.status === 1)
                food_model.animate(this.ctx);
        })
    }

    drawClouds() {
        //debugger
        this.ctx.drawImage(this.cloudSprite.image, 0 - this.cloud_pos_x, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.cloudSprite.image, this.canvas.width - this.cloud_pos_x, 0, this.canvas.width, this.canvas.height);



        this.cloud_pos_x += 0.5;

        if (this.cloud_pos_x === this.canvas.width)
            this.cloud_pos_x = 0;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawBackground() {
        this.ctx.drawImage(this.background.image, 0, 0, this.canvas.width, this.canvas.height);
    }
}


export default Display;