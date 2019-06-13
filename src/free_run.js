import Display from './ui/display';
import World from './ui/world';
import Engine from './ui/engine';
import Controller from './ui/controller';

document.addEventListener('DOMContentLoaded', ()=> {

    const display = new Display();
    const world = new World();
    const player = world.player;
    const controller = new Controller();

    const render = () => {
        display.clearCanvas();
        display.drawBackground();
        display.drawClouds();
        display.drawMap(world.map, world.columns);
        display.drawPlayer(player.pos_x, player.pos_y, player.delta_x, player.delta_y, player.prev_direction, player.frame_sets);
    }

    const update = () => {
        if (controller.leftPress){
            player.moveLeft();
        }
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

    display.tile_sheet.image.src='./assets/images/SimpleTileset2.png';
    display.playerSpriteForward.image.src='./assets/images/Mushroom.png';
    display.playerSpriteBackward.image.src='./assets/images/Mushroom_reverse.png';
    display.cloudSprite.image.src='./assets/images/background2.png';
    display.background.image.src = './assets/images/background3.png';
   
    const engine = new Engine(update, render)
    setTimeout(() => engine.run(), 500);
});