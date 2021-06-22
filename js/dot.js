class dot{
    constructor (game, row, col) {
        this.game = game;
        this.row = row;
        this.col = col;
        this.size = game.getWidth();
        // console.log(this.size);
    }
    
    draw(k) {
        this.size = this.game.getWidth();
        let x = this.col * this.size;
        let y = this.row * this.size;
        this.game.context.fillStyle = '#ffffff';
        if (k == 1) 
            this.game.context.fillStyle = '#ff0000';
        if (k == 2) 
            this.game.context.fillStyle = 'green';
        this.game.context.fillRect(x, y, this.size, this.size);
    }

    getX() {
        return this.row;
    }

    getY() {
        return this.col;
    }

    display() {
        console.log(this.row, ' ', this.col);
    }

    compareDot(dd) {
        if (this.row == dd.getX() && this.col == dd.getY())
            return true;
        return false;
    }

}