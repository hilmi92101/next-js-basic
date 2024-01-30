type HeadingProps = {
    children: string
}

type HeadingPropsV2 = {
    children: string
}

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>
}

export const HeadingV2 = ({children}: HeadingPropsV2) => {
    return <h2>{children}</h2>
}
