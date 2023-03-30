module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json'
    ],
    tsconfigRootDir: __dirname
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowString: false,
        allowNumber: false
      }
    ],
    'no-shadow': 'off',
    "@typescript-eslint/no-shadow": 'error',
    'no-use-before-define': 'off',
    "@typescript-eslint/no-use-before-define": 'error',
    'react/jsx-filename-extension': [
      'warn',
      extensions: '.tsx'
    ],
    complexity: [
      'error',
      10
    ],
    'no-await-in-loop': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'prefer-promise-reject-errors': 'warn',
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error'
        ]
      }
    ]
  },
  ignorePatterns: [
    'src/**/*.test.ts',
    'src/frontend/generated/*',
    'vite.config.ts'
  ],
  env: {
    browser: true,
    jest/globals: true
  },
  settings: {
    react:{
      pragma: 'react'
    }
  }
}
