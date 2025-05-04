import { IProduct } from "@/app/src/types/IProduct";

export interface IShoppingCartProduct extends IProduct {
    isChecked: boolean;
    product: IProduct;
}
