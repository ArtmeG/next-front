"use client";

import { SessionContext } from "../context/SessionContext";
import SessionViewModel from "@/app/src/modules/session/SessionViewModel";
import { ReactNode, useEffect, useMemo } from "react";

interface Props {
    children: ReactNode;
}

const SessionProvider = ({ children }: Props) => {
    const vm = useMemo(() => {
        console.log("init ShoppingCartViewModel");
        return new SessionViewModel();
    }, []);

    useEffect(() => {
        console.log("inside SessionProvider");
        return () => {
            // vm.destroy();
        };
    }, []);

    return <SessionContext.Provider value={vm}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
