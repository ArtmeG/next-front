"use client";
import { ReactNode, useState } from "react";
import style from "./styles.module.scss";

interface Props {
    children: ReactNode;
}

export default function Home({}: Props) {
    const [counter, setCounter] = useState<number>(0);

    return (
        <>
            <button className={style.btn} onClick={() => setCounter(counter + 1)}>
                Increment
            </button>
            <button className={style.btn} onClick={() => setCounter(counter - 1)}>
                Decrement
            </button>
            <div style={{ margin: "10px" }}>{counter}</div>
        </>
    );
}
