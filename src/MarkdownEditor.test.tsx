import { render, screen, fireEvent } from "@testing-library/react";
import MarkdownEditor from "./MarkdownEditor";

describe("MarkdownEditor", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test("renders the editor with the provided value", () => {
    render(<MarkdownEditor value='Initial content' onChange={mockOnChange} />);

    // Check if the editor textarea is rendered
    const editor = screen.getByRole("textbox");
    expect(editor).toBeInTheDocument();

    // Check the initial content
    expect(editor).toHaveValue("Initial content");
  });

  test("updates value on change", () => {
    render(<MarkdownEditor value='Initial content' onChange={mockOnChange} />);

    // Simulate typing in the editor
    const editor = screen.getByRole("textbox");
    fireEvent.change(editor, { target: { value: "Updated content" } });

    // Ensure onChange was called with the updated value
    expect(mockOnChange).toHaveBeenCalledWith("Updated content");
  });

  test("toggles preview mode", () => {
    render(<MarkdownEditor value='Initial content' onChange={mockOnChange} />);

    // Click the preview button
    const previewButton = screen.getByTitle("Switch to Preview Mode"); // Assuming Toolbar buttons have a title attribute
    fireEvent.click(previewButton);

    // Ensure the editor is replaced with the Preview component
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.getByText("Initial content")).toBeInTheDocument(); // Assuming Preview renders raw text
  });

  test("toggles fullscreen mode", () => {
    render(<MarkdownEditor value='Initial content' onChange={mockOnChange} />);

    // Click the fullscreen button
    const fullscreenButton = screen.getByTitle("Enter Fullscreen"); // Assuming Toolbar buttons have a title attribute
    fireEvent.click(fullscreenButton);

    // Check that the editor has fullscreen styling
    const editorContainer = screen.getByRole("dialog"); // Assuming the fullscreen container has a role or specific styling
    expect(editorContainer).toHaveClass("fixed inset-0 z-50 bg-white");
  });

  test("inserts Markdown syntax using toolbar buttons", () => {
    render(<MarkdownEditor value='' onChange={mockOnChange} />);

    // Click the bold button
    const boldButton = screen.getByTitle("Bold");
    fireEvent.click(boldButton);

    // Ensure onChange was called with bold Markdown syntax
    expect(mockOnChange).toHaveBeenCalledWith("****");

    // Click the heading button
    const headingButton = screen.getByTitle("Heading 1");
    fireEvent.click(headingButton);

    // Ensure onChange was called with heading Markdown syntax
    expect(mockOnChange).toHaveBeenCalledWith("# ");
  });

  test("handles text selection for Markdown insertion", () => {
    const value = "Some selected text";
    render(<MarkdownEditor value={value} onChange={mockOnChange} />);

    // Simulate text selection
    const editor = screen.getByRole("textbox");
    fireEvent.select(editor, {
      target: { selectionStart: 5, selectionEnd: 13 },
    }); // Select "selected"

    // Click the italic button
    const italicButton = screen.getByTitle("Italic");
    fireEvent.click(italicButton);

    // Ensure the selected text is wrapped in Markdown syntax
    expect(mockOnChange).toHaveBeenCalledWith("Some *selected* text");
  });

  test("renders the Preview component when preview mode is enabled", () => {
    render(
      <MarkdownEditor
        value='Markdown content'
        onChange={mockOnChange}
        previewMode={true}
      />
    );

    // Check that the Preview component is rendered
    expect(screen.getByText("Markdown content")).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
