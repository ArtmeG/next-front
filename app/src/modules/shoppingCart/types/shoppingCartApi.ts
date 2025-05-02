import { Product } from "@/app/src/types/product";
import ShoppingCartStore from "@/app/src/modules/shoppingCart/stores/ShoppingCartStore";

export interface ShoppingCartApi {
    onAdd: (item: Product) => void;
    onRemove: (item: Product) => void;
    getShoppingCart: Product[];
    shoppingCartStore: ShoppingCartStore;
}
