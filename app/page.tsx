import {ReactNode} from "react";


type FirstType = string
interface ISecond  {}

// union type
type IdType = string | number;

// literal type
type LiterType = 'up' | 'down';


//
interface IA {
  title: string
  test?: string // und.. || string
  children: IA
}

interface IA {
  name?: string
}
// IA {title: string;  name: string;}

const TTT_UUU: IA[] = [{title: '1'}, {title: '12'}, {title: '13'}]

// TTT_UUU.push({title: 2} as unknown as IA)
TTT_UUU.push({title: 2} as any)

interface Props {
  children: ReactNode
}

export default function Home({}: Props) {
return (<>


</>)
}
