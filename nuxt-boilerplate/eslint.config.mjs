import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
    ignores: [
      'node_modules/',
      'base/postcss.config.js',
      'base/assets',
      'B2B/assets',
      'B2C/assets',
      'test/assets',
      '**/.nuxt',
      '**/.output',
    ],
  },
  {
    files: ['**/*.vue'],
    rules: {
      // Enforces a specific order of component tags: <script>, then <template>, then <style>
      'vue/component-tags-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
      // Enforces consistent indentation in <template> (2 spaces)
      'vue/html-indent': ['error', 2],
      // Disables the rule that bans certain types in TypeScript
      '@typescript-eslint/ban-types': 'off',
      // Controls line breaks before tag's closing brackets
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],
      // Requires consistent spacing before tag's closing brackets
      'vue/html-closing-bracket-spacing': 'error',
      // Disables the rule that warns against using v-html
      'vue/no-v-html': 'off',
      // Enforces self-closing on HTML elements
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      }],
      // Limits the maximum number of attributes allowed per line
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1,
      }],
      // Disables the rule requiring multi-word component names
      'vue/multi-word-component-names': 'off',
      // Disables the rule requiring default values for props
      'vue/require-default-prop': 'off',
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
  }),
)
