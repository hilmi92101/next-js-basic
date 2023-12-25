'use client'

const ErrorBoundary = (
    {error, reset}: 
    { 
        error: Error; 
        reset: () => void;

    }) => {

    return (
        <>
            <h1>Error message that come from error tsx file</h1>
            <h1>{error.message}</h1>
            <button onClick={reset}>Try again</button>

        </>
    )
}

export default ErrorBoundary