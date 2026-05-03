"use client";

import { useState } from "react";
import { Smile, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmojiPicker } from "./EmojiPicker";
import { TagPicker } from "./TagPicker";

type Props = {
    tags: string[];
    onEmojiSelect: (emoji: string) => void;
    onTagSelect: (tag: string) => void;
    onPost: () => void;
    disabled: boolean;
};

export function PostToolbar({ tags, onEmojiSelect, onTagSelect, onPost, disabled }: Props) {
    const [showEmoji, setShowEmoji] = useState(false);
    const [showTags, setShowTags] = useState(false);

    return (
        <div className="flex items-center justify-between border-t pt-3">
            <div className="flex items-center gap-1">
                <div className="relative">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => { setShowEmoji((p) => !p); setShowTags(false); }}
                    >
                        <Smile size={18} />
                    </Button>
                    {showEmoji && (
                        <EmojiPicker
                            onSelect={(emoji) => { onEmojiSelect(emoji); setShowEmoji(false); }}
                            onClose={() => setShowEmoji(false)}
                        />
                    )}
                </div>

                <div className="relative">
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => { setShowTags((p) => !p); setShowEmoji(false); }}
                        className="gap-1.5"
                    >
                        <Tag size={15} />
                        Add tag
                    </Button>
                    {showTags && (
                        <TagPicker
                            selected={tags}
                            onSelect={(tag) => { onTagSelect(tag); }}
                            onClose={() => setShowTags(false)}
                        />
                    )}
                </div>
            </div>

            <Button onClick={onPost} disabled={disabled} size="sm">
                Post
            </Button>
        </div>
    );
}
