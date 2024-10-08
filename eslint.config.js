import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginReactRefresh from 'eslint-plugin-react-refresh' // Đảm bảo đã cài đặt
import pluginReactHooks from 'eslint-plugin-react-hooks' // Thêm dòng này

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect', // Hoặc bạn có thể chỉ định phiên bản cụ thể, ví dụ: '18.0'
      },
    },
    plugins: {
      'react-refresh': pluginReactRefresh, // Định nghĩa plugin react-refresh
      'react-hooks': pluginReactHooks, // Định nghĩa plugin react-hooks
    },
    rules: {
      // NOTE: React
      'react-refresh/only-export-components': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off', // Tắt quy tắc kiểm tra prop-types
      'react/display-name': 'off', // Tắt quy tắc yêu cầu tên hiển thị cho component

      // NOTE: MUI
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@mui/*/*/*'],
        },
      ],

      // NOTE: Common
      'no-console': 'warn',
      'no-lonely-if': 'warn',
      'no-unused-vars': 'warn',
      'no-trailing-spaces': 'warn',
      'no-multi-spaces': 'warn',
      'no-multiple-empty-lines': 'warn',
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': ['warn', 'always'],
      indent: ['warn', 2],
      semi: ['warn', 'never'],
      quotes: ['error', 'single'],
      'array-bracket-spacing': 'warn',
      'linebreak-style': ['error', 'windows'],
      'no-unexpected-multiline': 'warn',
      'keyword-spacing': 'warn',
      'comma-dangle': ['warn', 'always-multiline'],
      'comma-spacing': 'warn',
      'arrow-spacing': 'warn',
    },
  },
]
