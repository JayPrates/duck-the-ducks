const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let currentGame;

function startGame() {
    currentGame = new Game();
    cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
}

function updateCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    //duck1.draw();
    drawDucks() 
    
    if (currentGame.gameOver === false) {
        currentGame.animationId = requestAnimationFrame(updateCanvas);
    }

    
}

function drawDucks() {
    
    currentGame.obstaclesFrequency++;

    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);

        const newObstacleLeft = new Duck(
        0,
        randomObstacleY
    );

    currentGame.obstaclesLeft.push(newObstacleLeft);
    }

    if (currentGame.obstaclesFrequency % 150 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);

        const newObstacleRight = new Duck(
        900,
        randomObstacleY
    );

    currentGame.obstaclesRight.push(newObstacleRight);
    }

    currentGame.obstaclesLeft.forEach((obstacle, index) => {
        obstacle.x += 1;
        obstacle.draw();
        //
    });


    currentGame.obstaclesRight.forEach((obstacle) => {
        obstacle.x -= 1;
        obstacle.draw();
        //
    });

}

    // currentGame.obstaclesLeft.forEach((obstacle) => {
    //         if (obstacle.x < pointerX && obstacle.x + obstacle.width > pointerX && obstacle.y < pointerY && obstacle.y + obstacle.width > pointerY) {
    //              console.log("This is working")
    //              }
    // })

    
canvas.addEventListener('click', (e) => {
    pointerX = e.clientX;
    pointerY = e.clientY;
    console.log(pointerX, pointerY);
})




let pointerX;
let pointerY;



startGame();
