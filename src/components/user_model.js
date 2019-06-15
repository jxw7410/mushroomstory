import RootModel from './root_model';
import TileSheet from './tilesheet';


class UserModel extends RootModel {
    constructor(pos_x, pos_y) {
        super(pos_x, pos_y);

        this.width = 16;
        this.height = 16;
        this.delta_x = 0;
        this.delta_y = 0;
        this.screenX = 0;
        this.screenY = 0;

        this.jumping = true;
        this.doubleJumping = true;
        this.type = null;

        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.jump = this.jump.bind(this);
        this.doubleJump = this.doubleJump.bind(this);
        this.handleCollisionWithWorld = this.handleCollisionWithWorld.bind(this);


        this.prev_direction = 'RIGHT';
        this.x_frames = 0;


        this.playerSpriteLeft = new TileSheet(32, 30);
        this.playerSpriteRight = new TileSheet(32, 30);


        this.frame_sets = {
            "idle-left": [{ sx: 7, sy: 10, width: 20, height: 20 }],
            "jump-left": [{ sx: 328, sy: 2, width: 20, height: 20 }],
            "move-left": [
                { sx: 37, sy: 10, width: 20, height: 20 },
                { sx: 70, sy: 12, width: 20, height: 18 }
            ],
            "idle-right": [{ sx: 932, sy: 10, width: 20, height: 20 }],
            "jump-right": [{ sx: 709, sy: 2, width: 20, height: 20 }],
            "move-right": [
                { sx: 933, sy: 10, width: 20, height: 20 },
                { sx: 901, sy: 12, width: 20, height: 18 }
            ],
        }

        this.accumulated_time = 0;

    }

    moveLeft() {
        this.delta_x = -2.5;
        //this.pos_x -= 4;
    }

    moveRight() {
        this.delta_x = 2.5;
        //this.pos_x += 4;
    }

    jump() {
        if (!this.jumping) {
            this.jumping = true;
            if (this.type === 'slide-right') {
                this.delta_y = -4;
                this.delta_x = 6;
                this.type = null;
            } else if (this.type === 'slide-left') {
                this.delta_y = -4;
                this.delta_x = -6;
                this.type = null;
            }
            else
                this.delta_y = -8;
        }
    }

    doubleJump() {
        if (this.jumping && !this.doubleJumping) {
            //debugger
            this.doubleJumping = true;
            this.delta_y = -8;
        }
    }

    handleCollisionWithWorld(type, world) {
        switch (type) {
            //Hitting the bound of the world
            case '1':
                this.pos_x = 0;
                this.delta_x = 0;

                if ((this.pos_y + this.height) < world.height)
                    this.delta_y = 0.1;
                else {
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
                else {
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

    handleCollideTop(tile_y) {
        if (this.bottom() > tile_y && this.old_bottom() <= tile_y) {
            this.old_pos_y = this.pos_y;
            this.pos_y = (tile_y-0.01) - this.height;
            this.delta_y = 0;
            this.jumping = false;
            this.doubleJumping = false;
            this.type = null;
            return true;
        }
        return false;
    }

    handleCollideBottom(tile_y) {
        if (this.top() < tile_y && this.old_top() >= tile_y) {
            this.pos_y = tile_y;
            this.delta_y = 0;
            //this.delta_x = 0;
            this.type = null;
            return true;
        }
        return false;

    }
    handleCollideLeft(tile_x, type) {

        if (type === 'SLIDE') {
            if (this.right() > tile_x) {
                this.pos_x = (tile_x - 0.01) - this.width;
                this.delta_x = 0;
                this.delta_y = 0.5;
                this.jumping = false;
                this.doubleJumping = false;
                this.type = "slide-left";
                return true;
            }
        }
        else if (this.right() > tile_x && this.old_right() <= tile_x) {
            this.pos_x = (tile_x - 0.01) - this.width;
            this.delta_x = 0;
            this.type = null;
            return true;
        } else if (this.right() > tile_x) {
            this.pos_x = (tile_x - 0.01) - this.width;
            this.delta_x = 0;
            this.type = null;
            return true;
        }

        return false;
    }


    handleCollideRight(tile_x, type) {
        if (type === 'SLIDE') {
            if (this.left() < tile_x) {
                this.pos_x = tile_x;
                this.delta_y = 0.1;
                this.delta_x = 0;
                this.type = "slide-right";
                this.jumping = false;
                this.doubleJumping = false;
                return true;
            }
        }
        else if (this.left() < tile_x && this.old_left() >= tile_x) {
            this.pos_x = tile_x - 0.01;
            this.delta_x = 0;
            this.type = null;
            return true;
        }
        else if (this.left() < tile_x) {
            this.pos_x = tile_x - 0.01;
            this.delta_x = 0;
            this.type = null;
            return true;
        }
        return false;

    }


    updateTime() {
        this.accumulated_time += 10;
        this.accumulated_time = this.accumulated_time === 120 ? 0 : this.accumulated_time;
    }

    animate(ctx) {
        let frame;

        if (this.delta_x > 0.15 && this.delta_y === 0) {
            if (this.prev_direction === 'LEFT') {
                this.accumulated_time = 0;
                this.x_frames = 0;
            }

            frame = this.frame_sets['move-right'][this.x_frames];
            if (this.accumulated_time === 0) {
                this.prev_direction = 'RIGHT';
                this.x_frames = this.x_frames === 1 ? 0 : 1;
            }

            ctx.drawImage(this.playerSpriteRight.image, frame.sx, frame.sy, frame.width, frame.height, 
                Math.floor(this.screenX - this.width / 2), Math.floor(this.screenY - this.height / 2) + 4, this.width + 4, this.height + 4);
            this.updateTime()

        } else if (this.delta_x < -0.15 && this.delta_y === 0) {
            if (this.prev_direction === 'RIGHT') {
                this.accumulated_time = 0;
                this.x_frames = 0;
            }

            frame = this.frame_sets['move-left'][this.x_frames];
            if (this.accumulated_time === 0) {
                this.prev_direction = 'LEFT';
                this.x_frames = this.x_frames === 1 ? 0 : 1;
            }

            ctx.drawImage(this.playerSpriteLeft.image, frame.sx, frame.sy, frame.width, frame.height, 
                Math.floor(this.screenX - this.width / 2), Math.floor(this.screenY - this.height / 2) + 4, this.width + 4, this.height + 4);

            this.updateTime()
        } else if (this.delta_y < 0) {
            if (this.prev_direction === 'RIGHT') {
                frame = this.frame_sets['jump-right'][0];
                ctx.drawImage(this.playerSpriteRight.image, frame.sx, frame.sy, frame.width, frame.height, 
                    Math.round(this.screenX - this.width / 2), Math.round(this.screenY - this.height / 2) + 4, this.width + 4, this.height + 4);
            } else {
                frame = this.frame_sets['jump-left'][0];
                ctx.drawImage(this.playerSpriteLeft.image, frame.sx, frame.sy, frame.width, frame.height, 
                    Math.round(this.screenX - this.width / 2), Math.round(this.screenY - this.height / 2) + 4, this.width + 4, this.height + 4);
            }

        } else {
            if (this.prev_direction === 'RIGHT') {
                frame = this.frame_sets['idle-right'][0];
                ctx.drawImage(this.playerSpriteRight.image, frame.sx, frame.sy, frame.width, frame.height, 
                    Math.round(this.screenX - this.width / 2), Math.round(this.screenY - this.height / 2) + 4, this.width + 4, this.height + 4);
            } else {
                frame = this.frame_sets['idle-left'][0];
                ctx.drawImage(this.playerSpriteLeft.image, frame.sx, frame.sy, frame.width, frame.height, 
                    Math.round(this.screenX - this.width / 2), Math.round(this.screenY - this.height / 2) + 4, this.width + 4, this.height + 4);
            }
        }
    }


    update(gravity, friction) {
        this.old_pos_x = this.pos_x;
        this.old_pos_y = this.pos_y;

        this.delta_y += gravity;

        this.pos_x += this.delta_x;
        this.pos_y += this.delta_y;
        this.delta_x *= friction;
        this.delta_y *= friction + 0.395;
    }


}

export default UserModel;