import { ReactNode } from "react";
import ProductList from "@/app/_infrastructure/components/ProductList/ProductList";
import { PRODUCTS } from "@/app/src/mocks/products";
import ShoppingCartController from "@/app/src/modules/shoppingCart/ShoppingCartController";

interface Props {
    children: ReactNode;
}

export default function Home({}: Props) {
    return (
        <>
            <ShoppingCartController />

            <h1 className="mb-6 text-center text-3xl font-bold">Ноутбуки</h1>
            <ProductList products={PRODUCTS} />
        </>
    );
}
