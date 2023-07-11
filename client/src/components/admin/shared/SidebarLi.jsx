import React from "react";
import  Link  from "next/link";

function SidebarLi({ icon, text }) {
    return (
        <li className="cursor-pointer p-2 relative">
            <Link href={`/admin/${text.toLowerCase()}`}>
                <button className="p-3 rounded-xl bg-primary text-white active:bg-primary_dark md:flex gap-2 mx-auto button-hover items-center md:w-full">
                    {icon}
                    <span className="hidden md:block">{text}</span>
                </button>
            </Link>
            <span className="absolute text-xs text-primary_dark -bottom-[9px] text-center left-0 right-0 md:hidden">
                {text}
            </span>
        </li>
    );
}

export default SidebarLi;
