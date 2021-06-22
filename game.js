nhanVat = {
    x : 100,
    y : 100
}

const game_W = 600;
const game_H = 600;

var conText = null;
class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
    }

    init() {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        console.log(this.context);
        conText = this.canvas.getContext("2d");
        this.canvas.width = game_W;
        this.canvas.height = game_H;

        document.body.appendChild(this.canvas);
        // new dot(this, 100, 100);
        // this.loop();

        this.startGame();
        this.listenKeyboard();
    }

    listenKeyboard() {
        document.addEventListener("keydown", key => {
            switch(key.keyCode) {
                case 37:
                    nhanVat.x -= 5;
                    break;
                case 38:
                    nhanVat.y -= 5;
                    break;
                case 39:
                    nhanVat.x += 5;
                    break;
                case 40:
                    nhanVat.y += 5;
                    break;
            }
        })
    }

    loop() {
        console.log(this.context);
        this.update();
        setTimeout(() => this.loop(), 1000);
    }

    startGame() {
        setInterval(this.draw, 100);
    }

    update() {
        
    }

    draw() {
        // console.log(conText);
        // conText = this.canvas.getContext("2d");
        this.context = conText;
        this.context.fillStyle = '#000000';
        this.context.fillRect(nhanVat.x, nhanVat.y, 20, 20);
        this.d = new dot(this, nhanVat.x, nhanVat.y);
        this.d.draw();

        nhanVat.y ++;
    }

}

var g = new game();
