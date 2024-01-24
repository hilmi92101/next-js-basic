"use client";

import { useReducer, createContext } from 'react'

export const CountContext = createContext();

import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

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

    const [count, dispatch] = useReducer(reducer, initialState)

    return (

        <>
            <h1>Example 4: useReducer with useContext</h1>

            <CountContext.Provider 
                value={
                    { 
                        countState: count,
                        countDispatch: dispatch,
                    }
                }
            >
                Count - { count }
                <ComponentA />
                <ComponentB />
                <ComponentC />
                
            </CountContext.Provider>
            
            
        </>
    );
};

export default Page;