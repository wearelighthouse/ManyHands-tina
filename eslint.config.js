import eslint from "@eslint/js";
import globals from 'globals';
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      '.next/',
      'dist/',
      'out/',
      'public/',
      'tina/__generated__',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.strict,
    ],
  },
);
