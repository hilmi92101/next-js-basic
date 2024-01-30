import React, { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

// can ignore this, it is the same like above
export const ThemeContextProviderV2 = (props: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>
}