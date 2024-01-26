"use client";

import React, { useState, useEffect, useRef } from 'react';


const page = () => {

    const [timer, setTimer] = useState(0);
    const interValRef = useRef();

    useEffect(() => {
        interValRef.current = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);

        console.log(interValRef.current)

        return () => {
            clearInterval(interValRef.current);
        };
    }, []);

    return (
        <>
            <h1>Example 2: useRef Hook</h1>

            <div>
                HookTimer - {timer} -
                <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
            </div>


        </>
    )
}

export default page