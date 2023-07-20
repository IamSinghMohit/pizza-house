import React from "react";
import ToastButton from "../client/ToastButton";

function Toast() {
    return (
        <div
            id="toast-success"
            class="mb-4 flex w-full max-w-xs items-center rounded-lg bg-blue-600 p-4 text-black shadow"
            role="alert"
        >
            <div class="ml-3 text-sm font-normal">Item moved successfully.</div>
            <ToastButton/>
        </div>
    );
}

export default Toast;
