import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";
import ShoppingCartStore from "@/app/src/modules/shoppingCart/stores/ShoppingCartStore";
import { IProduct } from "@/app/src/types/IProduct";
import { IShoppingCartProduct } from "@/app/src/modules/shoppingCart/types/shoppingCartTypes";

class ShoppingCartViewModel implements ShoppingCartApi {
    private _shoppingCartStore: ShoppingCartStore | null = null;

    constructor() {
        this._shoppingCartStore = new ShoppingCartStore();
    }

    get getShoppingCart(): IShoppingCartProduct[] {
        return this._shoppingCartStore?.shoppingCart as IShoppingCartProduct[];
    }

    onAdd = (item: IProduct) => {
        this._shoppingCartStore?.onAdd({ isChecked: true, product: item });
    };

    onRemove = (item: IProduct) => {
        this._shoppingCartStore?.onRemove(item);
    };

    destroy = () => {
        this._shoppingCartStore = null;
    };
}

export default ShoppingCartViewModel;
