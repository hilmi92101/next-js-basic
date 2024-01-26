import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ts
type InitialState = {
    value: UIState;
}

// ts
type UIState = {
    modalOpen: Boolean, 
    formData: Object, 
    sortBy: string, 
    filter: string, 
}

const initialState = {
    value: {
        modalOpen: false,
        formData: {},
        sortBy: 'name',
        filter: '',
    } as UIState,
} as InitialState;

export const ui = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.value.modalOpen = !state.value.modalOpen;
        },

    }
});

export const { toggleModal } = ui.actions;
export default ui.reducer;