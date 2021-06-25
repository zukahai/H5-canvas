var bd = [];
bd[0] = new Image();
bd[0].src="images/bodySnake.png";

bd[1] = new Image();
bd[1].src="images/bodySnake2.png";

var he = []

for (let i = 1; i <= 4; i++) {
    he[i - 1] = new Image();
    he[i - 1].src="images/HeadSnake" + i + ".png";
}

class dot{
    constructor (game, row, col) {
        this.game = game;
        this.row = row;
        this.col = col;
        this.size = game.getWidth();
    }
    
    draw(k) {
        this.size = this.game.getWidth();
        let x = this.col * this.size;
        let y = this.row * this.size;
        if (k == 1) 
            this.game.context.drawImage(he[count % 4], x, y, this.size + 1, this.size + 1);
        if (k == 0)
            this.game.context.drawImage(bd[Math.floor(x + y + count) % 2], x, y, this.size + 1, this.size + 1);
    }

    getX() {
        return this.col;
    }

    getY() {
        return this.row;
    }

    display() {
        console.log(this.row, ' ', this.col);
    }

    compareDot(dd) {
        if (this.col == dd.getX() && this.row == dd.getY())
            return true;
        return false;
    }
}