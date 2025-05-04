import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";
import ShoppingCartStore from "@/app/src/modules/shoppingCart/stores/ShoppingCartStore";
import { IProduct } from "@/app/src/types/IProduct";

class ShoppingCartViewModel implements ShoppingCartApi {
    private _shoppingCartStore: ShoppingCartStore | null = null;

    constructor() {
        this._shoppingCartStore = new ShoppingCartStore();
    }

    get shoppingCartStore(): ShoppingCartStore {
        return this._shoppingCartStore as ShoppingCartStore;
    }

    get getShoppingCart(): IProduct[] {
        return this._shoppingCartStore?.shoppingCart as IProduct[];
    }

    onAdd = (item: IProduct) => {
        this._shoppingCartStore?.onAdd(item);
    };

    onRemove = (item: IProduct) => {
        this._shoppingCartStore?.onRemove(item);
    };

    destroy = () => {
        this._shoppingCartStore = null;
    };
}

export default ShoppingCartViewModel;
