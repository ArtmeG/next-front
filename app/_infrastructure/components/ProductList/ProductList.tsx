"use client";
import React from "react";
import ProductListItem from "@/app/_infrastructure/components/ProductListItem/ProductListItem";
import { Product } from "@/app/src/types/product";

interface Props {
    products: Product[];
}

const ProductList = ({ products }: Props) => {
    const onBuy = (id: string) => {
        console.log(id);
    };

    return (
        <div className={"flex flex-wrap justify-center gap-5"}>
            {products.map((product: Product) => (
                <ProductListItem key={product.id} product={product} onBuy={onBuy} />
            ))}
        </div>
    );
};

export default ProductList;
