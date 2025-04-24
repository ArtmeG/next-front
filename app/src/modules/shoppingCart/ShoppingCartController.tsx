"use client";
import React, { useMemo } from "react";
import ShoppingCartViewModel from "@/app/src/modules/shoppingCart/ShoppingCartViewModel";
// import { ShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import ShoppingCart from "@/app/src/modules/shoppingCart/components/ShoppingCart/ShoppingCart";

const ShoppingCartController = () => {
    const vm = useMemo(() => new ShoppingCartViewModel(), []);

    return (
        <>
            <ShoppingCart />
            {/*<ShoppingCartContext.Previder value={vm}>*/}
            {/*    <ShoppingCart />*/}
            {/*</ShoppingCartContext.Previder>*/}
        </>
    );
};

export default ShoppingCartController;
