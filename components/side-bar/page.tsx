"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import {
  Settings
} from "lucide-react";

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

interface SidebarItem {
  title: string;
  url: string;
  icon: ComponentType;
}

interface SidebarItems {
  items: SidebarItem[];
}

export function AppSidebar({ items }: SidebarItems) {

  return (
    <Sidebar>
      {/* Top Header */}
      <SidebarHeader>
        <div className="px-2 py-2">
          <h2 className="text-lg font-semibold">SafeSpace</h2>
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
                  <SidebarMenuButton asChild>
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
            <SidebarMenuButton asChild>
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