"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

import { Bold, Italic, List, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function RichTextEditor({ value, onChange }: Props) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [isBoldActive, setBoldActive] = useState(false);
  const [isItalicActive, setItalicActive] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const handleFormattingButtonClick = (editor:any, type: string) => {
    switch(type){
        case 'bold':
            editor.chain().focus().toggleBold().run()
            setBoldActive(!isBoldActive);
            break;
        case 'italic':
            editor.chain().focus().toggleItalic().run()
            setItalicActive(!isItalicActive);
            break;
    } 
  }

  if (!editor) return null;

  return (
    <div className="border rounded-2xl p-4 space-y-3 relative">
      
      {/* Toolbar */}
      <div className="flex gap-2 border-b pb-2">

        <Button
          type="button"
          variant="ghost"
          onClick={() => handleFormattingButtonClick(editor, 'bold')}
          className={editor.isActive("bold") ? "bg-muted text-primary" : ""}
        >
          <Bold size={16} />
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => handleFormattingButtonClick(editor, 'italic')}
          className={editor.isActive("italic") ? "bg-muted text-primary" : ""}
        >
          <Italic size={16} />
        </Button>


        {/* Emoji Button */}
        <Button
          type="button"
          variant="ghost"
          onClick={() => setShowEmoji((prev) => !prev)}
        >
          <Smile size={16} />
        </Button>
      </div>

      {/* Emoji Picker */}
      {showEmoji && (
        <div className="absolute z-50 mt-2">
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              editor.chain().focus().insertContent(emojiData.emoji).run();
              setShowEmoji(false);
            }}
          />
        </div>
      )}

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="h-[150px] outline-none prose max-w-none overflow-auto"
      />
    </div>
  );
}