export type Notification = {
    id: string;
    title: string;
    description: string;
    time: string;
    read: boolean;
};

export const notifications: Notification[] = [
    {
        id: "1",
        title: "New message from your therapist",
        description: "Dr. Sarah has sent you a follow-up message regarding your last session.",
        time: "2 min ago",
        read: false,
    },
    {
        id: "2",
        title: "Daily check-in reminder",
        description: "How are you feeling today? Take a moment to log your mood.",
        time: "1 hr ago",
        read: false,
    },
    {
        id: "3",
        title: "New resource available",
        description: "A new guided meditation on anxiety management has been added for you.",
        time: "3 hr ago",
        read: false,
    },
    {
        id: "4",
        title: "Session scheduled",
        description: "Your next session is confirmed for tomorrow at 10:00 AM.",
        time: "Yesterday",
        read: true,
    },
];
