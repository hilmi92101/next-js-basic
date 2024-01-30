import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // means that the initial value of user is null, and it can be either an AuthUser object or null
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Hilmi',
            email: 'Hilmi@example.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}