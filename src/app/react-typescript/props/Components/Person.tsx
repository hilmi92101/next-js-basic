import { PersonProps, PersonPropsV2 } from './Person.types'

export const Person = (props: PersonProps) => {
    return (
        <h2>
            {props.name.first} {props.name.last}
        </h2>
    )
}
export const PersonV2 = ({ name: { first, last } }: PersonPropsV2) => {
    return (
        <h2>
            {first} {last}
        </h2>
    )
}