import RootModel from './root_model';

class PlatformModel extends RootModel{
    constructor(posX, posY, width, height, canvasContext, userModel) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;

    

        this.ctx = canvasContext;
        this.userModel = userModel;
    }

}




export default PlatformModel;

