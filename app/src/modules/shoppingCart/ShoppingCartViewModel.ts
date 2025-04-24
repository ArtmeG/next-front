import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";

class ShoppingCartViewModel implements ShoppingCartApi {
    get getShoppingCart() {
        return [];
    }

    onAdd = (item: ShoppingCartApi) => {};

    onRemove = (item: ShoppingCartApi) => {};

    destroy = () => {};
}

export default ShoppingCartViewModel;
