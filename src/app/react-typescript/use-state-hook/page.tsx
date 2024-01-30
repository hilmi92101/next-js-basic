"use client";

import { LoggedIn } from './Components/LoggedIn';
import { User } from './Components/User';
import { UseStateTypeAssertion } from './Components/UseStateTypeAssertion';

const page = () => {

    

    return (
        <>
            <h1>React TypeScript: useState hook</h1>

            <LoggedIn />
            <User />
            <UseStateTypeAssertion />
            
        </>


    )
}

export default page