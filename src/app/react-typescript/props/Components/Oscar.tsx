type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}

export const OscarV2 = ({children}: OscarProps) => {
    return <div>{children}</div>
}
