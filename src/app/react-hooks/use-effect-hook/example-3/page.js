"use client";

import { useState, useEffect } from 'react'
import ExtraComponent from './extraComponent';

const Page = () => {

    const [display, setDisplay] = useState(true);


    return (
        <>
            <h1>Example 3: useEffect Hook (useEffect with cleanup)</h1>
            
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            
            <br />
            <br />
			
            {display && <ExtraComponent />}
        </>
    );
};

export default Page;