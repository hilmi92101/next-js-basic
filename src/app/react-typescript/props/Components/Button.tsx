type ButtonPropsV1 = {
    handleClick: () => void
}

type ButtonPropsV2 = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type ButtonPropsV3 = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

type ButtonPropsV4 = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    id: number // This is the new prop
}



export const ButtonV1 = (props: ButtonPropsV1) => {
    return <button onClick={props.handleClick}>Click</button>
}

export const ButtonV2 = (props: ButtonPropsV2) => {
    return <button onClick={props.handleClick}>Click</button>
}

export const ButtonV3 = (props: ButtonPropsV3) => {
    return <button onClick={(event) => props.handleClick(event, 2)}>Click</button>
}

export const ButtonV4 = ({handleClick, id}: ButtonPropsV4) => {
    return <button onClick={(event) => handleClick(event, id)}>Click</button>
}
