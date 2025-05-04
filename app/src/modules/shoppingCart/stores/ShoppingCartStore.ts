import { action, makeObservable, observable } from "mobx";
import { IShoppingCartProduct } from "@/app/src/modules/shoppingCart/types/shoppingCartTypes";
import { IProduct } from "@/app/src/types/IProduct";

class ShoppingCartStore {
    @observable private _shoppingCart: IShoppingCartProduct[] = [];

    constructor() {
        makeObservable(this);
    }

    get shoppingCart() {
        return this._shoppingCart;
    }

    // todo написати логіку isChecked

    @action
    onAdd = (item: IShoppingCartProduct) => {
        this._shoppingCart.push({ product: IProduct, isChecked: true });
    };

    @action
    onRemove = (item: IShoppingCartProduct) => {
        this._shoppingCart = this._shoppingCart.filter(product => product.id !== item.id);
    };
}

export default ShoppingCartStore;
