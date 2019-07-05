import * as map1 from '../resources/map-1.json';
import * as map1_collision from '../resources/map1_collide.json';
import * as map1_asset from '../resources/map1_assets.json';

import * as map2 from '../resources/map2.json';
import * as map2_collision from '../resources/map2_collide.json';
import * as map2_asset from '../resources/map2_assets.json';

import * as map3 from '../resources/map3.json';
import * as map3_collision from '../resources/map3_collide.json';
import * as map3_asset from '../resources/map3_assets.json';


import * as map4 from '../resources/map4.json';
import * as map4_collision from '../resources/map4_collide.json';

import Map from './map';


const allMaps = [
    new Map(map1.layers[0].data, map1_asset.layers[0].data, map1_collision.layers[0].data,
        1, 30, 76, 38, [],

        [
            { x: 9, y: 4, delta: 2, traversal: { type: 'HORIZONTAL', distance: 45 * 16 } }
        ],

        [
            { x: 0, y: 20 },
            { x: 9, y: 30 },
            { x: 9, y: 17 },
            { x: 11, y: 17 },
            { x: 12, y: 30 },
            { x: 15, y: 30 },
            { x: 18, y: 30 },
            { x: 20, y: 15 },
            { x: 22, y: 15 },
            { x: 24, y: 15 },
            { x: 34, y: 14 },
            { x: 37, y: 14 },
            { x: 40, y: 14 },
            { x: 22, y: 31 },
            { x: 25, y: 31 },
            { x: 28, y: 31 },
            { x: 33, y: 33 },
            { x: 35, y: 33 },
            { x: 37, y: 33 },
            { x: 75, y: 36 },
            { x: 71, y: 36 },
            { x: 10, y: 4 },
            { x: 1, y: 2 },
            { x: 4, y: 2 }
        ]),


    new Map(map2.layers[0].data, map2_asset.layers[0].data, map2_collision.layers[0].data,
        0, 6, 152, 38,
        [
            { x: 63, y: 27 },

        ],

        [
            { x: 64, y: 28, delta: 1, traversal: { type: 'HORIZONTAL', distance: 10 * 16 } },
            { x: 64, y: 23, delta: 2, traversal: { type: 'HORIZONTAL', distance: 10 * 16 } },
            { x: 64, y: 18, delta: 0.5, traversal: { type: 'HORIZONTAL', distance: 10 * 16 } },
            { x: 64, y: 13, delta: 4, traversal: { type: 'HORIZONTAL', distance: 10 * 16 } },
        ],

        [
            { x: 30, y: 28 },
            { x: 34, y: 28 },
            { x: 38, y: 28 },
            { x: 42, y: 28 },
            { x: 46, y: 28 },
            { x: 50, y: 28 },
            { x: 54, y: 28 },
            { x: 58, y: 28 },
            { x: 62, y: 28 },
            { x: 44, y: 36 },
            { x: 48, y: 36 },
            { x: 52, y: 36 },
            { x: 56, y: 36 },
            { x: 60, y: 36 },
            { x: 45, y: 10 },
            { x: 49, y: 10 },
            { x: 53, y: 10 },
            { x: 57, y: 10 },
            { x: 61, y: 10 },
            { x: 122, y: 23 },
            { x: 124, y: 23 },
        ]),


    new Map(map3.layers[0].data, map3_asset.layers[0].data, map3_collision.layers[0].data,
        0, 143, 38, 152,
        [],
        [
            { x: 13, y: 138, delta: 0.5, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 13, y: 133, delta: 2, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 13, y: 128, delta: 1, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 0, y: 120, delta: 1, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 0, y: 115, delta: 2, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 0, y: 110, delta: 4, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 13, y: 100, delta: 0.5, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 13, y: 95, delta: 2, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 13, y: 90, delta: 1, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 13, y: 85, delta: 4, traversal: { type: 'HORIZONTAL', distance: 21 * 16 } },
            { x: 13, y: 74, delta: 2, traversal: { type: 'HORIZONTAL', distance: 8 * 16 } },
            { x: 13, y: 69, delta: 2, traversal: { type: 'HORIZONTAL', distance: 8 * 16 } },
            { x: 13, y: 64, delta: 4, traversal: { type: 'HORIZONTAL', distance: 8 * 16 } },
            { x: 13, y: 59, delta: 1, traversal: { type: 'HORIZONTAL', distance: 8 * 16 } },
            { x: 13, y: 54, delta: 2, traversal: { type: 'HORIZONTAL', distance: 8 * 16 } },
            { x: 14, y: 43, delta: 4, traversal: { type: 'HORIZONTAL', distance: 7 * 16 } },
            { x: 14, y: 38, delta: 2, traversal: { type: 'HORIZONTAL', distance: 7 * 16 } },
            { x: 14, y: 33, delta: 4, traversal: { type: 'HORIZONTAL', distance: 7 * 16 } },
            { x: 14, y: 28, delta: 4, traversal: { type: 'HORIZONTAL', distance: 7 * 16 } },
            { x: 14, y: 23, delta: 2, traversal: { type: 'HORIZONTAL', distance: 7 * 16 } },
            { x: 14, y: 18, delta: 4, traversal: { type: 'HORIZONTAL', distance: 7 * 16 } },
            { x: 9, y: 8, delta: 1, traversal: { type: 'HORIZONTAL', distance: 15 * 16 } },
        ],
        [
            { x: 1, y: 124 },
            { x: 5, y: 124 },
            { x: 9, y: 124 },
            { x: 13, y: 124 },
            { x: 21, y: 105 },
            { x: 25, y: 105 },
            { x: 29, y: 105 },
            { x: 33, y: 105 },
            { x: 37, y: 105 },
            { x: 0, y: 78 },
            { x: 4, y: 78 },
            { x: 8, y: 78 },
            { x: 12, y: 78 },
            { x: 25, y: 46 },
            { x: 29, y: 46 },
            { x: 33, y: 46 },
            { x: 37, y: 46 },
            { x: 0, y: 12 },
            { x: 4, y: 12 },
            { x: 8, y: 12 },
        ]

    ),

    new Map(map4.layers[0].data, [], map4_collision.layers[0].data,
        0, 14, 38, 19, [],
        [],
        []
    )



]


export const maps = index => {
    return allMaps[index]
}

export const totalMaps = () => {
    return allMaps.length
}