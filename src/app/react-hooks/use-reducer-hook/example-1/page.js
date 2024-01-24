"use client";

import { useReducer } from 'react'

const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return initialState
            default:
                return state
        }
    }

const Page = () => {

    const [count, dispatch] = useReducer(reducer, initialState);


    return (
        <>
            <h1>Example 1: useReducer Hook</h1>

            <div>
                <div>Count = {count}</div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>

        </>
    );
};

export default Page;