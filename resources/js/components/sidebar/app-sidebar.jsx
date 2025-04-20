import {
    BellRing,
    ClockFading,
    CreditCard,
    File,
    Home,
    HousePlus,
    UsersIcon,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "../ui/sidebar";
import NavMain from "./nav-main";
import NavHeader from "./nav-header";
import NavSetting from "./nav-setting";
import { usePage } from "@inertiajs/react";

export function AppSidebar() {
    const { url } = usePage();
    const data = {
        user: {
            name: "shadcn",
            email: "m@example.com",
            avatar: "/avatars/shadcn.jpg",
        },
        dashboard: [
            {
                title: "Tableau de bord",
                url: route("dashboard"),
                icon: Home,
                isActive: url.startsWith("/dashboard"),
            },
        ],
        transaction: [
            {
                title: "Transaction",
                url: route("transactions"),
                icon: CreditCard,
                isActive: url.startsWith("/transactions"),
            },
        ],
        
    };

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <NavHeader />
            </SidebarHeader>
            <SidebarContent className="mt-4 gap-0">
                <NavMain items={data.dashboard} />
                <NavMain items={data.transaction} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
