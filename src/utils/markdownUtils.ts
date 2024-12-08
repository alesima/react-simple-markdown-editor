export const insertMarkdown = (
  value: string,
  start: number,
  end: number,
  prefix: string,
  suffix = ""
): { newValue: string; newSelectionStart: number; newSelectionEnd: number } => {
  const selectedText = value.substring(start, end);
  const beforeText = value.substring(0, start);
  const afterText = value.substring(end);

  const hasPrefixAndSuffix =
    selectedText.startsWith(prefix) && selectedText.endsWith(suffix);

  const newText = hasPrefixAndSuffix
    ? selectedText.substring(prefix.length, selectedText.length - suffix.length)
    : `${prefix}${selectedText}${suffix}`;

  const newValue = beforeText + newText + afterText;
  const newSelectionStart = hasPrefixAndSuffix ? start : start + prefix.length;
  const newSelectionEnd = hasPrefixAndSuffix
    ? end - prefix.length - suffix.length
    : end + prefix.length + suffix.length;

  return { newValue, newSelectionStart, newSelectionEnd };
};
