"use client";

// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}


const invOne = new Invoice('yugi', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
invOne.amount = 133
console.log(invOne.format())



// only allow Class into the array
let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });

invoices.forEach((inv, index) => {
    console.log(index)
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());

    console.log('----------------')
})


console.log(invoices);
const page = () => {


    return (

        <>
            <h1>Public, Private & Readonly</h1>


        </>

    )
}

export default page