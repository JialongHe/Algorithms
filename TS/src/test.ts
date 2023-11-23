let age: number = 30;
let firstName: string = "type string";
let isTrue: boolean = true;

// arrays
let names: string[];
let ages: number[];

// objects 
interface User {
    name: string,
    id: number
}

let user1: User = {
    name: "Hades",
    id: 0
}

let user2: {firstName: string, age: number, id: number} = {
    firstName: "joe",
    age: 23,
    id: 47
}

// functions
function addTwo(a: number, b: number): number{
    return a + b;
}

const subtractTwo = (a: number, b: number): number => {
    return a - b;
}

function addAll(items: number[]): void{
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total);
}

// Any
let temp: any;

// Tuple: array with order
let person: [string, number, boolean]

// type / interface, Union
type Mybool = true | false;
type WindowState = "open" | "closed" | "minimized";
function getLength(obj: string | string[]) {
    return obj.length
}

// generics
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectArray = Array<{name: string}>

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type
}

declare const backpack: Backpack<string>
const object = backpack.get();
backpack.add("whatever")

Date.now()


