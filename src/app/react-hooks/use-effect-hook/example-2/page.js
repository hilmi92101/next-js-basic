"use client";

import { useState, useEffect } from 'react'

const Page = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useFffect called')
        window.addEventListener('mousemove', logMousePosition)

        // return () => {
        //     console.log('Component unmounting code')
        //     window.removeEventListener('mousemove', logMousePosition)
        // }
    }, [])


    return (
        <>
            <h1>Example 2: useEffect Hook (Run effects only once)</h1>

            <div>Hooks - X - {x} Y - {y}</div>
        </>
    );
};

export default Page;