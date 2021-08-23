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
}