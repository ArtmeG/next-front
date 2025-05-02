"use client";

import { observer } from "mobx-react-lite";
import counterStore from "@/app/src/modules/shoppingCart/stores/CounterStore";
import { Button } from "@mui/material";

const Counter = () => {
    return (
        <div>
            <h2>Counter: {counterStore.count}</h2>
            <p>isEven: {counterStore.isEven ? "Yes" : "No"}</p>

            <Button onClick={() => counterStore.increment()}>+1</Button>
            <Button onClick={() => counterStore.decrement()}>-1</Button>
        </div>
    );
};

export default observer(Counter);
