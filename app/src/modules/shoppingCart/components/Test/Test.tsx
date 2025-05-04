import React, { useState } from "react";
import { useShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import { observer } from "mobx-react-lite";
import { PRODUCTS } from "@/app/src/mocks/products";
import { ShoppingCartApi } from "@/app/src/modules/shoppingCart/types/shoppingCartApi";

const Test = () => {
    const shoppingCartContext: ShoppingCartApi | null = useShoppingCartContext();

    const [index, setIndex] = useState(0);

    // trace(true);

    const onClick = () => {
        shoppingCartContext?.onAdd(PRODUCTS[index]);
    };

    const onChange = (e: any) => {
        const value = e.target.value;
        setIndex(value);
    };

    return (
        <div>
            <input value={index} type={"number"} onChange={onChange} />

            <button onClick={onClick}>add</button>
        </div>
    );
};

export default observer(Test);
