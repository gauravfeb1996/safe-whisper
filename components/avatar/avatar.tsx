import { UserIcon } from "lucide-react";

interface AvatarIconProp {
    icon?: React.ReactElement;
    fallback?: React.ReactNode;
}

export default function AvatarIcon({ icon, fallback }: AvatarIconProp) {
    return (
        <div className="h-8 w-8 shrink-0 rounded-full bg-muted 
            flex items-center justify-center text-sm font-semibold 
            text-muted-foreground">
                {icon ? icon : 
                    (fallback ? 
                        <div className="truncate">{fallback}</div> : 
                        <UserIcon />
                    )
                }
        </div>
    )
}