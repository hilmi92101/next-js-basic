"use client";

import { useState, useCallback } from 'react'

import CountComponent from './CountComponent'
import ButtonComponent from './ButtonComponent'
import TitleComponent from './TitleComponent'

const page = () => {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary]);


    return (
        <>
            <h1>Example 1: useCallback Hook</h1>

            <div>
                <TitleComponent />
                <CountComponent text="Age" count={age} />
                <ButtonComponent handleClick={incrementAge}>Increment Age</ButtonComponent>
                <CountComponent text="Salary" count={salary} />
                <ButtonComponent handleClick={incrementSalary}>Increment Salary</ButtonComponent>
            </div>
        </>
    )
}

export default page