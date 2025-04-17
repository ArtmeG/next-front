"use client";
import { ReactNode } from "react";
import style from "./styles.module.scss";
import ProductList from "@/app/_infrastructure/components/ProductList/ProductList";
import { Product } from "@/app/src/types/product";

interface Props {
    children: ReactNode;
}

const PRODUCTS: Product[] = [{ id: Date.now(), title: "string", img: "string", price: 100 }];

export default function Home({}: Props) {
    return (
        <>
            <ProductList products={PRODUCTS} />
        </>
    );
}
