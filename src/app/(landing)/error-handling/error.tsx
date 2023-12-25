'use client'

const ErrorBoundary = ({error}: { error: Error}) => {

    return (
        <>
            <h1>Error message that come from error tsx file</h1>
            <h1>{error.message}</h1>

        </>
    )
}

export default ErrorBoundary