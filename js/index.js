const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// const duck1 = new Duck(50,50);
// duck1.draw();
// console.log(duck1);


let currentGame;

function startGame() {
    currentGame = new Game();
    cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
}

function updateCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    requestAnimationFrame(updateCanvas);
    //duck1.draw();
    drawDucks();
}

function drawDucks () {
    currentGame.obstaclesFrequency++;
    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);

        const newObstacle = new Duck(
        0,
        randomObstacleY);
        const newObstacle2 = new Duck(
            900,
            randomObstacleY
    );
    
    currentGame.obstacles.push(newObstacle);
    currentGame.obstacles2.push(newObstacle2);
    }

    currentGame.obstacles.forEach((obstacle) => {
        if (obstacle.isDead){
            obstacle.y += 5;
            obstacle.x += 5;
            obstacle.draw();
        } else {
            obstacle.x += 5;
            obstacle.draw();
        }

        // if (obstacle.y > raceCanvas.height) {
        //     currentGame.score++;
        //     document.getElementById("score").innerText = currentGame.score;
        //     currentGame.obstacles.splice(index, 1);
        // }
    });

    currentGame.obstacles2.forEach((obstacle2) => {
        //console.log(obstacle2.isDead)
        if (obstacle2.isDead){
            obstacle2.y += 5;
            obstacle2.x -= 5;
            obstacle2.draw();
        } else {
            obstacle2.x -= 5;
            obstacle2.draw();
        }
       
    })

}

//let pointerX;
//let pointerY;

canvas.addEventListener('click', (e) => {
    let pointerX = e.offsetX;
    let pointerY = e.offsetY;
    //console.log(e);
    
    for(let i = 0; i<currentGame.obstacles2.length; i++) {
        console.log(`logging obstacles ${currentGame.obstacles2[i].x}, ${currentGame.obstacles2[i].y}`)
        if (currentGame.obstacles2[i].x < pointerX && currentGame.obstacles2[i].x + currentGame.obstacles2[i].width > pointerX && currentGame.obstacles2[i].y < pointerY && currentGame.obstacles2[i].y + currentGame.obstacles2[i].width > pointerY) {
            console.log("This is working Right Ducks")
            console.log(currentGame.obstacles2[i]);
            currentGame.obstacles2[i].dead();
            }
    }
    for(let i = 0; i<currentGame.obstacles.length; i++) {
        console.log(`logging obstacles ${currentGame.obstacles[i].x}, ${currentGame.obstacles[i].y}`)
        if (currentGame.obstacles[i].x < pointerX && currentGame.obstacles[i].x + currentGame.obstacles[i].width > pointerX && currentGame.obstacles[i].y < pointerY && currentGame.obstacles[i].y + currentGame.obstacles[i].width > pointerY) {
            console.log("This is working Left Ducks")
            console.log(currentGame.obstacles[i]);
            currentGame.obstacles[i].dead();
        }
    }
})


startGame();

