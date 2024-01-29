"use client";

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);

const page = () => {


    return (

        <>
            <h1>Enums</h1>


        </>

    )
}

export default page