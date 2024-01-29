"use client";

let greet: Function = () => {
    console.log('hello, world');
}

// greet = 'hello';

greet = () => {
    console.log('hello, again');
}

// optional parameter
const addV1 = (a: number, b: number, c?: number | string): void => {
    console.log(a + b);
    console.log(c);
}

// mandatory, but we assigned the parameter 
const addV2 = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

// mandatory, but we do not assigned the parameter 
const addV3 = (a: number, b: number, c: number | string): void => {
    console.log(a + b);
    console.log(c);
}

addV1(5, 10);
addV2(5, 10);
addV2(5, 10, 'lala 1');
addV3(5, 10, 'lala 2');

// declare the return type
const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(10, 7);
console.log(result);



const page = () => {


    return (

        <>
            <h1>Function Basics</h1>

        </>

    )
}

export default page