type ContainerPropsV1 = {
    styles: React.CSSProperties // only allow valid css
}

export const ContainerV1 = ({ styles }: ContainerPropsV1) => {
    return (
        <div style={styles}>
            Text content goes here
        </div>
    )
}