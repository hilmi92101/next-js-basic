'use client'; // reason we use this to allow try again button works in error.tsx


const getRandomInt = (count: number) => {

    return Math.floor(Math.random() * count);
}


const ErrorHandling = () => {

    const number = getRandomInt(2);
    console.log(number)

    if(number === 1){
        //throw new Error('Error loading the page');
    }

    return (
        <>
            <h1>Not an Error page</h1>

        </>
    )
}

export default ErrorHandling