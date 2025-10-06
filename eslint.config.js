import js from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	...astroPlugin.configs.recommended,
	prettierConfig,
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'no-unused-vars': 'off',
		},
	},
	{
		ignores: ['dist/', 'node_modules/', '.astro/', '**/*.d.ts', 'tailwind.config.ts'],
	},
];
