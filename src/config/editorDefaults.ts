export interface ToolbarButtonConfig {
  icon: React.ReactNode;
  action: () => void;
  title: string;
}

export interface MarkdownEditorConfig {
  toolbarConfig?: "compact" | "default" | "full" | "custom";
  customToolbarButtons?: string[];
  colors?: {
    toolbarBg?: string;
    toolbarBtnBg?: string;
    toolbarBtnHoverBg?: string;
    editorBg?: string;
    previewBg?: string;
  };
}

export const defaultConfig: MarkdownEditorConfig = {
  toolbarConfig: "default",
  colors: {
    toolbarBg: "#f3f4f6",
    toolbarBtnBg: "white",
    toolbarBtnHoverBg: "#e5e7eb",
    editorBg: "white",
    previewBg: "#f8f8f8",
  },
};
