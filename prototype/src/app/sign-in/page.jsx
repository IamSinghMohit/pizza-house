import { LogoIcon } from "@/icons";
import React from "react";
import SignIn from "@/components/client/SignIn";

function Page() {
    return (
        <section class="bg-white">
            <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="Pattern"
                        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        class="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>
                <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div class="max-w-xl lg:max-w-3xl">
                        <a class="block text-blue-600" href="/">
                            <span class="sr-only">Home</span>
                            <LogoIcon />
                        </a>

                        <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Welcome to Squid
                        </h1>
                        <SignIn />
                    </div>
                </main>
            </div>
        </section>
    );
}

export default Page;
