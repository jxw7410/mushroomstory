import UserModel from './components/user_model'

class Game {
    constructor(){
        this.gravity = 0.1;
        this.friction = 0.6;

        this.player = new UserModel();
    }

    update(){
    
    }
}