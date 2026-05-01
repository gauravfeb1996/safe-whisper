"use client";

import Link from "next/link";
import { Settings, Home, Users, BookOpen, Bookmark } from "lucide-react";

const items = [
  { title: "Community Feed", url: "/home", icon: Home },
  { title: "Support Groups", url: "/groups", icon: Users },
  { title: "Resources", url: "/resources", icon: BookOpen },
  { title: "Saved Posts", url: "/saved", icon: Bookmark },
];

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";

export function AppSidebar() {

  return (
    <Sidebar>
      {/* Top Header */}
      <SidebarHeader>
        <div className="px-2 py-2">
          <h2 className="text-lg font-bold">SafeSpace</h2>
        </div>
      </SidebarHeader>
      <Separator />
      {/* Main Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="font-semibold">
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      {/* Bottom Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="font-semibold">
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}