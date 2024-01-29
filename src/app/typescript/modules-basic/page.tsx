"use client";

import { Invoice } from './Invoice'

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// invOne.client = 'yoshi';
invOne.amount = 50;

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
})

const page = () => {


    return (

        <>
            <h1>Modules</h1>


        </>

    )
}

export default page