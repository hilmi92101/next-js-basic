"use client";

// GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUIDV2 = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// let docExampleTwo = addUIDV2({ name: 'yoshi', age: 40 });
// console.log(docExampleTwo.name);

const addUIDV3 = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}
let docExampleThree = addUIDV3({ name: 'yoshi', age: 410 });
console.log(docExampleThree);

// only allow if the object has name property
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}
let docOne = addUID({ name: 'yoshi', age: 40 });
//let docTwo = addUID('shaun');
//console.log(docOne.name);

// with interfaces
// T here make it flexible
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
    uid: 1,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
};

const docFive: Resource<string> = {
    uid: 1,
    resourceName: 'shoppingList',
    data: 'cheese'
};

console.log(docThree, docFour, docFive);


const page = () => {


    return (

        <>
            <h1>Generics</h1>


        </>

    )
}

export default page