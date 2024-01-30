import { Name } from './Person.types'

type PersonListProps = {
    names: Name[]
}

type PersonListPropsV2 = {
    names: {
        first: string
        last: string,
        age?: number
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.first}>
                        {name.first} {name.last}
                    </h2>
                )
            })}
        </div>
    )
}

export const PersonListV2 = ({ names }: PersonListPropsV2) => {
    return (
        <div>
            {names.map(name => {
                return (
                    <h2 key={name.first}>
                        {name.first} {name.last} {name.age}
                    </h2>
                )
            })}
        </div>
    )
}