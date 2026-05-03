import { notifications } from "@/lib/notifications";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function NotificationDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const notification = notifications.find((n) => n.id === id);

    if (!notification) notFound();

    return (
        <div className="max-w-2xl mx-auto py-6">
            <Link
                href="/notifications"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
                <ArrowLeft size={16} />
                Back to notifications
            </Link>
            <div className="rounded-lg border p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">{notification.title}</h1>
                    {!notification.read && (
                        <span className="h-2 w-2 rounded-full bg-red-500 inline-block" />
                    )}
                </div>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
            </div>
        </div>
    );
}
