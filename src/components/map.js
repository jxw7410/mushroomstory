class Map {
    constructor(background, assets, collision, init_x, init_y, foodsprite_coordinates){
        this.background = background;
        this.assets = assets;
        this.collision = collision;
        this.init_x = init_x;
        this.init_y = init_y;

        this.foodsprite_coordinates = foodsprite_coordinates;
    }
}

export default Map;