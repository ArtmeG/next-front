import { createContext } from "node:vm";
import { Context, useContext } from "react";
import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";

export const ShoppingCartContext = createContext();
export const useShoppingCartContext = (): ShoppingCartApi =>
    useContext<ShoppingCartApi>(ShoppingCartContext as Context<ShoppingCartApi>);
