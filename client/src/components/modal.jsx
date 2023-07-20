"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoaded } from "@/store/function/modal";

function Modal() {
    const id = useSelector((state) => state.modal.modal_id);
    const dispatch = useDispatch();
    useEffect(() => {
        const div = document.createElement("div");
        div.id = id;
        div.style.position = "fixed";
        div.style.top = "50px";
        div.style.right = "50px";
        div.style.backgroundColor = "white";
        div.style.padding = "20px";
        div.style.border = "1px solid black";

        document.body.prepend(div);
        dispatch(setLoaded(true));
        return () => document.body.removeChild(div);
    }, []);
    return null;
}

export default Modal;
