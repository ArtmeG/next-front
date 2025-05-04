import React from "react";
import Test from "@/app/src/modules/shoppingCart/components/Test/Test";
import ShoppingCartList from "@/app/src/modules/shoppingCart/components/ShoppingCart/components/ShoppingCartList/ShoppingCartList";

interface IProps {}

const ShoppingCart = ({}: IProps) => {
    // const shoppingCartContext = useShoppingCartContext();

    return (
        <div className={"m-5 flex flex-col gap-6"}>
            <ShoppingCartList />
            <Test />
        </div>
    );
};

export default ShoppingCart;
