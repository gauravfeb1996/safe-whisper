"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

const ALL_TAGS = [
    "Anxiety", "Depression", "Relationships", "Self-care",
    "Mindfulness", "Grief", "Stress", "Trauma", "Recovery",
    "Loneliness", "Mental Health", "Motivation", "Boundaries",
    "Family", "Work-life Balance", "Sleep", "Support",
];

type Props = {
    selected: string[];
    onSelect: (tag: string) => void;
    onClose: () => void;
};

export function TagPicker({ selected, onSelect, onClose }: Props) {
    const [search, setSearch] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    const filtered = ALL_TAGS.filter((t) =>
        t.toLowerCase().includes(search.toLowerCase())
    );

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
            className="absolute bottom-full mb-2 left-0 w-56 rounded-lg border bg-background shadow-lg z-50"
        >
            <div className="flex items-center gap-2 px-3 py-2 border-b">
                <Search size={14} className="text-muted-foreground shrink-0" />
                <input
                    autoFocus
                    placeholder="Search tags..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-sm outline-none w-full bg-transparent placeholder:text-muted-foreground"
                />
            </div>
            <div className="flex flex-col max-h-48 overflow-y-auto">
                {filtered.length === 0 ? (
                    <span className="text-sm text-muted-foreground px-3 py-2">No tags found</span>
                ) : (
                    filtered.map((tag) => {
                        const isSelected = selected.includes(tag);
                        return (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => { onSelect(tag); onClose(); }}
                                className={`text-left text-sm px-3 py-2 hover:bg-muted transition-colors ${isSelected ? "text-primary font-medium" : ""}`}
                            >
                                {isSelected ? `✓ ${tag}` : tag}
                            </button>
                        );
                    })
                )}
            </div>
        </div>
    );
}
