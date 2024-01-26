import React, { useRef, useEffect } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();

        console.log(inputRef)
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
};

export default FocusInput;