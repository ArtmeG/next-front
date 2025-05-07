import { action, makeObservable, observable } from "mobx";
import { IShoppingCartProduct } from "@/app/src/modules/shoppingCart/types/shoppingCartTypes";
import { IProduct } from "@/app/src/types/IProduct";

class ShoppingCartStore {
    @observable private _shoppingCart: IShoppingCartProduct[] = [];

    constructor() {
        makeObservable(this);
    }

    get shoppingCart(): IShoppingCartProduct[] {
        return this._shoppingCart;
    }

    // todo написати логіку isChecked

    @action
    onAdd = (item: IShoppingCartProduct) => {
        this._shoppingCart.push(item);
    };

    @action
    onRemove = (item: IProduct) => {
        this._shoppingCart = this._shoppingCart.filter(it => it.product.id !== item.id);
    };
}

export default ShoppingCartStore;
