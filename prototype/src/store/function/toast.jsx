import { uuid } from "@/util/uuid";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    toast_id: `toast-id-${uuid()}`,
    loaded: false,
};
const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        setLoaded: (state, action) => {
            state.loaded = action.payload;
        },
    },
});
export default toastSlice.reducer;
export const {setLoaded} = toastSlice.actions;
