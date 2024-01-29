"use client";

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

logDetails(1, '21')

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}
const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

const page = () => {


    return (

        <>
            <h1>Type Aliases</h1>

        </>

    )
}

export default page