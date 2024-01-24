"use client";

import { useReducer, createContext } from 'react'

import DataFetchingOne from './DataFetchingOne'
import DataFetchingTwo from './DataFetchingTwo'

const Page = () => {


    return (

        <>
            <h1>Example 5: Fetching data with useState & useReducer</h1>

            
            <DataFetchingOne />
            <DataFetchingTwo />
        </>
    );
};

export default Page;