"use client";
import { SearchIcon } from "@/icons";
import React from "react";

function SearchInput() {
    return (
        <div className="relative">
            <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
            </label>

            <input
                type="text"
                id="Search"
                placeholder="Search for..."
                class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            />

            <span class="absolute inset-y-0 end-0 grid w-10 place-content-center bg-blue-600 rounded-r-lg">
                <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                >
                    <span className="sr-only">Search</span>
                    <SearchIcon />
                </button>
            </span>
        </div>
    );
}

export default SearchInput;
