"use client";

import { useState, useEffect } from 'react'

const Page = () => {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        
        return () => {
            clearInterval(interval)
        }
    }, [count])



    return (
        <>
            <h1>Example 4: useEffect Hook  (useEffect with incorrect dependency)</h1>

            <div>
                {count}
            </div>
        </>
    );
};

export default Page;