type GreetProps = {
    name: string
    title: string
    messageCount?: number // optional
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    // declare default value for the optional
    const { messageCount = 0 } = props
    return (
        <div>
            {props.isLoggedIn ? (
                <h2>
                    Hey {props.name}! You are a {props.title}. You have {messageCount} unread messages
                </h2>
            ) : (
                <h2>Welcome {props.title}</h2>
            )}
        </div>
    )
}