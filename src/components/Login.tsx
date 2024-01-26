"use client";

import { useState, useEffect } from "react"; 

// redux slice
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice"; 
import { toggleModal } from "@/redux/features/ui-slice"; 

import { useDispatch } from "react-redux"; 
import { AppDispatch, useAppSelector } from "@/redux/store"; 

export default function Login() {

    // declare
    const dispatch = useDispatch<AppDispatch>();

    // get redux data
    const authState = useAppSelector((state) => state.authReducer.value);
    const uiState = useAppSelector((state) => state.uiReducer.value);
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
    const modalOpen = useAppSelector((state) => state.uiReducer.value.modalOpen)

    // state
    const [username, setUsername] = useState("");

    // functions
    const onClickLogIn = () => {
        dispatch(logIn(username))

        console.log(authState);
    };

    const onClickToggle = () => {
        dispatch(toggleModerator())
    };

    const onClickLogOut = () => {
        dispatch(logOut())
    };

    const onClickModalOpen = () => {
        dispatch(toggleModal())

        console.log(uiState);
    };

    // onload
    useEffect(() => {

        
        console.log(authState);
        console.log(uiState);

    }, []);


    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <br></br>
            <button onClick={onClickLogIn}> Log In</button>
            <br></br>
            <button onClick={onClickLogOut}> Log Out</button>
            <br></br>
            <button onClick={onClickModalOpen}> Toggle Modal</button>
            <br></br>

            {isAuth && (
                <button onClick={onClickToggle}> Toggle Moderator Status</button>
            )}

            {modalOpen && (
                <h1> Modal is open</h1>
            )}
            
        </div>
    );
}