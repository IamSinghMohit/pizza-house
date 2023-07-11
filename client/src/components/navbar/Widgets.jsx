"use client";
import React from "react";
import { CartIcon, PersonIcon, SearchIcon } from "../../../icons";

function Widgets() {
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
