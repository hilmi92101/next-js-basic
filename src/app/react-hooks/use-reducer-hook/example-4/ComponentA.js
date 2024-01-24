"use client";

import { useContext } from 'react'
import { CountContext } from './page';

const ComponentA = () => {

    const countContext = useContext(CountContext);

    return (
        <>
            <h1>Component A ({countContext.countState}) </h1>

            <div>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>

            
            <hr />  

        </>
    );
};

export default ComponentA;