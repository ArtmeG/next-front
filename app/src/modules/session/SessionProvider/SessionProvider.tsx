"use client";

import React, { useEffect } from "react";

interface Props {
    children: React.ReactNode;
}

const SessionProvider = ({ children }: Props) => {
    useEffect(() => {
        console.log();

        return () => {};
    }, []);

    return (
        <div>
            {/*<SessionCartContext.Provider value={vm}>*/}
            {children}
            {/*</SessionCartContext.Provider>*/}
        </div>
    );
};

export default SessionProvider;
