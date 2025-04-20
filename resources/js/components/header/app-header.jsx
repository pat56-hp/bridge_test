import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import NavUser from "./nav-user";
import NavNotification from "./nav-notification";

export default function AppHeader({ className }) {
    return (
        <header
            className={`group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 py-7 border-b transition-[width,height] ease-linear ${className}`}
        >
            <div className="flex w-full items-center gap-1 px-4  lg:gap-2 lg:px-6 justify-between">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-1" />
                </div>
                <div className="flex gap-5 items-center">
                    <NavUser />
                </div>
            </div>
        </header>
    );
}
