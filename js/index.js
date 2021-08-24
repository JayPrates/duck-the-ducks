const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

document.getElementById("start-button").onclick = () => {
    startGame();
};

//LVL1
let currentGame;
function startGame() {
    currentGame = new Game();
    cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
}

//LVL 2
// let currentGameLvl2;
let startLvl2 = false;
// function startGameLvl2() {
//     currentGameLvl2 = new Game();
//     cancelAnimationFrame(currentGame.animationId);
//     updateCanvas();
// }

function updateCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    requestAnimationFrame(updateCanvas);
    currentGame.dispScore();
    if (startLvl2 === true) {
        drawDucks();
        drawSeagulls();
    } else {
        drawDucks();
    }
    if (currentGame.score === 10) {
         startLvl2 = true;
     }
} 

//Drawing Ducks
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

    //Left Ducks

    currentGame.obstacles.forEach((obstacle) => {
        if (obstacle.isDead){
            obstacle.y += 2;
            obstacle.x += 2;
            obstacle.draw();
        } else {
            obstacle.x += 2;
            obstacle.isLeft = true;
            obstacle.draw();
        }
    });

    //Right Ducks

    currentGame.obstacles2.forEach((obstacle2) => {
        if (obstacle2.isDead){
            obstacle2.y += 2;
            obstacle2.x -= 2;
            //obstacles2.x;
            obstacle2.draw();
        } else {
            obstacle2.x -= 2;
            obstacle2.draw();
        }
    })
}

//Drawing Seagulls
function drawSeagulls () {
    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);
        const newObstacleSeag = new Seagull(
        0,
        randomObstacleY);
        const newObstacleSeag2 = new Seagull(
            900,
            randomObstacleY
    );
    currentGame.obstaclesSeag.push(newObstacleSeag);
    currentGame.obstaclesSeag2.push(newObstacleSeag2);
    }

    //Left Seagulls

    currentGame.obstaclesSeag.forEach((obstacleS) => {
        if (obstacleS.isDead){
            obstacleS.y += 2;
            obstacleS.x += 5;
            obstacleS.draw();
        } else {
            obstacleS.x += 5;
            obstacleS.isLeft = true;
            obstacleS.draw();
        }
    });

    //Right Seagulls

    currentGame.obstaclesSeag2.forEach((obstacleS2) => {
        if (obstacleS2.isDead){
            obstacleS2.y += 2;
            obstacleS2.x -= 5;
            //obstacles2.x;
            obstacleS2.draw();
        } else {
            obstacleS2.x -= 5;
            obstacleS2.draw();
        }
    })
}
 
canvas.addEventListener('click', (e) => {
    let pointerX = e.offsetX;
    let pointerY = e.offsetY;
    console.log(e);
    for(let i = 0; i<currentGame.obstacles2.length; i++) {
        console.log(`logging obstacles ${currentGame.obstacles2[i].x}, ${currentGame.obstacles2[i].y}`)
        if (currentGame.obstacles2[i].x < pointerX && currentGame.obstacles2[i].x + currentGame.obstacles2[i].width > pointerX && currentGame.obstacles2[i].y < pointerY && currentGame.obstacles2[i].y + currentGame.obstacles2[i].width > pointerY) {
            console.log("This is working Right Ducks")
            console.log(currentGame.obstacles2[i]);
            currentGame.obstacles2[i].isDead = true;
            currentGame.score += 5;
        }
    }

    for(let i = 0; i<currentGame.obstacles.length; i++) {
        console.log(`logging obstacles ${currentGame.obstacles[i].x}, ${currentGame.obstacles[i].y}`)
        if (currentGame.obstacles[i].x < pointerX && currentGame.obstacles[i].x + currentGame.obstacles[i].width > pointerX && currentGame.obstacles[i].y < pointerY && currentGame.obstacles[i].y + currentGame.obstacles[i].width > pointerY) {
            console.log("This is working Left Ducks")
            console.log(currentGame.obstacles[i]);
            currentGame.obstacles[i].isDead = true;
            currentGame.obstacles[i].isLeft = true;
            currentGame.score += 5;
        }

    }
//for i seagulls
    for(let i = 0; i<currentGame.obstaclesSeag2.length; i++) {
        console.log(`logging obstacles ${currentGame.obstaclesSeag2[i].x}, ${currentGame.obstaclesSeag2[i].y}`)
        if (currentGame.obstaclesSeag2[i].x < pointerX && currentGame.obstaclesSeag2[i].x + currentGame.obstaclesSeag2[i].width > pointerX && currentGame.obstaclesSeag2[i].y < pointerY && currentGame.obstaclesSeag2[i].y + currentGame.obstaclesSeag2[i].width > pointerY) {
            console.log("This is working Right Seagulls")
            console.log(currentGame.obstaclesSeag2[i]);
            currentGame.obstaclesSeag2[i].isDead = true;
            currentGame.score -= 10;
        }
    }

    for(let i = 0; i<currentGame.obstaclesSeag.length; i++) {
        console.log(`logging obstacles ${currentGame.obstaclesSeag[i].x}, ${currentGame.obstaclesSeag[i].y}`)
        if (currentGame.obstaclesSeag[i].x < pointerX && currentGame.obstaclesSeag[i].x + currentGame.obstaclesSeag[i].width > pointerX && currentGame.obstaclesSeag[i].y < pointerY && currentGame.obstaclesSeag[i].y + currentGame.obstaclesSeag[i].width > pointerY) {
            console.log("This is working Left Seagulls")
            console.log(currentGame.obstaclesSeag[i]);
            currentGame.obstaclesSeag[i].isDead = true;
            currentGame.obstaclesSeag[i].isLeft = true;
            currentGame.score -= 10;
        }

    }

})