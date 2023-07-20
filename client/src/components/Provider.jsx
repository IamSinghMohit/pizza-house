"use client";

import React from "react";
import { store } from "@/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Modal from "./modal";

const queryClient = new QueryClient();
function ClientProvider({ children }) {
    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Modal/>
                    {children}
                </QueryClientProvider>
            </Provider>
        </>
    );
}

export default ClientProvider;
