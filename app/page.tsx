"use client";
import { ReactNode } from "react";
import ProductList from "@/app/_infrastructure/components/ProductList/ProductList";
import { PRODUCTS } from "@/app/src/mocks/products";

interface Props {
    children: ReactNode;
}

export default function Home({}: Props) {
    return (
        <>
            <h1 className="mb-6 text-3xl font-bold">Ноутбуки</h1>
            <ProductList products={PRODUCTS} />
        </>
    );
}
