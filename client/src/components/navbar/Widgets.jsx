"use client";
import React, { useEffect } from "react";
import { CartIcon, PersonIcon, SearchIcon } from "../../../icons";
import { setMenuVisible } from "@/store/function/user";
import { useDispatch } from "react-redux";

function Widgets() {
    const dispatch = useDispatch()
    useEffect(() => {
        const handleResize = () => {
            dispatch(setMenuVisible(window.innerWidth < 768))
        };

        handleResize(); // Check initial viewport width
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="hidden md:block">
            <button className="bg-primary text-white p-2 rounded-full text-center">
                <CartIcon width={18} height={18} />
            </button>
            <button className="bg-primary text-white p-2 rounded-full text-center ml-2">
                <SearchIcon width={18} height={18} />
            </button>
            <button className="bg-primary text-white p-2 rounded-full text-center ml-2">
                <PersonIcon width={18} height={18} />
            </button>
        </div>
    );
}

export default Widgets;
