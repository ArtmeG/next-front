import React from "react";
import { useShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";
import ShoppingCartListItem from "@/app/src/modules/shoppingCart/components/ShoppingCart/components/ShoppingCartList/components/ShoppingCartListItem/ShoppingCartListItem";
import { observer } from "mobx-react-lite";

const ShoppingCartList = () => {
    const { getShoppingCart, shoppingCartStore } = useShoppingCartContext() as ShoppingCartApi;

    return (
        <div className="flex flex-col gap-4">
            {getShoppingCart.map(item => (
                <ShoppingCartListItem
                    key={item.id}
                    item={item}
                    onBuy={() => shoppingCartStore.onAdd(item)}
                    onRemove={() => shoppingCartStore.onRemove(item)}
                />
            ))}
        </div>
    );
};

export default observer(ShoppingCartList);
