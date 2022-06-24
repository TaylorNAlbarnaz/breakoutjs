const ball = {
    pos: {x: 374, y: 340},
    radius: 10,
    moveDir: 1,
    moveSpeed: 8,
}

const player = {
    pos: {x: 334, y: 390},
    size: {width: 100, height: 20},
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}

const block = {
    pos: {x: 0, y: 0},
    size: {width: 100, height: 20},
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}

const world_border = {
    top: 0,
    right: 768,
    bottom: 432,
    left: 0
}

function CheckCollision() {
    // Checa as colisões com as bordas
    if (Math.abs(ball.pos.x + 10 - world_border.left) < ball.radius) BounceBall(false);
    if (Math.abs(ball.pos.x - 10 - world_border.right) < ball.radius) BounceBall(false);
    if (Math.abs(ball.pos.y - 10 - world_border.top) < ball.radius) BounceBall(false);
    if (Math.abs(ball.pos.y + 10 - world_border.bottom) < ball.radius) BounceBall(false);

    // Checa a colisão com o jogador
    if (CheckCollisionBlock(player.left, player.top, player.right, player.bottom)) {
        BounceBall(false);
    }


}

function CheckCollisionBlock(left, top, right, bottom)
{
    let closestX = (ball.pos.x < left ? left : (ball.pos.x > right ? right : ball.pos.x));
    let closestY = (ball.pos.y < top ? top : (ball.pos.y > bottom ? bottom : ball.pos.y));
    let dx = closestX - ball.pos.x;
    let dy = closestY - ball.pos.y;

   return (( dx * dx + dy * dy ) <= ball.radius * ball.radius);
}

let gameScreenDoc = document.getElementById("gamescreen");
let playerDoc = document.getElementById("player");
let ballDoc = document.getElementById("ball");
let playerMovespeed = 10;
let playerMovedir = 0;

// Input de controles
document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "ArrowLeft":
            playerMovedir = -1;
        break;
        case "ArrowRight":
            playerMovedir = 1;
        break;
    }

    UpdatePlayerPosition();
});

document.addEventListener('keyup', function(event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "ArrowLeft":
            if (playerMovedir == -1) {playerMovedir = 0;}
        break;
        case "ArrowRight":
            if (playerMovedir == 1) {playerMovedir = 0;}
        break;
    }
});

// Movimento do Jogador
function UpdatePlayerPosition() {
    if (playerMovedir === -1) {
        player.pos.x -= playerMovespeed;
    }
    if (playerMovedir === 1) {
        player.pos.x += playerMovespeed;
    }
    playerDoc.style.left = player.pos.x+"px";

    player.top = player.pos.y - player.size.height / 2;
    player.right = player.pos.x + player.size.width / 2;
    player.bottom = player.pos.y + player.size.height / 2;
    player.left = player.pos.x - player.size.width / 2;
}


// Movimento da Bola
function UpdateBallPosition() {
    ball.pos.x += Math.cos(ball.moveDir) * ball.moveSpeed;
    ball.pos.y += Math.sin(ball.moveDir) * ball.moveSpeed;
    ballDoc.style.left = ball.pos.x+"px";
    ballDoc.style.top = ball.pos.y+"px";

    CheckCollision();
}
setInterval(UpdateBallPosition, 32);

function BounceBall(inverse) {
    if (inverse) {
        ball.moveDir = ball.moveDir - (Math.PI / 2);
    } else {
        ball.moveDir = ball.moveDir + (Math.PI / 2);
    }
}