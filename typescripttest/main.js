var Point = /** @class */ (function () {
    function Point() {
        this.x = 10;
        this.y = 20;
    }
    Point.prototype.draw = function () {
        console.log('x');
    };
    Point.prototype.getDistance = function (anotherpoint) {
        //..
    };
    return Point;
}());
var point;
point.draw();
