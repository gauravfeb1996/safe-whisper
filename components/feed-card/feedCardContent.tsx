import Link from "next/link";

export default function FeedCardContent() {
    return (
        <Link href={`/content/quiz-id`}>
            <div className="text-base font-semibold mb-2 line-clamp-2">
                Feeling overwhelmed with anxiety at night. Any grounding techniques?
            </div>
            <div className="text-grey-500 line-clamp-3">
                Lately, as soon as I try to go to sleep, 
                my mind starts racing and my chest feels tight. 
                I've tried deep breathing but sometimes it makes 
                me focus on my breath too much and I panic more. 
                What are some gentle ways you guys ground yourselves 
                when anxiety hits hard at night?
                Lately, as soon as I try to go to sleep, 
                my mind starts racing and my chest feels tight. 
                I've tried deep breathing but sometimes it makes 
                me focus on my breath too much and I panic more. 
                What are some gentle ways you guys ground yourselves 
                when anxiety hits hard at night?
            </div>
        </Link>
    );
}