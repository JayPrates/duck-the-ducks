class Duck {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.isDead = false;
    }

    draw() {
        if (this.isDead) {
            const deadImg = new Image();
            deadImg.src = "./images/test_dead_duck.png";
            this.image = deadImg;
            context.drawImage(this.image, this.x, this.y, this.width, this.height)
        } else {
            const img = new Image();
            img.src = "./images/test_duck.png";
            this.image = img;
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}