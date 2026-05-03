"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Search, BellDot } from "lucide-react";
import { TextField } from "@/components/text-field/textfield";
import { NotificationDropdown } from "./NotificationDropdown";
import { notifications } from "@/lib/notifications";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const hasUnread = notifications.some((n) => !n.read);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="sticky top-0 z-50 flex border-b px-6 py-3 bg-background items-center">
            <div className="w-1/2 mx-auto">
                <TextField
                    placeholder="Search for topics, feelings, support...."
                    leftAddon={<Search />}
                    classNames={{
                        input: "placeholder:font-semibold text-black",
                        inputGroup: "rounded-full",
                    }}
                />
            </div>
            <div className="flex items-center gap-4">
            <div ref={wrapperRef} className="relative">
                {hasUnread ? (
                    <BellDot
                        size={20}
                        className="cursor-pointer text-red-500"
                        onClick={() => setOpen((prev) => !prev)}
                    />
                ) : (
                    <Bell
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setOpen((prev) => !prev)}
                    />
                )}
                {open && <NotificationDropdown onClose={() => setOpen(false)} />}
            </div>
            <Button asChild size="lg">
                <Link href="/create-post">Share your thought</Link>
            </Button>
            </div>
        </div>
    );
}
