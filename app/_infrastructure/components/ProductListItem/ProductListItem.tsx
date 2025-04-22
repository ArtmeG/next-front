import React from "react";
import { Product } from "@/app/src/types/product";
import { Button } from "@mui/material";

interface Props {
    product: Product;
    children?: React.ReactNode;
}

const ProductListItem = ({ product, children }: Props) => {
    const discountedPrice = product.discount ? product.price - product.discount : product.price;

    return (
        <div className="flex max-w-xs flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
                src={product.img}
                alt={product.title}
                className="mb-4 h-48 w-full object-contain"
            />
            <h5 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white">
                {product.title}
            </h5>

            <div className="mb-4">
                {product.discount ? (
                    <>
                        <span className="mr-2 text-sm text-gray-400 line-through">
                            {product.price} ₴
                        </span>
                        <span className="text-xl font-bold text-green-600">
                            {discountedPrice} ₴
                        </span>
                    </>
                ) : (
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {product.price} ₴
                    </span>
                )}
            </div>

            <Button variant="contained" color="success" fullWidth>
                Купити
            </Button>

            {children}
        </div>
    );
};

export default ProductListItem;
