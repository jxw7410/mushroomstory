import TileSheet from './tilesheet';

class Display {
    constructor(){
        this.overlapCanvas = document.createElement("canvas").getContext('2d')
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.tile_sheet = new TileSheet(4, 64);


        this.drawMap = this.drawMap.bind(this);
        this.drawPlayer = this.drawPlayer.bind(this);


    }

    drawMap(map, columns){
        for (let index = map.length - 1; index > -1; --index){
            //debugger  

            let value = map[index] - 1;

            let source_x = (value % this.tile_sheet.columns) * this.tile_sheet.tile_size;
            let source_y = Math.floor(value / this.tile_sheet.columns) * this.tile_sheet.tile_size;
            let destination_x = (index % columns) * this.tile_sheet.tile_size;
            let destination_y = Math.floor(index / columns) * this.tile_sheet.tile_size;
            this.ctx.drawImage(this.tile_sheet.image, 
                    source_x, source_y, this.tile_sheet.tile_size, 
                    this.tile_sheet.tile_size, destination_x, destination_y,
                    this.tile_sheet.tile_size, this.tile_sheet.tile_size);
            this.ctx.imageSmoothingEnabled = false;
 
        }
    }
    
    drawPlayer(pos_x, pos_y, width, height, color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(Math.round(pos_x), Math.round(pos_y), width, height);
        this.ctx.imageSmoothingEnabled = false;
    }


    render(){
        this.ctx.drawImage(this.overlapCanvas.canvas, 0, 0, 800, 800,
                0, 0, this.canvas.width, this.canvas.height)
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    drawBackground(){
        this.ctx.fillStyle ='lightblue';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


export default Display;