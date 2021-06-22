class snake {
    constructor(game, vec, dau) {
        this.game = game;
        this.v = vec;
        this.dau = dau;
    }

    draw() {
        for (var i = 0; i < this.v.length; i++) {
            this.v[i].draw(0);
        }
        this.dau.draw(1);
    }

    moveUp() {
        for (var i = 0; i < this.v.length - 1; i++) {
            this.v[i] = this.v[i + 1];
        }
        v[this.v.length - 1] = this.dau;
        this.dau = new dot(this.game, this.dau.getX() - 1, this.dau.getY());
    }

    moveDown() {
        for (var i = 0; i < this.v.length - 1; i++) {
            this.v[i] = this.v[i + 1];
        }
        v[this.v.length - 1] = this.dau;
        this.dau = new dot(this.game, this.dau.getX() + 1, this.dau.getY());
    }

    moveLeft() {
        for (var i = 0; i < this.v.length - 1; i++) {
            this.v[i] = this.v[i + 1];
        }
        v[this.v.length - 1] = this.dau;
        this.dau = new dot(this.game, this.dau.getX(), this.dau.getY() - 1);
    }

    moveRight() {
        for (var i = 0; i < this.v.length - 1; i++) {
            this.v[i] = this.v[i + 1];
        }
        v[this.v.length - 1] = this.dau;
        this.dau = new dot(this.game, this.dau.getX(), this.dau.getY() + 1);
    }

    display() {
        for (var i = 0; i < this.v.length; i++) {
            this.v[i].draw(0);
        }
    }

}