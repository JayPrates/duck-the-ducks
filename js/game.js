// const game = {
//     ducks: [],
//     start: () => {
//         interval = setInterval(() => {
//             updateCanvas();
//           }, 10);
//     },
//     clear: () => {
//         context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
//     },
//     stop: () => {
//         clearInterval(interval);
//     }
// }

class Game {
    constructor() {
      this.duck = {};
      this.obstacles = [];
      this.score = 0;
      this.obstaclesFrequency = 0;
      //this.gameOver = false;
      //this.animationId = null;
    }
<<<<<<< HEAD
}
=======
  }
>>>>>>> db2270d6853fff830c544d7cf862a3722b9eaf91
