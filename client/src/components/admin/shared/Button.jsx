import React from "react";

function Button({ type, icon, text, onClick ,className}) {
    return (
        <button
            type={type || "button"}
            className={`flex p-1 gap-1 text-xs bg-primary text-white items-center rounded-sm lg:text-[18px] lg:rounded-lg lg:p-2 ${className}`}
            onClick={onClick}
        >
            {text}
            {icon}
        </button>
    );
}

export default Button;
