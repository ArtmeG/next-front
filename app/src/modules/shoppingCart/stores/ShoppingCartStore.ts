import { Product } from "@/app/src/types/product";
import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";
import { makeAutoObservable } from "mobx";

class ShoppingCartStore {
    private _shoppingCart: Product[] = [];
    ////////////////
    private _count = 0;

    constructor() {
        makeAutoObservable(this);
        // makeObservable(this);
    }

    get count() {
        return this._count;
    }

    // @action
    onAddCount = () => {
        console.log("------", this._count);
        this._count = this._count + 1;
    };
    ///////

    get shoppingCart() {
        return this._shoppingCart;
    }

    onAdd = (item: ShoppingCartApi) => {
        this._shoppingCart.push(item);
    };

    onRemove = (item: ShoppingCartApi) => {
        // todo
    };
}

export default ShoppingCartStore;
