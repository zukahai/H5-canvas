const game_W = 600;
const game_H = 600;


let start = false;
let h = 2;
let a = 5, b = 5;

var v = [];

class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = game_W;
        this.canvas.height = game_H;
        document.body.appendChild(this.canvas);

        // this.d = new dot(this, a, b);

        v[0] = new dot(this, a, b);
        v[1] = new dot(this, a, b + 1);
        this.sn = new snake(this, v, new dot(this, a, b + 2));

        this.loop();

        this.listenKeyboard();
    }

    listenKeyboard() {
        document.addEventListener("keydown", key => {
            switch(key.keyCode) {
                case 37:
                    this.sn.moveLeft();
                    break;
                case 38:
                    this.sn.moveUp();
                    break;
                case 39:
                    this.sn.moveRight();
                    break;
                case 40:
                    this.sn.moveDown();
                    break;
            }
        })
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 30);
    }

    update() {
        if (start == true) {

        }  
    }

    draw() {
        this.clearScreen();
        this.sn.draw();
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, game_W, game_H);
    }

}

var g = new game();
