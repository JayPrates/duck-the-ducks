const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// const duck1 = new Duck(50,50);
// duck1.draw();
// console.log(duck1);
updateCanvas();

startGame();

let currentGame;

function startGame() {
    frames = 0;
    currentGame = new Game();
}

function updateCanvas() {
    requestAnimationFrame(updateCanvas);
    //duck1.draw();
    drawDucks();
}

function drawDucks () {
    // currentGame.obstaclesFrequency++;
    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);

        const newObstacle = new Duck(
        0,
        randomObstacleY
    );

    currentGame.obstacles.push(newObstacle);
    }

    currentGame.obstacles.forEach((obstacle) => {
        obstacle.x += 1;
        obstacle.draw();

        // if (obstacle.y > raceCanvas.height) {
        //     currentGame.score++;
        //     document.getElementById("score").innerText = currentGame.score;
        //     currentGame.obstacles.splice(index, 1);
        // }
    });


}

