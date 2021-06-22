class dot{
    constructor (game, x, y) {
        this.game = game;
        this.y = x;
        this.y = y;
    }
    
    draw() {
        this.game.context.fillStyle = '#000000';
        this.game.context.fillRect(this.x, this.y, 20, 20);
    }
}