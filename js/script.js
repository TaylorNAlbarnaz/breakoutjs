const coord = {
    x: 0,
    y: 0
}

const ball = {
    pos: coord,
    radius: 0
}

const block = {
    pos: coord,
    left_top: coord,
    left_bottom: coord,
    right_top: coord,
    right_bottom: coord
}

const world_border = {
    left_top: coord,
    left_bottom: coord,
    right_top: coord,
    right_bottom: coord
}

console.log(coord);
console.log(ball);
console.log(block);

function checkCollision() {}


let moving = 0;

// Input de controles
document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "ArrowLeft":
            moving = -1;
        break;
        case "ArrowRight":
            moving = 1;
        break;
    }

    console.log(moving);
});

document.addEventListener('keyup', function(event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "ArrowLeft":
            if (moving == -1) {moving = 0;}
        break;
        case "ArrowRight":
            if (moving == 1) {moving = 0;}
        break;
    }

    console.log(moving);
});