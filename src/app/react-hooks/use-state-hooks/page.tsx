"use client";

import { useState } from 'react'

const page = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Example 1</h1>
            <button onClick={ () => setCount(count + 1) }>Count { count}</button>
        </>
    )
}

export default page