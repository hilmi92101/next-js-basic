"use client";

import { Greet } from './Components/Greet';

const page = () => {
    return (
        <>
            <h1>React TypeScript: Props</h1>
        
            <Greet name='Maryam' title='Student' isLoggedIn={false} />
            <Greet name='Hilmi' title='Alchemist' isLoggedIn={true} messageCount={150} />

        </>

        
    )
}

export default page