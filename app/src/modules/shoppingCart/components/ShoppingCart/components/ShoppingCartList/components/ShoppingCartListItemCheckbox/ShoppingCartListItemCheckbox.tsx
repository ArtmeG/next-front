import React, { useState } from "react";
import { Checkbox } from "@mui/material";

const ShoppingCartListItemCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setIsChecked(checked);
    };

    return (
        <div>
            <Checkbox checked={isChecked} onChange={onChange} />
        </div>
    );
};

export default ShoppingCartListItemCheckbox;
