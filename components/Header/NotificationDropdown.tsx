"use client";

import Link from "next/link";
import { notifications } from "@/lib/notifications";

type Props = {
    onClose: () => void;
};

export function NotificationDropdown({ onClose }: Props) {
    return (
        <div className="absolute right-0 top-full mt-2 w-80 rounded-lg border bg-background shadow-lg z-50">
            <div className="px-4 py-3 border-b">
                <span className="font-semibold text-sm">Notifications</span>
            </div>
            <div className="flex flex-col">
                {notifications.map((n) => (
                    <Link
                        key={n.id}
                        href={`/notifications/${n.id}`}
                        onClick={onClose}
                        className="flex flex-col gap-0.5 px-4 py-3 hover:bg-muted transition-colors border-b last:border-b-0"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium leading-snug">{n.title}</span>
                            {!n.read && (
                                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                            )}
                        </div>
                        <span className="text-xs text-muted-foreground line-clamp-1">
                            {n.description}
                        </span>
                        <span className="text-xs text-muted-foreground">{n.time}</span>
                    </Link>
                ))}
            </div>
            <div className="px-4 py-3 border-t">
                <Link
                    href="/notifications"
                    onClick={onClose}
                    className="block text-center text-sm font-medium text-primary hover:underline"
                >
                    View all
                </Link>
            </div>
        </div>
    );
}
