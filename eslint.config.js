// Подключение необходимых пакетов
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Игнорируем директорию dist
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'], // Применяем настройки к JavaScript и JSX файлам
    languageOptions: {
      ecmaVersion: 'latest', // Используем последнюю версию ECMAScript
      globals: globals.browser, // Добавляем глобальные переменные браузера
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Поддержка JSX
        sourceType: 'module', // Используем модульный синтаксис
      },
    },
    settings: {
      react: { version: '18.3' }, // Указываем версию React
    },
    plugins: {
      react, // Подключаем плагин для React
      'react-hooks': reactHooks, // Плагин для правил хуков React
      'react-refresh': reactRefresh, // Плагин для React Refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Рекомендованные правила ESLint
      ...react.configs.recommended.rules, // Рекомендованные правила React
      ...react.configs['jsx-runtime'].rules, // Поддержка нового JSX Runtime
      ...reactHooks.configs.recommended.rules, // Рекомендованные правила для хуков
      'react/jsx-no-target-blank': 'off', // Отключаем проверку target="_blank" без rel="noopener"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Разрешаем экспорт констант
      ],
      'react/prop-types': 'off', // Отключаем необходимость использования prop-types

      // Новые правила
      quotes: ['error', 'single'], // Обязательное использование одинарных кавычек
      semi: ['error', 'always'], // Обязательная точка с запятой
    },
  },
];