import { Product } from "@/app/src/types/product";

export interface ShoppingCartApi {
    onAdd: (item: ShoppingCartApi) => void;
    onRemove: (item: ShoppingCartApi) => void;
    getShoppingCart: Product[];
}
