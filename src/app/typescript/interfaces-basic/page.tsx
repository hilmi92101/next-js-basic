"use client";

import { Invoice } from './Invoice.js';

// interfaces
export interface IsPerson {
    name: string;
    age?: number; // optional
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    //age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent ', amount);
        return amount;
    },
};

console.log(me);
me.speak('hello, world');

const greetPerson = (person: IsPerson): void => {
    console.log('hello ', person.name);
}

greetPerson(me);
//greetPerson({name: 'shaun'});

const page = () => {


    return (

        <>
            <h1>Interfaces</h1>


        </>

    )
}

export default page