import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./function/modal";
import userReducer from "./function/user";
import toastReducer from "./function/toast";

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
        toast: toastReducer,
    },
});
