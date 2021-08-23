class Duck {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    draw(){
        context.drawImage(this.Image, this.x, this.y, 50, 70)
    }
    move() {
        
    }
}