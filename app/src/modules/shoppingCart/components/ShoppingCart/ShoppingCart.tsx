import React from "react";
import { useShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import Test from "@/app/src/modules/shoppingCart/components/Test/Test";
import { Button } from "@mui/material";

interface IProps {}

const ShoppingCart = ({}: IProps) => {
    const shoppingCartContext = useShoppingCartContext();

    return (
        <div className={"m-5 flex flex-col gap-6"}>
            <Test />
            <Button onClick={shoppingCartContext?.shoppingCartStore.onAddCount}>dddd</Button>
            <button onClick={shoppingCartContext?.shoppingCartStore.onAddCount}>dddd</button>
        </div>
    );
};

export default ShoppingCart;
