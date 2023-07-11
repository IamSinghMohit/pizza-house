"use client";
import React, { useState, useRef ,useEffect} from "react";
import { CandyIcon, ChangeIcon } from "../../../../icons";
import Button from "@/components/admin/shared/Button";

function page() {
    const [image, setImage] = useState();
    const inputRef = useRef();
    function handleDrop(e) {
        e.preventDefault();
        console.log(e);
        const files = e.dataTransfer.files;
        if (files) {
            const imageUrl = URL.createObjectURL(files[0]);
            setImage(imageUrl);
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDragEnter(e) {
        e.preventDefault();
    }
    function handleChange(e) {
        console.log(e);
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    }
    useEffect(() => {
        return () => {
            if (image) {
                URL.revokeObjectURL(image);
            }
        };
    }, [image]);
    return (
        <div className="p-4 bg-white w-[580px] rounded-lg drop-shadow-sm m-1 flex flex-col gap-2 lg:flex-row lg:w-full">
            <div
                className="lg:w-[580px] lg:h-[380px] bg-background rounded-md text-center shadow-md relative"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
            >
                <img
                    src={image || "/picture.png"}
                    alt="product"
                    className={`rounded-md object-cover mx-auto ${
                        !image ?
                        "w-[120px] h-[120px] lg:w-[200px] lg:h-[200px]" : "w-full h-full" 
                    }`}
                    draggable={false}
                />

                <label
                    htmlFor="image-upload"
                    className="text-black text-xs lg:text-[18px]"
                >
                    {!image ? (
                        <>
                            drop your image or{" "}
                            <span className="text-primary_dark hover:underline cursor-pointer">
                                Browse
                            </span>
                        </>
                    ) : (
                        <Button
                            text={"Change"}
                            type="button"
                            onClick={() => inputRef.current.click()}
                            icon={<ChangeIcon width={14} height={14} />}
                            className={
                                "absolute bottom-1 left-1/2 -translate-x-1/2"
                            }
                        />
                    )}
                </label>
                <input
                    type="file"
                    className="hidden"
                    id="image-upload"
                    onChange={handleChange}
                    ref={inputRef}
                    key={image}
                />
            </div>
            <form className="lg:w-[580px]">
                <div className="my-2">
                    <input
                        type=""
                        className="bg-background p-1 text-sm w-full rounded-sm lg:text-[18px]"
                        placeholder="Title"
                    />
                    <div className="my-2 h-[120px] lg:h-[190px]">
                        <textarea
                            name=""
                            className="bg-background text-[14px] w-full rounded-sm h-full px-1 lg:text-[18px]"
                            placeholder="Description..."
                        ></textarea>
                    </div>
                </div>
                <div className="flex items-center w-full gap-3 my-2">
                    <input
                        type=""
                        className="bg-background text-[14px] w-[80px] px-1 rounded-sm lg:text-[18px]"
                        placeholder="Price"
                    />
                    <input
                        type=""
                        className="bg-background text-[14px] w-[80px] px-1 rounded-sm lg:text-[18px]"
                        placeholder="Discount"
                    />
                </div>
                <Button
                    text={"create"}
                    icon={<CandyIcon width={14} height={14} />}
                    type={"submit"}
                />
            </form>
        </div>
    );
}

export default page;
