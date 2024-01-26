"use client";

import Login from "@/components/Login"
import { useAppSelector } from "@/redux/store";

const page = () => {

    const username = useAppSelector((state) => state.authReducer.value.username)
    const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)

    return (

        <>
            <h1>Redux Toolkit:</h1>

            <Login />

            <h1>Username: {username}</h1>
            {isModerator && <h1>This user is a Moderator</h1>}
            

        </>

    )
}

export default page