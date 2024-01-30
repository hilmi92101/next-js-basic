export type Name = {
    first: string
    last: string
}

export type PersonProps = {
    name: Name
}

// like below also can
export type PersonPropsV2 = {
    name: {
        first: string
        last?: string
    }
}