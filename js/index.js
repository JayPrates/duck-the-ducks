const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

document.getElementById("start-button").onclick = () => {
    startGame();
};

//Music
const music = new Audio("./sounds/Estranged Callipoe Waltz.mp3")
//Sounds
const quackSound = new Audio("./sounds/Duck Quack.mp3");
const popSound = new Audio("./sounds/pop.mp3")

//Empty Heart
const heartEmptyImg = new Image()
      heartEmptyImg.src = "./images/game_content/test_heart_dead.png";



//LVL1
let currentGame;
let lives = 5;

function startGame() {
    currentGame = new Game();
    cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
    timeoutCheckLv2();
    music.play();
}

function timeoutCheckLv2() {
    setTimeout(function() {
        if(startLvl2) {
            timeout();
            timeout2();
        }
    }, 5000)
}

function timeout() {
    setTimeout(function () {
        const randomObstacleY = Math.floor(Math.random() * 600);
        newObstacleSeag3 = new Seagull(
            900,
            randomObstacleY);
        currentGame.obstaclesSeag3.push(newObstacleSeag3);
        console.log("seag3 pushed");
        setTimeout(function (){
            timeout();
        },15000)
    }, 5000);
}

function timeout2() {
    setTimeout(function () {
        const randomObstacleY = Math.floor((Math.random() * 550) + 50);
        newObstacleSeag4 = new Seagull(
        0,
        randomObstacleY);
        currentGame.obstaclesSeag4.push(newObstacleSeag4);
        console.log("seag4 pushed");
        setTimeout(function (){
            timeout2();
        },20000)
    }, 6000);
}


//Level 2 - Seaguls Appear
let startLvl2 = false;
let controlWings = 0;
function updateCanvas() {
    controlWings = controlWings + 1;
    controlWings %= 25;

    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    console.log(canvas.clientWidth, canvas.clientHeight);
    gameMotor = requestAnimationFrame(updateCanvas);
    currentGame.dispScore();
    currentGame.drawHearts();
    
    if (lives >= 5 ){
        lives = 5;
    }
    if (lives === 0) {
        lives = 5;
        music.pause();
        startLvl2 = false;
        alert(`         Game Over!
        Your score was: ${currentGame.score}`);
    }
    
    if (startLvl2 === true) {
        drawDucks(controlWings);
        drawSeagulls();
    } else {
        drawDucks(controlWings);
    }
    if (currentGame.score === 10) {
         startLvl2 = true;
     }
} 

//Drawing Ducks
function drawDucks (controlWings) {
    currentGame.obstaclesFrequency++;
    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor((Math.random() * 600) + 50);
        const newObstacle = new Duck(
        0,
        randomObstacleY);

    currentGame.obstacles.push(newObstacle);

    }
    if (currentGame.obstaclesFrequency % 267 === 1) {
        const randomObstacleY = Math.floor((Math.random() * 600) + 50);
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
            obstacle.draw(controlWings);
            if (obstacle.x > canvas.clientWidth) {
                currentGame.obstacles.splice(index, 1);
            }
        } else {
            obstacle.x += 10;
            obstacle.isLeft = true;
            obstacle.draw(controlWings);
            if (obstacle.isDead === false && obstacle.x > canvas.clientWidth) {
                currentGame.obstacles.splice(index, 1);
                lives -= 1;
            }
        }
    });

    //Right Ducks

    currentGame.obstacles2.forEach((obstacle2, index2) => {
        if (obstacle2.isDead){
            obstacle2.y += 2;
            obstacle2.x -= 10;
            obstacle2.draw(controlWings);
            if((obstacle2.x + 70) < 0) {
                currentGame.obstacles2.splice(index2, 1);
            }
        } else {
            obstacle2.x -= 10;
            obstacle2.draw(controlWings);
            if(obstacle2.isDead === false && (obstacle2.x + 70) < 0) {
                currentGame.obstacles2.splice(index2, 1);
                lives -= 1;
            }
        }
    })
}

//Drawing Seagulls
function drawSeagulls () {
    if (currentGame.obstaclesFrequency % 120 === 1) {
        const randomObstacleY = Math.floor((Math.random() * 600) + 50);
        newObstacleSeag = new Seagull(
        0,
        randomObstacleY);
        currentGame.obstaclesSeag.push(newObstacleSeag);
    }

    if (currentGame.obstaclesFrequency % 180 === 1) {
        const randomObstacleY = Math.floor((Math.random() * 600) + 50);
        newObstacleSeag2 = new Seagull(
            900,
            randomObstacleY);
        currentGame.obstaclesSeag2.push(newObstacleSeag2);
    }

    //Left Seagulls

    currentGame.obstaclesSeag.forEach((obstacleS, index3) => {
        if (obstacleS.isDead){
            obstacleS.y += 2;
            obstacleS.x += 15;
            obstacleS.draw();
        } else {
            obstacleS.x += 15;
            obstacleS.isLeft = true;
            obstacleS.draw();
            if(obstacleS.x > canvas.clientWidth) {
                currentGame.obstaclesSeag.splice(index3, 1);
            }
        }
    });

    //Right Seagulls

    currentGame.obstaclesSeag2.forEach((obstacleS2, index4) => {
        if (obstacleS2.isDead){
            obstacleS2.y += 2;
            obstacleS2.x -= 15;
            obstacleS2.draw();
            if((obstacleS2.x + 70) < 0){
                currentGame.newObstacleSeag2.splice(index4, 1);
            }
        } else {
            obstacleS2.x -= 15;
            obstacleS2.draw();
            if((obstacleS2.x + 70) < 0) {
                currentGame.obstaclesSeag2.splice(index4, 1)
                console.log("right seag out of bounds");
            }
        }
    })

    //Right SeagHeart
    currentGame.obstaclesSeag3.forEach((seagHeart, index5) => {
        seagHeart.x -= 5;
        seagHeart.draw();
        if(seagHeart.heartEmpty){
            heart = context.drawImage(heartEmptyImg, seagHeart.x , (seagHeart.y + 50), 32, 32);
        }else {
            heart = context.drawImage(currentGame.imageH1, seagHeart.x , (seagHeart.y + 50), 32, 32);
        }
        if(seagHeart.x < 0) {
            currentGame.obstaclesSeag3.splice(index5, 1);
            console.log("Right seag spliced");
        }
    })

    //Left SeagHeart
    currentGame.obstaclesSeag4.forEach((seagHeart2, index6) => {
        seagHeart2.x += 5;
        seagHeart2.isLeft = true;
        if(seagHeart2.heartEmpty){
            hear2 = context.drawImage(heartEmptyImg, seagHeart2.x , (seagHeart2.y + 50), 32, 32);
        }else {
            hear2 = context.drawImage(currentGame.imageH1, seagHeart2.x , (seagHeart2.y + 50), 32, 32);
        }
        seagHeart2.draw();
        if(seagHeart2.width > 900) {
            currentGame.obstaclesSeag4.splice(index6, 1);
            console.log("left seag spliced");
        }
    })
}

canvas.addEventListener('mousedown', (e) => {
    let pointerX = e.offsetX;
    let pointerY = e.offsetY;
    console.log(e);
    for(let i = 0; i<currentGame.obstacles2.length; i++) {
        if (currentGame.obstacles2[i].x < pointerX && (currentGame.obstacles2[i].x + currentGame.obstacles2[i].width) > pointerX && (currentGame.obstacles2[i].y - 5) < pointerY && (currentGame.obstacles2[i].y + currentGame.obstacles2[i].width) > pointerY) {
            quackSound.play();
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
        if (-(currentGame.obstacles[i].x) < pointerX && (currentGame.obstacles[i].width + currentGame.obstacles[i].x) > pointerX && (currentGame.obstacles[i].y - 5) < pointerY && (currentGame.obstacles[i].y + currentGame.obstacles[i].height + 5) > pointerY) {
            quackSound.play();
            console.log("This is working Left Ducks")
            console.log(currentGame.obstacles[i].x, currentGame.obstacles[i].y);
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
        if (currentGame.obstaclesSeag2[i].x < pointerX && currentGame.obstaclesSeag2[i].x + currentGame.obstaclesSeag2[i].width > pointerX && currentGame.obstaclesSeag2[i].y < pointerY && (currentGame.obstaclesSeag2[i].y + 50) > pointerY) {
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
        if (currentGame.obstaclesSeag[i].x < pointerX && currentGame.obstaclesSeag[i].x + currentGame.obstaclesSeag[i].width > pointerX && currentGame.obstaclesSeag[i].y < pointerY && (currentGame.obstaclesSeag[i].y + 50) > pointerY) {
            console.log("This is working Left Seagulls")
            if(currentGame.obstaclesSeag[i].isDead){
                currentGame.score += 0
            }else {
                currentGame.score -= 10;
            }
            currentGame.obstaclesSeag[i].isDead = true;
            currentGame.obstaclesSeag[i].isLeft = true;
        }
    }
    for(let i = 0; i<currentGame.obstaclesSeag4.length; i++) {
        if (currentGame.obstaclesSeag4[i].x < pointerX && currentGame.obstaclesSeag4[i].x + currentGame.obstaclesSeag4[i].width > pointerX && currentGame.obstaclesSeag4[i].y < pointerY && currentGame.obstaclesSeag4[i].y + currentGame.obstaclesSeag4[i].height > pointerY) {
            if(currentGame.obstaclesSeag4[i].isDead){
                currentGame.score += 0
            }else {
                currentGame.score -= 10;
            }
            currentGame.obstaclesSeag4[i].isDead = true;
            currentGame.obstaclesSeag4[i].isLeft = true;
        }
    }
    for(let i = 0; i<currentGame.obstaclesSeag4.length; i++) {
        if (currentGame.obstaclesSeag4[i].x < pointerX && (currentGame.obstaclesSeag4[i].x + currentGame.obstaclesSeag4[i].width) > pointerX && (currentGame.obstaclesSeag4[i].y + currentGame.obstaclesSeag4[i].height) < pointerY && ((currentGame.obstaclesSeag4[i].y + 32) + currentGame.obstaclesSeag4[i].height ) > pointerY) {
            let click1 = 0;
            if(lives<5 && currentGame.obstaclesSeag4[i].clicks === 0){
                popSound.play();
                currentGame.obstaclesSeag4[i].heartEmpty = true;
                lives += 1;
                currentGame.obstaclesSeag4[i].clicks += 1;
            }
        console.log("life added 1");
        }
    }
    for(let i = 0; i<currentGame.obstaclesSeag3.length; i++) {
        if (currentGame.obstaclesSeag3[i].width < pointerX && -(currentGame.obstaclesSeag3[i].x + currentGame.obstaclesSeag3[i].width) > pointerX && currentGame.obstaclesSeag3[i].y < pointerY && currentGame.obstaclesSeag3[i].y + currentGame.obstaclesSeag3[i].height > pointerY) {
            if(currentGame.obstaclesSeag3[i].isDead){
                currentGame.score += 0
            }else {
                currentGame.score -= 10;
            }
            currentGame.obstaclesSeag3[i].isDead = true;
        }
    }
    for(let i = 0; i<currentGame.obstaclesSeag3.length; i++) {
        if (currentGame.obstaclesSeag3[i].x < pointerX && (currentGame.obstaclesSeag3[i].x + currentGame.obstaclesSeag3[i].width) > pointerX && (currentGame.obstaclesSeag3[i].y + currentGame.obstaclesSeag3[i].height) < pointerY && ((currentGame.obstaclesSeag3[i].y + 32) + currentGame.obstaclesSeag3[i].height ) > pointerY) {
            if(lives < 5 && currentGame.obstaclesSeag3[i].clicks === 0){
                popSound.play();
                currentGame.obstaclesSeag3[i].heartEmpty = true;
                lives += 1;
                currentGame.obstaclesSeag3[i].clicks += 1;
            }
            console.log("life added 2");
        }
    }
})