"use client";

import { Greet } from './Components/Greet';
import { Person, PersonV2 } from './Components/Person';
import { PersonList, PersonListV2 } from './Components/PersonList';
import { Status } from './Components/Status';
import { Heading, HeadingV2 } from './Components/Heading';
import { Oscar, OscargV2 } from './Components/Oscar';
import { ButtonV1 } from './Components/Button';

const page = () => {

    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }

    const nameList = [
        {
            first: 'Bruce',
            last: 'Wayne',
            age: 12,
        },
        {
            first: 'Clark',
            last: 'Kent',
            age: 13,
        },
        {
            first: 'Princess',
            last: 'Diana',
        }
    ]

    return (
        <>
            <h1>React TypeScript: Props</h1>

            {/* BASIC */}
            <Greet name='Maryam' title='Student' isLoggedIn={false} />
            <Greet name='Hilmi' title='Alchemist' isLoggedIn={true} messageCount={150} />

            {/* REFACTOR TO ANOTHER FILE */}
            <Person name={personName} />
            <PersonV2 name={{ first: 'Hilmi', last: 'Azman' }} />
            <PersonV2 name={{ first: 'Ziyad' }} />

            {/* ARRAY OF OBJECTS */}
            <PersonList names={nameList} />
            <PersonListV2 names={nameList} />

            {/* UNION TYPE */}
            <Status status='loading' />
            <Status status='error' />

            {/* CHILDREN */}
            <Heading>Placeholder text</Heading>
            <Heading>Placeholder text 2</Heading>

            {/* CHILDREN REACT COMPONENT*/}
            <Oscar><Heading>Placeholder text 3</Heading></Oscar>
            <Oscar><Heading>Placeholder text 4</Heading></Oscar>

            <ButtonV1 handleClick={() => { console.log('Button Clicked') }} />

            
        </>


    )
}

export default page