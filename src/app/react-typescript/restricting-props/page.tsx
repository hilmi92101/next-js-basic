"use client";

import { RandomNumber, RandomNumberV2 } from './Components/RandomNumber';

const page = () => {



    return (
        <>
            <h1>React TypeScript: Restricting Props</h1>

            <RandomNumber value={10} isPositive isNegative isZero />
            <RandomNumberV2 value={10} isPositive />


        </>

    )
}

export default page