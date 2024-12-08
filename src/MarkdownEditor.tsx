import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { insertMarkdown } from "./utils/markdownUtils";
import {
  createToolbarButtons,
  defaultConfig,
  MarkdownEditorConfig,
  ToolbarButtonConfig,
  toolbarPresets,
} from "./config";
import "./MarkdownEditor.css";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  previewMode?: boolean;
  config?: MarkdownEditorConfig;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  value,
  onChange,
  rows = 10,
  previewMode = false,
  config = defaultConfig,
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

  const defaultButtons = createToolbarButtons(handleInsertMarkdown);

  const toolbarConfig = config.toolbarConfig || "default";

  const selectedTitles =
    toolbarConfig === "custom"
      ? config.customToolbarButtons || []
      : toolbarPresets[toolbarConfig];

  const toolbarButtons: ToolbarButtonConfig[] = selectedTitles
    .map(title => defaultButtons.find(btn => btn.title === title))
    .filter((btn): btn is ToolbarButtonConfig => Boolean(btn));

  return (
    <div className={`markdown-editor ${isFullscreen ? "fixed" : ""}`}>
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
