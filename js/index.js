const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

document.getElementById("start-button").onclick = () => {
    startGame();
};

//LVL1
let currentGame;
let lives = 3;

function startGame() {
    currentGame = new Game();
    cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
}

//Level 2 - Seaguls Appear
let startLvl2 = false;


function updateCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    gameMotor = requestAnimationFrame(updateCanvas);
    currentGame.dispScore();
    if (lives === 0) {
        cancelAnimationFrame(gameMotor);
        lives = 3;
    }
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

    currentGame.obstacles.push(newObstacle);

    }
    if (currentGame.obstaclesFrequency % 267 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);
        const newObstacle2 = new Duck(
            900,
            randomObstacleY
    );

    currentGame.obstacles2.push(newObstacle2);
    }

    //Left Ducks

    currentGame.obstacles.forEach((obstacle, index) => {
        if (obstacle.isDead){
            obstacle.y += 2;
            obstacle.x += 10;
            obstacle.draw();
        } else {
            obstacle.x += 10;
            obstacle.isLeft = true;
            obstacle.draw();
            if (obstacle.x > canvas.clientWidth) {
                currentGame.obstacles.splice(index, 1);
                console.log("Deleted left duck")
                lives -= 1;
            }
        }
    });

    //Right Ducks

    currentGame.obstacles2.forEach((obstacle2, index2) => {
        if (obstacle2.isDead){
            obstacle2.y += 2;
            obstacle2.x -= 10;
            obstacle2.draw();
        } else {
            obstacle2.x -= 10;
            obstacle2.draw();
            if(obstacle2.width < canvas.x) {
                currentGame.obstacles2.splice(index2, 1);
                lives -= 1;
            }
        }
    })
}

//Drawing Seagulls
function drawSeagulls () {
    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);
        newObstacleSeag = new Seagull(
        0,
        randomObstacleY);
        currentGame.obstaclesSeag.push(newObstacleSeag);
    }

    if (currentGame.obstaclesFrequency % 180 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);
        newObstacleSeag2 = new Seagull(
            900,
            randomObstacleY);
        currentGame.obstaclesSeag2.push(newObstacleSeag2);
    }

    //Left Seagulls

    currentGame.obstaclesSeag.forEach((obstacleS) => {
        if (obstacleS.isDead){
            obstacleS.y += 2;
            obstacleS.x += 15;
            obstacleS.draw();
        } else {
            obstacleS.x += 15;
            obstacleS.isLeft = true;
            obstacleS.draw();
        }
    });

    //Right Seagulls

    currentGame.obstaclesSeag2.forEach((obstacleS2) => {
        if (obstacleS2.isDead){
            obstacleS2.y += 2;
            obstacleS2.x -= 15;
            //obstacles2.x;
            obstacleS2.draw();
        } else {
            obstacleS2.x -= 15;
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
            if (currentGame.obstacles2[i].isDead){
                currentGame.score += 0;
            }else {
                currentGame.score += 5;
            }
            currentGame.obstacles2[i].isDead = true;
        }
    }

    for(let i = 0; i<currentGame.obstacles.length; i++) {
        console.log(`logging obstacles ${currentGame.obstacles[i].x}, ${currentGame.obstacles[i].y}`)
        if (currentGame.obstacles[i].x < pointerX && currentGame.obstacles[i].x + currentGame.obstacles[i].width > pointerX && currentGame.obstacles[i].y < pointerY && currentGame.obstacles[i].y + currentGame.obstacles[i].width > pointerY) {
            console.log("This is working Left Ducks")
            console.log(currentGame.obstacles[i]);
            if (currentGame.obstacles[i].isDead){
                currentGame.score += 0;
            }else {
                currentGame.score += 5;
            }
            currentGame.obstacles[i].isDead = true;
            currentGame.obstacles[i].isLeft = true;
        }

    }
//for i seagulls
    for(let i = 0; i<currentGame.obstaclesSeag2.length; i++) {
        console.log(`logging obstacles ${currentGame.obstaclesSeag2[i].x}, ${currentGame.obstaclesSeag2[i].y}`)
        if (currentGame.obstaclesSeag2[i].x < pointerX && currentGame.obstaclesSeag2[i].x + currentGame.obstaclesSeag2[i].width > pointerX && currentGame.obstaclesSeag2[i].y < pointerY && currentGame.obstaclesSeag2[i].y + currentGame.obstaclesSeag2[i].width > pointerY) {
            console.log("This is working Right Seagulls")
            console.log(currentGame.obstaclesSeag2[i]);
            if(currentGame.obstaclesSeag2[i].isDead){
                currentGame.score += 0
            }else {
                currentGame.score -= 10;
            }
            currentGame.obstaclesSeag2[i].isDead = true;
        }
    }

    for(let i = 0; i<currentGame.obstaclesSeag.length; i++) {
        console.log(`logging obstacles ${currentGame.obstaclesSeag[i].x}, ${currentGame.obstaclesSeag[i].y}`)
        if (currentGame.obstaclesSeag[i].x < pointerX && currentGame.obstaclesSeag[i].x + currentGame.obstaclesSeag[i].width > pointerX && currentGame.obstaclesSeag[i].y < pointerY && currentGame.obstaclesSeag[i].y + currentGame.obstaclesSeag[i].width > pointerY) {
            console.log("This is working Left Seagulls")
            console.log(currentGame.obstaclesSeag[i]);
            if(currentGame.obstaclesSeag[i].isDead){
                currentGame.score += 0
            }else {
                currentGame.score -= 10;
            }
            currentGame.obstaclesSeag[i].isDead = true;
            currentGame.obstaclesSeag[i].isLeft = true;
        }
    }
})