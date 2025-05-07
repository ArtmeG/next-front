import React from "react";
import { useShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";
import ShoppingCartListItem from "@/app/src/modules/shoppingCart/components/ShoppingCart/components/ShoppingCartList/components/ShoppingCartListItem/ShoppingCartListItem";
import { observer } from "mobx-react-lite";

const ShoppingCartList = () => {
    const { getShoppingCart, onAdd, onRemove } = useShoppingCartContext() as ShoppingCartApi;

    return (
        <div className="flex flex-col gap-4">
            {getShoppingCart.map(item => (
                <ShoppingCartListItem
                    key={item.id}
                    item={item}
                    onBuy={() => onAdd(item)}
                    onRemove={() => onRemove(item)}
                />
            ))}
        </div>
    );
};

export default observer(ShoppingCartList);
