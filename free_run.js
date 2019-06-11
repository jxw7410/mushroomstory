
class UserModel {
    constructor(posX, posY, canvasContext, canvasHeight, canvasWidth){
        this.posX = posX;
        this.posY = posY;
        this.ctx = canvasContext;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;

        this.gravity = 0.1;
        this.deltaX = 2.2;
        this.deltaY = 1; 
    
        this.rightPressed = false;
        this.leftPressed = false;
        this.spacePressed = false;
        
        this.jump = false;
        this.doubleJump = false;

        
        this.eventListeners = this.eventListeners.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp  = this.handleKeyUp.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);


    
        this.eventListeners();

    }


    eventListeners(){
        document.addEventListener('keydown', this.handleKeyDown, false);
        document.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('keypress', this.handleKeyPress, false);
    }

    handleKeyDown(e){
        if (e.key === 'Right' ||  e.key === 'ArrowRight'){ 
            this.rightPressed = true;
            
        } else if (e.key === 'Left' ||  e.key === 'ArrowLeft'){
            this.leftPressed = true;
        } 
    }


    handleKeyUp(e){
        if (e.key === 'Right' || e.key === 'ArrowRight') {
            this.rightPressed = false;

        } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
            this.leftPressed = false;
        } 
    }

    handleKeyPress(e){
        if (e.key === " "){
            if(!this.jump && !this.doubleJump && this.deltaY === 0){
                this.jump = true;
                this.deltaY = -8;
            } else if(!this.doubleJump){
                this.jump = true;
                this.doubleJump = true;
                this.deltaY = -8;
            }
        }
    }


    drawModel(){
        this.ctx.beginPath();
        this.ctx.rect(this.posX, this.posY, 5, 5);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();
        
        this.posY += this.deltaY;

        //Falling
        if (this.posY > this.canvasHeight - 7) {
            this.jump = false;
            this.doubleJump = false;
            this.deltaY = 0;
            this.posY = this.canvasHeight - 7; 
        }

        
        if(this.jump) 
            this.deltaY *= 0.8;

        else if(!this.jump) 
            this.deltaY += (this.deltaY * this.gravity);


        //Accelerating towards the ground
        if (this.jump && (Math.ceil(this.deltaY) === 0)){
            this.deltaY = 1;
            this.jump = false;
            //this.doubleJump = false;
        }

        if(this.rightPressed)
            if (this.jump)
                this.posX += (this.deltaX + 1);
            else 
                this.posX += this.deltaX;
        else if(this.leftPressed)
            if (this.jump)
                this.posX -= (this.deltaX + 1);
            else 
                this.posX -= this.deltaX
    }

}


function drawTestPlatform(context, width, height) {
    context.beginPath();
    context.rect(0, height-2,  width-20, height);
    context.fillStyle = "green"
    context.fill();
    context.closePath();

}






document.addEventListener('DOMContentLoaded', ()=> {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const Player = new UserModel(10, 0, context, canvasHeight, canvasWidth);


    const interval = setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        Player.drawModel();
        drawTestPlatform(context, canvasWidth, canvasHeight);
    }, 1000/60);


});