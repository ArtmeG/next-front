import { Context, createContext, useContext } from "react";
import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";

export const ShoppingCartContext = createContext<ShoppingCartApi | null>(null);
export const useShoppingCartContext = (): ShoppingCartApi | null =>
    useContext<ShoppingCartApi | null>(ShoppingCartContext as Context<ShoppingCartApi | null>);
