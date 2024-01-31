import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

type PrivatePropsV2 = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Hilmi' />
    } else {
        return <Login />
    }
}

export const PrivateV2 = ({ isLoggedIn, Component }: PrivatePropsV2) => {
    if (isLoggedIn) {
        return <Component name='Hilmi' />
    } else {
        return <Login />
    }
}