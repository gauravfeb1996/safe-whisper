import { AppSidebar } from "@/components/side-bar/page";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
    Home,
    Users,
    BookOpen,
    Bookmark,
} from "lucide-react";

export default function HomePage() {
    const items = [
        {
            title: "Community Feed",
            url: "/",
            icon: Home,
        },
        {
            title: "Support Groups",
            url: "/groups",
            icon: Users,
        },
        {
            title: "Resources",
            url: "/resources",
            icon: BookOpen,
        },
        {
            title: "Saved Posts",
            url: "/saved",
            icon: Bookmark,
        },
    ];
    return (
        <SidebarProvider>
            <AppSidebar items={items} />
            Home Page
        </SidebarProvider>
    );
}