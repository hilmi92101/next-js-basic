"use client";

/**
const anchor = document.querySelector('a')!;
if (anchor) {
    console.log(anchor.href);
}
//console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});
 */

const page = () => {


    return (

        <>
            <h1>DOM & Type Casting</h1>


            <div className="wrapper">
                <h1>Finance Logger</h1>

                <ul className="item-list">

                </ul>
            </div>

            <footer>
                <form className="new-item-form">
                    <div className="field">
                        <label>Type:</label>
                        <select id="type">
                            <option value="invoice">Invoice</option>
                            <option value="payment">Payment</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>To / From:</label>
                        <input type="text" id="tofrom" />
                    </div>
                    <div className="field">
                        <label>Details:</label>
                        <input type="text" id="details" />
                    </div>
                    <div className="field">
                        <label>Amount (£):</label>
                        <input type="number" id="amount" />
                    </div>
                    <button>Add</button>
                </form>

                <a href="https://www.thenetninja.co.uk">The Net Ninja</a>
            </footer>

        </>

    )
}

export default page