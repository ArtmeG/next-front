"use client";
import { ReactNode, useState } from "react";
import style from "./styles.module.scss";
import ProductList from "@/app/_infrastructure/components/ProductList/ProductList";
import { PRODUCTS } from "@/app/src/mocks/products";

interface Props {
    children: ReactNode;
}

class ShoppingCartStore {}

export default function Home({}: Props) {
    return (
        <>
            <ProductList products={PRODUCTS} />
        </>
    );
}
