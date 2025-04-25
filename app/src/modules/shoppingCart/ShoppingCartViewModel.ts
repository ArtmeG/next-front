import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";
import ShoppingCartStore from "@/app/src/modules/shoppingCart/stores/ShoppingCartStore";
import { Product } from "@/app/src/types/product";

class ShoppingCartViewModel implements ShoppingCartApi {
    private _shoppingCartStore: ShoppingCartStore | null = null;

    constructor() {
        this._shoppingCartStore = new ShoppingCartStore();
    }

    get shoppingCartStore(): ShoppingCartStore {
        return this._shoppingCartStore as ShoppingCartStore;
    }

    get getShoppingCart(): Product[] {
        return this._shoppingCartStore?.shoppingCart as Product[];
    }

    onAdd = (item: ShoppingCartApi) => {
        this._shoppingCartStore?.onAdd(item);
        // sendAnal
    };

    onRemove = (item: ShoppingCartApi) => {
        this._shoppingCartStore?.onRemove(item);
    };

    destroy = () => {
        this._shoppingCartStore = null;
    };
}

export default ShoppingCartViewModel;
