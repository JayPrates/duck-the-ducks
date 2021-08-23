const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


// function startGame() {
//     currentGame = new Game();
//     currentGame.duck = new Duck();
// }

const duck1 = new Duck(50,50);
duck1.draw();
console.log(duck1);
updateCanvas();

let currentGame;

function startGame() {
    currentGame = new Game();
}

function updateCanvas() {
    duck1.draw();
    requestAnimationFrame(updateCanvas);
}

function drawDucks () {
    currentGame.obstaclesFrequency++;
    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);

        const newObstacle = new Duck(
        0,
        randomObstacleY
    );

    currentGame.obstacles.push(newObstacle);
    }
}
