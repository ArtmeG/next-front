import { action, computed, makeObservable, observable } from "mobx";

class CounterStore {
    @observable private _count = 0;

    constructor() {
        makeObservable(this);
    }

    get count() {
        return this._count;
    }

    @computed
    get isEven(): boolean {
        // return this._count % 2 === 0;
        return this._count > 10;
    }

    @action
    increment = () => {
        this._count = this._count + 1;
    };

    @action
    decrement = () => {
        this._count = this._count - 1;
    };
}

const counterStore = new CounterStore();
export default counterStore;
