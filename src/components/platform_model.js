import { collisionDectection, collisionLeftSide } from '../utils/util_tools';
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


    drawModel() {
        this.ctx.beginPath();
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle = 'green'
        this.ctx.fill();
        this.ctx.closePath();



        if (!this.userModel.collided){
            if ( collisionDectection(this.userModel, this) ){
                    if (!this.userModel.jump){
                        this.userModel.collided = true;
    
                        this.userModel.posY = this.posY - this.userModel.height;
                        
                        this.userModel.deltaY = 1;
                    } else {
                        this.userModel.posY = this.posY + this.height;
                        this.userModel.jump = false; 
                        
                    }

                      this.userModel.deltaY = 1;
                      this.userModel.collidedElement = this;
                }
            }
    }
}




export default PlatformModel;

