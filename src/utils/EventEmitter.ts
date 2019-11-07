export class EventEmitter {
    private _eventMap: { [key: string]: Set<Function> } = {};

    on(eventName: string, fn: Function) {

        if (!this._eventMap[eventName]) {
            this._eventMap[eventName] = new Set<Function>();
        }

        this._eventMap[eventName].add(Function);
    }

    off(eventName: string) {

        if (this._eventMap[eventName]) {
            delete this._eventMap[eventName];
        }
    }

    removeListener(eventName: string, fn: Function) {
        if (this._eventMap[eventName]) {
            this._eventMap[eventName].delete(fn);
        }
    }

    once(eventName: string, fn: Function) {
        const onceFn = (...args) => {
            fn.apply(this, args);
            this.removeListener(eventName, onceFn);
        };

        this.on(eventName, onceFn);
    }

    emit(eventName: string, ...args) {
        const fnSet = this._eventMap[eventName];

        if (fnSet) {
            fnSet.forEach((fn) => {
                fn.apply(this, args);
            });
        }
    }
}