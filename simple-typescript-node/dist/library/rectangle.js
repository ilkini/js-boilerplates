"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
    toString() {
        return `Rectangle : width = ${this.width}, height = ${this.height}`;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map