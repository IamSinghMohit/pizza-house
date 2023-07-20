import { uuid } from "@/util/uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "LOGIN",
    modal_id: `modal-id-${uuid()}`,
    loaded:false
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
        setLoaded:(state,action) => {
            state.loaded = action.payload
        }
    },
});
export default modalSlice.reducer;
export const { setType ,setLoaded} = modalSlice.actions;
