import { LogoIcon } from "@/icons";
import React from "react";
import { SearchInput } from "../client/form";
import Link from "next/link"

function Navbar() {
    return (
        <header className="bg-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-blue-600" href="/">
                    <span className="sr-only">Home</span>
                    <LogoIcon />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link
                                    className="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-500 transition hover:text-gray-500/75"
                                    href="/"
                                >
                                    Careers
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    <SearchInput />
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                                href="/login"
                            >
                                Login
                            </Link>

                            <Link
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75 sm:block"
                                href="/sign-in"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
