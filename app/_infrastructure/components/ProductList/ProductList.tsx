"use client";
import React from "react";
import ProductListItem from "@/app/_infrastructure/components/ProductListItem/ProductListItem";
import { IProduct } from "@/app/src/types/IProduct";

interface Props {
    products: IProduct[];
}

const ProductList = ({ products }: Props) => {
    // const onBuy = (id: string) => {
    //     console.log(id);
    // };

    return (
        <div className={"flex flex-wrap justify-center gap-5"}>
            {products.map((product: IProduct) => (
                <ProductListItem key={product.id} product={product} onBuy={() => {}} />
            ))}
        </div>
    );
};

export default ProductList;
