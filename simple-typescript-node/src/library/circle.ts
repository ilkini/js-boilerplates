import { Geometry } from './geometry';

export class Circle implements Geometry {
    constructor(public radius: number) {}

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    toString(): string {
        return `Circle: radius = ${this.radius}`;
    }
}
