import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ts
type InitialState = {
    value: AuthState;
}

// ts
type AuthState = {
    isAuth: Boolean, 
    username: string, 
    uid: string, 
    isModerator: Boolean, 
}

const initialState = {
    value: {
        isAuth: false, 
        username: '', 
        uid: '', 
        isModerator: false, 
    } as AuthState,
} as InitialState;

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: 'fsdfsdf341323214asfasf',
                    isModerator: false,
                }
            };
        },
        toggleModerator: (state) => {
            state.value.isModerator = !state.value.isModerator;
        },

    }
});

export const { logIn, logOut, toggleModerator } = auth.actions;
export default auth.reducer;