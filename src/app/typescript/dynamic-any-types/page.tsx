"use client";

// variable
let age: any;
//let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);

// array
let mixed: any[] = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

// object
let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
console.log(ninja);

ninja = { name: 25, age: 'yoshi' };
console.log(ninja);

const page = () => {


    return (

        <>
            <h1>Dynamic (any) Types</h1>

        </>

    )
}

export default page