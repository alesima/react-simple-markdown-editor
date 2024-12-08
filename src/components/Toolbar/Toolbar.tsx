import React from "react";
import ToolbarButton from "./ToolbarButton";
import "./Toolbar.css";

interface ToolbarButtonConfig {
  icon: React.ReactNode;
  action: () => void;
  title: string;
}

interface ToolbarProps {
  buttons: ToolbarButtonConfig[];
  onTogglePreview: () => void;
  onToggleFullscreen: () => void;
  isPreview: boolean;
  isFullscreen: boolean;
}

const Toolbar: React.FC<ToolbarProps> = ({
  buttons,
  onTogglePreview,
  onToggleFullscreen,
  isPreview,
  isFullscreen,
}) => (
  <div className='toolbar'>
    {buttons.map((button, index) => (
      <ToolbarButton
        key={index}
        icon={button.icon}
        title={button.title}
        onClick={button.action}
      />
    ))}
    <ToolbarButton
      icon={isPreview ? "Edit" : "Preview"}
      title={isPreview ? "Switch to Edit Mode" : "Switch to Preview Mode"}
      onClick={onTogglePreview}
    />
    <ToolbarButton
      icon={isFullscreen ? "⇲" : "⇱"}
      title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      onClick={onToggleFullscreen}
    />
  </div>
);

export default Toolbar;
