import RootModel from './root_model';



class UserModel extends RootModel{
    constructor(pos_x, pos_y) {
        super();
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.old_pos_x = pos_x;
        this.old_pos_y = pos_y;
        
        this.width = 4;
        this.height = 3;
        this.delta_x = 0;
        this.delta_y = 0;

        this.jumping = true;
        this.doubleJumping = true;
        this.type = null;

        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.jump = this.jump.bind(this);
        this.doubleJump = this.doubleJump.bind(this);
        this.handleCollisionWithWorld = this.handleCollisionWithWorld.bind(this);
        
    }

    moveLeft(){
        this.delta_x = 0;
        this.pos_x -= 1;
    }

    moveRight(){
        this.delta_x = 0;
        this.pos_x += 1;
    }

    jump(){
        if(!this.jumping){
            this.jumping = true;
            if (this.type === 'slide-right'){
                this.delta_y = -1;
                this.delta_x = 1;
                this.type = null;
            } else if ( this.type === 'slide-left'){
                this.delta_y = -1;
                this.delta_x = -1;
                this.type = null;
            }
            else
                this.delta_y = -2;
        }
    }

    doubleJump(){
        if(this.jumping && !this.doubleJumping){
            this.doubleJumping = true;
            this.delta_y = -1;
        }
    }

    handleCollisionWithWorld(type, world){
        switch(type){
            //Hitting the bound of the world
            case '1':
                this.pos_x = 0;
                this.delta_x = 0;
    
                if ((this.pos_y + this.height) < world.height)
                    this.delta_y = 0.1;
                else{
                    this.pos_y = world.height - this.height;
                    this.delta_y = 0;
                }
                break;

            case '2':
                this.pos_x = world.width - this.width;
                this.delta_x = 0; 
                this.delta_y = 0.1;


                if ((this.pos_y + this.height) < world.height)
                    this.delta_y = 0.1;
                else{
                    this.pos_y = world.height - this.height;
                    this.delta_y = 0;
                }
    
                break;

            case '3':
                this.jumping = false;
                this.doubleJumping = false;
                this.pos_y = world.height - this.height;
                this.delta_y = 0;
                break;
            case '4': // Hit your head
                this.delta_y = 0;
                this.pos_y = 0;
            default:
                break;
        }
    }

    update(){
        this.old_pos_x = this.pos_x;
        this.old_pos_y = this.pos_y;
        this.pos_x += this.delta_x;
        this.pos_y += this.delta_y;
    }


}

export default UserModel;