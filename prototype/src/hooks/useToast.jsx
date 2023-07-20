import { useToastId } from "@/store/hooks";
import React, { useState } from "react";
import { createPortal } from "react-dom";

function useToast({ message, type }) {
    const [toast, setToast] = useState([
        {
            id: 23232323,
            message: "hello world",
        },
    ]);
    const id = useToastId();
    createPortal(
        <>
            {toast.map((toast) => (
                <div>
                    <p>{toast.message}</p>
                    <p>{toast.id}</p>
                    <button>X</button>
                </div>
            ))}
        </>,
        document.getElementById(id)
    );
}

export default useToast;
