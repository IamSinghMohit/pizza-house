import React from "react";
import Widgets from "./Widgets";
import Menu from "./Menu";

function Navbar() {
    return (
        <nav className="px-2 flex items-center justify-between pt-2 ">
            <div className="flex items-center gap-3 cursor-pointer">
                <img src="/logo.svg" alt="logo" />
                <p className="text-primary font-oleo text-[18px] md:text-[24px]">
                    Pizza House
                </p>
            </div>
            <ul className="hidden md:flex items-center gap-7 font-poppins">
                <li className="hover:text-primary hover:underline cursor-pointer">
                    Home
                </li>
                <li className="hover:text-primary hover:underline cursor-pointer">
                    Menu
                </li>
                <li className="hover:text-primary hover:underline cursor-pointer">
                    Categories
                </li>
                <li className="hover:text-primary hover:underline cursor-pointer">
                    Contact Us
                </li>
            </ul>
            <Widgets />
            <Menu />
        </nav>
    );
}

export default Navbar;
