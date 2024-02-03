/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */


type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastPropsV1 = {
    position: `${HorizontalPosition}-${VerticalPosition}`
}

export const ToastV1 = ({ position }: ToastPropsV1) => {
    return <div>Toast Notification Position - {position}</div>
}



type ToastPropsV2 = {
    position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

export const ToastV2 = ({ position }: ToastPropsV2) => {
    return <div>Toast Notification Position - {position}</div>
}