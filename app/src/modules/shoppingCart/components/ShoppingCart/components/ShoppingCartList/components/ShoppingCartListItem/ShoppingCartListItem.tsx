import React from "react";
import { IProduct } from "@/app/src/types/IProduct";
import Image from "next/image";
import { Button } from "@mui/material";
import ShoppingCartListItemCheckbox from "@/app/src/modules/shoppingCart/components/ShoppingCart/components/ShoppingCartList/components/ShoppingCartListItemCheckbox/ShoppingCartListItemCheckbox";

interface Props {
    item: IProduct;
    children?: React.ReactNode;
    onBuy: (id: IProduct) => void;
    onRemove: (id: IProduct) => void;
}

const ShoppingCartListItem = ({ item, children, onBuy, onRemove }: Props) => {
    const discountedPrice = item.discount ? item.price - item.discount : item.price;

    return (
        <div className="flex max-w-xs flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <ShoppingCartListItemCheckbox />
            <Image
                src={item.img}
                width={286}
                height={192}
                alt={item.title}
                className="mb-4 h-48 w-full object-contain"
            />
            <h5 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
            </h5>

            <div className="mb-4">
                {item.discount ? (
                    <>
                        <span className="mr-2 text-sm text-gray-400 line-through">
                            {item.price} ₴
                        </span>
                        <span className="text-xl font-bold text-green-600">
                            {discountedPrice} ₴
                        </span>
                    </>
                ) : (
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.price} ₴
                    </span>
                )}
            </div>
            <Button variant="contained" color="success" fullWidth onClick={() => onBuy(item)}>
                Buy
            </Button>
            <Button variant="contained" color="error" onClick={() => onRemove(item)}>
                Delete
            </Button>
            {children}
        </div>
    );
};

export default ShoppingCartListItem;
