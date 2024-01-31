"use client";

import { Private, PrivateV2 } from './Components/Private';
import { Profile } from './Components/Profile';

const page = () => {



    return (
        <>
            <h1>React TypeScript: Component Prop</h1>

            <Private isLoggedIn={true} component={Profile} />
            <PrivateV2 isLoggedIn={true} Component={Profile} />
        </>

    )
}

export default page