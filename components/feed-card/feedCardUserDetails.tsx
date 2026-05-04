import Link from "next/link";
import AvatarIcon from "../avatar/avatar";
import React from "react";

interface FeedCardUserDetailsProps {
    userAlias: string;
    avatarIcon?: React.ReactElement;
    avatarFallback?: React.ReactNode;
    timeOfPost: string;
}

export default function FeedCardUserDetails({ userAlias, 
    avatarIcon, 
    avatarFallback, 
    timeOfPost} : FeedCardUserDetailsProps ) {
    return (
        <Link href={`/user/${userAlias}`}>
        <div className="flex items-center"> 
            <AvatarIcon 
                icon={avatarIcon}
                fallback={avatarFallback}
            />
            <div className="ml-2">
                <div className="text-xs">{userAlias}</div>
                <div className="text-[0.60rem] text-gray-500">{timeOfPost}</div>
            </div>
        </div>
        </Link>
    )
}