import { Geometry } from './geometry';

export class Rectangle implements Geometry {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }

    toString(): string {
        return `Rectangle : width = ${this.width}, height = ${this.height}`;
    }
}
