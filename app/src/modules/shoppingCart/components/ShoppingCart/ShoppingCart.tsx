import React from "react";
import { useShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";

const ShoppingCart = () => {
    const shoppingCartContext = useShoppingCartContext();

    return <div>{shoppingCartContext?.getShoppingCart?.length}</div>;
};

export default ShoppingCart;
