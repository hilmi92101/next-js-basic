"use client";

import { ThemeContext, ChannelContext } from './page';
import { useContext } from 'react'

const ComponentF = () => {

    const theme = useContext(ThemeContext);
    const channel = useContext(ChannelContext);

    return (
        <>
            <h1>This is Component F</h1>
            <div>Theme context value {theme}</div>
            <div>Theme channel value {channel}</div>
        </>
    );
};

export default ComponentF;