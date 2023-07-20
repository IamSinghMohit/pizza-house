import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authUser = createAsyncThunk(
    "user/authUser",
    async (userData, { rejectWithValue }) => {
        try {
            return await axios.post( "http://localhost:3001/auth/sign-in",
                userData
            );
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
export const logoutUser = createAsyncThunk(
    "user/logout",
    async ({ rejectWithValue }) => {
        try {
            return await axios("http://localhost:3001/auth/logout");
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
const initialState = {
    user: null,
    MenuVisible: false,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setMenuVisible: (state, action) => {
            state.MenuVisible = action.payload
        },
    },
    extraReducers: {
        [authUser.fulfilled]: (state, action) => {
            console.log(action);
        },
        [authUser.rejected]: (state, action) => {
            console.log(action);
        },
        [logoutUser.fulfilled]: (state, action) => {
            console.log(action);
        },
        [logoutUser.rejected]: (state, action) => {
            console.log(action);
        },
    },
});
export const {setMenuVisible} = userSlice.actions;
export default userSlice.reducer;
