"use client";

import { useState } from 'react'

// Define the functional component
const Page = () => {

    // Define state using TypeScript
    const [items, setItems] = useState([]);

    // Define the function to add an item
    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1,
            },
        ]);
    };

    // Render the component
    return (
        <>
            <h1>Example 4: useState with array</h1>

            <button onClick={addItem}>Add a number</button>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </>
    );
};

// Export the component
export default Page;