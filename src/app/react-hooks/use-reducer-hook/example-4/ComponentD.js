"use client";

import { useContext } from 'react'
import { CountContext } from './page';

const ComponentD = () => {

    const countContext = useContext(CountContext);

    return (
        <>
            <h1>Component D ({countContext.countState}) </h1>

            <div>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
            
        </>
    );
};

export default ComponentD;