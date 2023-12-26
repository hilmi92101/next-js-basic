"use client";

import { useState, useEffect } from 'react'

const Page = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {

        console.log('useEffect - Updating document title ')
        document.title = `You clicked ${count} times`
        
    }, [count]) // only if count value changes, then run

    return (
        <>
            <h1>Example 1: useEffect Hook</h1>

            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={() => setCount(count + 1)}>
                    useEffect - Click {count} times
                </button>
            </div>

        </>
    );
};

export default Page;