"use client";

interface Props {
    children: React.ReactNode;
}
// todo 2 додати Session vm and Session store
const SessionProvider = ({ children }: Props) => {
    // const vm = useMemo(() => {
    //     console.log("init ShoppingCartViewModel");
    //     return new ShoppingCartViewModel();
    // }, []);
    //
    // useEffect(() => {
    //     console.log("inside SessionProvider");
    //     return () => {
    //         vm.destroy();
    //     };
    // }, []);

    return (
        <div>
            {/*<SessionCartContext.Provider value={vm}>*/}
            {children}
            {/*</SessionCartContext.Provider>*/}
        </div>
    );
};

export default SessionProvider;
