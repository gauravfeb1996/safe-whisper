import { X } from "lucide-react";

type Props = {
    tags: string[];
    onRemove: (tag: string) => void;
};

export function TagChips({ tags, onRemove }: Props) {
    if (tags.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 pl-13">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                >
                    {tag}
                    <button type="button" onClick={() => onRemove(tag)}>
                        <X size={12} />
                    </button>
                </span>
            ))}
        </div>
    );
}
