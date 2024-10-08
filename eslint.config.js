import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'warn', // Выдает предупреждение при использовании any
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Не требует явного указания типов для возвращаемых значений
    'react/jsx-no-style': 'off', // Allows using inline styles in JSX
    'react/no-danger': 'off', // Optional: If you want to use dangerouslySetInnerHTML
    'no-inline-styles': 'off' // Disables the no-inline-styles rule
  }
});
