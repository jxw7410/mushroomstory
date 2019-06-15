import * as map1 from '../resources/map-1.json';
import * as map1_collision from '../resources/map1_collide.json';
import * as map1_asset from '../resources/map1_assets.json';
import Map from './map';



const maps = () => {
    return [
        new Map(map1.layers[0].data, map1_asset.layers[0].data, map1_collision.layers[0].data,
            0, 0,
            [
                { x: 0, y: 20 },
                { x: 9, y: 30 },
                { x: 12, y: 30 },
                { x: 15, y: 30 },
                { x: 18, y: 30 },
                { x: 22, y: 31 },
                { x: 25, y: 31 },
                { x: 28, y: 31 },
                { x: 33, y: 33 },
                { x: 35, y: 33 },
                { x: 37, y: 33 },
                { x: 75, y: 36 },
                { x: 0, y: 2 },
            ]),
    ]
}

export default maps;