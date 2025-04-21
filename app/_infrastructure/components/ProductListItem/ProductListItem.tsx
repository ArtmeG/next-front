import React from "react";
import { Product } from "@/app/src/types/product";

interface Props {
    product: Product;
    children?: React.ReactNode;
}

const ProductListItem = ({ product, children }: Props) => {
    return (
        <div className="flex max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img width={100} height={100} src={product.img} alt={product.title} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{product.price}</p>
            {children}
        </div>
    );
};

export default ProductListItem;
