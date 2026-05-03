"use client";

import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { TagChips } from "@/components/create-post/TagChips";
import { PostToolbar } from "@/components/create-post/PostToolbar";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
    const router = useRouter();
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    function insertEmoji(emoji: string) {
        const textarea = textareaRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newText = text.slice(0, start) + emoji + text.slice(end);
        setText(newText);
        setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = start + emoji.length;
            textarea.focus();
        }, 0);
    }

    function toggleTag(tag: string) {
        setTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    }

    function removeTag(tag: string) {
        setTags((prev) => prev.filter((t) => t !== tag));
    }

    function handlePost() {
        if (!heading.trim() && !text.trim()) return;
        // wire up real API call here
        console.log({ heading, text, tags });
        router.back();
    }

    return (
        <div className="max-w-2xl mx-auto py-6">
            <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
                <ArrowLeft size={16} />
                Back
            </button>

            <div className="rounded-lg border bg-background p-4 flex flex-col gap-3">
                {/* Avatar + Heading */}
                <div className="flex gap-3 items-center">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                        U
                    </div>
                    <input
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        placeholder="Highlight your issue or question..."
                        className="w-full outline-none text-base font-semibold placeholder:text-muted-foreground placeholder:font-normal bg-transparent"
                    />
                </div>

                {/* Divider + Details */}
                <div className="pl-13 flex flex-col gap-2">
                    <div className="h-px bg-border" />
                    <textarea
                        ref={textareaRef}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Add more details, context, or feelings..."
                        rows={5}
                        className="w-full resize-none outline-none text-sm placeholder:text-muted-foreground bg-transparent"
                    />
                </div>

                <TagChips tags={tags} onRemove={removeTag} />

                <PostToolbar
                    tags={tags}
                    onEmojiSelect={insertEmoji}
                    onTagSelect={toggleTag}
                    onPost={handlePost}
                    disabled={!heading.trim() && !text.trim()}
                />
            </div>
        </div>
    );
}
