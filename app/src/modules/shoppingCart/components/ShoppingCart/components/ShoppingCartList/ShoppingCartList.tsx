import React from "react";
import { useShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";
import ShoppingCartListItem from "@/app/src/modules/shoppingCart/components/ShoppingCart/components/ShoppingCartList/components/ShoppingCartListItem/ShoppingCartListItem";

const ShoppingCartList = () => {
    const { getShoppingCart, shoppingCartStore } = useShoppingCartContext() as ShoppingCartApi;

    return (
        <div className="flex flex-col gap-4">
            {/*list>>>>>>*/}
            {getShoppingCart.map(item => (
                <ShoppingCartListItem
                    // key={Date.now()}
                    key={item.id}
                    item={item}
                    onBuy={() => shoppingCartStore.onAdd(item)}
                    onRemove={() => shoppingCartStore.onRemove(item)}
                />
            ))}
        </div>
    );
};

export default ShoppingCartList;

// todo 1 подумати чому не працює!
