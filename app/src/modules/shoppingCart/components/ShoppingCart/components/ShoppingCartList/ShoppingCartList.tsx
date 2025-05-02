import React from "react";
import { useShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";
import ShoppingCartListItem from "@/app/src/modules/shoppingCart/components/ShoppingCart/components/ShoppingCartList/components/ShoppingCartListItem/ShoppingCartListItem";

const ShoppingCartList = () => {
    const { getShoppingCart } = useShoppingCartContext() as ShoppingCartApi;

    return (
        <div>
            list>>>>>>
            {getShoppingCart.map(item => (
                <ShoppingCartListItem key={Date.now()} item={item} />
            ))}
        </div>
    );
};

export default ShoppingCartList;

// todo 1 подумати чому не працює!
