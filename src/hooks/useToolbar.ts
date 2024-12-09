import { useMemo } from "react";
import { createToolbarButtons } from "../config/toolbarButtons";
import { toolbarPresets } from "../config/toolbarPresets";
import { ToolbarButtonConfig } from "src/config";

export const useToolbar = (
  config: {
    toolbarConfig?: "compact" | "default" | "full" | "custom";
    customToolbarButtons?: string[];
  },
  handleInsertMarkdown: (prefix: string, suffix?: string) => void
) => {
  const defaultButtons = createToolbarButtons(handleInsertMarkdown);

  const toolbarButtons = useMemo(() => {
    if (config.toolbarConfig === "custom" && config.customToolbarButtons) {
      return config.customToolbarButtons
        .map(title => defaultButtons.find(btn => btn.title === title))
        .filter((btn): btn is ToolbarButtonConfig => Boolean(btn));
    }

    const preset = toolbarPresets[config.toolbarConfig || "default"];
    return preset
      .map(title => defaultButtons.find(btn => btn.title === title))
      .filter((btn): btn is ToolbarButtonConfig => Boolean(btn));
  }, [config, defaultButtons]);

  return toolbarButtons;
};
