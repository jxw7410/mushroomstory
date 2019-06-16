class Map {
    constructor(main_layer, assets, collision,
        init_x, init_y, columns, rows, platforms,
        food_coordinates){
        this.main_layer = main_layer;
        this.assets = assets;
        this.collision = collision;
        this.columns = columns;
        this.rows = rows;
        this.init_x = init_x;
        this.init_y = init_y;
        this.platforms = platforms;
        this.food_coordinates = food_coordinates;
        

        this.tile_size = 16;
    
    }
}

export default Map;