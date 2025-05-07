import { IProduct } from "@/app/src/types/IProduct";
import { IShoppingCartProduct } from "@/app/src/modules/shoppingCart/types/shoppingCartTypes";

export interface ShoppingCartApi {
    onAdd: (item: IProduct) => void;
    onRemove: (item: IProduct) => void;
    getShoppingCart: IShoppingCartProduct[];
}
