import { Product } from "@/app/src/types/product";
import { action, makeObservable, observable, runInAction } from "mobx";

class ShoppingCartStore {
    @observable private _shoppingCart: Product[] = [];
    ////////////////
    @observable private _count = 0;

    constructor() {
        // makeAutoObservable(this);
        // 4
        makeObservable(this);
    }

    get count() {
        return this._count;
    }

    // @computed
    get isCount(): boolean {
        return this._count > 10;
    }

    ///1
    // @action
    // onAddCount = () => {
    //     this._count = this._count + 1;
    // };

    ///2
    // onAddCount = action(() => {
    //     console.log("------", this._count);
    //     this._count = this._count + 1;
    // });

    // 3
    onAddCount = () => {
        runInAction(() => {
            this._count = this._count + 1;
        });
    };
    ///////

    get shoppingCart() {
        return this._shoppingCart;
    }

    @action
    onAdd = (item: Product) => {
        this._shoppingCart.push(item);
    };

    @action
    onRemove = (item: Product) => {
        this._shoppingCart = this._shoppingCart.filter(product => product.id !== item.id);
    };
}

export default ShoppingCartStore;
