class snake {
    constructor(game, vec, dau, food) {
        this.game = game;
        this.v = vec;
        this.dau = dau;
        this.food = food;
        this.score = 0;
    }

    creatFood() {
        this.dd = new dot(this.game, 0, 0); 
        do {
            let check = true;
            let xx = Math.floor(Math.random() * game_H / this.game.getWidth());
            let yy = Math.floor(Math.random() * game_W / this.game.getWidth());
            this.dd = new dot(this.game, xx, yy);  

            for (let i = 0; i < this.v.length; i++) {
                if (this.v[i].compareDot(this.dd) == true) {
                    check = false;
                    break;
                }
            }
            if (check == true)
                break;

        } while(true);
        
        return this.dd;
    }

    checkDie() {
        for (let i = 0; i < this.v.length; i++) {
            if (this.v[i].compareDot(this.dau) == true) {
                return true;
            }
        }
        return false;
    }

    draw() {
        for (var i = 0; i < this.v.length; i++) {
            this.v[i].draw(0);
        }
        this.food.draw(2);
        this.dau.draw(1);
    }

    moveUp() {
        if (this.dau.compareDot(this.food)) {
            v[this.v.length] = this.dau;
            this.food = this.creatFood();
            this.food.display();
        } else {
            for (var i = 0; i < this.v.length - 1; i++) {
                this.v[i] = this.v[i + 1];
            }
            v[this.v.length - 1] = this.dau;
        }
        this.dau = new dot(this.game, this.dau.getX() - 1, this.dau.getY());
    }

    moveDown() {
        if (this.dau.compareDot(this.food)) {
            v[this.v.length] = this.dau;
            this.food = this.creatFood();
            this.food.display();
        } else {
            for (var i = 0; i < this.v.length - 1; i++) {
                this.v[i] = this.v[i + 1];
            }
            v[this.v.length - 1] = this.dau;
        }
        this.dau = new dot(this.game, this.dau.getX() + 1, this.dau.getY());
    }

    moveLeft() {
        if (this.dau.compareDot(this.food)) {
            v[this.v.length] = this.dau;
            this.food = this.creatFood();
            this.food.display();
        } else {
            for (var i = 0; i < this.v.length - 1; i++) {
                this.v[i] = this.v[i + 1];
            }
            v[this.v.length - 1] = this.dau;
        }
        this.dau = new dot(this.game, this.dau.getX(), this.dau.getY() - 1);
    }

    moveRight() {
        if (this.dau.compareDot(this.food)) {
            v[this.v.length] = this.dau;
            this.food = this.creatFood();
            this.food.display();
        } else {
            for (var i = 0; i < this.v.length - 1; i++) {
                this.v[i] = this.v[i + 1];
            }
            v[this.v.length - 1] = this.dau;
        }
        this.dau = new dot(this.game, this.dau.getX(), this.dau.getY() + 1);
    }

    display() {
        
    }

    getVec() {
        return this.v;
    }

    getDau() {
        return this.dau;
    }

    getScore() {
        return this.v.length - 2;
    }

    setScore(score) {
        this.score = score;
    }
}