"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Circle: radius = ${this.radius}`;
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map