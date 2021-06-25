let game_W = 20;
let game_H = 20;
let start = false;
let die = false;
let ch = true;
let h = 2;
let a = 5, b = 5;
let xIM2 = 0, yIM2 = 0;
let rm = false;
let count = 0;
var im = new Image();
im.src="images/remove.png";
var im2 = new Image();
im2.src="images/remove2.png";
var bg = new Image();
bg.src="images/background.jpg";
var fim = [];
fim[0] = new Image();
fim[0].src="images/food1.png";
fim[1] = new Image();
fim[1].src="images/food2.png";
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

        this.render();
        xIM2 = this.getWidth() * 2.5;
        yIM2 = game_H - this.getWidth() * 4.5;

        v[0] = new dot(this, a, b);
        v[1] = new dot(this, a, b + 1);
        this.sn = new snake(this, v, new dot(this, a, b + 2));
        this.sn.setFood(this.sn.creatFood());

        this.loop();

        this.listenKeyboard();
        this.listenMouse();
        this.listenTouch();
    }

    listenTouch() {
        document.addEventListener("touchmove", evt => {
            if (evt) evt = window.event;
            var x = evt.touches[0].pageX;
            var y = evt.touches[0].pageY;

            var Xc = this.getWidth() * 3.5;
            var Yc = game_H - this.getWidth() * 3.5;

            if ((Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) > 4 * this.getWidth() * this.getWidth()) {
                var XX = x - Xc;
                var YY = y - Yc;
                var HH = Math.sqrt(XX * XX + YY * YY);
                var R = 2 * this.getWidth();
                x = (R * XX) / HH + Xc;
                y = (R * YY) / HH + Yc;
            }

            if ((Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) >= 0 * this.getWidth() * this.getWidth() && ch) {
                start = true;
                ch = false;
                if (Math.abs(Xc - x) > Math.abs(Yc - y)) {
                    if (x - Xc > 0) {
                        if (h != 4)
                            h = 2;
                    } else {
                        if (h != 2)
                            h = 4;
                    }
                } else {
                    if (y- Yc > 0) {
                        if (h != 1)
                            h = 3;
                    } else {
                        if (h != 3)
                            h = 1;
                    }
                }
            }
            if (rm == true) {
                xIM2 = x - this.getWidth();
                yIM2 = y - this.getWidth();
                this.draw();
            }
        })

        document.addEventListener("touchstart", evt => {
            var x = evt.touches[0].pageX;
            var y = evt.touches[0].pageY;
            var Xc = this.getWidth() * 3.5;
            var Yc = game_H - this.getWidth() * 3.5;
            if ((Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) <= 9 * this.getWidth() * this.getWidth()) {
                rm = true;
                xIM2 = x - this.getWidth();
                yIM2 = y - this.getWidth();
                this.draw();
            }
        })

        document.addEventListener("touchend", evt => {
            xIM2 = this.getWidth() * 2.5;
            yIM2 = game_H - this.getWidth() * 4.5;
            this.draw();
            rm = false;
        })
    }

    listenMouse() {
        document.addEventListener("mousemove", e => {
            if (!e) e = window.event;
            var x = e.offsetX==undefined?e.layerX:e.offsetX;
            var y = e.offsetY==undefined?e.layerY:e.offsetY;

            var Xc = this.getWidth() * 3.5;
            var Yc = game_H - this.getWidth() * 3.5;

            if ((Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) <= 50 * this.getWidth() * this.getWidth()) {
                if ((Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) >= 4 * this.getWidth() * this.getWidth()) {
                    var XX = x - Xc;
                    var YY = y - Yc;
                    var HH = Math.sqrt(XX * XX + YY * YY);
                    var R = 2 * this.getWidth();
                    x = (R * XX) / HH + Xc;
                    y = (R * YY) / HH + Yc;
                    xIM2 = x - this.getWidth();
                    yIM2 = y - this.getWidth();
                    this.draw();
                } else {
                    xIM2 = x - this.getWidth();
                    yIM2 = y - this.getWidth();
                    this.draw()
                }
            } else {
                xIM2 = this.getWidth() * 2.5;
                yIM2 = game_H - this.getWidth() * 4.5;
                rm = false;
                this.draw();
            }

            if ((Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) <= 9 * this.getWidth() * this.getWidth() && (Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) >= 1 * this.getWidth() * this.getWidth() && ch) {
                ch = false;
                start = true;
                if (Math.abs(Xc - x) > Math.abs(Yc - y)) {
                    if (x - Xc > 0) {
                        if (h != 4)
                            h = 2;
                    } else {
                        if (h != 2)
                            h = 4;
                    }
                } else {
                    if (y- Yc > 0) {
                        if (h != 1)
                            h = 3;
                    } else {
                        if (h != 3)
                            h = 1;
                    }
                }
            }
        }) 
    }

    listenKeyboard() {
        document.addEventListener("keydown", key => {
            if (!ch)
                return;
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
            ch = false;
        })
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 100);
    }

    update() {
        this.render();
        count++;
        if (this.sn.getFood().getX() > this.canvas.width / this.getWidth() || this.sn.getFood().getY() > this.canvas.height / this.getWidth())
            this.sn.setFood(this.sn.creatFood());
        if (start == true && !die) {
            ch = true;
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
            let X_ = this.sn.headSnake.getX();
            let Y_ = this.sn.headSnake.getY();
            die = this.sn.checkDie();
            if (die == true)  {
                window.alert("Lose");
                location.reload();
            }
        }  
    }

    render() {
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        game_W = this.canvas.width;
        game_H = this.canvas.height;
        if (!rm) {
            xIM2 = this.getWidth() * 2.5;
            yIM2 = game_H - this.getWidth() * 4.5;
        }
    }

    draw() {
        this.clearScreen();
        this.drawEcircle();
        this.context.fillStyle = "#33FFFF";
        this.context.font = this.getWidth() + 'px Stencil';
        this.context.fillText("Score: " + this.sn.getScore(), this.getWidth(), this.getWidth());
        this.sn.draw();
    }

    drawEcircle() {
        this.context.drawImage(bg, 0, 0, game_W, game_H);
        this.context.drawImage(im, this.getWidth() * 0.5, game_H - this.getWidth() * 6.5, this.getWidth() * 6, this.getWidth() * 6);
        this.context.drawImage(im2, xIM2, yIM2, this.getWidth() * 2, this.getWidth() * 2);
        this.context.drawImage(fim[Math.floor(count) % 2], this.sn.getFood().getX() * this.getWidth(), this.sn.getFood().getY() * this.getWidth(), this.getWidth(), this.getWidth());
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, game_W, game_H);
    }

    getWidth() {
        var area = document.documentElement.clientWidth * document.documentElement.clientHeight;
        return Math.sqrt(area / 400);
    }
}

var g = new game();
