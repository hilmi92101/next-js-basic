"use client";

let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character = 20;
character = 'luigi';
console.log(character);

//age = 'yoshi';
age = 40;
console.log(age);

//isBlackBelt = 'yes';
isBlackBelt = true;
console.log(isBlackBelt);

const circ = (diameter: number) => {
    return diameter * Math.PI;
};

//console.log(circ('hello'));
console.log(circ(7.5));

const page = () => {


    return (

        <>
            <h1>Type Basic:</h1>

        </>

    )
}

export default page