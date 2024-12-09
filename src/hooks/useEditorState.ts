import { useState } from "react";

export const useEditorState = (initialPreviewMode = false) => {
  const [isPreview, setIsPreview] = useState(initialPreviewMode);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePreview = () => setIsPreview(!isPreview);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return {
    isPreview,
    isFullscreen,
    togglePreview,
    toggleFullscreen,
  };
};
