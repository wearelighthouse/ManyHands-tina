/**
 * Convert a string into a kebab-case suitible for HTML IDs etc.
 * Also trims any non-alphanumeric characters at the start and end of the string.
 *
 * E.g. toKebabCase('Help and Support') -> 'help-and-support'
 */
 function toKebabCase(string: string): string {
  return string
    .replace(/'/g, '')
    .replace(/[^a-z0-9A-Z]/g, ' ')
    .trim()
    .replace(/ /g, '-')
    .toLowerCase();
}

export default toKebabCase;
