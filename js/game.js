let game_W = 20;
let game_H = 20;
let start = false;
let die = false;
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
        document.body.appendChild(this.canvas);

        // this.d = new dot(this, a, b);

        this.render();

        v[0] = new dot(this, a, b);
        v[1] = new dot(this, a, b + 1);
        v[2] = new dot(this, a, b + 2);
        this.sn = new snake(this, v, new dot(this, a, b + 3), this.creatFood());

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
        // this.sn.dau.display();
        // console.log('Hai');
        this.render();
        if (start == true && !die) {
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
            let X_ = this.sn.dau.getX();
            let Y_ = this.sn.dau.getY();
            die = this.sn.checkDie();
            if (X_ < 0 || X_ >= game_H / this.getWidth() || Y_ < 0 || Y_ >= game_W / this.getWidth()) {
                die = true;
            }
            if (die == true)  {
                window.alert("Lose");
                location.reload();
            }
        }  
    }

    render() {
        this.canvas.width = document.documentElement.clientWidth * 0.7;
        this.canvas.height = this.canvas.width * 0.6;
        if (this.canvas.height > document.documentElement.clientHeight * 0.9) {
            this.canvas.height = document.documentElement.clientHeight * 0.9;
            this.canvas.width = this.canvas.height / 0.6;
        }
        game_W = this.canvas.width;
        game_H = this.canvas.height;
    }

    draw() {
        this.clearScreen();
        this.context.fillStyle = "red";
        this.context.font = this.getWidth() + 'px serif';
        this.context.fillText("Score: " + this.sn.getScore(), this.getWidth(), this.getWidth());
        this.sn.draw();
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, game_W, game_H);
    }

    creatFood() {
        let xx = Math.floor(Math.random() * game_H / this.getWidth());;
        let yy = Math.floor(Math.random() * game_W / this.getWidth());
        this.dd = new dot(this, xx, yy);  
        return this.dd;
    }

    getWidth() {
        return document.documentElement.clientWidth * 0.7 / 30;
    }

}

var g = new game();
