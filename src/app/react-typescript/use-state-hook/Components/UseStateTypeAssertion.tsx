import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const UseStateTypeAssertion = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Hilmi',
            email: 'Hilmi@example.com'
        })
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}