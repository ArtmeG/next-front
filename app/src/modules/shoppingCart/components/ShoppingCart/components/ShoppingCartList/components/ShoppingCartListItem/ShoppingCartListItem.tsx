import React from "react";
import { Product } from "@/app/src/types/product";

interface Props {
    item: Product;
}

const ShoppingCartListItem = ({ item }: Props) => {
    return (
        <div>{/*todo 2 вьорстка, todo3 додати кнопку видалення і заюзати метод видалення*/}</div>
    );
};

export default ShoppingCartListItem;
