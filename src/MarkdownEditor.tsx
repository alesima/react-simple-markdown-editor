import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { insertMarkdown } from "./utils/markdownUtils";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  previewMode?: boolean;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  value,
  onChange,
  rows = 10,
  previewMode = false,
}) => {
  const [isPreview, setIsPreview] = useState(previewMode);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const handleInsertMarkdown = (prefix: string, suffix = "") => {
    const { newValue, newSelectionStart, newSelectionEnd } = insertMarkdown(
      value,
      selectionStart,
      selectionEnd,
      prefix,
      suffix
    );
    onChange(newValue);
    setSelectionStart(newSelectionStart);
    setSelectionEnd(newSelectionEnd);
  };

  const toolbarButtons = [
    // Text Formatting
    {
      icon: "B",
      action: () => handleInsertMarkdown("**", "**"),
      title: "Bold",
    },
    {
      icon: "I",
      action: () => handleInsertMarkdown("*", "*"),
      title: "Italic",
    },
    {
      icon: "S",
      action: () => handleInsertMarkdown("~~", "~~"),
      title: "Strikethrough",
    },
    {
      icon: "U",
      action: () => handleInsertMarkdown("<u>", "</u>"),
      title: "Underline",
    },

    // Headings
    {
      icon: "H1",
      action: () => handleInsertMarkdown("# "),
      title: "Heading 1",
    },
    {
      icon: "H2",
      action: () => handleInsertMarkdown("## "),
      title: "Heading 2",
    },
    {
      icon: "H3",
      action: () => handleInsertMarkdown("### "),
      title: "Heading 3",
    },
    {
      icon: "H4",
      action: () => handleInsertMarkdown("#### "),
      title: "Heading 4",
    },
    {
      icon: "H5",
      action: () => handleInsertMarkdown("##### "),
      title: "Heading 5",
    },
    {
      icon: "H6",
      action: () => handleInsertMarkdown("###### "),
      title: "Heading 6",
    },

    // Lists
    {
      icon: "•",
      action: () => handleInsertMarkdown("- "),
      title: "Bullet List",
    },
    {
      icon: "1.",
      action: () => handleInsertMarkdown("1. "),
      title: "Numbered List",
    },
    {
      icon: "☐",
      action: () => handleInsertMarkdown("- [ ] "),
      title: "Task List",
    },

    // Quotes and Separators
    {
      icon: ">",
      action: () => handleInsertMarkdown("> "),
      title: "Blockquote",
    },
    {
      icon: "—",
      action: () => handleInsertMarkdown("\n---\n"),
      title: "Horizontal Rule",
    },

    // Links and Media
    {
      icon: "🔗",
      action: () => handleInsertMarkdown("[", "](url)"),
      title: "Link",
    },
    {
      icon: "🖼",
      action: () => handleInsertMarkdown("![alt text](", ")"),
      title: "Image",
    },

    // Tables
    {
      icon: "📊",
      action: () =>
        handleInsertMarkdown(
          `
  | Column 1 | Column 2 | Column 3 |
  | -------- | -------- | -------- |
  | Row 1    | Cell 2   | Cell 3   |
  | Row 2    | Cell 5   | Cell 6   |
          `.trim()
        ),
      title: "Table",
    },

    // Code and Diagrams
    {
      icon: "`",
      action: () => handleInsertMarkdown("`", "`"),
      title: "Inline Code",
    },
    {
      icon: "```",
      action: () => handleInsertMarkdown("```\n", "\n```"),
      title: "Code Block",
    },
    {
      icon: "Mermaid",
      action: () => handleInsertMarkdown("```mermaid\n", "\n```"),
      title: "Mermaid Diagram",
    },

    // Advanced Features
    {
      icon: "Sup",
      action: () => handleInsertMarkdown("<sup>", "</sup>"),
      title: "Superscript",
    },
    {
      icon: "Sub",
      action: () => handleInsertMarkdown("<sub>", "</sub>"),
      title: "Subscript",
    },
    {
      icon: "Center",
      action: () => handleInsertMarkdown("<center>", "</center>"),
      title: "Center Align",
    },
    {
      icon: "HTML",
      action: () => handleInsertMarkdown("<div>\n", "\n</div>"),
      title: "HTML Block",
    },
  ];

  return (
    <div
      className={`markdown-editor ${
        isFullscreen ? "fixed inset-0 z-50 bg-white" : ""
      }`}
    >
      <Toolbar
        buttons={toolbarButtons}
        onTogglePreview={() => setIsPreview(!isPreview)}
        onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
        isPreview={isPreview}
        isFullscreen={isFullscreen}
      />
      {isPreview ? (
        <Preview value={value} />
      ) : (
        <Editor
          value={value}
          onChange={onChange}
          rows={rows}
          onSelect={(start, end) => {
            setSelectionStart(start);
            setSelectionEnd(end);
          }}
        />
      )}
    </div>
  );
};

export default MarkdownEditor;
