import { IProduct } from "@/app/src/types/IProduct";
import ShoppingCartStore from "@/app/src/modules/shoppingCart/stores/ShoppingCartStore";

export interface ShoppingCartApi {
    onAdd: (item: IProduct) => void;
    onRemove: (item: IProduct) => void;
    getShoppingCart: IProduct[];
    shoppingCartStore: ShoppingCartStore;
}
