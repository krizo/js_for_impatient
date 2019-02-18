export class Color {
    static fromJson(jsonValue) {
        if (!(jsonValue instanceof Object) || !('name' in jsonValue)) {
            throw new Error('Illegal value: '+jsonValue);
        }
        return new Color(jsonValue.name);
    }
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `Color(${this.name})`;
    }
    toJSON() {
        return {name: this.name};
    }
}
export class ColorPoint {
    static fromJson(jsonValue) {
        if (!(jsonValue instanceof Object) || !('x' in jsonValue) || !('y' in jsonValue) || !('color' in jsonValue)) {
            throw new Error('Illegal value: '+jsonValue);
        }
        return new ColorPoint(jsonValue.x, jsonValue.y, Color.fromJson(jsonValue.color));
    }
    constructor(x, y, color) {
        if (!(color instanceof Color)) {
            throw new Error('Not an instance of Color: '+color);
        }
        this.x = x;
        this.y = y;
        this.color = color;
    }
    toString() {
        return `ColorPoint(${this.x}, ${this.y}, ${this.color})`;
    }
    // No need to implement .toJSON() here!
}