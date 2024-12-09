import React, { useRef } from "react";
import "./Editor.css";

interface EditorProps {
  value: string;
  rows: number;
  onChange: (value: string) => void;
  onSelect: (start: number, end: number) => void;
}

const Editor: React.FC<EditorProps> = ({ value, rows, onChange, onSelect }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSelect = () => {
    if (textareaRef.current) {
      onSelect(
        textareaRef.current.selectionStart,
        textareaRef.current.selectionEnd
      );
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={e => onChange(e.target.value)}
      onSelect={handleSelect}
      rows={rows}
      className='editor'
    />
  );
};

export default Editor;
