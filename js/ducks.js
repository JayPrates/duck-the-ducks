class Duck {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.isDead = false
    }

    draw() {
        const img = new Image();
        img.src = "./images/test_duck.png";
        this.image = img;
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
<<<<<<< HEAD
    dead() {
        this.isDead = true
    }
=======
    
>>>>>>> 41da3e8a4218556e539c3bfd7d18d5c9485e4bee
}