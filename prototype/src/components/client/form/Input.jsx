"use client";

function Input({ register ,id,type}) {
    return (
        <input
            name="email"
            type={type}
            id={id}
            class="mt-1 w-full border-gray-200 bg-white text-sm text-gray-700 p-1 border-b"
            {...register}
        />
    );
}

export default Input;
