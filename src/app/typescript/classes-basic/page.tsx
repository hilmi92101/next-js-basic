"use client";

// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    // initialize
    constructor(client: string, d: string, a: number) {
        this.client = client;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('yugi', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne.format())

// only allow Class into the array
let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });


console.log(invoices);
const page = () => {


    return (

        <>
            <h1>Classes</h1>


        </>

    )
}

export default page