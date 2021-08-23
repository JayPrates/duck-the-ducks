class Duck {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        context.drawImage(this.Image, this.x, this.y, 50, 70)
    }
<<<<<<< HEAD
    move() {
        
=======
    draw() {
        const img = new Image();
        img.src = "./images/test_duck.png";
        this.image = img;
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
>>>>>>> 26e9eadf601bd5d5044933fe5cd3f5917dc7e2d8
    }
}