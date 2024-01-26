import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux"; 
import authReducer from "./features/auth-slice";
import uiReducer from "./features/ui-slice";

export const store = configureStore({
    reducer: {
        authReducer,
        uiReducer,
    }
});

// ts 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

