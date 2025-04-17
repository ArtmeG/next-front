import React from "react";
import ProductListItem from "@/app/_infrastructure/components/ProductListItem/ProductListItem";
import { Product } from "@/app/src/types/product";

interface Props {
    products: Product[];
}

const ProductList = ({ products }: Props) => {
    return (
        <div>
            {products.map((product: Product) => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
