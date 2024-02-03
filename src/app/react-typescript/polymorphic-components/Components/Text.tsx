import React from 'react'

type TextPropsV1 = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
}

export const TextV1 = ({
    size,
    color,
    children,
}: TextPropsV1) => {
    return (
        <div className={`class-with-${size}-${color}`}>{children}</div>
    )
}

type TextPropsV2 = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode,
    as?: React.ElementType
}

export const TextV2 = ({
    size,
    color,
    children,
    as
}: TextPropsV2) => {
    const Component = as || 'div'
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}

type TextOwnPropsV3<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode,
    as?: E
}

type TextPropsV3<E extends React.ElementType>= TextOwnPropsV3<E> & Omit<React.ComponentProps<E>, keyof TextOwnPropsV3<E>>

export const TextV3 = <E extends React.ElementType = 'div'>({
    size,
    color,
    children,
    as
}: TextPropsV3<E>) => {
    const Component = as || 'div'
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}




// type TextOwnProps<E extends React.ElementType> = {
//     size?: 'sm' | 'md' | 'lg'
//     color?: 'primary' | 'secondary'
//     children: React.ReactNode
//     as?: E
// }

// type TextProps<E extends React.ElementType> = TextOwnProps<E> &
//     Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

// export const Text = <E extends React.ElementType = 'div'>({
//     size,
//     color,
//     children,
//     as
// }: TextProps<E>) => {
//     const Component = as || 'div'
//     return (
//         <Component className={`class-with-${size}-${color}`}>{children}</Component>
//     )
// }