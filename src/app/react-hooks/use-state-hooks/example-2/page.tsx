"use client";

import { useState } from 'react'

const page = () => {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <>
            <h1>Example 2: useState with previous state</h1>

            Count: {count}
            
            <button onClick={() => setCount(initialCount)}>Reset</button> 
            <button onClick={() => setCount(count + 1)}>Increment</button> 
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
            
        </>
    )
}

export default page