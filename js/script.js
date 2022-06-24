const ball = {
    pos: {x: 0, y: 0},
    radius: 0
}

const player = {
    pos: {x: 0, y: 0},
    left_top: {x: 0, y: 0},
    left_bottom: {x: 0, y: 0},
    right_top: {x: 0, y: 0},
    right_bottom: {x: 0, y: 0}
}

const block = {
    pos: {x: 0, y: 0},
    left_top: {x: 0, y: 0},
    left_bottom: {x: 0, y: 0},
    right_top: {x: 0, y: 0},
    right_bottom: {x: 0, y: 0}
}

const world_border = {
    left_top: {x: 0, y: 0},
    left_bottom: {x: 0, y: 0},
    right_top: {x: 0, y: 0},
    right_bottom: {x: 0, y: 0}
}

function checkCollision() {}

let gameScreenDoc = document.getElementById("gamescreen");
let playerDoc = document.getElementById("player");
let ballDoc = document.getElementById("ball");
let playerMovespeed = 10;
let playerMovedir = 0;

// Posiciona o jogador e a bola
player.pos.x = 334;
player.pos.y = 390;

ball.pos.x = 374;
ball.pos.y = 340;

// Pega as bounds da tela
world_border.left_top.x = 0;
world_border.left_top.y = 0;

world_border.left_bottom.x = 0;
world_border.left_bottom.y = 432;

world_border.right_top.x = 768;
world_border.right_top.y = 0;

world_border.right_bottom.x = 768;
world_border.right_bottom.y = 432;

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
}