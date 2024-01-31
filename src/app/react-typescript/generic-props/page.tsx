"use client";

import { List, ListV2, ListV3 } from './Components/List';

const page = () => {



    return (
        <>
            <h1>React TypeScript: Generic Props</h1>

            <List
                items={['Batman', 'Superman', 'Wonder Woman']}
                onClick={item => console.log(item)}
            />
            <ListV2
                items={[1, 2, 3]}
                onClick={item => console.log(item)}
            />

            <ListV3
                items={[
                    {
                        id: 1,
                        first: 'Bruce',
                        last: 'Wayne'
                    },
                    {
                        id: 2,
                        first: 'Clark',
                        last: 'Kent'
                    },
                    {
                        id: 3,
                        first: 'Princess',
                        last: 'Diana'
                    }
                ]}
                onClick={item => console.log(item)}
            />


        </>

    )
}

export default page