function Square (w, h, rgb, randCoord) {
    if (randCoord === undefined) {
        randCoord = false;
    }

    width -= w / 2;
    height -= h / 2;

    if (randCoord) {
        this.x = random(0, width);
        this.y = random(0, height);
    } else {
        this.x = 0;
        this.y = 0;
    }

    this.w = w;
    this.h = h;

    this.show = function () {
        if (!Array.isArray(rgb)) {
            fill(rgb);
        } else {
            fill.apply(null, rgb);
        }

        noStroke();
        rect(this.x, this.y, this.w, this.h);
    };

    this.rewind = function () {
        this.x = random(0, width);
        this.y = random(0, height);
    };
}
