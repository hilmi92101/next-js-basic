type ButtonPropsV1 = {
    variant: 'primary' | 'secondary',
    children: string
} 

export const CustomButtonV1 = ({ variant, children }: ButtonPropsV1) => {
    return (
        <button className={`class-with-${variant}`} >
            {children}
        </button>
    )
}

type ButtonPropsV2 = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const CustomButtonV2 = ({ variant, children, ...rest }: ButtonPropsV2) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>
            {children}
        </button>
    )
}


type ButtonPropsV3 = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButtonV3 = ({ variant, children, ...rest }: ButtonPropsV3) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>
            {children}
        </button>
    )
}