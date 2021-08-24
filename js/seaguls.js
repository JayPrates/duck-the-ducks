class Seagull {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.isDead = false;
        this.isLeft = false;
    }

    draw() {
        if (this.isDead && this.isLeft) {
            const deadImg = new Image();
            deadImg.src = "./images/test_dead_seagull.png";
            this.image = deadImg;
            context.scale(-1,1);
            context.drawImage(this.image, - (this.x + this.width) , this.y, this.width, this.height);
            // context.translate(this.x+this.width ,this.y);
        
        }else if(this.isDead && !this.isLeft) {
            const deadImg = new Image();
            deadImg.src = "./images/test_dead_seagull.png";
            this.image = deadImg;
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        
        }else if(this.isLeft && !this.isDead){
            const img = new Image();
            img.src = "./images/test_seagull.png";
            this.image = img;
            context.scale(-1,1);
            context.drawImage(this.image, - (this.x + this.width) , this.y, this.width, this.height);

        } else {
            const img = new Image();
            img.src = "./images/test_seagull.png";
            this.image = img;
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
       context.setTransform();
    }
}