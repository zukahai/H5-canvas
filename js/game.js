let game_W = 20;
let game_H = 20;
let start = false;
let die = false;
let ch = true;
let h = 2;
let a = 5, b = 5;
let xIM2 = 0, yIM2 = 0;
var im = new Image();
im.src="remove.png";
var im2 = new Image();
im2.src="remove2.png";
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

        console.log(xIM2, ' xy ', yIM2);

        v[0] = new dot(this, a, b);
        v[1] = new dot(this, a, b + 1);
        this.sn = new snake(this, v, new dot(this, a, b + 2), this.creatFood());

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

            if ((Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) <= 9 * this.getWidth() * this.getWidth() && (Xc - x) * (Xc - x) + (Yc - y) * (Yc - y) >= 1 * this.getWidth() * this.getWidth() && ch) {
                // console.log(x, ' ', y, ' ', Xc, ' ', Yc);
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

            xIM2 = x - this.getWidth();
            yIM2 = y - this.getWidth();
            this.draw();
        })

        document.addEventListener("touchstart", evt => {
            var x = evt.touches[0].pageX;
            var y = evt.touches[0].pageY;
            console.log(x, ' ' , y, ' Hello');
        })

        document.addEventListener("touchend", evt => {
            xIM2 = this.getWidth() * 2.5;
            yIM2 = game_H - this.getWidth() * 4.5;
        })
    }

    listenMouse() {
        document.addEventListener("mousemove", e => {
            if (!e) e = window.event;
            var x = e.offsetX==undefined?e.layerX:e.offsetX;
            var y = e.offsetY==undefined?e.layerY:e.offsetY;

            var Xc = this.getWidth() * 3.5;
            var Yc = game_H - this.getWidth() * 3.5;

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
                console.log(h);
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
        setTimeout(() => this.loop(), 200);
    }

    update() {
        // this.sn.dau.display();
        // console.log('Hai');
        this.render();
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
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight - 4;
        game_W = this.canvas.width;
        game_H = this.canvas.height;
    }

    draw() {
        this.clearScreen();
        this.context.fillStyle = "red";
        this.context.font = this.getWidth() + 'px serif';
        this.context.fillText("Score: " + this.sn.getScore(), this.getWidth(), this.getWidth());
        this.drawEcircle();
        
        this.sn.draw();
    }

    drawEcircle() {
        // this.context.beginPath();
        // this.context.strokeStyle = '#C0C0C0';
        // this.context.lineWidth = 5;
        // this.context.arc(this.getWidth() * 3.5, game_H - this.getWidth() * 3.5, this.getWidth() * 2, 0, 2 * Math.PI);
        // this.context.stroke();

        // this.context.beginPath();
        // this.context.strokeStyle = '#C0C0C0';
        // this.context.lineWidth = 5;
        // this.context.arc(this.getWidth() * 3.5, game_H - this.getWidth() * 3.5, this.getWidth() * 3, 0, 2 * Math.PI);
        // this.context.stroke();
        this.context.drawImage(im, this.getWidth() * 0.5, game_H - this.getWidth() * 6.5, this.getWidth() * 6, this.getWidth() * 6);
        this.context.drawImage(im2, xIM2, yIM2, this.getWidth() * 2, this.getWidth() * 2);
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
        var area = document.documentElement.clientWidth * document.documentElement.clientHeight;
        return Math.sqrt(area / 400);
    }

}

var g = new game();
