import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      '.next/',
      'dist/',
      'out/',
      'public/',
      'tina/__generated__',
      '*.config.js', // Legacy CommonJS configs
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
);
