import Sidebar from "@/components/admin/sidebar/Sidebar";
import React from "react";
function layout({ children }) {
    return (
        <div className="bg-background min-h-screen">
            <div className="flex ">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default layout;
