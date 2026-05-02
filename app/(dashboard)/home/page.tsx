'use client';
import { RichTextEditor } from "@/components/editor/editor";
import { useState } from "react";

export default function HomePage() {
  const [state, setState] = useState("");
  const setOnChange = (changedValue: string) => {
    console.log("changed value", changedValue);
    setState(changedValue);
  }
  return <div><RichTextEditor value={state} onChange={setOnChange}/></div>;
}
