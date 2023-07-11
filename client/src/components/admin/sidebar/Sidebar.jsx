import React from "react";
import {
    CreateproductIcon,
    DashboardIcon,
    DeleteproductIcon,
    OrderIcon,
    ProductIcon,
    StatisticsIcon,
    UpdateproductIcon,
} from "../../../../icons";
import SidebarLi from "../shared/SidebarLi";

const list = [
    {
        id: 1,
        text: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        id: 2,
        text: "Products",
        icon: <ProductIcon />,
    },
    {
        id: 3,
        text: "Create",
        icon: <CreateproductIcon />,
    },
    {
        id: 4,
        text: "Update",
        icon: <UpdateproductIcon />,
    },
    {
        id: 5,
        text: "Delete",
        icon: <DeleteproductIcon />,
    },
    {
        id: 6,
        text: "Statistics",
        icon: <StatisticsIcon />,
    },
    {
        id: 7,
        text: "Orders",
        icon: <OrderIcon />,
    },
];
function Sidebar() {
    return (
        <div className="bg-white w-20 h-screen md:w-[150px] sticky left-0 top-0">
            <ul className="text-center pt-2">
                {list.map((item) => (
                    <SidebarLi icon={item.icon} text={item.text} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
