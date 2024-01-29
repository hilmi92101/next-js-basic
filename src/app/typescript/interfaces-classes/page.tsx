"use client";

import { Invoice } from './classes/Invoice';
import { Payment } from './classes/Payment';
import { HasFormatter } from './interfaces/HasFormatter';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const page = () => {


    return (

        <>
            <h1>Interfaces with Classes</h1>


        </>

    )
}

export default page