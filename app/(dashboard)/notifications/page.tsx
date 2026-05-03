import Link from "next/link";
import { notifications } from "@/lib/notifications";

export default function NotificationsPage() {
    return (
        <div className="max-w-2xl mx-auto py-6">
            <h1 className="text-2xl font-semibold mb-6">All Notifications</h1>
            <div className="flex flex-col gap-3">
                {notifications.map((n) => (
                    <Link
                        key={n.id}
                        href={`/notifications/${n.id}`}
                        className="flex flex-col gap-1 rounded-lg border p-4 hover:bg-muted transition-colors"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{n.title}</span>
                            <div className="flex items-center gap-2">
                                {!n.read && (
                                    <span className="h-2 w-2 rounded-full bg-red-500 inline-block" />
                                )}
                                <span className="text-xs text-muted-foreground">{n.time}</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{n.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
