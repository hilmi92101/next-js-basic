"use client";

import { ToastV1, ToastV2 } from './Components/Toast';

const page = () => {



    return (
        <>
            <h1>React TypeScript: Template Literals and Exclude</h1>

            <ToastV1 position='right-top' />
            <ToastV2 position='center' />
        </>


    )
}

export default page