"use client";

import { useRef, useEffect } from "react";

const EMOJIS = [
    "😀","😂","😊","😍","🥰","😎","😢","😭","😤","😡",
    "🥺","😳","🤔","😶","🙄","😴","🤯","🥳","😇","🤗",
    "❤️","💔","💪","🙏","👏","✨","🔥","💯","🌈","🌻",
    "🌧️","⭐","🎉","💬","💭","🤝","👀","💡","🛑","✅",
];

type Props = {
    onSelect: (emoji: string) => void;
    onClose: () => void;
};

export function EmojiPicker({ onSelect, onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div
            ref={ref}
            className="absolute bottom-full mb-2 left-0 w-64 rounded-lg border bg-background shadow-lg z-50 p-2"
        >
            <div className="grid grid-cols-8 gap-1">
                {EMOJIS.map((emoji) => (
                    <button
                        key={emoji}
                        type="button"
                        onClick={() => { onSelect(emoji); onClose(); }}
                        className="text-xl rounded hover:bg-muted p-1 transition-colors"
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </div>
    );
}
