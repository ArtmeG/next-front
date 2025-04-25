"use client";
import React, { useEffect, useMemo } from "react";
import ShoppingCartViewModel from "@/app/src/modules/shoppingCart/ShoppingCartViewModel";
import ShoppingCart from "@/app/src/modules/shoppingCart/components/ShoppingCart/ShoppingCart";
import { ShoppingCartContext } from "./context/ShoppingCartContext";

const ShoppingCartController = () => {
    const vm = useMemo(() => {
        console.log("init ShoppingCartViewModel");

        return new ShoppingCartViewModel();
    }, []);

    useEffect(() => {
        return () => {
            vm.destroy();
        };
    }, []);

    return (
        <ShoppingCartContext.Provider value={vm}>
            <ShoppingCart />
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartController;
