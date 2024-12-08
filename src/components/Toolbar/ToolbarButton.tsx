import React from "react";
import "./ToolbarButton.css";

interface ToolbarButtonProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  icon,
  title,
  onClick,
}) => {
  return (
    <button
      type='button'
      title={title}
      onClick={onClick}
      className='toolbar-button'
    >
      {icon}
    </button>
  );
};

export default ToolbarButton;
