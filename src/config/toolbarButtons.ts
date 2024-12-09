import { ToolbarButtonConfig } from "./editorDefaults";

export function createToolbarButtons(
  handler: (prefix: string, suffix?: string) => void
): ToolbarButtonConfig[] {
  return [
    {
      icon: "B",
      action: () => handler("**", "**"),
      title: "Bold",
    },
    {
      icon: "I",
      action: () => handler("*", "*"),
      title: "Italic",
    },
    {
      icon: "S",
      action: () => handler("~~", "~~"),
      title: "Strikethrough",
    },
    {
      icon: "U",
      action: () => handler("<u>", "</u>"),
      title: "Underline",
    },

    // Headings
    {
      icon: "H1",
      action: () => handler("# "),
      title: "Heading 1",
    },
    {
      icon: "H2",
      action: () => handler("## "),
      title: "Heading 2",
    },
    {
      icon: "H3",
      action: () => handler("### "),
      title: "Heading 3",
    },
    {
      icon: "H4",
      action: () => handler("#### "),
      title: "Heading 4",
    },
    {
      icon: "H5",
      action: () => handler("##### "),
      title: "Heading 5",
    },
    {
      icon: "H6",
      action: () => handler("###### "),
      title: "Heading 6",
    },

    // Lists
    {
      icon: "•",
      action: () => handler("- "),
      title: "Bullet List",
    },
    {
      icon: "1.",
      action: () => handler("1. "),
      title: "Numbered List",
    },
    {
      icon: "☐",
      action: () => handler("- [ ] "),
      title: "Task List",
    },

    // Quotes and Separators
    {
      icon: ">",
      action: () => handler("> "),
      title: "Blockquote",
    },
    {
      icon: "—",
      action: () => handler("\n---\n"),
      title: "Horizontal Rule",
    },

    // Links and Media
    {
      icon: "🔗",
      action: () => handler("[", "](url)"),
      title: "Link",
    },
    {
      icon: "🖼",
      action: () => handler("![alt text](", ")"),
      title: "Image",
    },

    // Tables
    {
      icon: "📊",
      action: () =>
        handler(
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
      action: () => handler("`", "`"),
      title: "Inline Code",
    },
    {
      icon: "```",
      action: () => handler("```\n", "\n```"),
      title: "Code Block",
    },
    {
      icon: "Mermaid",
      action: () => handler("```mermaid\n", "\n```"),
      title: "Mermaid Diagram",
    },

    // Advanced Features
    {
      icon: "Sup",
      action: () => handler("<sup>", "</sup>"),
      title: "Superscript",
    },
    {
      icon: "Sub",
      action: () => handler("<sub>", "</sub>"),
      title: "Subscript",
    },
    {
      icon: "Center",
      action: () => handler("<center>", "</center>"),
      title: "Center Align",
    },
    {
      icon: "HTML",
      action: () => handler("<div>\n", "\n</div>"),
      title: "HTML Block",
    },
  ];
}
