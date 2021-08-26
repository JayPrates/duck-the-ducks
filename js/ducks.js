class Duck {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 53;
        this.isDead = false;
        this.isLeft = false;
        //
        this.scale = 1;
        // this.fps = 60;
        this.secondsToUpdate = 1 * /*fps*/60;
        this.frameIndex = 0;
        this.count = 0;
    }

    draw(controlWings) {
        console.log("controlWings", controlWings);
        if (this.isDead && this.isLeft) {
            const deadImg = new Image();
            deadImg.src = "./images/game_content/char_duck_dead.png";
            this.image = deadImg;
            context.scale(-1,1);
            context.drawImage(this.image, - (this.x + this.width) , this.y, this.width, this.height);
        
        }else if(this.isDead && !this.isLeft) {
            const deadImg = new Image();
            deadImg.src = "./images/game_content/char_duck_dead.png";
            this.image = deadImg;
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        
        }else if(this.isLeft && !this.isDead){
            const img = new Image(); 
            if(controlWings < 12) {
                console.log("1")
                img.src = "./images/game_content/char_duck_wUp.png";
            } else {
                console.log("2")
                img.src = "./images/game_content/char_duck_wDw.png";
            }

        
            this.image = img;
            context.scale(-1,1);
            context.drawImage(this.image, - (this.x + this.width) , this.y, this.width, this.height);

        } else {
            const img = new Image(); 
            if(controlWings < 12) {
                console.log("1")
                img.src = "./images/game_content/char_duck_wUp.png";

            } else {
                console.log("2")
                img.src = "./images/game_content/char_duck_wDw.png";
            }

        
            this.image = img;
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
           
        }
       context.setTransform();
    }
}