"use client";

import { TextV1, TextV2, TextV3  } from './Components/Text';

const page = () => {



    return (
        <>
            <h1>React TypeScript: Polymorphic Components</h1>

            <TextV1 size='lg' color='primary'>
                Heading
            </TextV1>

            <TextV2 as='p' size='lg' color='primary'>
                Heading 2
            </TextV2>

            <TextV2 as='h1' size='lg' color='primary'>
                Heading 3
            </TextV2>

            <TextV3 as='label' htmlFor='someId' size='lg' color='primary'>
                Heading 4
            </TextV3>

            
        </>


    )
}

export default page