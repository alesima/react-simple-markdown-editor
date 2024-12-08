import { render, fireEvent, screen } from "@testing-library/react";
import Toolbar from "./Toolbar";

describe("Toolbar", () => {
  const mockTogglePreview = jest.fn();
  const mockToggleFullscreen = jest.fn();

  test("renders all buttons", () => {
    const buttons = [
      { icon: "B", action: jest.fn(), title: "Bold" },
      { icon: "I", action: jest.fn(), title: "Italic" },
    ];

    render(
      <Toolbar
        buttons={buttons}
        onTogglePreview={mockTogglePreview}
        onToggleFullscreen={mockToggleFullscreen}
        isPreview={false}
        isFullscreen={false}
      />
    );

    // Check that all buttons are rendered
    expect(screen.getByTitle("Bold")).toBeInTheDocument();
    expect(screen.getByTitle("Italic")).toBeInTheDocument();
  });

  test("calls togglePreview and toggleFullscreen", () => {
    render(
      <Toolbar
        buttons={[]}
        onTogglePreview={mockTogglePreview}
        onToggleFullscreen={mockToggleFullscreen}
        isPreview={false}
        isFullscreen={false}
      />
    );

    // Click the toggle preview button
    fireEvent.click(screen.getByTitle("Switch to Preview Mode"));
    expect(mockTogglePreview).toHaveBeenCalled();

    // Click the toggle fullscreen button
    fireEvent.click(screen.getByTitle("Enter Fullscreen"));
    expect(mockToggleFullscreen).toHaveBeenCalled();
  });
});
