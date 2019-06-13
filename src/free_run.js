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
        display.drawMap(world.map, world.column);
        display.drawPlayer(player.pos_x, player.pos_y, player.width, player.height, 'red');
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

    const engine = new Engine(update, render)


    engine.run();
});