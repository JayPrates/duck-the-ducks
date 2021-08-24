class Game {
    constructor() {
      this.obstacles = [];
      this.obstacles2 = [];
      this.score = 0;
      this.obstaclesFrequency = 0;
      this.gameOver = false;
      this.animationId = null;
    }

    dispScore() {
          context.font = "18px Arial";
          context.fillStyle = "white";
          context.fillText(`Score: ${this.score}`, 430, 50);
    }
}
