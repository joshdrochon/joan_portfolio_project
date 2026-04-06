/**
 * Truncates a string to a given number of words, appending "..." if truncated.
 */
export function truncate(text: string, wordLimit: number): string {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}
