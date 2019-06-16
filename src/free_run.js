import Display from './components/display';
import World from './components/world';
import Engine from './components/engine';
import Controller from './components/controller';

document.addEventListener('DOMContentLoaded', ()=> {

    const display = new Display();
    const world = new World();
    const player = world.player;
    const controller = new Controller();

    const render = () => {
        display.clearCanvas();
        display.drawBackground();
        display.drawClouds();
        display.drawMap(world.map.main_layer, world.columns, player);
        display.drawMap(world.map.assets, world.columns, player)
        display.drawPlatform(world.platform_models, world.map);
        display.drawFood(world.food_models, world.map);
        display.drawPlayer(player);
    }

    const update = () => {
        if (controller.leftPress)
            player.moveLeft();

        if (controller.rightPress)
            player.moveRight();
       
        if (controller.jumpPress)
            player.jump();

        if (controller.doublejumpPress)
            player.doubleJump();

        world.update();
    }

    window.addEventListener('keydown', controller.handleKeyPress)
    window.addEventListener('keyup', controller.handleKeyPress)


   
    const engine = new Engine(update, render)

    const init = new Promise( function(resolve ,reject) {
        display.mainSheet.image.src = './assets/images/SimpleTileset2.png';
        display.cloudSprite.image.src = './assets/images/Background2.png';
        display.background.image.src = './assets/images/Background3.png';
        player.playerSpriteLeft.image.src = './assets/images/Mushroom.png';
        player.playerSpriteRight.image.src = './assets/images/Mushroom_reverse.png';
        world.foodSpriteSheet.image.src = './assets/images/Food.png';
        world.platformSheet = display.mainSheet;

        resolve("Engine Execute!");
    });

    init.then( response => {
        world.load(display);
        console.log(response);
        engine.run()});
});