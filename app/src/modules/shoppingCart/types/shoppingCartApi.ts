import { Product } from "@/app/src/types/product";
import ShoppingCartStore from "@/app/src/modules/shoppingCart/stores/ShoppingCartStore";

export interface ShoppingCartApi {
    onAdd: (item: ShoppingCartApi) => void;
    onRemove: (item: ShoppingCartApi) => void;
    getShoppingCart: Product[];
    shoppingCartStore: ShoppingCartStore;
}
