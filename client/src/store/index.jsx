import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./function/modal";
import userReducer from "./function/user";

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
    },
});
