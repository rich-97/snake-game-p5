var snake;
var food;
var speed = 1;
var score = new Score();

function setup () {
    createCanvas(400, 400);
    snake = new Snake(10, 10, 255);
    snake.x = 2; snake.y = 2;
    food = new Food(10, 10, [255, 0, 100], true);
    frameRate(8);
}

function draw () {
    background(45);

    if (snake.eat(food)) {
        score.val++;
        score.show();
        snake.rise++; 
        food.rewind();
    }

    for (var i = 0; i < snake.tail.length; i++) {
        xTail = snake.tail[i].x;
        yTail = snake.tail[i].y;
        var diff = dist(xTail, yTail, food.x, food.y);

        if (diff < 7) {
            food.rewind();
        }

        if (snake.crash(xTail, yTail)) {
            score.reset();
            score.show();
            snake.death();
            break;
        } else {
            noStroke();
            fill(255);
            rect(xTail, yTail, snake.w, snake.h);
        }
    }

    snake.show();
    snake.update();
    food.show();
}

function keyPressed () {
    switch (keyCode) {
        case W:
        case K:
        case UP_ARROW: {
            snake.dir(0, -speed);
            break;
        }
        case S:
        case J:
        case DOWN_ARROW: {
            snake.dir(0, speed);
            break;
        }
        case A:
        case H:
        case LEFT_ARROW: {
            snake.dir(-speed, 0);
            break;
        }
        case D:
        case L:
        case RIGHT_ARROW: {
            snake.dir(speed, 0);
            break;
        }
        default: {
            return false;
            break;
        }
    }
}

