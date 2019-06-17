class Map {
    constructor(main_layer, assets, collision,
        init_x, init_y, columns, rows, checkpoints,
        platforms, food_coordinates){
        this.main_layer = main_layer;
        this.assets = assets;
        this.collision = collision;
        this.columns = columns;
        this.rows = rows;
        this.checkpoints = checkpoints;
        this.init_x = init_x * 16;
        this.init_y = init_y * 16;
        this.platforms = platforms;
        this.food_coordinates = food_coordinates;
        

        this.tile_size = 16;
    
    }
}

export default Map;