import React from "react";
import { useShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { trace } from "mobx";

const Test = () => {
    const shoppingCartContext = useShoppingCartContext();

    // trace(true);

    return (
        <div>
            <div>count------{shoppingCartContext?.shoppingCartStore.count}</div>
        </div>
    );
};

export default observer(Test);
