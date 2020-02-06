import { Rectangle, Circle, Geometry } from './library';

const geometries: Geometry[] = [];
geometries.push(new Rectangle(5, 4));
geometries.push(new Circle(3));

console.log(`Geometries: ${geometries.length}`);
geometries.forEach(geometry => {
    console.log(geometry.toString());
    console.log(`Perimeter is : ${geometry.perimeter()}`);
    console.log(`Area is : ${geometry.area()}`);
});
