"use client";

import React, { useEffect, useMemo } from "react";
import { ShoppingCartContext } from "@/app/src/modules/shoppingCart/context/ShoppingCartContext";
import ShoppingCartViewModel from "@/app/src/modules/shoppingCart/ShoppingCartViewModel";

interface Props {
    children: React.ReactNode;
}

const SessionProvider = ({ children }: Props) => {
    const vm = useMemo(() => {
        console.log("init ShoppingCartViewModel");
        return new ShoppingCartViewModel();
    }, []);

    useEffect(() => {
        console.log("inside SessionProvider");
        return () => {
            vm.destroy();
        };
    }, []);

    return (
        <div>
            {/*<SessionCartContext.Provider value={vm}>*/}
            <ShoppingCartContext.Provider value={vm}>{children}</ShoppingCartContext.Provider>
            {/*</SessionCartContext.Provider>*/}
        </div>
    );
};

export default SessionProvider;
