"use client";

let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

//ninjas.push(3213);
ninjas.push('ryu');
ninjas.push('chun-li');
console.log('example: array ');
console.log(ninjas);

// union types
//let mixed: (string|number)[] = [];
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log('example: union types ');
console.log(mixed);

let uid: string|number;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };

const page = () => {


    return (

        <>
            <h1>Explicit Types</h1>

        </>

    )
}

export default page