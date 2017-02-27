function Snake (w, h, rgb, randCoord) {
    Square.call(this, w, h, rgb, randCoord);
    this.xspeed = 1;
    this.yspeed = 0;
    this.rise = 0;
    this.tail = [];

    this.crash = function (xTail, yTail) {
        var diff = dist(this.x, this.y, xTail, yTail);

        if (diff < 7) {
            return true;
        } else {
            return false;
        }

    };

    this.update = function () {
        if (this.rise === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }

        if (this.x > width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = width;
        }

        if (this.y > height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = height;
        }


        this.tail[this.rise - 1] = createVector(this.x, this.y);
        this.x += this.xspeed * this.w;
        this.y += this.yspeed * this.h;
    };

    this.dir = function (x, y) {
        if (this.tail.length > 0) {
            if (this.xspeed === 0) {
                if (this.yspeed !== -y) {
                    this.yspeed = y;
                }
            } else {
                this.yspeed = y;
            }

            if (this.yspeed === 0) {
                if (this.xspeed !== -x) {
                    this.xspeed = x;
                }
            } else {
                this.xspeed = x;
            }

        } else {
            this.xspeed = x;
            this.yspeed = y;
        }
    };

    this.eat = function (food) {
        var diff = dist(this.x, this.y, food.x, food.y);

        if (diff < 7) {
            return true;
        } else {
            return false;
        }
    };

    this.death = function () {
        this.rise = 0;
        this.tail = [];
        this.rewind();
    }
}
