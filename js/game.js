class Game {
    constructor() {
      this.obstacles = [];
      this.obstacles2 = [];
      this.obstaclesSeag = [];
      this.obstaclesSeag2 = [];
      this.obstaclesSeag3 = [];
      this.obstaclesSeag4 = [];
      this.score = 0;
      this.obstaclesFrequency = 0;
      this.gameOver = false;
      this.animationId = null;
      const heart1 = new Image();
      heart1.src = "./images/test_heart.png";
      this.imageH1 = heart1;
      
    }

    dispScore() {
          context.font = "28px Azeret Mono, monospace";
          context.fillStyle = "white";
          context.fillText(`Score: ${this.score}`, 720, 50);
    }
    drawHearts(){
      if (lives === 5) {
        context.drawImage(this.imageH1, 10 , 25, 32, 32);
        context.drawImage(this.imageH1, 50 , 25, 32, 32);
        context.drawImage(this.imageH1, 90 , 25, 32, 32);
        context.drawImage(this.imageH1, 130 , 25, 32, 32);
        context.drawImage(this.imageH1, 170 , 25, 32, 32);
      }
      else if(lives === 4 ) {
        context.drawImage(this.imageH1, 10 , 25, 32, 32);
        context.drawImage(this.imageH1, 50 , 25, 32, 32);
        context.drawImage(this.imageH1, 90 , 25, 32, 32);
        context.drawImage(this.imageH1, 130 , 25, 32, 32);
      }
      else if(lives === 3){
        context.drawImage(this.imageH1, 10 , 25, 32, 32);
        context.drawImage(this.imageH1, 50 , 25, 32, 32);
        context.drawImage(this.imageH1, 90 , 25, 32, 32);
      }
      else if(lives === 2) {
        context.drawImage(this.imageH1, 10 , 25, 32, 32);
        context.drawImage(this.imageH1, 50 , 25, 32, 32);
      }
      else if(lives === 1) {
        context.drawImage(this.imageH1, 10 , 25, 32, 32);
      }
      else if(lives === 0 ){
        cancelAnimationFrame(gameMotor);
      }      
    }
}
