const mixed =
  'Hello\tWorld!\n' + // tab and newline
  'Quotes: \"Double\", \'Single\'\n' + // escaped quotes
  'Backslash: \\\n' + // escaped backslash
  'Hex A: \x41\n' + // \x41 = 'A'
  'Unicode B: \u0042\n' + // \u0042 = 'B'
  'Emoji: \u{1F600} (grinning face)'; // Unicode code point for 😀

console.log(mixed);
