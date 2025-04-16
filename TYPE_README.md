## Getting Started

### union type
```bash
1
 enum RoutingEnum {
  HOME,
  APP,
}

2
enum RoutingEnum {
    HOME = "sdfsdf",
    APP = "APP",
}

```

### union type
```bash
  type IdType = string | number;
```

### literal type
```bash
  type LiterType = "up" | "down";
```


### interface
//1
```bash
interface IA {
  children: IA;
}
```
//2
```bash
interface IA {
  title: string;
  test?: string;
}
```

as result

```bash
interface IA {
  title: string;
  test?: string;
  children: IA;
}
```

### ПЕРЕТИН
```bash
interface ID {
  title: string;
}

interface IC {
  name: string;
}

type DandCType = ID & IC; // { title: string;   name: string; }

type DoRCType = ID | IC; // { title: string; } OR { name: string; }
```

### Generics
```bash
function getTitle<T>(arg: T): T {
  return arg;
}
const result = getTitle<string>("Hello");
```

### ключові оператори

## keyof
```bash 
interface IT {
  title: string;
  test: string;
}

const t: IT = {
  title: "string",
  test: "string",
};
type T1Type = "title" | "test";
type T2Type = keyof IT;
```

## typeof
```bash

const Ytyp = {
  title: "string",
  test: 7,
};

type YType = typeof Ytyp; 
```
as result ---
```bash
interface IT {
  title: string;
  test: number;
}
```
## as const
```bash
const Routing1 = [
  { path: "/11212", title: "HOME" },
  { path: "/777", title: "APP" },
] as const;

const Routing2 = [
  { path: "/11212", title: "HOME" },
  { path: "/777", title: "APP" },
];

type R1Type = typeof Routing1; // const Routing1: readonly [{     readonly path: "/ 11212"     readonly title: "HOME" }, {     readonly path: "/ 777"     readonly title: "APP" }]
type R2Type = typeof Routing2; // Initial type:({path: string, title: string} | {path: string, title: string})[]
```

# ex
```bash
const Routing3 = ["ddd", "rrrr"] as const;
const Routing4 = [
    { path: "/11212", title: "HOME" },
    { path: "/777", title: "APP" },
] as const;

type Routing3Type = (typeof Routing3)[number]; // Initial type: "ddd" | "rrrr"
type Routing4Type = (typeof Routing4)[number]; //  Initial type: {path: "/ 11212", title: "HOME"} | {path: "/ 777", title: "APP"}
```

### умовні типи
```bash
type SimpleType = {
    id: string;
};

type ExtendType = {
    id: string;
    name: string;
};
// 1
function getCurrentObj(isSelect: boolean): SimpleType | ExtendType {
    if (isSelect) {
        return { id: "string" };
    } else {
        return { id: "string", name: "name" };
    }
}

const a: ExtendType = getCurrentObj(false) as ExtendType;
const b: SimpleType = getCurrentObj(true) as SimpleType;
// 2
type CurrentObj2Type<T extends boolean> = T extends true ? ExtendType : SimpleType;

function getCurrentObj2<T extends boolean>(isExtend: boolean): CurrentObj2Type<T> {
    if (isExtend) {
        return { id: "string", name: "name" } as CurrentObj2Type<T>;
    } else {
        return { id: "string" } as CurrentObj2Type<T>;
    }
}

const a: SimpleType = getCurrentObj2<false>(false);
const b: ExtendType = getCurrentObj2<true>(true);

// 3
type CurrentObj3Type<T extends boolean> = T extends true ? ExtendType : SimpleType;

function getCurrentObj3<T extends boolean = false>(isExtend?: boolean): CurrentObj3Type<T> {
    if (isExtend) {
        return { id: "string", name: "naasmasdeasdfasd" } as CurrentObj3Type<T>;
    } else {
        return { id: "string" } as CurrentObj3Type<T>;
    }
}

const a: SimpleType = getCurrentObj3();
const b: ExtendType = getCurrentObj3<true>(true);
```
