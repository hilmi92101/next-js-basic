"use client";

import { Counter, CounterV2, CounterV3 } from './Components/Counter'

const page = () => {



    return (
        <>
            <h1>React TypeScript: Class Component</h1>

            <Counter message='The count value is ' />
            <CounterV2 />
            <CounterV3 message='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, facere.' />

        </>


    )
}

export default page