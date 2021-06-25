class snake {
    constructor(game, vec, headSnake, food) {
        this.game = game;
        this.v = vec;
        this.headSnake = headSnake;
        this.food = food;
        this.score = 0;
    }

    creatFood() {
        this.dd = new dot(this.game, 0, 0); 
        do {
            let check = true;
            let xx = Math.floor(Math.random() * (game_H - this.game.getWidth()) / this.game.getWidth());
            let yy = Math.floor(Math.random() * (game_W - this.game.getWidth()) / this.game.getWidth());
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
            if (this.v[i].compareDot(this.headSnake) == true) {
                return true;
            }
        }
        return false;
    }

    draw() {
        for (var i = 0; i < this.v.length; i++) {
            this.v[i].draw(0);
        }
        // this.food.draw(2);
        this.headSnake.draw(1);
    }

    moveUp() {
        if (this.headSnake.compareDot(this.food)) {
            v[this.v.length] = this.headSnake;
            this.food = this.creatFood();
            this.food.display();
        } else {
            for (var i = 0; i < this.v.length - 1; i++) {
                this.v[i] = this.v[i + 1];
            }
            v[this.v.length - 1] = this.headSnake;
        }
        if (this.headSnake.getY() - 1 >= 0)
            this.headSnake = new dot(this.game, this.headSnake.getY() - 1, this.headSnake.getX());
        else 
            this.headSnake = new dot(this.game, Math.floor(document.documentElement.clientHeight / this.game.getWidth() - 1), this.headSnake.getX());
    }

    moveDown() {
        if (this.headSnake.compareDot(this.food)) {
            v[this.v.length] = this.headSnake;
            this.food = this.creatFood();
            this.food.display();
        } else {
            for (var i = 0; i < this.v.length - 1; i++) {
                this.v[i] = this.v[i + 1];
            }
            v[this.v.length - 1] = this.headSnake;
        }
        if (this.headSnake.getY() + 1 <= Math.floor(document.documentElement.clientHeight / this.game.getWidth() - 1))
            this.headSnake = new dot(this.game, this.headSnake.getY() + 1, this.headSnake.getX());
        else
        this.headSnake = new dot(this.game, 0, this.headSnake.getX());
    }

    moveLeft() {
        if (this.headSnake.compareDot(this.food)) {
            v[this.v.length] = this.headSnake;
            this.food = this.creatFood();
            this.food.display();
        } else {
            for (var i = 0; i < this.v.length - 1; i++) {
                this.v[i] = this.v[i + 1];
            }
            v[this.v.length - 1] = this.headSnake;
        }
        if (this.headSnake.getX() - 1 >= 0)
            this.headSnake = new dot(this.game, this.headSnake.getY(), this.headSnake.getX() - 1);
        else 
        this.headSnake = new dot(this.game, this.headSnake.getY(), Math.floor(document.documentElement.clientWidth / this.game.getWidth() - 1));
    }

    moveRight() {
        if (this.headSnake.compareDot(this.food)) {
            v[this.v.length] = this.headSnake;
            this.food = this.creatFood();
            this.food.display();
        } else {
            for (var i = 0; i < this.v.length - 1; i++) {
                this.v[i] = this.v[i + 1];
            }
            v[this.v.length - 1] = this.headSnake;
        }
        if (this.headSnake.getX() + 1 <= Math.floor(document.documentElement.clientWidth / this.game.getWidth() - 1))
            this.headSnake = new dot(this.game, this.headSnake.getY(), this.headSnake.getX() + 1);
        else
        this.headSnake = new dot(this.game, this.headSnake.getY(), 0);
    }

    display() {
        
    }

    getVec() {
        return this.v;
    }

    getheadSnake() {
        return this.headSnake;
    }

    getScore() {
        return this.v.length - 2;
    }

    getFood() {
        return this.food;
    }

    setScore(score) {
        this.score = score;
    }
}