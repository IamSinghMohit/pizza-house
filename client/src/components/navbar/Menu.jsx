"use client";
import React, { useState } from "react";

function Menu() {
    const [show, setShow] = useState(false);
    console.log('mobile nav page')
    return (
        <div className="md:hidden"> 
            <button
                className={`bg-primary ${
                    show && "bg-primary_dark"
                } text-white p-2 rounded-full text-center z-20`}
                onClick={() => setShow((prev) => !prev)}
            >
                <div className="flex flex-col gap-[3px]">
                    <span
                        className={`bg-white nav-span transition-all ${
                            show && "nav-span-active"
                        }`}
                    ></span>
                    <span
                        className={`bg-white nav-span transition-all ${
                            show && "opacity-0"
                        }`}
                    ></span>
                    <span
                        className={`bg-white nav-span transition-all ${
                            show && "nav-span-active"
                        }`}
                    ></span>
                </div>
            </button>
            <div
                className={`mobile-nav ${
                    show && "active-nav"
                } fixed bg-primary_dark w-screen h-screen transition-all top-0 right-0`}
            >
                <ul className="flex flex-col items-center h-full my-auto gap-7 font-poppins nav-ul">
                    <li className="active:text-primary_light underline cursor-pointer">
                        Home
                    </li>
                    <li className="active:text-primary_light underline ">
                        Menu
                    </li>
                    <li className="active:text-primary_light underline ">
                        Categories
                    </li>
                    <li className="active:text-primary_light underline ">
                        Contact Us
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
