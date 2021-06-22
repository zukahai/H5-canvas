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
        v[2] = new dot(this, a, b + 2);
        this.sn = new snake(this, v, new dot(this, a, b + 3));

        this.loop();

        this.listenKeyboard();
    }

    listenKeyboard() {
        document.addEventListener("keydown", key => {
            switch(key.keyCode) {
                case 37:
                    if (h != 2) {
                        start = true;
                        h = 4;
                    }
                    break;
                case 38:
                    if (h != 3) {
                        start = true;
                        h = 1;
                    }
                    break;
                case 39:
                    if (h != 4) {
                        start = true;
                        h = 2;
                    }
                    break;
                case 40:
                    if (h != 1) {
                        start = true;
                        h = 3;
                    }
                    break;
            }
        })
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 200);
    }

    update() {
        if (start == true) {
            switch(h) {
                case 1:
                    this.sn.moveUp();
                    break;
                case 2:
                    this.sn.moveRight();
                    break;
                case 3:
                    this.sn.moveDown();
                    break;
                case 4:
                    this.sn.moveLeft();
                    break;
            }
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
