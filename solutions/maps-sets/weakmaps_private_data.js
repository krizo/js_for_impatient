const _data = new WeakMap();

export class StringBuilder {
    constructor() {
        _data.set(this, '');
    }
    add(str) {
        _data.set(this, _data.get(this) + str);
        return this;
    }
    toString() {
        return _data.get(this);
    }
}
