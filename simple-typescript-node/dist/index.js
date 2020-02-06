"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("./library");
const geometries = [];
geometries.push(new library_1.Rectangle(5, 4));
geometries.push(new library_1.Circle(3));
console.log(`Geometries: ${geometries.length}`);
geometries.forEach(geometry => {
    console.log(geometry.toString());
    console.log(`Perimeter is :${geometry.perimeter()}`);
    console.log(`Area is :${geometry.area()}`);
});
//# sourceMappingURL=index.js.map