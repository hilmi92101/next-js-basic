type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    } else if (props.status === 'error') {
        message = 'Error fetching data'
    }
    return <h2>Status - {message}</h2>
}

export const StatusV2 = ({status}: StatusProps) => {
    let message
    if (status === 'loading') {
        message = 'Loading...'
    } else if (status === 'success') {
        message = 'Data fetched successfully!'
    } else if (status === 'error') {
        message = 'Error fetching data'
    }
    return <h2>Status - {message}</h2>
}