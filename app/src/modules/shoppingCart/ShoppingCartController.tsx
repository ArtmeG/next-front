"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ShoppingCartViewModel from "@/app/src/modules/shoppingCart/ShoppingCartViewModel";
import ShoppingCart from "@/app/src/modules/shoppingCart/components/ShoppingCart/ShoppingCart";
import { ShoppingCartContext } from "./context/ShoppingCartContext";

const ddfdf = {};

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

    // const ddd = useRef({ onAdd: setSss, getShoppingCart: sss });
    // const ddd = useMemo(() => ({ onAdd: setSss, getShoppingCart: sss }), []);

    return (
        // <ShoppingCartContext.Provider value={ddd.current}>
        // <ShoppingCartContext.Provider value={ddd}>
        // <ShoppingCartContext.Provider value={{}}>
        // <ShoppingCartContext.Provider value={ddfdf}>
        <ShoppingCartContext.Provider value={vm}>
            <ShoppingCart />
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartController;
