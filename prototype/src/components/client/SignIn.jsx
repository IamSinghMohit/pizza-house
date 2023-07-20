"use client";
import { useForm } from "react-hook-form";
import { Button, Input } from "./form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schema/sign-in";
import { useEffect } from "react";

export function SignIn() {
    const form = useForm({
        resolver: zodResolver(SignInSchema),
    });
    const { register, handleSubmit ,formState:{errors}} = form;

    function onSubmit(data) {
        console.log(data)
    }
    useEffect(() => {
        console.log(errors)
    },[errors])

    return (
        <form
            class="mt-8 grid grid-cols-6 gap-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div class="col-span-6 sm:col-span-3">
                <label
                    for="FirstName"
                    class="block text-sm font-medium text-gray-700"
                >
                    First Name
                </label>
                <Input
                    id="FirstName"
                    type="text"
                    register={register("firstname")}
                />
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label
                    for="LastName"
                    class="block text-sm font-medium text-gray-700"
                >
                    Last Name
                </label>

                <Input
                    id="LastName"
                    type="text"
                    register={register("lastname")}
                />
            </div>

            <div class="col-span-6">
                <label
                    for="Email"
                    class="block text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <Input id="Email" type="email" register={register("email")} />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <label
                    for="Password"
                    class="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>

                <Input
                    id="Password"
                    type="password"
                    register={register("password")}
                />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <label
                    for="PasswordConfirmation"
                    class="block text-sm font-medium text-gray-700"
                >
                    Password Confirmation
                </label>
                <Input
                    id="PasswordConfirmation"
                    type="password"
                    register={register("confirmPassword")}
                />
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button text={"create an account"} className={"px-12"} />
                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="#" class="text-gray-700 underline">
                        Log in
                    </a>
                    .
                </p>
            </div>
        </form>
    );
}

export default SignIn;
