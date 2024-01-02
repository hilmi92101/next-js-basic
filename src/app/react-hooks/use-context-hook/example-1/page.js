"use client";

import { useState, useEffect, createContext } from 'react'
import ComponentC from './ComponentC';

export const ThemeContext = createContext();
export const ChannelContext = createContext();

const Page = () => {

    // Create a context to hold user data
    const [theme, setTheme] = useState('blue');
    const [channel, setChannel] = useState('private');

    return (
        <>
            <h1>Example 1: useContext Hook</h1>

            <ThemeContext.Provider value={theme}>
                <ChannelContext.Provider value={channel}>
                    <ComponentC />
                </ChannelContext.Provider>
            </ThemeContext.Provider>
            

        </>
    );
};

export default Page;