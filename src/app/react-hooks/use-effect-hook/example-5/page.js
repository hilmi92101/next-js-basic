"use client";

import { useState, useEffect } from 'react'
import axios from 'axios'

const Page = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }


    return (
        <>
            <h1>Example 5: Fetching data with useEffect</h1>

            <div>
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <button type="button" onClick={handleClick}>Fetch Post</button>
                <div>{post.title}</div>
                <div>{post.body}</div>
                {/* <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul> */}
            </div>
        </>
    );
};

export default Page;