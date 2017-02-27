function Score () {
    this.val = 0;
    this.wrap = null;

    this.reset = function () {
        this.val = 0;
    };

    this.show = function () {
        this.wrap.textContent = 'Score: ' + this.val;
    };

}
