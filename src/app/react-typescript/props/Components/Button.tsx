type ButtonPropsV1 = {
    handleClick: () => void
}

export const ButtonV1 = (props: ButtonPropsV1) => {
    return <button onClick={props.handleClick}>Click</button>
}

export const ButtonV2 = (props: ButtonPropsV1) => {
    return <button onClick={props.handleClick}>Click</button>
}