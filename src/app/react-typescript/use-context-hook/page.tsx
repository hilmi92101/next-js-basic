"use client";

import { ThemeContextProvider } from './Context/ThemeContext';
import { Box } from './Context/Box';


import { UserContextProvider } from './Context/UserContext'
import { User } from './Context/User'

const page = () => {



    return (
        <>
            <h1>React TypeScript: useContext Hook</h1>

            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>


            <hr />
            <br />
            
            <UserContextProvider>
                <User />
            </UserContextProvider>

        </>


    )
}

export default page