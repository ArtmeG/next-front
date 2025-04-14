"use client";
import { ReactNode, useState } from "react";
import style from "./styles.module.scss";

type FirstType = string;
interface ISecond {}

// union type
type IdType = string | number;

// literal type
type LiterType = "up" | "down";

//
interface IA {
    title: string;
    test?: string; // und.. || string
    children: IA;
}

interface IA {
    name?: string;
}
// IA {title: string;  name: string;}

const TTT_UUU: IA[] = [{ title: "1" }, { title: "12" }, { title: "13" }];

// TTT_UUU.push({title: 2} as unknown as IA)
TTT_UUU.push({ title: 2 } as any);

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
