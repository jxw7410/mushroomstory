import UserModel from './components/user_model';
import PlatformModel from './components/platform_model';




document.addEventListener('DOMContentLoaded', ()=> {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const Player = new UserModel(10, 0, context);
    const Platform1 = new PlatformModel(0, canvasHeight-10, canvasWidth-20, 50, context, Player );
    const Platform2 = new PlatformModel(100, canvasHeight-30, canvasWidth, 10, context, Player);

    const animation = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        Player.drawModel();
        Platform1.drawModel();
        Platform2.drawModel();
        window.requestAnimationFrame(animation)
    }
    window.requestAnimationFrame(animation)

});