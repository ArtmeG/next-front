import { Product } from "@/app/src/types/product";
import { action, makeObservable, observable } from "mobx";

class ShoppingCartStore {
    @observable.shallow private _shoppingCart: Product[] = [];

    constructor() {
        makeObservable(this);
    }

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
