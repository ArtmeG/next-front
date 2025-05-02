"use client";

import { observer } from "mobx-react-lite";
import counterStore from "@/app/src/modules/shoppingCart/stores/CounterStore";
import { untracked } from "mobx";

const Counter = () => {
    return (
        <div>
            {/*<Count counterStore={counterStore} />*/}
            <Count count={untracked(() => () => counterStore.count)} />
            <IsEven counterStore={counterStore} />

            <button onClick={() => counterStore.increment()}>+1</button>
            <button onClick={() => counterStore.decrement()}>-1</button>
        </div>
    );
};

export default observer(Counter);

// mess
interface Interface {
    counterStore?: any;
    count?: () => number;
}
// mess

const Count = observer(({ count }: Interface) => {
    if (!!count) {
        count();
    }

    count?.();

    return <h2>Counter: {count?.()}</h2>;
    // return <h2>Counter: {counterStore.count}</h2>;
});

const IsEven = observer(({ counterStore }: Interface) => {
    return <p>isEven: {counterStore.isEven ? "Yes" : "No"}</p>;
});
