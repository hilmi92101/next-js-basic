type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputV1 = ({ value, handleChange }: InputProps) => {
    return <input type='text' value={value} onChange={handleChange} />
}

export const InputV2 = ({ value, handleChange }: InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event, 2345)
    }

    return <input type='text' value={value} onChange={handleInputChange} />
}
