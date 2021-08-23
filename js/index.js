const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

<<<<<<< HEAD
// const duck1 = new Duck(50,50);
// duck1.draw();
// console.log(duck1);


=======
>>>>>>> 41da3e8a4218556e539c3bfd7d18d5c9485e4bee
let currentGame;

function startGame() {
    currentGame = new Game();
    cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
}

function updateCanvas() {
<<<<<<< HEAD
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    requestAnimationFrame(updateCanvas);
=======
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
>>>>>>> 41da3e8a4218556e539c3bfd7d18d5c9485e4bee
    //duck1.draw();
    drawDucks() 
    
    if (currentGame.gameOver === false) {
        currentGame.animationId = requestAnimationFrame(updateCanvas);
    }

    
}

<<<<<<< HEAD
function drawDucks () {
    currentGame.obstaclesFrequency++;
=======
function drawDucks() {
    
    currentGame.obstaclesFrequency++;

>>>>>>> 41da3e8a4218556e539c3bfd7d18d5c9485e4bee
    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor(Math.random() * 350);

        const newObstacleLeft = new Duck(
        0,
        randomObstacleY);
        const newObstacle2 = new Duck(
            900,
            randomObstacleY
    );
<<<<<<< HEAD
    
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
=======

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
>>>>>>> 41da3e8a4218556e539c3bfd7d18d5c9485e4bee
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

    currentGame.obstaclesRight.forEach((obstacle) => {
        obstacle.x -= 1;
        obstacle.draw();
        //
    });

}

<<<<<<< HEAD
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

=======
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
>>>>>>> 41da3e8a4218556e539c3bfd7d18d5c9485e4bee
