"use client";

import { CustomButtonV1, CustomButtonV2, CustomButtonV3  } from './Components/Button';
import { InputV1,   } from './Components/Input';

const page = () => {



    return (
        <>
            <h1>React TypeScript: Wrapping HTML Elements</h1>

            <CustomButtonV1 variant='primary'>
                TEST 1
            </CustomButtonV1>

            <CustomButtonV2 variant='secondary' onClick={() => alert('secondary button clicked')}>
                TEST 2
            </CustomButtonV2>

            <CustomButtonV3 variant='secondary' onClick={() => alert('3rd button clicked')}>
                TEST 3
            </CustomButtonV3>

            <InputV1 />

        </>


    )
}

export default page