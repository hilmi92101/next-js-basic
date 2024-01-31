type ListProps = {
    items: string[]
    onClick: (value: string) => void
}

export const List = ({ items, onClick }: ListProps) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}

        </div>
    )
}

type ListPropsV2 = {
    items: string[] | number[]
    onClick: (value: string| number) => void
}

export const ListV2 = ({ items, onClick }: ListPropsV2) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}

        </div>
    )
}

type ListPropsV3<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const ListV3 = <T extends { id: number, first: string, last: string }>({ 
    items, 
    onClick 
}: ListPropsV3<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item.first}
                    </div>
                )
            })}

        </div>
    )
}