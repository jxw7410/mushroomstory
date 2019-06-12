import {collisionDectection} from '../utils/util_tools';
import RootModel from './root_model';

class UserModel extends RootModel{
    constructor(posX, posY, canvasContext) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.height = 3;
        this.width = 5;

        this.ctx = canvasContext;

        this.gravity = 0.05;
        this.deltaX = 2.2;
        this.deltaY = 1.5;

        this.rightPressed = false;
        this.leftPressed = false;
        this.spacePressed = false;
        this.collided = false;
        this.collidedElement = null;


        //initial config to prevent double jump
        this.canJump = false;
        this.jump = false;
        this.doubleJump = true;


        this.eventListeners = this.eventListeners.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);



        this.eventListeners();

    }



    eventListeners() {
        document.addEventListener('keydown', this.handleKeyDown, false);
        document.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('keypress', this.handleKeyPress, false);
    }

    handleKeyDown(e) {
        if (e.key === 'Right' || e.key === 'ArrowRight')
            this.rightPressed = true;
        else if (e.key === 'Left' || e.key === 'ArrowLeft')
            this.leftPressed = true;
    }


    handleKeyUp(e) {
        if (e.key === 'Right' || e.key === 'ArrowRight')
            this.rightPressed = false;

        else if (e.key === 'Left' || e.key === 'ArrowLeft')
            this.leftPressed = false;
    }

    handleKeyPress(e) {
        if (e.key === " ") {
            if (!this.jump && !this.doubleJump && this.canJump) {
                this.collided = false;
                this.canJump = false;
                this.jump = true;
                this.deltaY = -5;
            } else if (!this.doubleJump) {
                this.jump = true;
                this.doubleJump = true;
                this.deltaY = -4;   
            }
        }
    }


    drawModel() {
        this.ctx.beginPath();
        this.ctx.rect(Math.floor(this.posX), Math.floor(this.posY), this.width, this.height);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();

        if (this.collided) {
            this.jump = false;
            this.doubleJump = false; 
            this.canJump = true;
            if(!collisionDectection(this, this.collidedElement))
                this.collided = false;
        }

        if (!this.collided)
            this.posY += this.deltaY;

        

        if (this.jump) 
            this.deltaY *= 0.8;
        else if (!this.collided) { 
            this.deltaY += (this.deltaY * this.gravity);

        }

        if (this.jump && (Math.ceil(this.deltaY) === 0)) {
            if (!this.doubleJump) {
                this.canJump = false;
                this.jump = false;
                this.deltaY = 1.5;
            }
            else {
                this.deltaY = 1.5;
                this.jump = false;
            }
        }

        if (this.rightPressed)
            if (this.jump)
                this.posX += (this.deltaX + 1);
            else
                this.posX += this.deltaX;
        else if (this.leftPressed)
            if (this.jump)
                this.posX -= (this.deltaX + 1);
            else
                this.posX -= this.deltaX
    }

}

export default UserModel;