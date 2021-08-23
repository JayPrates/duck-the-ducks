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
      this.obstacles = [];
      this.obstacles2 = [];
      this.score = 0;
      this.obstaclesFrequency = 0;
      this.gameOver = false;
      this.animationId = null;
    }
}
