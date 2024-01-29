"use client";

// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);

}
greet('lala', 'to u');

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3
let logDetails: (obj: { name: string, age: number }) => void;

logDetails = (ninja: { name: string, age: number }) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

// example 4
type Calc = (a: number, b: number, c: string) => number
let calcFunction: Calc = (a, b, c) => {
    console.log(c)
    //return 'yes'
    return a + b
}
calcFunction(1,2,'lala')



const page = () => {


    return (

        <>
            <h1>Function Signatures</h1>

        </>

    )
}

export default page